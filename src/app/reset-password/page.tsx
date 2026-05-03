import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset your SlowRead account password.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://slowread.xyz/reset-password',
  },
};

export default function ResetPasswordPage() {
  return (
    <>
      <Header lang="en" />

      <main className="legal container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>

        <h1>Password Reset Link Verified</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Your reset link is valid. Please open the SlowRead app to set your new password.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2.5rem auto', maxWidth: '320px' }} />

        <h2 style={{ fontSize: '1.5rem' }}>密碼重設連結已驗證</h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          你的重設連結有效。請打開 SlowRead app 設定新密碼。
        </p>

        <p style={{ marginTop: '2rem' }}>
          <a
            href="slowread://reset-password"
            style={{
              display: 'inline-block',
              background: '#C23B22',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Open SlowRead / 打開 SlowRead
          </a>
        </p>

        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem' }}>
          If the button does not open the app, please open the SlowRead app manually
          and tap &ldquo;Forgot password&rdquo; again.
          <br />
          如果按鈕無法開啟 app，請手動回到 SlowRead app，再次點「忘記密碼」。
        </p>
      </main>

      <Footer lang="en" />
    </>
  );
}
