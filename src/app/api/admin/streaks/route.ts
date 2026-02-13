import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

function toBucket(streak: number): string {
  if (streak === 0) return '0';
  if (streak <= 3) return '1-3';
  if (streak <= 7) return '4-7';
  if (streak <= 14) return '8-14';
  if (streak <= 30) return '15-30';
  return '31+';
}

const BUCKET_ORDER = ['0', '1-3', '4-7', '8-14', '15-30', '31+'];

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  const { data: rows, error } = await getSupabaseAdmin()
    .from('streaks')
    .select('current_streak');

  if (error) {
    console.error('[admin/streaks]', error.message);
    return NextResponse.json({ error: 'Failed to fetch streak data' }, { status: 500 });
  }

  const bucketMap: Record<string, number> = {};
  for (const r of rows ?? []) {
    const b = toBucket(r.current_streak ?? 0);
    bucketMap[b] = (bucketMap[b] ?? 0) + 1;
  }

  const data = BUCKET_ORDER
    .filter((b) => bucketMap[b])
    .map((bucket) => ({ bucket, count: bucketMap[bucket] }));

  return NextResponse.json({ data });
}
