import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const { data: subs } = await getSupabaseAdmin()
    .from('subscriptions')
    .select('status, platform, product_id');

  const rows = subs ?? [];

  // Group by status
  const statusMap: Record<string, number> = {};
  for (const s of rows) {
    statusMap[s.status] = (statusMap[s.status] ?? 0) + 1;
  }
  const byStatus = Object.entries(statusMap).map(([status, count]) => ({ status, count }));

  // Group active subs by platform
  const active = rows.filter((s) => ['active', 'trial', 'grace_period'].includes(s.status));

  const platformMap: Record<string, number> = {};
  for (const s of active) {
    platformMap[s.platform] = (platformMap[s.platform] ?? 0) + 1;
  }
  const byPlatform = Object.entries(platformMap).map(([platform, count]) => ({ platform, count }));

  // Group active subs by product
  const productMap: Record<string, number> = {};
  for (const s of active) {
    productMap[s.product_id] = (productMap[s.product_id] ?? 0) + 1;
  }
  const byProduct = Object.entries(productMap).map(([product_id, count]) => ({ product_id, count }));

  return NextResponse.json({ byStatus, byPlatform, byProduct });
}
