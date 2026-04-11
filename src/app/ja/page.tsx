import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ScrollReveal from '@/components/site/ScrollReveal';

export const metadata: Metadata = {
  title: 'SlowRead — 速い世界で、ゆっくり良い本を読もう',
  description:
    '毎日一節の古典文学。AI読書パートナー、バイリンガル対訳、スマートスケジュール、読書ストリーク。無料で始められます。',
  alternates: {
    canonical: 'https://slowread.xyz/ja',
    languages: { en: 'https://slowread.xyz', 'zh-Hant': 'https://slowread.xyz/zh' },
  },
  openGraph: {
    title: 'SlowRead — ゆっくり読む、深く読む',
    description:
      '毎日5分、世界最高の文学作品と過ごす。AI読書パートナー、バイリンガル対訳、読書習慣づくり。',
    url: 'https://slowread.xyz/ja',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SlowRead — 毎日の古典文学リーディング' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlowRead — ゆっくり読む、深く読む',
    description: '毎日5分、世界最高の文学作品と過ごす。',
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
      <a href="https://apps.apple.com/app/id6759947443" className="store-btn">
        <AppleSvg />
        App Store
      </a>
      <span className="store-btn" aria-disabled="true">
        <GooglePlaySvg />
        Google Play
      </span>
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
    '@type': 'WebSite',
    name: 'SlowRead',
    url: 'https://slowread.xyz',
    inLanguage: ['en', 'zh-Hant', 'ja'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SlowRead',
    url: 'https://slowread.xyz',
    logo: 'https://slowread.xyz/images/slowread-logo.png',
    sameAs: [
      'https://apps.apple.com/app/id6759947443',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'tplusstudio@gmail.com',
      contactType: 'customer support',
      availableLanguage: ['English', 'Chinese', 'Japanese'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SlowRead',
    operatingSystem: 'iOS',
    applicationCategory: 'EducationApplication',
    description:
      '毎日一節の古典文学。AI読書パートナー、バイリンガル対訳、スマートスケジュール、読書ストリーク。',
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        name: '無料',
        description: '毎日一節の読書、パブリックドメイン全書庫、読書ストリーク、パーソナライズされたスケジュール、毎日のリマインダー。',
      },
      {
        '@type': 'Offer',
        price: '3.99',
        priceCurrency: 'USD',
        name: 'Pro',
        description: '無制限読書、AI読書パートナー、バイリンガル対訳、オフライン閲覧、年間読書レポート。',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '12',
      bestRating: '5',
      worstRating: '1',
    },
    downloadUrl: 'https://apps.apple.com/app/id6759947443',
    featureList: '毎日の厳選パッセージ, AI読書パートナー, バイリンガル並列読書, スマート分割, アダプティブスケジュール, 読書ストリーク, テキスト読み上げ, オフライン閲覧, 美しいタイポグラフィ',
    inLanguage: ['en', 'zh-Hant', 'ja'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'SlowReadで毎日の読書習慣を作る方法',
    description: '1日たった5分、パーソナライズされたスケジュールとAIパートナーで古典文学の旅を始めましょう。',
    step: [
      {
        '@type': 'HowToStep',
        name: 'ペースを設定',
        text: 'サンプルを試し読みして、一日に何文字がちょうどいいか教えてください。SlowReadがあなたのリズムに合わせます。',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: '古典を選ぶ',
        text: '言語、ジャンル、時代、テーマでパブリックドメインの書庫を探索。「吾輩は猫である」「源氏物語」から「高慢と偏見」「道徳経」まで。',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'スケジュールを取得',
        text: 'SlowReadが読了予定日を正確に計算します。毎日の通知時間を選んで、読書の旅を始めましょう。',
        position: 3,
      },
    ],
    totalTime: 'PT5M',
    tool: {
      '@type': 'HowToTool',
      name: 'SlowRead App (iOS)',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://slowread.xyz/ja',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'SlowReadとは？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowReadは、毎日パブリックドメインの古典文学を一節ずつお届けするモバイル読書アプリです。AI読書パートナー、バイリンガル対訳、スマートスケジュール、読書ストリークを組み合わせ、深い読書を日常の習慣にします。',
        },
      },
      {
        '@type': 'Question',
        name: 'SlowReadは無料ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、SlowReadは無料でダウンロード・利用できます。無料プランには、毎日一節の読書、パブリックドメイン全書庫、読書ストリーク、パーソナライズされたスケジュール、毎日のリマインダーが含まれます。Proプラン（月額$3.99）では、バイリンガル対訳、AI読書パートナー、無制限読書などが利用できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'どんな本がありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowReadは世界中のパブリックドメインの古典を厳選して収録しています。「高慢と偏見」「自省録」から「紅楼夢」「道徳経」まで。すべての書籍は著作権を確認し、丁寧にフォーマットされています。',
        },
      },
      {
        '@type': 'Question',
        name: 'SlowReadは多言語に対応していますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。SlowReadはバイリンガル並列読書に対応しており、原文と翻訳を並べて読んだり、外国の古典を母語で読むことができます。世界の主要言語に対応しています。',
        },
      },
      {
        '@type': 'Question',
        name: 'AI読書パートナーはどう機能しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '各節の後に、あらすじの振り返りで前の話を忘れないようにし、文化的背景や文学的典故を解説し、読み進めるごとに更新される人物関係図を提供します。日本語、英語、中国語、フランス語に対応しています。',
        },
      },
      {
        '@type': 'Question',
        name: '一冊読み終えるのにどのくらいかかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'あなたのペース次第です。例えば「紅楼夢」（731,000字）は、1日2,800字（約7分）のペースで約262日かかります。SlowReadがパーソナライズされたスケジュールを計算し、実際の読書ペースに応じて自動調整します。',
        },
      },
      {
        '@type': 'Question',
        name: '一日休んだらどうなりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '何も問題ありません！ペナルティはありません。読書スケジュールは自動で再計算されます。本はあなたを待っています。SlowReadはプレッシャーや罪悪感なく、一貫した読書を促すように設計されています。',
        },
      },
      {
        '@type': 'Question',
        name: 'SlowReadはAndroidで使えますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowReadは現在iOS App Storeで公開中です。Android版は将来リリース予定です。最新情報をお楽しみに。',
        },
      },
    ],
  },
];

