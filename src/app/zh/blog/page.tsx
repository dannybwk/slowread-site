import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '慢讀筆記 — SlowRead 部落格',
  description:
    '關於慢讀經典的長文。誠實的閱讀計畫、真實的數字、那些值得花好幾個月讀完的書。',
  alternates: {
    canonical: 'https://slowread.xyz/zh/blog',
    languages: {
      en: 'https://slowread.xyz/blog',
      ja: 'https://slowread.xyz/ja/blog',
    },
  },
  openGraph: {
    title: '慢讀筆記 — SlowRead 部落格',
    description:
      '關於慢讀經典的長文。誠實的閱讀計畫、真實的數字、那些值得花好幾個月讀完的書。',
    url: 'https://slowread.xyz/zh/blog',
    type: 'website',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const posts = [
  {
    slug: 'hong-lou-meng-262-days',
    title: '讀完《紅樓夢》需要多久？一份 262 天的慢讀計畫',
    excerpt:
      '大部分人第一次翻開《紅樓夢》都撐不過第五回。這篇文章告訴你：怎麼用每天 7 分鐘，在 262 天內讀完全本 120 回，而且真的記得發生了什麼。',
    date: '2026-04-23',
    readingTime: '9 分鐘閱讀',
    book: '紅樓夢',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'SlowRead 慢讀筆記',
  url: 'https://slowread.xyz/zh/blog',
  inLanguage: 'zh-Hant',
  publisher: {
    '@type': 'Organization',
    name: 'SlowRead 慢讀經典',
    url: 'https://slowread.xyz',
  },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    url: `https://slowread.xyz/zh/blog/${p.slug}`,
    datePublished: p.date,
    inLanguage: 'zh-Hant',
  })),
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="zh" />

      <main className="blog-index container">
        <h1>慢讀筆記</h1>
        <p className="blog-index-intro">
          關於慢讀經典的長文。誠實的閱讀計畫、真實的數字、那些值得花好幾個月讀完的書——
          一段一段，慢慢讀。
        </p>

        <div className="blog-list">
          {posts.map((post) => (
            <a key={post.slug} href={`/zh/blog/${post.slug}`} className="blog-card">
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

      <Footer lang="zh" />
    </>
  );
}
