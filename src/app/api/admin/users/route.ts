import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  const raw = Number(request.nextUrl.searchParams.get('days'));
  const days = Number.isFinite(raw) && raw >= 1 ? Math.min(Math.round(raw), 365) : 30;
  const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);

  const [profilesResult, listResult] = await Promise.all([
    getSupabaseAdmin().from('profiles')
      .select('created_at')
      .gte('created_at', since)
      .order('created_at', { ascending: true }),
    getSupabaseAdmin().auth.admin.listUsers({ perPage: 200 }),
  ]);

  // Group profiles by date
  const dateMap: Record<string, number> = {};
  for (const row of profilesResult.data ?? []) {
    const date = row.created_at.slice(0, 10);
    dateMap[date] = (dateMap[date] ?? 0) + 1;
  }
  const data = Object.entries(dateMap).map(([date, new_users]) => ({ date, new_users }));

  const users = (listResult.data?.users ?? []).map((u) => ({
    email: u.email ?? '-',
    created_at: u.created_at,
    last_sign_in_at: u.last_sign_in_at ?? null,
  }));

  return NextResponse.json({ data, users });
}
