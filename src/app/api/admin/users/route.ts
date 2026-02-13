import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  const days = Number(request.nextUrl.searchParams.get('days') || 30);

  const { data, error } = await supabaseAdmin.rpc('exec_sql', {
    query: `
      SELECT DATE(created_at) AS date, COUNT(*) AS new_users
      FROM profiles
      WHERE created_at >= CURRENT_DATE - INTERVAL '${days} days'
      GROUP BY DATE(created_at)
      ORDER BY date
    `,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data: data ?? [] });
}
