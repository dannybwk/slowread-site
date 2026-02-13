import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const { data: rows, error } = await getSupabaseAdmin()
    .from('ai_generation_log')
    .select('cache_hit, total_cost_usd, card_type');

  if (error) {
    console.error('[admin/ai]', error.message);
    return NextResponse.json({ error: 'Failed to fetch AI data' }, { status: 500 });
  }

  const all = rows ?? [];
  const generations = all.filter((r) => !r.cache_hit).length;
  const cache_hits = all.filter((r) => r.cache_hit).length;
  const total_cost = all.reduce((sum, r) => sum + (r.total_cost_usd ?? 0), 0);
  const overall = { generations, cache_hits, total_cost: Number(total_cost.toFixed(4)) };

  // Group non-cached by card_type
  const typeMap: Record<string, { generations: number; cost: number }> = {};
  for (const r of all.filter((r) => !r.cache_hit)) {
    const t = r.card_type ?? 'unknown';
    if (!typeMap[t]) typeMap[t] = { generations: 0, cost: 0 };
    typeMap[t].generations += 1;
    typeMap[t].cost += r.total_cost_usd ?? 0;
  }
  const byCardType = Object.entries(typeMap).map(([card_type, v]) => ({
    card_type,
    generations: v.generations,
    cost: Number(v.cost.toFixed(4)),
  }));

  return NextResponse.json({ overall, byCardType });
}
