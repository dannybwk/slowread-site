import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  const days = Number(request.nextUrl.searchParams.get('days') || 30);

  const { data, error } = await supabaseAdmin.rpc('exec_sql', {
    query: `
      SELECT reading_date AS date,
             COUNT(DISTINCT user_id) AS active_readers,
             COUNT(*) AS sessions,
             COALESCE(SUM(words_read), 0) AS words_read
      FROM reading_sessions
      WHERE reading_date >= CURRENT_DATE - ${days}
      GROUP BY reading_date
      ORDER BY reading_date
    `,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data: data ?? [] });
}
