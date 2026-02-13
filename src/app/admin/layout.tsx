import { isAdminEmail } from '@/lib/admin-auth';
import { createSupabaseServer } from '@/lib/supabase-server';
import AdminSidebar from '@/components/admin/AdminSidebar';
import '@/styles/admin.css';

export const metadata = {
  title: 'Admin — SlowRead',
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Allow access to login page without auth
  if (!user) {
    return <>{children}</>;
  }

  // Check admin whitelist
  if (!user.email || !isAdminEmail(user.email)) {
    return (
      <div className="admin-access-denied">
        <h1>Access Denied</h1>
        <p>You do not have permission to access this resource.</p>
        <form action="/admin/login">
          <button type="submit" className="admin-form-submit">
            Back to Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <AdminSidebar email={user.email} />
      <main className="admin-main">{children}</main>
    </div>
  );
}
