import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const { data, error } = await getSupabaseAdmin().rpc('exec_sql', {
    query: `
      SELECT CASE
        WHEN current_streak = 0 THEN '0'
        WHEN current_streak BETWEEN 1 AND 3 THEN '1-3'
        WHEN current_streak BETWEEN 4 AND 7 THEN '4-7'
        WHEN current_streak BETWEEN 8 AND 14 THEN '8-14'
        WHEN current_streak BETWEEN 15 AND 30 THEN '15-30'
        ELSE '31+'
      END AS bucket,
      COUNT(*)::int AS count
      FROM streaks
      GROUP BY bucket
      ORDER BY MIN(current_streak)
    `,
  });

  if (error) {
    console.error('[admin/streaks]', error.message);
    return NextResponse.json({ error: 'Failed to fetch streak data' }, { status: 500 });
  }

  return NextResponse.json({ data: data ?? [] });
}
