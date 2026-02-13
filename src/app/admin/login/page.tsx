'use client';

import { useState } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-browser';
import { useRouter } from 'next/navigation';
import '@/styles/admin.css';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const supabase = createSupabaseBrowser();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h1 className="admin-login-title">SlowRead Admin</h1>
        <p className="admin-login-subtitle">Sign in to access the dashboard</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <label className="admin-form-label">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="admin-form-input"
              required
              autoFocus
            />
          </label>

          <label className="admin-form-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-form-input"
              required
            />
          </label>

          {error && <p className="admin-form-error">{error}</p>}

          <button
            type="submit"
            className="admin-form-submit"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
