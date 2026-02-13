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
      SELECT DATE(created_at) AS date, COUNT(*) AS new_users
      FROM profiles
      WHERE created_at >= CURRENT_DATE - INTERVAL '${days} days'
      GROUP BY DATE(created_at)
      ORDER BY date
    `,
  });

  if (error) {
    console.error('[admin/users]', error.message);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }

  return NextResponse.json({ data: data ?? [] });
}
