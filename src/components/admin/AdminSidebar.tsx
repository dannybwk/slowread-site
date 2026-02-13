'use client';

import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { useRouter } from 'next/navigation';

const NAV_ITEMS = [
  { label: '總覽', href: '#overview' },
  { label: '用戶', href: '#users' },
  { label: '閱讀', href: '#reading' },
  { label: '書籍', href: '#books' },
  { label: '營收', href: '#subscriptions' },
  { label: '連續閱讀', href: '#streaks' },
  { label: 'AI 成本', href: '#ai' },
];

export default function AdminSidebar({ email }: { email: string }) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createSupabaseBrowser();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <span className="admin-sidebar-logo">SlowRead</span>
        <span className="admin-sidebar-label">管理後台</span>
      </div>

      <nav className="admin-sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="admin-sidebar-link">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="admin-sidebar-footer">
        <span className="admin-sidebar-email">{email}</span>
        <button onClick={handleSignOut} className="admin-sidebar-signout">
          登出
        </button>
      </div>
    </aside>
  );
}
