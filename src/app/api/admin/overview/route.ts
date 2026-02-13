import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const today = new Date().toISOString().slice(0, 10);
  const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);

  const [dauResult, mauResult, totalUsers, wordsTodayResult, activeSubs] = await Promise.all([
    getSupabaseAdmin().from('reading_sessions')
      .select('user_id')
      .eq('reading_date', today),

    getSupabaseAdmin().from('reading_sessions')
      .select('user_id')
      .gte('reading_date', thirtyDaysAgo),

    getSupabaseAdmin().from('profiles')
      .select('*', { count: 'exact', head: true })
      .then(r => r.count ?? 0),

    getSupabaseAdmin().from('reading_sessions')
      .select('words_read')
      .eq('reading_date', today),

    getSupabaseAdmin().from('subscriptions')
      .select('*', { count: 'exact', head: true })
      .in('status', ['active', 'trial', 'grace_period'])
      .then(r => r.count ?? 0),
  ]);

  const dau = new Set((dauResult.data ?? []).map(r => r.user_id)).size;
  const mau = new Set((mauResult.data ?? []).map(r => r.user_id)).size;
  const wordsToday = (wordsTodayResult.data ?? []).reduce((sum, r) => sum + (r.words_read ?? 0), 0);

  return NextResponse.json({
    dau,
    mau,
    totalUsers: Number(totalUsers),
    wordsToday,
    activeSubs: Number(activeSubs),
  });
}
