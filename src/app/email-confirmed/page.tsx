import type { Metadata } from 'next';
import { headers } from 'next/headers';
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

type Locale = 'en' | 'zh' | 'ja';

const COPY: Record<Locale, {
  title: string;
  body: string;
  buttonHint: string;
  fallback: string;
}> = {
  en: {
    title: 'Email Confirmed',
    body: 'Your email address has been verified. Please return to the SlowRead app to sign in.',
    buttonHint: 'Open SlowRead',
    fallback:
      'If this page was opened from inside the Gmail app, the button may not work due to browser restrictions — please exit Gmail and open the SlowRead app manually.',
  },
  zh: {
    title: '電子郵件已確認',
    body: '你的電子郵件已驗證成功，請回到 SlowRead app 登入。',
    buttonHint: '打開 SlowRead',
    fallback:
      '如果這頁是從 Gmail app 內開啟，按鈕可能因瀏覽器限制無法運作 — 請退出 Gmail，手動回到 SlowRead app。',
  },
  ja: {
    title: 'メールアドレスが確認されました',
    body: 'メールアドレスの認証に成功しました。SlowRead アプリに戻ってサインインしてください。',
    buttonHint: 'SlowRead を開く',
    fallback:
      'このページが Gmail アプリ内で開かれた場合、ブラウザの制限によりボタンが動作しないことがあります — Gmail を閉じて、SlowRead アプリを手動で開いてください。',
  },
};

function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return 'en';
  // Walk through the prioritized list (Accept-Language q-values are already
  // sorted by browsers in priority order in practice).
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
  // Show primary first, then a stable order for the rest so users can scan
  // for their language even if the primary detection was wrong.
  const rest = (['en', 'zh', 'ja'] as Locale[]).filter((l) => l !== primary);
  return [primary, ...rest];
}

export default async function EmailConfirmedPage() {
  const h = await headers();
  const primary = pickLocale(h.get('accept-language'));
  const order = orderLocales(primary);

  const autoOpenScript = `
    (function() {
      try {
        if (sessionStorage.getItem('sr_dl_tried')) return;
        sessionStorage.setItem('sr_dl_tried', '1');
        setTimeout(function() { window.location.href = 'slowread://'; }, 600);
      } catch(e) {}
    })();
  `;

  return (
    <>
      <Header lang={primary === 'zh' ? 'zh' : primary === 'ja' ? 'ja' : 'en'} />

      <main className="legal container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>

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
