import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ScrollReveal from '@/components/site/ScrollReveal';

export const metadata: Metadata = {
  title: 'SlowRead — In a fast world, slowly read a good book',
  description:
    'Daily passages from classic literature with AI-powered reading companion. Bilingual reading, smart scheduling, and reading streaks. Free to start.',
  alternates: {
    canonical: 'https://slowread.xyz',
    languages: { 'zh-Hant': 'https://slowread.xyz/zh', ja: 'https://slowread.xyz/ja' },
  },
  openGraph: {
    title: 'SlowRead — Slow down. Read deeply.',
    description:
      'Five minutes a day with the greatest books ever written. AI companion, bilingual reading, and habit-building streaks.',
    url: 'https://slowread.xyz',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SlowRead — Daily classic literature reading' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlowRead — Slow down. Read deeply.',
    description: 'Five minutes a day with the greatest books ever written.',
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
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://slowread.xyz/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
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
      'Daily passages from classic literature with AI-powered reading companion. Bilingual reading, smart scheduling, and reading streaks.',
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        name: 'Free',
        description: 'Full public domain library, daily passages, reading streaks, personalized schedule, daily reminders, monthly report, AI companion (5 cards/day), bilingual demo (first 3 pages).',
      },
      {
        '@type': 'Offer',
        price: '3.99',
        priceCurrency: 'USD',
        name: 'Pro',
        description: 'Unlimited AI companion, full bilingual reading, offline access, Streak Freeze, annual reading report.',
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
    screenshot: 'https://slowread.xyz/images/og-image.png',
    featureList: 'Daily curated passages, AI reading companion, Bilingual side-by-side reading, Smart passage splitting, Personalized reading schedule, Reading streaks, Streak Freeze, Share achievement card, Author biographies, Text-to-Speech, Offline reading, Beautiful typography',
    inLanguage: ['en', 'zh-Hant', 'ja'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to build a daily reading habit with SlowRead',
    description: 'Start reading classic literature in just 5 minutes a day with a personalized schedule and AI companion.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Set Your Pace',
        text: 'Try a sample passage and tell SlowRead how many words feel right per day. The app adapts to your rhythm.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Pick a Classic',
        text: 'Browse the public domain library by language, genre, era, or theme. Choose from works like Pride and Prejudice, Meditations, Dream of the Red Chamber, and Tao Te Ching.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Get Your Personalized Schedule',
        text: 'SlowRead calculates exactly when you will finish the book. Choose your daily notification time and start your reading journey.',
        position: 3,
      },
    ],
    totalTime: 'PT5M',
    tool: {
      '@type': 'HowToTool',
      name: 'SlowRead app (iOS)',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://slowread.xyz',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is SlowRead?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowRead is a mobile reading app that delivers daily passages from public domain literary classics. It combines AI-powered reading companions with bilingual reading, smart scheduling, and reading streaks to help you build a consistent habit of deep reading.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is SlowRead free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, SlowRead is free to download and use. The free plan includes the full public domain library, daily passages, reading streaks, personalized schedule, monthly reading report, an AI companion taste (5 cards/day), and a bilingual demo (first 3 pages). A Pro plan at $3.99/month unlocks unlimited AI companion, full bilingual reading, offline access, Streak Freeze, and the annual reading report.',
        },
      },
      {
        '@type': 'Question',
        name: 'What books are available on SlowRead?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowRead offers a curated library of public domain classics from around the world — from Pride and Prejudice and Meditations to Dream of the Red Chamber and Tao Te Ching. Every book is hand-verified for copyright and carefully formatted.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does SlowRead support multiple languages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. SlowRead supports bilingual side-by-side reading, letting you read classics in their original language with a translation. Free users can try bilingual mode for the first 3 pages of each book. All major world languages are supported.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI reading companion work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After each passage, the AI companion offers a plot recap so you never forget what happened, explains cultural references and literary allusions, and maps character relationships that update as you read. It supports Chinese, English, Japanese, and French.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to finish a book on SlowRead?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on your pace. For example, Dream of the Red Chamber (731,000 characters) takes about 262 days at 2,800 characters per day (7 minutes per session). SlowRead calculates a personalized reading schedule for every book.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I miss a day of reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nothing bad! There is no penalty for missing a day. Your reading schedule recalculates automatically. The book will wait for you. Pro members can also use Streak Freeze (up to 2 times per month) to keep their streak alive on busy days. SlowRead is designed to encourage consistent reading without pressure or guilt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is SlowRead available on Android?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SlowRead is currently available on iOS via the App Store. An Android version is planned for the future. Stay tuned for updates.',
        },
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="en" />
      <ScrollReveal />

      <main>
        {/* Hero */}
        <section className="hero container">
          <Image src="/images/slowread-logo.png" alt="SlowRead — daily classic literature reading app" width={120} height={120} className="hero-logo" priority />
          <p className="hero-eyebrow">A reading companion for the unhurried</p>
          <h1>
            Slow down.
            <br />
            Read deeply.
          </h1>
          <p className="tagline">In a fast world, slowly read a good book.</p>
          <p className="hero-description">
            Five minutes each morning with Tolstoy, Austen, or Lao Tzu. One
            curated passage a day &mdash; with an AI companion that makes
            classics feel alive. Read in any language. Build your streak. No
            ads, ever.
          </p>
          <StoreButtons />
          <div className="scroll-hint">
            <span>Discover more</span>
            <div className="scroll-hint-line" />
          </div>
        </section>

        {/* Manifesto */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="manifesto container reveal">
          <p className="manifesto-text">
            We scroll through hundreds of posts a day, yet struggle to finish a
            single book a year. We&rsquo;ve lost the art of{' '}
            <strong>sitting still with words</strong>. SlowRead is built on a
            simple belief:{' '}
            <em>
              a little reading, done consistently, changes everything
            </em>
            . Not speed-reading. Not summaries. Just you, a passage, and the
            quiet space to think.
          </p>
        </section>

        {/* How It Works */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="how-it-works container">
          <p className="section-label reveal">How it works</p>
          <h2 className="section-title reveal">
            Your reading plan, personalized
          </h2>
          <div className="steps">
            <div className="step reveal reveal-delay-1">
              <span className="step-number">Step 01</span>
              <div className="step-icon">&#9881;</div>
              <h3>Set Your Pace</h3>
              <p>
                Try a sample passage and tell us how many words feel right per
                day. We adapt to your rhythm.
              </p>
            </div>
            <div className="step reveal reveal-delay-2">
              <span className="step-number">Step 02</span>
              <div className="step-icon">&#9782;</div>
              <h3>Pick a Classic</h3>
              <p>
                Browse by language, genre, era, or theme. From Chinese
                philosophy to French novellas &mdash; the world&rsquo;s
                literature awaits.
              </p>
            </div>
            <div className="step reveal reveal-delay-3">
              <span className="step-number">Step 03</span>
              <div className="step-icon">&#10047;</div>
              <h3>Get Your Schedule</h3>
              <p>
                We&rsquo;ll tell you exactly when you&rsquo;ll finish. Choose
                your daily notification time, and your reading journey begins.
              </p>
            </div>
          </div>

          <div className="schedule-card reveal">
            <p className="schedule-card-label">Your personalized estimate</p>
            <p className="schedule-card-number">262</p>
            <p className="schedule-card-unit">days to finish</p>
            <p className="schedule-card-detail">
              <strong>Dream of the Red Chamber</strong> &mdash; all{' '}
              <strong>731,000 characters</strong>. At your pace, you&rsquo;ll
              conquer this masterpiece in under nine months.
            </p>
            <div className="schedule-settings">
              <div className="schedule-setting">
                <span className="schedule-setting-value">2,800</span>
                <span className="schedule-setting-label">chars / day</span>
              </div>
              <div className="schedule-setting">
                <span className="schedule-setting-value">7 min</span>
                <span className="schedule-setting-label">per session</span>
              </div>
              <div className="schedule-setting">
                <span className="schedule-setting-value">7 days</span>
                <span className="schedule-setting-label">per week</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reading Preview */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="reading-preview container">
          <p className="section-label reveal">The reading experience</p>
          <h2 className="section-title reveal">
            Passages cut where stories pause, not where word counts end
          </h2>
          <div className="book-card reveal">
            <div className="book-card-header">
              <span className="book-card-meta">Today&rsquo;s passage</span>
              <span className="book-card-day">Day 42</span>
            </div>
            <h3 className="book-card-title">Pride and Prejudice</h3>
            <p className="book-card-author">Jane Austen</p>
            <p className="book-card-passage">
              It is a truth universally acknowledged, that a single man in
              possession of a good fortune, must be in want of a wife. However
              little known the feelings or views of such a man may be on his
              first entering a neighbourhood, this truth is so well fixed in the
              minds of the surrounding families, that he is considered as the
              rightful property of some one or other of their daughters.
            </p>
            <div className="book-card-footer">
              <div className="book-card-progress">
                <span>Chapter 1 &middot; 35%</span>
                <div className="progress-bar">
                  <div className="progress-fill" />
                </div>
              </div>
              <span className="book-card-action">Continue &rarr;</span>
            </div>
          </div>
        </section>

        {/* Bilingual Reading */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="bilingual-section container">
          <div className="bilingual-content">
            <div className="bilingual-text reveal">
              <h2>
                Read in any language.
                <br />
                Learn from any language.
              </h2>
              <p>
                Read classics in their original language with a side-by-side
                translation, or switch to original only. SlowRead supports
                all major world languages. Free users can try bilingual
                mode for the first 3 pages of each book.
              </p>
              <p>
                Literature lovers discover new worlds. Language learners get
                immersive practice with real texts &mdash; not textbook
                dialogues.
              </p>
            </div>
            <div className="bilingual-preview reveal reveal-delay-2">
              <div className="bilingual-tab-bar">
                <span className="bilingual-tab active">Side-by-Side</span>
                <span className="bilingual-tab">Original Only</span>
              </div>
              <div className="bilingual-columns">
                <div className="bilingual-col">
                  <span className="bilingual-col-label">
                    Original &middot; Chinese
                  </span>
                  道可道，非常道；名可名，非常名。無名天地之始；有名萬物之母。
                </div>
                <div className="bilingual-col">
                  <span className="bilingual-col-label">English</span>
                  The Way that can be spoken of is not the constant Way; the
                  name that can be named is not the constant name. The nameless
                  is the beginning of heaven and earth.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Companion */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="ai-section container">
          <p className="section-label reveal">The game changer</p>
          <h2 className="section-title reveal">
            An AI companion that reads with you
          </h2>
          <div className="ai-content">
            <div className="ai-text reveal">
              <span className="ai-badge">Pro Feature &middot; 5 free cards/day</span>
              <p>
                Classic literature makes people give up for two reasons:{' '}
                <strong>&ldquo;I forgot what happened before&rdquo;</strong> and{' '}
                <strong>
                  &ldquo;I don&rsquo;t understand the context.&rdquo;
                </strong>
              </p>
              <p>
                SlowRead&rsquo;s AI companion solves both. After each passage,
                it offers a plot recap, explains cultural references, and maps
                character relationships &mdash; so you never feel lost again.
              </p>
              <ul className="ai-features-list">
                <li>
                  <span className="ai-bullet">&#9670;</span> Character
                  relationship maps that update as you read
                </li>
                <li>
                  <span className="ai-bullet">&#9670;</span>{' '}
                  &ldquo;Previously on...&rdquo; plot recaps for each session
                </li>
                <li>
                  <span className="ai-bullet">&#9670;</span> Cultural context
                  and literary allusion explainers
                </li>
                <li>
                  <span className="ai-bullet">&#9670;</span> Multilingual
                  support: Chinese, English, Japanese, French
                </li>
              </ul>
            </div>
            <div className="ai-preview reveal reveal-delay-2">
              <div className="ai-card">
                <span className="ai-card-label">
                  &#9670; AI Reading Companion
                </span>
                <h4>Today&rsquo;s Character Map</h4>
                <p>
                  Chapter 1 introduces the Bennet family. Here are the key
                  relationships:
                </p>
                <div className="char-nodes">
                  <span className="char-node highlight">Mr. Bennet</span>
                  <span className="char-node highlight">Mrs. Bennet</span>
                  <span className="char-node">Jane</span>
                  <span className="char-node">Elizabeth</span>
                  <span className="char-node">Mr. Bingley</span>
                </div>
              </div>
              <div className="ai-card">
                <span className="ai-card-label">&#9670; Plot Recap</span>
                <h4>Previously on Pride and Prejudice</h4>
                <p>
                  A wealthy bachelor, Mr. Bingley, has just moved to the
                  neighbourhood. Mrs. Bennet is determined that one of her five
                  daughters should marry him, and pressures her reluctant
                  husband to pay a social call.
                </p>
              </div>
              <div className="ai-card">
                <span className="ai-card-label">&#9670; Cultural Context</span>
                <h4>What is &ldquo;Michaelmas&rdquo;?</h4>
                <p>
                  A Christian feast day on September 29th, widely used in
                  Regency England to mark lease terms, harvest, and the start of
                  autumn. In context: Bingley plans to move in before fall.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Streak */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="streak-section container">
          <div className="streak-content">
            <div className="streak-text reveal">
              <h2>
                Small habit,
                <br />
                great transformation
              </h2>
              <p>
                A reading streak isn&rsquo;t about pressure &mdash; it&rsquo;s
                about momentum. Each day you read, you add one more drop of ink
                to the story of who you&rsquo;re becoming.
              </p>
              <p>
                Finished today&rsquo;s passage? Keep going if you want. Read
                more or less &mdash; your schedule adjusts automatically. Miss a
                day? No guilt. The book will wait. Pro members also get
                Streak Freeze &mdash; use it up to 2 times per month to
                protect your streak when life gets busy.
              </p>
            </div>
            <div className="streak-visual reveal reveal-delay-2">
              <span className="streak-counter">42</span>
              <span className="streak-counter-label">day streak</span>
              <StreakGrid />
              <div className="streak-week-labels">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="streak-week-label">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Library */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="library-section container">
          <p className="section-label reveal">The library</p>
          <h2 className="section-title reveal">
            Great books from every corner of the world
          </h2>
          <div className="library-grid">
            <div className="library-card reveal reveal-delay-1">
              <span className="library-card-genre">Novel</span>
              <h3>Pride and Prejudice</h3>
              <p className="author">Jane Austen</p>
              <p>
                &ldquo;I could easily forgive his pride, if he had not mortified
                mine.&rdquo;
              </p>
            </div>
            <div className="library-card reveal reveal-delay-2">
              <span className="library-card-genre">Philosophy</span>
              <h3>Meditations</h3>
              <p className="author">Marcus Aurelius</p>
              <p>
                &ldquo;The happiness of your life depends upon the quality of
                your thoughts.&rdquo;
              </p>
            </div>
            <div className="library-card reveal reveal-delay-3">
              <span className="library-card-genre">Classic</span>
              <h3>Dream of the Red Chamber</h3>
              <p className="author">Cao Xueqin</p>
              <p>
                &ldquo;Truth becomes fiction when the fiction&rsquo;s true; Real
                becomes not-real where the unreal&rsquo;s real.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="quote-section container reveal">
          <blockquote>
            A reader lives a thousand lives before he dies. The man who never
            reads lives only one.
          </blockquote>
          <p className="quote-attribution">&mdash; George R.R. Martin</p>
        </section>

        {/* Pricing */}
        <section className="pricing-section container-wide">
          <p className="section-label reveal">Plans</p>
          <h2 className="section-title reveal">
            Free to read. Pro to go deeper.
          </h2>
          <div className="pricing-grid">
            <div className="pricing-card reveal reveal-delay-1">
              <p className="pricing-card-name">Free</p>
              <p className="pricing-card-price">
                $0 <span>forever</span>
              </p>
              <p className="pricing-card-desc">
                Everything you need to build a daily reading habit with the
                world&rsquo;s greatest books.
              </p>
              <ul className="pricing-list">
                <li>
                  <span className="pricing-check">&#10003;</span> Full public
                  domain library
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span> Reading
                  streaks &amp; milestones
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span> Personalized
                  schedule
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span> Daily
                  reminders
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span> Monthly
                  reading report
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span> Bilingual
                  reading &mdash; first 3 pages per book
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span> AI reading
                  companion &mdash; 5 cards per day
                </li>
                <li className="disabled">
                  <span className="pricing-check">&#10005;</span> Offline access
                </li>
                <li className="disabled">
                  <span className="pricing-check">&#10005;</span> Streak Freeze
                </li>
              </ul>
            </div>
            <div className="pricing-card featured reveal reveal-delay-2">
              <span className="pricing-card-badge">Most Popular</span>
              <p className="pricing-card-name">Pro</p>
              <p className="pricing-card-price">
                $3.99 <span>/ month</span>
              </p>
              <p className="pricing-card-desc">
                For readers who want to go deeper &mdash; full AI companion,
                full bilingual, offline access, and more.
              </p>
              <ul className="pricing-list">
                <li>
                  <span className="pricing-check">&#10003;</span> Everything in
                  Free
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span>{' '}
                  <strong>Unlimited AI companion</strong> &mdash; character
                  maps, recaps, cultural context
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span>{' '}
                  <strong>Multilingual AI</strong> &mdash; Chinese, English,
                  Japanese, French
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span>{' '}
                  <strong>Full bilingual reading</strong> &mdash; side-by-side
                  original &amp; translation, every page
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span>{' '}
                  <strong>Offline reading</strong> &mdash; download for planes
                  &amp; commutes
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span>{' '}
                  <strong>Streak Freeze</strong> &mdash; protect your streak
                  up to 2x per month
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span>{' '}
                  <strong>Share achievement card</strong> &mdash; share your
                  reading stats beautifully
                </li>
                <li>
                  <span className="pricing-check">&#10003;</span>{' '}
                  <strong>Annual reading report</strong> &mdash; your year in
                  literature
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="features container-wide">
          <p className="section-label reveal">Why SlowRead</p>
          <h2 className="section-title reveal">
            Designed for readers, not consumers
          </h2>
          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <div
                className="feature-icon feature-icon-book"
                aria-hidden="true"
              >
                &#9782;
              </div>
              <h3>Smart Passage Splitting</h3>
              <p>
                AI finds natural pause points in the story &mdash; no
                mid-sentence cuts. Each passage feels complete.
              </p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div
                className="feature-icon feature-icon-streak"
                aria-hidden="true"
              >
                &#10047;
              </div>
              <h3>Personalized Schedule</h3>
              <p>
                Set your own reading pace and get a personalized finish
                date. Miss a day? It recalculates. Always accurate, never
                judgmental.
              </p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <div
                className="feature-icon feature-icon-library"
                aria-hidden="true"
              >
                &#9776;
              </div>
              <h3>Verified &amp; Refined</h3>
              <p>
                Every book is carefully formatted and enriched with
                AI-powered metadata.
              </p>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div
                className="feature-icon feature-icon-notify"
                aria-hidden="true"
              >
                &#9883;
              </div>
              <h3>Gentle Reminders</h3>
              <p>
                A quiet daily nudge at the time you choose. Your book is ready
                whenever you are.
              </p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div
                className="feature-icon feature-icon-offline"
                aria-hidden="true"
              >
                &#9729;
              </div>
              <h3>Author Biographies</h3>
              <p>
                Tap any author name to discover their story &mdash; biography,
                birth and death years, and historical context.
              </p>
            </div>
            <div className="feature-card reveal reveal-delay-3">
              <div
                className="feature-icon feature-icon-free"
                aria-hidden="true"
              >
                &#10084;
              </div>
              <h3>Share Your Journey</h3>
              <p>
                Share your reading streaks and stats as a beautiful
                achievement card. Inspire friends to start their own reading
                habit.
              </p>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div
                className="feature-icon feature-icon-offline"
                aria-hidden="true"
              >
                &#9729;
              </div>
              <h3>Beautiful Typography</h3>
              <p>
                Ink on paper textures, carefully chosen serif fonts, and layouts
                that honor the written word.
              </p>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div
                className="feature-icon feature-icon-free"
                aria-hidden="true"
              >
                &#10084;
              </div>
              <h3>No Ads. Ever.</h3>
              <p>
                Free to download, no ads, no dark patterns. Public domain books
                stay free. We earn trust before we earn revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="divider" aria-hidden="true">
          &middot;
        </div>
        <section className="final-cta container reveal">
          <h2>
            Your next chapter
            <br />
            starts today
          </h2>
          <p>
            Join readers around the world who&rsquo;ve rediscovered the joy of
            reading, one passage at a time. Free to start, no credit card
            required.
          </p>
          <StoreButtons />
        </section>
      </main>

      <Footer lang="en" />
    </>
  );
}
