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
  // Auto-attempt deep link on page load. If the user's browser supports
  // opening custom schemes (Safari, Chrome, etc.), this jumps them straight
  // back to the app. Gmail's in-app browser blocks this, in which case the
  // user just sees the static instructions below — no error, no popup.
  const autoOpenScript = `
    (function() {
      try {
        // Only try once per page load
        if (sessionStorage.getItem('sr_dl_tried')) return;
        sessionStorage.setItem('sr_dl_tried', '1');
        // Slight delay so the page renders before we try
        setTimeout(function() {
          window.location.href = 'slowread://';
        }, 600);
      } catch(e) {}
    })();
  `;

  return (
    <>
      <Header lang="en" />

      <main className="legal container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>

        <h1>Email Confirmed</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Your email address has been verified. Please return to the SlowRead app to sign in.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2.5rem auto', maxWidth: '320px' }} />

        <h2 style={{ fontSize: '1.5rem' }}>電子郵件已確認</h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          你的電子郵件已驗證成功，請回到 SlowRead app 登入。
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2.5rem auto', maxWidth: '320px' }} />

        <h2 style={{ fontSize: '1.5rem' }}>メールアドレスが確認されました</h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          メールアドレスの認証に成功しました。SlowRead アプリに戻ってサインインしてください。
        </p>

        <p style={{ marginTop: '2.5rem' }}>
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
            Open SlowRead / 打開 SlowRead / SlowRead を開く
          </a>
        </p>

        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', lineHeight: 1.7 }}>
          If this page was opened from inside the Gmail app, the button may not work due to
          browser restrictions — please exit Gmail and open the SlowRead app manually.
          <br /><br />
          如果這頁是從 Gmail app 內開啟，按鈕可能因瀏覽器限制無法運作 — 請退出 Gmail，手動回到 SlowRead app。
          <br /><br />
          このページが Gmail アプリ内で開かれた場合、ブラウザの制限によりボタンが動作しないことがあります —
          Gmail を閉じて、SlowRead アプリを手動で開いてください。
        </p>
      </main>

      <Footer lang="en" />

      {/* Auto-attempt deep link (silently fails in Gmail webview) */}
      <script dangerouslySetInnerHTML={{ __html: autoOpenScript }} />
    </>
  );
}