export default function JaHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="ja" />
      <ScrollReveal />

      <main>
        {/* Hero */}
        <section className="hero container">
          <Image src="/images/slowread-logo.png" alt="SlowRead — 毎日の古典文学リーディングアプリ" width={120} height={120} className="hero-logo" priority />
          <p className="hero-eyebrow">急がない読書家のために</p>
          <h1>ゆっくり読む、<br />深く読む。</h1>
          <p className="tagline">速い世界で、ゆっくり良い本を読もう。</p>
          <p className="hero-description">毎朝5分、トルストイ、オースティン、老子と過ごす。毎日一節の厳選された文章を、AIパートナーと一緒に。どの言語でも読める。ストリークを積み重ねよう。広告は一切ありません。</p>
          <StoreButtons />
          <div className="scroll-hint">
            <span>もっと見る</span>
            <div className="scroll-hint-line" />
          </div>
        </section>

        {/* Manifesto */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="manifesto container reveal">
          <p className="manifesto-text">
            私たちは毎日何百もの投稿をスクロールするのに、一年に一冊の本すら読み終えられない。
            <strong>文字とじっくり向き合う</strong>力を、少しずつ失いつつある。
            SlowReadはシンプルな信念に基づいている：<em>少しの読書を、続けること。それがすべてを変える</em>。
            速読でもなく、要約でもない。あなたと、一節の文章と、考えるための静かな時間。
          </p>
        </section>

        {/* How It Works */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="how-it-works container">
          <p className="section-label reveal">使い方</p>
          <h2 className="section-title reveal">あなただけの読書プラン</h2>
          <div className="steps">
            <div className="step reveal reveal-delay-1">
              <span className="step-number">Step 01</span>
              <div className="step-icon">&#9881;</div>
              <h3>ペースを設定</h3>
              <p>サンプルを試し読みして、一日に何文字がちょうどいいか教えてください。あなたのリズムに合わせます。</p>
            </div>
            <div className="step reveal reveal-delay-2">
              <span className="step-number">Step 02</span>
              <div className="step-icon">&#9782;</div>
              <h3>古典を選ぶ</h3>
              <p>言語、ジャンル、時代、テーマで探す。中国哲学からフランス小説まで——世界の文学があなたを待っています。</p>
            </div>
            <div className="step reveal reveal-delay-3">
              <span className="step-number">Step 03</span>
              <div className="step-icon">&#10047;</div>
              <h3>スケジュールを取得</h3>
              <p>読了予定日を正確にお知らせします。毎日の通知時間を選んで、読書の旅を始めましょう。</p>
            </div>
          </div>

          <div className="schedule-card reveal">
            <p className="schedule-card-label">あなた専用の見積もり</p>
            <p className="schedule-card-number">262</p>
            <p className="schedule-card-unit">日で読了</p>
            <p className="schedule-card-detail">「紅楼夢」全編 <strong>731,000字</strong> —— あなたのペースなら、9ヶ月以内にこの大作を読破できます。</p>
            <div className="schedule-settings">
              <div className="schedule-setting">
                <span className="schedule-setting-value">2,800</span>
                <span className="schedule-setting-label">文字 / 日</span>
              </div>
              <div className="schedule-setting">
                <span className="schedule-setting-value">7分</span>
                <span className="schedule-setting-label">1回の読書</span>
              </div>
              <div className="schedule-setting">
                <span className="schedule-setting-value">週7日</span>
                <span className="schedule-setting-label">読書頻度</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reading Preview */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="reading-preview container">
          <p className="section-label reveal">読書体験</p>
          <h2 className="section-title reveal">物語の区切りで分割、文字数で切らない</h2>
          <div className="book-card reveal">
            <div className="book-card-header">
              <span className="book-card-meta">今日の一節</span>
              <span className="book-card-day">42日目</span>
            </div>
            <h3 className="book-card-title">吾輩は猫である</h3>
            <p className="book-card-author">夏目漱石</p>
            <p className="book-card-passage">吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。</p>
            <div className="book-card-footer">
              <div className="book-card-progress">
                <span>第一章 &middot; 35%</span>
                <div className="progress-bar"><div className="progress-fill" /></div>
              </div>
              <span className="book-card-action">続きを読む &rarr;</span>
            </div>
          </div>
        </section>

        {/* Bilingual Reading */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="bilingual-section container">
          <div className="bilingual-content">
            <div className="bilingual-text reveal">
              <h2>どの言語でも読める、<br />どの言語からも学べる。</h2>
              <p>原文と翻訳を並べて古典を読む。あるいは外国の古典を母語で読む。SlowReadは世界の主要言語に対応しています。</p>
              <p>文学愛好家は新しい世界を発見する。語学学習者は教科書の会話ではなく、本物のテキストで没入練習ができます。</p>
            </div>
            <div className="bilingual-preview reveal reveal-delay-2">
              <div className="bilingual-tab-bar">
                <span className="bilingual-tab active">バイリンガル</span>
                <span className="bilingual-tab">原文のみ</span>
                <span className="bilingual-tab">翻訳のみ</span>
              </div>
              <div className="bilingual-columns">
                <div className="bilingual-col">
                  <span className="bilingual-col-label">原文 &middot; English</span>
                  It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                </div>
                <div className="bilingual-col">
                  <span className="bilingual-col-label">日本語訳</span>
                  金持ちの独身男性はみな妻を求めているに違いない、というのは世界中で認められた真理である。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Companion */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="ai-section container">
          <p className="section-label reveal">ゲームチェンジャー</p>
          <h2 className="section-title reveal">一緒に読むAIパートナー</h2>
          <div className="ai-content">
            <div className="ai-text reveal">
              <span className="ai-badge">Pro機能</span>
              <p>古典文学で挫折する理由は二つ：<strong>「前の話を忘れた」</strong>と<strong>「背景がわからない」</strong>。</p>
              <p>SlowReadのAIパートナーは両方を解決します。各節の後に、あらすじの振り返り、文化的背景の解説、人物関係の整理を提供——もう迷子にはなりません。</p>
              <ul className="ai-features-list">
                <li><span className="ai-bullet">&#9670;</span> 読み進めるごとに更新される人物関係図</li>
                <li><span className="ai-bullet">&#9670;</span> 毎回の読書前に「前回のあらすじ」</li>
                <li><span className="ai-bullet">&#9670;</span> 文化的背景と文学的典故の解説</li>
                <li><span className="ai-bullet">&#9670;</span> 多言語対応：日本語、英語、中国語、フランス語</li>
              </ul>
            </div>
            <div className="ai-preview reveal reveal-delay-2">
              <div className="ai-card">
                <span className="ai-card-label">&#9670; AI読書パートナー</span>
                <h4>今日の人物関係図</h4>
                <p>冒頭に登場する人物と主な関係：</p>
                <div className="char-nodes">
                  <span className="char-node highlight">苦沙弥先生</span>
                  <span className="char-node highlight">吾輩（猫）</span>
                  <span className="char-node">迷亭</span>
                  <span className="char-node">寒月</span>
                  <span className="char-node">細君</span>
                </div>
              </div>
              <div className="ai-card">
                <span className="ai-card-label">&#9670; あらすじ</span>
                <h4>前回のお話……</h4>
                <p>名前のない猫が、書生の家で生まれ、やがて教師・苦沙弥先生の家に住み着く。猫の目を通して、明治の知識人たちの滑稽な日常が語られ始める。</p>
              </div>
              <div className="ai-card">
                <span className="ai-card-label">&#9670; 文化背景</span>
                <h4>「書生」とは？</h4>
                <p>明治時代の学生や学問を志す若者を指す。多くは他家に住み込みで勉学に励んだ。漱石自身もかつて書生だった経験を持ち、そのユーモラスな描写には実体験が反映されている。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Streak */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="streak-section container">
          <div className="streak-content">
            <div className="streak-text reveal">
              <h2>小さな習慣が、<br />大きな変化に</h2>
              <p>読書ストリークはプレッシャーではなく、モチベーション。読んだ日ごとに、あなたの物語に一滴のインクが加わる。</p>
              <p>今日の一節を読み終えた？続けたければどうぞ。多く読んでも少なく読んでも、スケジュールは自動調整。一日休んでも大丈夫。本はあなたを待っています。</p>
            </div>
            <div className="streak-visual reveal reveal-delay-2">
              <span className="streak-counter">42</span>
              <span className="streak-counter-label">日連続読書</span>
              <StreakGrid />
              <div className="streak-week-labels">
                {['月', '火', '水', '木', '金', '土', '日'].map((d, i) => (
                  <span key={i} className="streak-week-label">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Library */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="library-section container">
          <p className="section-label reveal">ライブラリ</p>
          <h2 className="section-title reveal">世界中の偉大な作品</h2>
          <div className="library-grid">
            <div className="library-card reveal reveal-delay-1">
              <span className="library-card-genre">小説</span>
              <h3>吾輩は猫である</h3>
              <p className="author">夏目漱石</p>
              <p>「吾輩は猫である。名前はまだ無い。」</p>
            </div>
            <div className="library-card reveal reveal-delay-2">
              <span className="library-card-genre">哲学</span>
              <h3>武士道</h3>
              <p className="author">新渡戸稲造</p>
              <p>「義は武士の掟の中で最も厳格な教えである。」</p>
            </div>
            <div className="library-card reveal reveal-delay-3">
              <span className="library-card-genre">古典</span>
              <h3>源氏物語</h3>
              <p className="author">紫式部</p>
              <p>「いづれの御時にか、女御、更衣あまたさぶらひたまひける中に。」</p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="quote-section container reveal">
          <blockquote>読書する人は、死ぬまでに千の人生を生きる。読まない人は、ただ一つの人生しか生きない。</blockquote>
          <p className="quote-attribution">&mdash; George R.R. Martin</p>
        </section>

        {/* Pricing */}
        <section className="pricing-section container-wide">
          <p className="section-label reveal">プラン</p>
          <h2 className="section-title reveal">無料で読む。Proでもっと深く。</h2>
          <div className="pricing-grid">
            <div className="pricing-card reveal reveal-delay-1">
              <p className="pricing-card-name">無料</p>
              <p className="pricing-card-price">$0 <span>ずっと無料</span></p>
              <p className="pricing-card-desc">世界最高の文学作品で、毎日の読書習慣を作るために必要なすべて。</p>
              <ul className="pricing-list">
                <li><span className="pricing-check">&#10003;</span> 毎日一節の読書</li>
                <li><span className="pricing-check">&#10003;</span> パブリックドメイン全書庫</li>
                <li><span className="pricing-check">&#10003;</span> 読書ストリーク＆マイルストーン</li>
                <li><span className="pricing-check">&#10003;</span> パーソナライズされたスケジュール</li>
                <li><span className="pricing-check">&#10003;</span> 毎日のリマインダー</li>
                <li className="disabled"><span className="pricing-check">&#10005;</span> バイリンガル対訳</li>
                <li className="disabled"><span className="pricing-check">&#10005;</span> AI読書パートナー</li>
                <li className="disabled"><span className="pricing-check">&#10005;</span> 無制限読書</li>
                <li className="disabled"><span className="pricing-check">&#10005;</span> オフライン閲覧</li>
              </ul>
            </div>
            <div className="pricing-card featured reveal reveal-delay-2">
              <span className="pricing-card-badge">一番人気</span>
              <p className="pricing-card-name">Pro</p>
              <p className="pricing-card-price">$3.99 <span>/ 月</span></p>
              <p className="pricing-card-desc">より深く読みたい読書家のために。AI機能、無制限読書、その他多数。</p>
              <ul className="pricing-list">
                <li><span className="pricing-check">&#10003;</span> 無料プランのすべての機能</li>
                <li><span className="pricing-check">&#10003;</span> <strong>無制限読書</strong> —— 今日の一節を超えて読み進める</li>
                <li><span className="pricing-check">&#10003;</span> <strong>AI読書パートナー</strong> —— 人物関係図、あらすじ、文化解説</li>
                <li><span className="pricing-check">&#10003;</span> <strong>多言語AI対応</strong> —— 日本語、英語、中国語、フランス語</li>
                <li><span className="pricing-check">&#10003;</span> <strong>バイリンガル対訳</strong> —— 原文と翻訳を並べて読む</li>
                <li><span className="pricing-check">&#10003;</span> <strong>オフライン閲覧</strong> —— ダウンロードして飛行機や通勤中にも</li>
                <li><span className="pricing-check">&#10003;</span> <strong>年間読書レポート</strong> —— あなたの一年間の文学の旅</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="features container-wide">
          <p className="section-label reveal">SlowReadの特長</p>
          <h2 className="section-title reveal">消費者ではなく、読者のためにデザイン</h2>
          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon feature-icon-book" aria-hidden="true">&#9782;</div>
              <h3>スマート分割</h3>
              <p>AIが物語の自然な区切りを見つける——文の途中で切ることはありません。一節一節が完結しています。</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon feature-icon-streak" aria-hidden="true">&#10047;</div>
              <h3>アダプティブスケジュール</h3>
              <p>今日多く読んだ？読了日が早まります。一日休んだ？自動で再計算。常に正確で、決して責めません。</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon feature-icon-library" aria-hidden="true">&#9776;</div>
              <h3>厳選＆高品質</h3>
              <p>すべての書籍は丁寧にフォーマットされ、AIによる豊富なメタデータで強化されています。</p>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon feature-icon-notify" aria-hidden="true">&#9883;</div>
              <h3>やさしいリマインダー</h3>
              <p>あなたが選んだ時間に、静かな毎日のお知らせ。本はいつでも準備できています。</p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon feature-icon-offline" aria-hidden="true">&#9729;</div>
              <h3>美しいタイポグラフィ</h3>
              <p>和紙のような質感、丁寧に選ばれた明朝体、文字を敬うレイアウトデザイン。</p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon feature-icon-free" aria-hidden="true">&#10084;</div>
              <h3>広告なし、永遠に</h3>
              <p>無料ダウンロード、広告なし、ダークパターンなし。パブリックドメインの本は永遠に無料。信頼を先に、収益はその後。</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="divider" aria-hidden="true">&middot;</div>
        <section className="final-cta container reveal">
          <h2>次の一章は、<br />今日から始まる</h2>
          <p>世界中の読書を再発見した読者に加わろう。一日一節ずつ。無料で始められます、クレジットカード不要。</p>
          <StoreButtons />
        </section>
      </main>

      <Footer lang="ja" />
    </>
  );
}
