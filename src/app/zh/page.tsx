import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ScrollReveal from '@/components/site/ScrollReveal';

export const metadata: Metadata = {
  title: 'SlowRead 慢讀經典 — 在快的世界裡，慢慢讀一本好書',
  description:
    '每日一段經典文學選讀，AI 伴讀助手、雙語對照閱讀、智慧排程，讓深度閱讀成為日常習慣。免費開始。',
  alternates: {
    canonical: 'https://slowread.xyz/zh',
    languages: { en: 'https://slowread.xyz' },
  },
  openGraph: {
    title: 'SlowRead 慢讀經典 — 慢下來，深深地讀',
    description:
      '每天五分鐘，與最偉大的文學作品相遇。AI 伴讀、雙語模式、閱讀連續紀錄。',
    url: 'https://slowread.xyz/zh',
    type: 'website',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SlowRead 慢讀經典 — 每日經典文學閱讀' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlowRead 慢讀經典 — 慢下來，深深地讀',
    description: '每天五分鐘，與最偉大的文學作品相遇。',
  },
};

const AppleSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlaySvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.67L14.25 12.6 3.18.33c-.19.17-.18.49-.18.86v21.62c0 .37-.01.69.18.86zm1.81 1.07l12.7-7.13-2.84-2.84L4.99 24.74zM4.99-.93l9.86 9.97 2.84-2.84L4.99-.93zm15.03 7.69l-3.5 1.97 3.14 3.14 3.14-1.77c.98-.55.98-1.44 0-1.99l-2.78-1.35z" />
  </svg>
);

function StoreButtons() {
  return (
    <div className="store-buttons">
      <a href="#" className="store-btn">
        <AppleSvg />
        App Store
      </a>
      <a href="#" className="store-btn">
        <GooglePlaySvg />
        Google Play
      </a>
    </div>
  );
}

function StreakGrid() {
  const dots = Array.from({ length: 42 });
  return (
    <div className="streak-grid">
      {dots.map((_, i) => (
        <div
          key={i}
          className={`streak-dot filled${i === 41 ? ' today' : ''}`}
        />
      ))}
    </div>
  );
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SlowRead 慢讀經典',
    url: 'https://slowread.xyz',
    logo: 'https://slowread.xyz/images/logo.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'SlowRead 慢讀經典',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'EducationApplication',
    description:
      '每日一段經典文學選讀，AI 伴讀助手、雙語對照閱讀、智慧排程，讓深度閱讀成為日常習慣。',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '什麼是 SlowRead 慢讀經典？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowRead 慢讀經典是一款行動閱讀 App，每天推送一段公版經典文學選讀。結合 AI 伴讀助手、雙語對照閱讀、智慧排程與閱讀連續紀錄，讓深度閱讀成為你的日常。',
        },
      },
      {
        '@type': 'Question',
        name: 'SlowRead 是免費的嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的，SlowRead 免費下載使用。免費版包含每日一段閱讀、完整公版書庫、閱讀連續紀錄、個人化排程、基本雙語模式和每日提醒。Pro 進階版每月 $4.99，解鎖 AI 伴讀、無限閱讀等功能。',
        },
      },
      {
        '@type': 'Question',
        name: 'SlowRead 有哪些書？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowRead 提供來自世界各地的公版經典文學——從《紅樓夢》、《道德經》到《傲慢與偏見》、《沉思錄》。每本書都經過人工版權確認與精心排版。',
        },
      },
      {
        '@type': 'Question',
        name: 'SlowRead 支援多語言嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支援。SlowRead 提供雙語並排閱讀功能，可以用原文搭配翻譯閱讀經典，或用你的母語讀外國文學。支援全球主要語系。',
        },
      },
    ],
  },
];

