import type { Metadata } from 'next';
import { headers } from 'next/headers';
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

type Locale = 'en' | 'zh' | 'ja';

const COPY: Record<Locale, {
  title: string;
  body: string;
  buttonHint: string;
  fallback: string;
}> = {
  en: {
    title: 'Password Reset Verified',
    body: 'Your reset link is valid. Please open the SlowRead app to set your new password.',
    buttonHint: 'Open SlowRead',
    fallback:
      'If this page was opened from inside the Gmail app, the button may not work — please exit Gmail, open the SlowRead app, and tap “Forgot password” again.',
  },
  zh: {
    title: '密碼重設已驗證',
    body: '重設連結已驗證，請打開 SlowRead app 設定新密碼。',
    buttonHint: '打開 SlowRead',
    fallback:
      '如果這頁是從 Gmail app 內開啟，按鈕可能無法運作 — 請退出 Gmail，回到 SlowRead app 重新點「忘記密碼」。',
  },
  ja: {
    title: 'パスワードリセットが確認されました',
    body: 'リセットリンクが有効です。SlowRead アプリを開いて新しいパスワードを設定してください。',
    buttonHint: 'SlowRead を開く',
    fallback:
      'このページが Gmail アプリ内で開かれた場合、ボタンが動作しないことがあります — Gmail を閉じて、SlowRead アプリを開き、もう一度「パスワードを忘れた」をタップしてください。',
  },
};

function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return 'en';
  const tags = acceptLanguage
    .toLowerCase()
    .split(',')
    .map((t) => t.split(';')[0]?.trim() || '')
    .filter(Boolean);
  for (const tag of tags) {
    if (tag.startsWith('zh')) return 'zh';
    if (tag.startsWith('ja')) return 'ja';
    if (tag.startsWith('en')) return 'en';
  }
  return 'en';
}

function orderLocales(primary: Locale): Locale[] {
  const rest = (['en', 'zh', 'ja'] as Locale[]).filter((l) => l !== primary);
  return [primary, ...rest];
}

export default async function ResetPasswordPage() {
  const h = await headers();
  const primary = pickLocale(h.get('accept-language'));
  const order = orderLocales(primary);

  const autoOpenScript = `
    (function() {
      try {
        if (sessionStorage.getItem('sr_dl_tried_rp')) return;
        sessionStorage.setItem('sr_dl_tried_rp', '1');
        setTimeout(function() { window.location.href = 'slowread://reset-password'; }, 600);
      } catch(e) {}
    })();
  `;

  return (
    <>
      <Header lang={primary === 'zh' ? 'zh' : primary === 'ja' ? 'ja' : 'en'} />

      <main className="legal container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>

        {order.map((loc, i) => {
          const c = COPY[loc];
          const isPrimary = i === 0;
          return (
            <div
              key={loc}
              style={{
                marginTop: i === 0 ? 0 : '2.5rem',
                paddingTop: i === 0 ? 0 : '2rem',
                borderTop: i === 0 ? 'none' : '1px solid #ddd',
                opacity: isPrimary ? 1 : 0.85,
              }}
            >
              {isPrimary ? (
                <h1 style={{ fontSize: '2rem' }}>{c.title}</h1>
              ) : (
                <h2 style={{ fontSize: '1.4rem' }}>{c.title}</h2>
              )}
              <p style={{ fontSize: isPrimary ? '1.15rem' : '1rem', color: '#555', maxWidth: '32rem', margin: '0.5rem auto' }}>
                {c.body}
              </p>
            </div>
          );
        })}

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
            {COPY[primary].buttonHint}
          </a>
        </p>

        <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', maxWidth: '36rem', margin: '1rem auto 0', lineHeight: 1.7 }}>
          {COPY[primary].fallback}
        </p>
      </main>

      <Footer lang={primary === 'zh' ? 'zh' : primary === 'ja' ? 'ja' : 'en'} />

      <script dangerouslySetInnerHTML={{ __html: autoOpenScript }} />
    </>
  );
}
