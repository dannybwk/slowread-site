import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const [ubResult, booksResult] = await Promise.all([
    getSupabaseAdmin().from('user_books').select('book_id, status'),
    getSupabaseAdmin().from('books').select('id, title, author'),
  ]);

  const booksMap = new Map(
    (booksResult.data ?? []).map((b) => [b.id, { title: b.title, author: b.author }]),
  );

  // Count starts per book
  const startCounts: Record<string, number> = {};
  const completionCounts: Record<string, number> = {};
  for (const ub of ubResult.data ?? []) {
    startCounts[ub.book_id] = (startCounts[ub.book_id] ?? 0) + 1;
    if (ub.status === 'completed') {
      completionCounts[ub.book_id] = (completionCounts[ub.book_id] ?? 0) + 1;
    }
  }

  const mostStarted = Object.entries(startCounts)
    .map(([id, starts]) => ({ ...booksMap.get(id), starts }))
    .filter((b) => b.title)
    .sort((a, b) => b.starts - a.starts)
    .slice(0, 10) as { title: string; author: string; starts: number }[];

  const mostCompleted = Object.entries(completionCounts)
    .map(([id, completions]) => ({ ...booksMap.get(id), completions }))
    .filter((b) => b.title)
    .sort((a, b) => b.completions - a.completions)
    .slice(0, 10) as { title: string; author: string; completions: number }[];

  return NextResponse.json({ mostStarted, mostCompleted });
}
