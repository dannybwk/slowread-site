import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const [dau, mau, totalUsers, wordsToday, activeSubs] = await Promise.all([
    getSupabaseAdmin().rpc('exec_sql', {
      query: `SELECT COUNT(DISTINCT user_id) AS count FROM reading_sessions WHERE reading_date = CURRENT_DATE`,
    }).then(r => r.data?.[0]?.count ?? 0),

    getSupabaseAdmin().rpc('exec_sql', {
      query: `SELECT COUNT(DISTINCT user_id) AS count FROM reading_sessions WHERE reading_date >= CURRENT_DATE - 30`,
    }).then(r => r.data?.[0]?.count ?? 0),

    getSupabaseAdmin().from('profiles').select('*', { count: 'exact', head: true })
      .then(r => r.count ?? 0),

    getSupabaseAdmin().rpc('exec_sql', {
      query: `SELECT COALESCE(SUM(words_read), 0) AS total FROM reading_sessions WHERE reading_date = CURRENT_DATE`,
    }).then(r => r.data?.[0]?.total ?? 0),

    getSupabaseAdmin().from('subscriptions')
      .select('*', { count: 'exact', head: true })
      .in('status', ['active', 'trial', 'grace_period'])
      .then(r => r.count ?? 0),
  ]);

  return NextResponse.json({
    dau: Number(dau),
    mau: Number(mau),
    totalUsers: Number(totalUsers),
    wordsToday: Number(wordsToday),
    activeSubs: Number(activeSubs),
  });
}
