import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const [mostStarted, mostCompleted] = await Promise.all([
    supabaseAdmin.rpc('exec_sql', {
      query: `
        SELECT b.title, b.author, COUNT(ub.id) AS starts
        FROM user_books ub JOIN books b ON b.id = ub.book_id
        GROUP BY b.id, b.title, b.author
        ORDER BY starts DESC LIMIT 10
      `,
    }).then(r => r.data ?? []),

    supabaseAdmin.rpc('exec_sql', {
      query: `
        SELECT b.title, b.author, COUNT(ub.id) AS completions
        FROM user_books ub JOIN books b ON b.id = ub.book_id
        WHERE ub.status = 'completed'
        GROUP BY b.id, b.title, b.author
        ORDER BY completions DESC LIMIT 10
      `,
    }).then(r => r.data ?? []),
  ]);

  return NextResponse.json({ mostStarted, mostCompleted });
}
