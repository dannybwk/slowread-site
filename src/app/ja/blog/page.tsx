import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '読書ノート — SlowRead ブログ',
  description:
    '古典をゆっくり読むための長文エッセイ。正直な読書計画、本当の数字、何ヶ月かけて読む価値のある本について。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/blog',
    languages: {
      en: 'https://slowread.xyz/blog',
      'zh-Hant': 'https://slowread.xyz/zh/blog',
    },
  },
  openGraph: {
    title: '読書ノート — SlowRead ブログ',
    description:
      '古典をゆっくり読むための長文エッセイ。正直な読書計画、本当の数字、何ヶ月かけて読む価値のある本について。',
    url: 'https://slowread.xyz/ja/blog',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const posts = [
  {
    slug: 'kokoro-slow-reading',
    title: '『こころ』をゆっくり読む — 83日で読む夏目漱石',
    excerpt:
      '日本人のほとんどが『こころ』を一度は読もうとする。そして、ほとんどの人が「下 先生と遺書」の途中でやめる。1日7分、83日で読み切るための実直な計画。',
    date: '2026-04-23',
    readingTime: '9分で読めます',
    book: 'こころ',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'SlowRead 読書ノート',
  url: 'https://slowread.xyz/ja/blog',
  inLanguage: 'ja',
  publisher: {
    '@type': 'Organization',
    name: 'SlowRead',
    url: 'https://slowread.xyz',
  },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    url: `https://slowread.xyz/ja/blog/${p.slug}`,
    datePublished: p.date,
    inLanguage: 'ja',
  })),
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="ja" />

      <main className="blog-index container">
        <h1>読書ノート</h1>
        <p className="blog-index-intro">
          古典をゆっくり読むための長文エッセイ。正直な読書計画、本当の数字、そして何ヶ月かけて読む価値のある本について——
          一節ずつ、ゆっくりと。
        </p>

        <div className="blog-list">
          {posts.map((post) => (
            <a key={post.slug} href={`/ja/blog/${post.slug}`} className="blog-card">
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

      <Footer lang="ja" />
    </>
  );
}
