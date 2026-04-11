import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Answers to common questions about SlowRead: how it works, pricing, supported languages, AI reading companion, and more.',
  alternates: {
    canonical: 'https://slowread.xyz/faq',
    languages: { 'zh-Hant': 'https://slowread.xyz/zh/faq', ja: 'https://slowread.xyz/ja/faq' },
  },
  openGraph: {
    title: 'FAQ — SlowRead',
    description: 'Everything you need to know about SlowRead — the daily classic literature reading app.',
    url: 'https://slowread.xyz/faq',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

const faqs = [
  {
    q: 'What is SlowRead?',
    a: 'SlowRead is a mobile reading app that delivers one curated passage per day from public domain literary classics. It combines an AI-powered reading companion with bilingual reading, smart scheduling, and reading streaks to help you build a consistent habit of deep reading — not speed-reading, not summaries, just quiet time with great books.',
  },
  {
    q: 'Is SlowRead free?',
    a: 'Yes! SlowRead is completely free to download and use. The free plan includes one passage per day, the full public domain library, reading streaks, a personalized schedule, and daily reminders. The Pro plan ($3.99/month) adds unlimited reading, the AI reading companion, bilingual side-by-side reading, offline access, and more.',
  },
  {
    q: 'What books are available?',
    a: 'SlowRead offers a curated library of public domain classics from around the world — from Pride and Prejudice and Meditations to Dream of the Red Chamber (紅樓夢) and Tao Te Ching (道德經). The library includes Western novels, Chinese classics, Japanese literature, and philosophy. Every book is hand-verified for copyright and carefully formatted.',
  },
  {
    q: 'How does the AI reading companion work?',
    a: 'The AI companion (Pro feature) solves the two biggest reasons people give up on classics: "I forgot what happened" and "I don\'t understand the context." After each passage, it provides plot recaps so you never lose track, character relationship maps that update as you read, cultural context explainers for historical references, and deep vocabulary notes. It supports English, Chinese, Japanese, and French.',
  },
  {
    q: 'Does SlowRead support multiple languages?',
    a: 'Yes! SlowRead supports bilingual side-by-side reading, letting you read classics in their original language alongside a translation. You can switch between three modes: side-by-side, original only, or translation only. All major world languages are supported. It\'s great for both literature lovers and language learners.',
  },
  {
    q: 'How long does it take to finish a book?',
    a: 'It depends on your chosen pace. For example, Dream of the Red Chamber (731,000 characters) takes about 262 days at 2,800 characters per day — roughly 7 minutes per reading session. SlowRead calculates a personalized schedule for every book and adjusts automatically based on your actual reading pace.',
  },
  {
    q: 'What happens if I miss a day?',
    a: 'Nothing bad at all! There\'s no penalty for missing a day. Your reading schedule simply recalculates automatically. The book waits for you. SlowRead is designed to encourage consistent reading through positive momentum, not pressure or guilt.',
  },
  {
    q: 'How are passages divided?',
    a: 'SlowRead uses AI to find natural pause points in stories — chapter breaks, scene transitions, or thematic shifts. Passages are never cut mid-sentence or at arbitrary word counts. Each daily passage is designed to feel like a complete, satisfying reading experience.',
  },
  {
    q: 'Is SlowRead available on Android?',
    a: 'SlowRead is currently available on iOS via the App Store. An Android version is planned for the future. You can visit slowread.xyz to stay updated on availability.',
  },
  {
    q: 'How is SlowRead different from book summary apps?',
    a: 'Unlike Blinkist or other summary apps that condense books into 15-minute overviews, SlowRead delivers the actual text — every word the author wrote — in manageable daily portions. You experience the author\'s original voice, style, and storytelling, not a paraphrased version.',
  },
  {
    q: 'Can I read more than one passage per day?',
    a: 'With the free plan, you get one passage per day. With Pro, you can read as many passages as you want — keep going past today\'s passage whenever you\'re in the flow. Your schedule adjusts automatically to reflect your actual progress.',
  },
  {
    q: 'Does SlowRead have ads?',
    a: 'No. SlowRead has no ads and never will. No pop-ups, no banners, no sponsored content, no dark patterns. Public domain books remain free forever. We believe the reading experience should be sacred and distraction-free.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="en" />

      <main className="legal container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-intro">
          Everything you need to know about SlowRead — the daily classic
          literature reading app.
        </p>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <section key={i} className="faq-item">
              <h2>{faq.q}</h2>
              <p>{faq.a}</p>
            </section>
          ))}
        </div>
      </main>

      <Footer lang="en" />
    </>
  );
}
