import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Email Confirmed',
  description: 'Your SlowRead email address has been confirmed.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://slowread.xyz/email-confirmed',
  },
};

export default function EmailConfirmedPage() {
  return (
    <>
      <Header lang="en" />

      <main className="legal container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>

        <h1>Email Confirmed</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Your email address has been verified. You can now sign in to the SlowRead app.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2.5rem auto', maxWidth: '320px' }} />

        <h2 style={{ fontSize: '1.5rem' }}>電子郵件已確認</h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          你的電子郵件已驗證成功，現在可以回到 SlowRead app 登入了。
        </p>

        <p style={{ marginTop: '2rem' }}>
          <a
            href="slowread://"
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
          If the button does not open the app, please open the SlowRead app manually.
          <br />
          如果按鈕無法開啟 app，請手動回到 SlowRead app。
        </p>
      </main>

      <Footer lang="en" />
    </>
  );
}
