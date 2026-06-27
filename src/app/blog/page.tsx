import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Journal — Essays on Slow Reading',
  description:
    'Long-form essays on reading the classics slowly — daily plans, honest guides, and notes on the books that reward patience.',
  alternates: {
    canonical: 'https://slowread.xyz/blog',
    languages: {
      'zh-Hant': 'https://slowread.xyz/zh/blog',
      ja: 'https://slowread.xyz/ja/blog',
    },
  },
  openGraph: {
    title: 'The SlowRead Journal',
    description:
      'Long-form essays on reading the classics slowly — daily plans, honest guides, and notes on the books that reward patience.',
    url: 'https://slowread.xyz/blog',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const posts = [
  {
    slug: 'how-to-read-tao-te-ching',
    title: 'How to Read the Tao Te Ching One Verse a Day',
    excerpt:
      'You can read the entire Tao Te Ching in an hour. That is the trap. The shortest great book in the world is the easiest to read badly — here is the 81-day way to read it instead.',
    date: '2026-06-27',
    readingTime: '8 min read',
    book: 'Tao Te Ching',
  },
  {
    slug: 'how-to-read-meditations-daily',
    title: 'How to Read Meditations in 20 Minutes a Day',
    excerpt:
      'Marcus Aurelius never meant for anyone to read his notebooks. That is exactly why they resist the normal reading posture — and why a 77-day slow plan changes what the book becomes.',
    date: '2026-04-23',
    readingTime: '9 min read',
    book: 'Meditations',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'The SlowRead Journal',
  url: 'https://slowread.xyz/blog',
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: 'SlowRead',
    url: 'https://slowread.xyz',
  },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    url: `https://slowread.xyz/blog/${p.slug}`,
    datePublished: p.date,
    inLanguage: 'en',
  })),
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="en" />

      <main className="blog-index container">
        <h1>The SlowRead Journal</h1>
        <p className="blog-index-intro">
          Long-form essays on reading the classics slowly. Honest plans, real
          numbers, and the case for finishing the books you said you would
          read — one quiet passage at a time.
        </p>

        <div className="blog-list">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-meta">
                <span>{post.book}</span>
                <span className="post-meta-dot" />
                <span>{post.readingTime}</span>
              </div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>

      <Footer lang="en" />
    </>
  );
}
