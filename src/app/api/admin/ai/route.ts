import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const [overall, byCardType] = await Promise.all([
    supabaseAdmin.rpc('exec_sql', {
      query: `
        SELECT
          COUNT(*) FILTER (WHERE NOT cache_hit)::int AS generations,
          COUNT(*) FILTER (WHERE cache_hit)::int AS cache_hits,
          COALESCE(SUM(total_cost_usd), 0)::numeric(10,4) AS total_cost
        FROM ai_generation_log
      `,
    }).then(r => r.data?.[0] ?? { generations: 0, cache_hits: 0, total_cost: 0 }),

    supabaseAdmin.rpc('exec_sql', {
      query: `
        SELECT card_type,
               COUNT(*)::int AS generations,
               COALESCE(SUM(total_cost_usd), 0)::numeric(10,4) AS cost
        FROM ai_generation_log
        WHERE NOT cache_hit
        GROUP BY card_type
      `,
    }).then(r => r.data ?? []),
  ]);

  return NextResponse.json({ overall, byCardType });
}