export default function ZhHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="zh" />
      <ScrollReveal />

      <main>
        {/* Hero */}
        <section className="hero container">
          <p className="hero-eyebrow">獻給不趕路的閱讀者</p>
          <h1>慢下來，<br />深深地讀。</h1>
          <p className="tagline">在快的世界裡，慢慢讀一本好書。</p>
          <p className="hero-description">每天清晨，與托爾斯泰、張愛玲或老子共度五分鐘。每日一段精選文字，搭配 AI 伴讀讓經典活起來。任選語言閱讀，累積連續紀錄。沒有廣告，永遠不會有。</p>
          <StoreButtons />
          <div className="scroll-hint">
            <span>探索更多</span>
            <div className="scroll-hint-line" />
          </div>
        </section>

        {/* Manifesto */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="manifesto container reveal">
          <p className="manifesto-text">
            我們每天滑過數百則貼文，卻一整年讀不完一本書。
            我們漸漸失去了<strong>與文字安靜相處</strong>的能力。
            SlowRead 建立在一個簡單的信念上：<em>持之以恆的少量閱讀，足以改變一切</em>。
            不是速讀，不是摘要。只有你、一段文字，和思考的空間。
          </p>
        </section>

        {/* How It Works */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="how-it-works container">
          <p className="section-label reveal">使用方式</p>
          <h2 className="section-title reveal">為你量身打造的閱讀計畫</h2>
          <div className="steps">
            <div className="step reveal reveal-delay-1">
              <span className="step-number">Step 01</span>
              <div className="step-icon">&#9881;</div>
              <h3>設定你的節奏</h3>
              <p>試讀一段文章，告訴我們每天多少字感覺剛好。我們會配合你的步調。</p>
            </div>
            <div className="step reveal reveal-delay-2">
              <span className="step-number">Step 02</span>
              <div className="step-icon">&#9782;</div>
              <h3>挑選一本經典</h3>
              <p>依語言、類型、年代或主題瀏覽。從中國哲學到法國小品——世界文學任你挑選。</p>
            </div>
            <div className="step reveal reveal-delay-3">
              <span className="step-number">Step 03</span>
              <div className="step-icon">&#10047;</div>
              <h3>取得你的排程</h3>
              <p>我們會告訴你確切的完讀日期。選擇每日推播時間，閱讀旅程就此啟程。</p>
            </div>
          </div>

          <div className="schedule-card reveal">
            <p className="schedule-card-label">你的個人化預估</p>
            <p className="schedule-card-number">262</p>
            <p className="schedule-card-unit">天讀完</p>
            <p className="schedule-card-detail">紅樓夢全書 <strong>731,000 字</strong> —— 按照你的節奏，不到九個月就能讀完整部巨著。</p>
            <div className="schedule-settings">
              <div className="schedule-setting">
                <span className="schedule-setting-value">2,800</span>
                <span className="schedule-setting-label">字 / 天</span>
              </div>
              <div className="schedule-setting">
                <span className="schedule-setting-value">7 分鐘</span>
                <span className="schedule-setting-label">每次閱讀</span>
              </div>
              <div className="schedule-setting">
                <span className="schedule-setting-value">每週 7 天</span>
                <span className="schedule-setting-label">閱讀頻率</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reading Preview */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="reading-preview container">
          <p className="section-label reveal">閱讀體驗</p>
          <h2 className="section-title reveal">在故事停頓處切分，不在字數湊滿時斷開</h2>
          <div className="book-card reveal">
            <div className="book-card-header">
              <span className="book-card-meta">今日篇章</span>
              <span className="book-card-day">第 42 天</span>
            </div>
            <h3 className="book-card-title">紅樓夢</h3>
            <p className="book-card-author">曹雪芹</p>
            <p className="book-card-passage">滿紙荒唐言，一把辛酸淚。都云作者癡，誰解其中味？當日地陷東南，這東南一隅有處曰姑蘇，有城曰閶門者，最是紅塵中一二等富貴風流之地。這閶門外有個十里街，街內有個仁清巷，巷內有個古廟，因地方狹窄，人皆呼作葫蘆廟。</p>
            <div className="book-card-footer">
              <div className="book-card-progress">
                <span>第一回 &middot; 35%</span>
                <div className="progress-bar"><div className="progress-fill" /></div>
              </div>
              <span className="book-card-action">繼續閱讀 &rarr;</span>
            </div>
          </div>
        </section>

        {/* Bilingual Reading */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="bilingual-section container">
          <div className="bilingual-content">
            <div className="bilingual-text reveal">
              <h2>用任何語言閱讀，<br />從任何語言學習。</h2>
              <p>用原文搭配翻譯並排閱讀經典，或用你的母語讀外國文學。SlowRead 支援全球主要語系。</p>
              <p>文學愛好者發現新世界。語言學習者用真實文本沉浸練習——不是教科書上的對話。</p>
            </div>
            <div className="bilingual-preview reveal reveal-delay-2">
              <div className="bilingual-tab-bar">
                <span className="bilingual-tab active">雙語對照</span>
                <span className="bilingual-tab">僅原文</span>
                <span className="bilingual-tab">僅翻譯</span>
              </div>
              <div className="bilingual-columns">
                <div className="bilingual-col">
                  <span className="bilingual-col-label">原文 &middot; English</span>
                  It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                </div>
                <div className="bilingual-col">
                  <span className="bilingual-col-label">中文翻譯</span>
                  凡是有錢的單身漢，總想娶位太太，這已經成了一條舉世公認的真理。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Companion */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="ai-section container">
          <p className="section-label reveal">關鍵差異</p>
          <h2 className="section-title reveal">AI 伴讀，陪你一起讀</h2>
          <div className="ai-content">
            <div className="ai-text reveal">
              <span className="ai-badge">Pro 進階功能</span>
              <p>經典文學讓人半途而廢的兩大原因：<strong>「忘記前面演什麼了」</strong>和<strong>「看不懂這裡在說什麼」</strong>。</p>
              <p>SlowRead 的 AI 伴讀解決了這兩個痛點。每段閱讀後，它會為你回顧劇情、解釋文化典故、描繪人物關係——讓你永遠不會迷路。</p>
              <ul className="ai-features-list">
                <li><span className="ai-bullet">&#9670;</span> 人物關係圖隨著閱讀進度自動更新</li>
                <li><span className="ai-bullet">&#9670;</span> 「前情提要」每次開讀前快速回顧</li>
                <li><span className="ai-bullet">&#9670;</span> 文化背景與文學典故深度解析</li>
                <li><span className="ai-bullet">&#9670;</span> 詞彙解釋——不只字面意思，更有語境與韻味</li>
                <li><span className="ai-bullet">&#9670;</span> 有聲書功能：用聽的讀完經典</li>
              </ul>
            </div>
            <div className="ai-preview reveal reveal-delay-2">
              <div className="ai-card">
                <span className="ai-card-label">&#9670; AI 伴讀助手</span>
                <h4>今日人物關係圖</h4>
                <p>第一回登場的人物，以下是主要關係：</p>
                <div className="char-nodes">
                  <span className="char-node highlight">甄士隱</span>
                  <span className="char-node highlight">賈雨村</span>
                  <span className="char-node">嬌杏</span>
                  <span className="char-node">英蓮</span>
                  <span className="char-node">封肅</span>
                </div>
              </div>
              <div className="ai-card">
                <span className="ai-card-label">&#9670; 前情提要</span>
                <h4>上回說到⋯⋯</h4>
                <p>女媧煉石補天，剩下一塊石頭被棄在青埂峰下。一僧一道經過，將它帶入紅塵，化為通靈寶玉。這段故事是全書的起源神話——石頭記，便是紅樓夢的另一個名字。</p>
              </div>
              <div className="ai-card">
                <span className="ai-card-label">&#9670; 文化典故</span>
                <h4>什麼是「葫蘆廟」？</h4>
                <p>「葫蘆」諧音「糊塗」，暗示世人皆在糊塗中度日。曹雪芹善用諧音雙關——甄士隱（真事隱），賈雨村（假語存），每個名字都藏著全書的命運密碼。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Streak */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="streak-section container">
          <div className="streak-content">
            <div className="streak-text reveal">
              <h2>小小習慣，<br />巨大蛻變</h2>
              <p>閱讀連續紀錄不是壓力，而是動力。每讀一天，就像在生命的故事裡添了一滴墨。</p>
              <p>今天的段落看完了？想繼續就繼續往下看。多讀或少讀，排程會自動調整。中斷了一天？沒有罪惡感，書會等你。</p>
            </div>
            <div className="streak-visual reveal reveal-delay-2">
              <span className="streak-counter">42</span>
              <span className="streak-counter-label">天連續閱讀</span>
              <StreakGrid />
              <div className="streak-week-labels">
                {['一', '二', '三', '四', '五', '六', '日'].map((d, i) => (
                  <span key={i} className="streak-week-label">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Library */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="library-section container">
          <p className="section-label reveal">經典文學庫</p>
          <h2 className="section-title reveal">來自世界每個角落的偉大作品</h2>
          <div className="library-grid">
            <div className="library-card reveal reveal-delay-1">
              <span className="library-card-genre">小說</span>
              <h3>紅樓夢</h3>
              <p className="author">曹雪芹</p>
              <p>「假作真時真亦假，無為有處有還無。」</p>
            </div>
            <div className="library-card reveal reveal-delay-2">
              <span className="library-card-genre">哲學</span>
              <h3>道德經</h3>
              <p className="author">老子</p>
              <p>「道可道，非常道。名可名，非常名。」</p>
            </div>
            <div className="library-card reveal reveal-delay-3">
              <span className="library-card-genre">經典</span>
              <h3>傲慢與偏見</h3>
              <p className="author">Jane Austen</p>
              <p>「凡是有錢的單身漢，總想娶位太太，這已經成了一條舉世公認的真理。」</p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="quote-section container reveal">
          <blockquote>讀書之人在死前已經活過千百種人生；不讀書的人，只活了一次。</blockquote>
          <p className="quote-attribution">&mdash; George R.R. Martin</p>
        </section>

        {/* Pricing */}
        <section className="pricing-section container-wide">
          <p className="section-label reveal">方案</p>
          <h2 className="section-title reveal">免費閱讀，Pro 更深入</h2>
          <div className="pricing-grid">
            <div className="pricing-card reveal reveal-delay-1">
              <p className="pricing-card-name">免費版</p>
              <p className="pricing-card-price">$0 <span>永久免費</span></p>
              <p className="pricing-card-desc">建立每日閱讀習慣所需的一切，搭配全球最偉大的文學作品。</p>
              <ul className="pricing-list">
                <li><span className="pricing-check">&#10003;</span> 每日一段閱讀</li>
                <li><span className="pricing-check">&#10003;</span> 完整公版書庫</li>
                <li><span className="pricing-check">&#10003;</span> 閱讀連續紀錄與里程碑</li>
                <li><span className="pricing-check">&#10003;</span> 個人化閱讀排程</li>
                <li><span className="pricing-check">&#10003;</span> 基本雙語模式</li>
                <li><span className="pricing-check">&#10003;</span> 每日閱讀提醒</li>
                <li className="disabled"><span className="pricing-check">&#10005;</span> AI 伴讀助手</li>
                <li className="disabled"><span className="pricing-check">&#10005;</span> 無限閱讀</li>
                <li className="disabled"><span className="pricing-check">&#10005;</span> 離線閱讀</li>
              </ul>
            </div>
            <div className="pricing-card featured reveal reveal-delay-2">
              <span className="pricing-card-badge">最受歡迎</span>
              <p className="pricing-card-name">Pro 進階版</p>
              <p className="pricing-card-price">$4.99 <span>/ 月</span></p>
              <p className="pricing-card-desc">為想深入閱讀的讀者而生。AI 助手、無限閱讀，以及更多。</p>
              <ul className="pricing-list">
                <li><span className="pricing-check">&#10003;</span> 包含免費版所有功能</li>
                <li><span className="pricing-check">&#10003;</span> <strong>無限閱讀</strong> —— 看完今日段落，想繼續就繼續</li>
                <li><span className="pricing-check">&#10003;</span> <strong>AI 伴讀助手</strong> —— 人物關係圖、前情提要、文化解析</li>
                <li><span className="pricing-check">&#10003;</span> <strong>深度詞彙解析</strong> —— 不只字面意思，更有語境韻味</li>
                <li><span className="pricing-check">&#10003;</span> <strong>有聲書功能</strong> —— 用聽的讀完經典</li>
                <li><span className="pricing-check">&#10003;</span> <strong>離線閱讀</strong> —— 下載後在飛機上、通勤中也能讀</li>
                <li><span className="pricing-check">&#10003;</span> <strong>年度閱讀報告</strong> —— 你的一年文學旅程回顧</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="features container-wide">
          <p className="section-label reveal">為什麼選 SlowRead</p>
          <h2 className="section-title reveal">為讀者設計，而不是為消費者</h2>
          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon feature-icon-book" aria-hidden="true">&#9782;</div>
              <h3>智慧段落切分</h3>
              <p>AI 在故事的自然停頓處切分——不會在句子中間斷開。每段閱讀都是完整的。</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon feature-icon-streak" aria-hidden="true">&#10047;</div>
              <h3>自適應排程</h3>
              <p>今天多讀了？完讀日期往前移。漏了一天？自動重新計算。永遠精確，從不批判。</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon feature-icon-library" aria-hidden="true">&#9776;</div>
              <h3>精選，非爬蟲抓取</h3>
              <p>每本書都經過人工版權確認、精心排版，並加入豐富的後設資料。重質不重量。</p>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon feature-icon-notify" aria-hidden="true">&#9883;</div>
              <h3>溫柔的提醒</h3>
              <p>在你選擇的時間，一個安靜的每日小提示。你的書隨時準備好了。</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon feature-icon-offline" aria-hidden="true">&#9729;</div>
              <h3>精美排版</h3>
              <p>宣紙紋理、精心挑選的襯線字體、向文字致敬的版面設計。</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon feature-icon-free" aria-hidden="true">&#10084;</div>
              <h3>永遠沒有廣告</h3>
              <p>免費下載，沒有廣告，沒有黑暗模式。公版書永遠免費。我們先贏得信任，再贏得收入。</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="final-cta container reveal">
          <h2>你的下一章，<br />從今天開始</h2>
          <p>加入全球各地重拾閱讀樂趣的讀者，每天一段文字，一點一滴。免費開始，無需綁定信用卡。</p>
          <StoreButtons />
        </section>
      </main>

      <Footer lang="zh" />
    </>
  );
}
