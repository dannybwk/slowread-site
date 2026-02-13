import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  const raw = Number(request.nextUrl.searchParams.get('days'));
  const days = Number.isFinite(raw) && raw >= 1 ? Math.min(Math.round(raw), 365) : 30;
  const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);

  const { data: rows, error } = await getSupabaseAdmin()
    .from('reading_sessions')
    .select('reading_date, user_id, words_read')
    .gte('reading_date', since)
    .order('reading_date', { ascending: true });

  if (error) {
    console.error('[admin/reading]', error.message);
    return NextResponse.json({ error: 'Failed to fetch reading data' }, { status: 500 });
  }

  const dateMap: Record<string, { readers: Set<string>; words: number }> = {};
  for (const r of rows ?? []) {
    const d = r.reading_date;
    if (!dateMap[d]) dateMap[d] = { readers: new Set(), words: 0 };
    dateMap[d].readers.add(r.user_id);
    dateMap[d].words += r.words_read ?? 0;
  }

  const data = Object.entries(dateMap).map(([date, v]) => ({
    date,
    active_readers: v.readers.size,
    words_read: v.words,
  }));

  return NextResponse.json({ data });
}
