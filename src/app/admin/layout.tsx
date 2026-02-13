import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { redirect } from 'next/navigation';
import { isAdminEmail } from '@/lib/admin-auth';
import AdminSidebar from '@/components/admin/AdminSidebar';
import '@/styles/admin.css';

export const metadata = {
  title: 'Admin — SlowRead',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

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
        <p>Your email ({user.email}) is not authorized to access the admin panel.</p>
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
