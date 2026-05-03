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
  const autoOpenScript = `
    (function() {
      try {
        if (sessionStorage.getItem('sr_dl_tried_rp')) return;
        sessionStorage.setItem('sr_dl_tried_rp', '1');
        setTimeout(function() {
          window.location.href = 'slowread://reset-password';
        }, 600);
      } catch(e) {}
    })();
  `;

  return (
    <>
      <Header lang="en" />

      <main className="legal container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>

        <h1>Password Reset Verified</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Your reset link is valid. Please open the SlowRead app to set your new password.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2.5rem auto', maxWidth: '320px' }} />

        <h2 style={{ fontSize: '1.5rem' }}>密碼重設已驗證</h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          重設連結已驗證，請打開 SlowRead app 設定新密碼。
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2.5rem auto', maxWidth: '320px' }} />

        <h2 style={{ fontSize: '1.5rem' }}>パスワードリセットが確認されました</h2>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          リセットリンクが有効です。SlowRead アプリを開いて新しいパスワードを設定してください。
        </p>

        <p style={{ marginTop: '2.5rem' }}>
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
            Open SlowRead / 打開 SlowRead / SlowRead を開く
          </a>
        </p>

        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', lineHeight: 1.7 }}>
          If this page was opened from inside the Gmail app, the button may not work — please
          exit Gmail, open the SlowRead app, and tap &ldquo;Forgot password&rdquo; again.
          <br /><br />
          如果這頁是從 Gmail app 內開啟，按鈕可能無法運作 — 請退出 Gmail，回到 SlowRead app 重新點「忘記密碼」。
          <br /><br />
          このページが Gmail アプリ内で開かれた場合、ボタンが動作しないことがあります —
          Gmail を閉じて、SlowRead アプリを開き、もう一度「パスワードを忘れた」をタップしてください。
        </p>
      </main>

      <Footer lang="en" />

      <script dangerouslySetInnerHTML={{ __html: autoOpenScript }} />
    </>
  );
}
