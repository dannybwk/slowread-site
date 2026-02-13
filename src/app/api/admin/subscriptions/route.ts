import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const [byStatus, byPlatform, byProduct] = await Promise.all([
    getSupabaseAdmin().rpc('exec_sql', {
      query: `SELECT status, COUNT(*)::int AS count FROM subscriptions GROUP BY status`,
    }).then(r => r.data ?? []),

    getSupabaseAdmin().rpc('exec_sql', {
      query: `
        SELECT platform, COUNT(*)::int AS count
        FROM subscriptions
        WHERE status IN ('active','trial','grace_period')
        GROUP BY platform
      `,
    }).then(r => r.data ?? []),

    getSupabaseAdmin().rpc('exec_sql', {
      query: `
        SELECT product_id, COUNT(*)::int AS count
        FROM subscriptions
        WHERE status IN ('active','trial','grace_period')
        GROUP BY product_id
      `,
    }).then(r => r.data ?? []),
  ]);

  return NextResponse.json({ byStatus, byPlatform, byProduct });
}
