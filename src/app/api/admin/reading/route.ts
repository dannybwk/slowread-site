import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  const raw = Number(request.nextUrl.searchParams.get('days'));
  const days = Number.isFinite(raw) && raw >= 1 ? Math.min(Math.round(raw), 365) : 30;

  const { data, error } = await getSupabaseAdmin().rpc('exec_sql', {
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

  if (error) {
    console.error('[admin/reading]', error.message);
    return NextResponse.json({ error: 'Failed to fetch reading data' }, { status: 500 });
  }

  return NextResponse.json({ data: data ?? [] });
}
