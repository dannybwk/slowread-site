'use client';

import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { useRouter } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Users', href: '#users' },
  { label: 'Reading', href: '#reading' },
  { label: 'Books', href: '#books' },
  { label: 'Revenue', href: '#subscriptions' },
  { label: 'Streaks', href: '#streaks' },
  { label: 'AI Costs', href: '#ai' },
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
        <span className="admin-sidebar-label">Admin</span>
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
          Sign Out
        </button>
      </div>
    </aside>
  );
}
