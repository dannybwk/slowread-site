'use client';

import { useEffect, useState } from 'react';
import KPICard from '@/components/admin/KPICard';
import ChartCard from '@/components/admin/ChartCard';
import DataTable from '@/components/admin/DataTable';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

interface OverviewData {
  dau: number;
  mau: number;
  totalUsers: number;
  wordsToday: number;
  activeSubs: number;
}

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [url]);
  return { data, loading };
}

const ACCENT_RED = '#C23B22';
const ACCENT_JADE = '#2D7D6E';

export default function AdminDashboard() {
  const { data: overview } = useFetch<OverviewData>('/api/admin/overview');
  const { data: usersData } = useFetch<{ data: { date: string; new_users: number }[]; users: { email: string; created_at: string; last_sign_in_at: string | null }[] }>('/api/admin/users?days=30');
  const { data: readingData } = useFetch<{ data: { date: string; active_readers: number; words_read: number }[] }>('/api/admin/reading?days=30');
  const { data: booksData } = useFetch<{ mostStarted: { title: string; author: string; starts: number }[]; mostCompleted: { title: string; author: string; completions: number }[] }>('/api/admin/books');
  const { data: subsData } = useFetch<{ byStatus: { status: string; count: number }[]; byPlatform: { platform: string; count: number }[] }>('/api/admin/subscriptions');
  const { data: streaksData } = useFetch<{ data: { bucket: string; count: number }[] }>('/api/admin/streaks');
  const { data: aiData } = useFetch<{ overall: { generations: number; cache_hits: number; total_cost: number }; byCardType: { card_type: string; generations: number; cost: number }[] }>('/api/admin/ai');

  return (
    <div className="admin-dashboard">
      {/* Overview KPIs */}
      <section id="overview">
        <h2 className="admin-section-title">總覽</h2>
        <div className="kpi-grid">
          <KPICard label="日活躍用戶" value={overview?.dau ?? '...'} />
          <KPICard label="月活躍用戶" value={overview?.mau ?? '...'} />
          <KPICard label="總用戶數" value={overview?.totalUsers?.toLocaleString() ?? '...'} />
          <KPICard label="今日字數" value={overview?.wordsToday?.toLocaleString() ?? '...'} />
          <KPICard label="有效訂閱" value={overview?.activeSubs ?? '...'} />
        </div>
      </section>

      {/* User Growth */}
      <section id="users">
        <ChartCard title="用戶成長（近 30 天）">
          {usersData?.data && (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usersData.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="new_users" stroke={ACCENT_RED} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
        <ChartCard title="用戶清單">
          {usersData?.users && (
            <DataTable
              columns={['email', 'created_at', 'last_sign_in_at']}
              headers={['電子郵件', '註冊時間', '最後登入']}
              rows={usersData.users.map((u) => ({
                email: u.email,
                created_at: new Date(u.created_at).toLocaleDateString('zh-TW'),
                last_sign_in_at: u.last_sign_in_at
                  ? new Date(u.last_sign_in_at).toLocaleDateString('zh-TW')
                  : '-',
              }))}
            />
          )}
        </ChartCard>
      </section>

      {/* Reading Activity */}
      <section id="reading">
        <ChartCard title="閱讀活動（近 30 天）">
          {readingData?.data && (
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={readingData.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Area type="monotone" dataKey="words_read" stroke={ACCENT_JADE} fill={ACCENT_JADE} fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
      </section>

      {/* Book Popularity */}
      <section id="books">
        <ChartCard title="最多人開始閱讀的書">
          {booksData?.mostStarted && (
            <DataTable
              columns={['title', 'author', 'starts']}
              rows={booksData.mostStarted}
            />
          )}
        </ChartCard>
        <ChartCard title="最多人完成的書">
          {booksData?.mostCompleted && (
            <DataTable
              columns={['title', 'author', 'completions']}
              rows={booksData.mostCompleted}
            />
          )}
        </ChartCard>
      </section>

      {/* Subscriptions */}
      <section id="subscriptions">
        <h2 className="admin-section-title">訂閱</h2>
        {subsData && (
          <>
            <div className="kpi-grid">
              {subsData.byStatus.map((s) => (
                <KPICard key={s.status} label={s.status} value={s.count} />
              ))}
            </div>
            <ChartCard title="各平台有效訂閱">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={subsData.byPlatform}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                  <XAxis dataKey="platform" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill={ACCENT_RED} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </>
        )}
      </section>

      {/* Streaks */}
      <section id="streaks">
        <ChartCard title="連續閱讀天數分佈">
          {streaksData?.data && (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={streaksData.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="bucket" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" fill={ACCENT_JADE} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
      </section>

      {/* AI Costs */}
      <section id="ai">
        <h2 className="admin-section-title">AI 夥伴成本</h2>
        {aiData && (
          <>
            <div className="kpi-grid">
              <KPICard label="生成次數" value={aiData.overall.generations} />
              <KPICard label="快取命中" value={aiData.overall.cache_hits} />
              <KPICard label="總成本" value={`$${Number(aiData.overall.total_cost).toFixed(2)}`} />
            </div>
            <ChartCard title="各卡片類型成本">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={aiData.byCardType}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                  <XAxis dataKey="card_type" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="cost" fill={ACCENT_RED} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </>
        )}
      </section>
    </div>
  );
}
