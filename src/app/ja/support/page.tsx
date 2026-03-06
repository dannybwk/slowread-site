import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'サポート',
  description: 'SlowRead サポートセンター。ご質問やご意見がございましたら、お気軽にお問い合わせください。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/support',
    languages: {
      en: 'https://slowread.xyz/support',
      'zh-Hant': 'https://slowread.xyz/zh/support',
    },
  },
  openGraph: {
    title: 'サポート — SlowRead',
    description: 'ご質問やご意見がございましたら、お気軽にお問い合わせください。',
    url: 'https://slowread.xyz/ja/support',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function JaSupportPage() {
  return (
    <>
      <Header lang="ja" />

      <main className="legal container">
        <h1>サポート</h1>

        <h2>お問い合わせ</h2>
        <p>ご質問、ご意見、またはサポートが必要な場合は、以下までご連絡ください：</p>
        <p><a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a></p>
        <p>通常、1〜2営業日以内にご返信いたします。</p>

        <h2>よくあるご質問</h2>

        <h3>SlowRead はどのように機能しますか？</h3>
        <p>SlowRead は毎日、古典文学の一節をお届けします。ご自分のペースで読み、読書ストリークを積み上げ、名作を少しずつ読み進めましょう。</p>

        <h3>読んでいる本を変更するにはどうすればいいですか？</h3>
        <p>「ライブラリ」タブで利用可能なすべての書籍を閲覧できます。任意の本をタップして読み始めてください。いつでも本を切り替えることができます。</p>

        <h3>バイリンガルモードとは何ですか？</h3>
        <p>バイリンガルモードでは、原文と翻訳を並べて表示し、二つの言語で作品をお楽しみいただけます。</p>

        <h3>読書ストリークはどのように機能しますか？</h3>
        <p>毎日の読書を完了すると、ストリークが維持されます。連続して読書した日数分、ストリークのカウントが増加します。1日でも読まない日があると、ストリークはゼロにリセットされます。</p>

        <h3>アカウントを削除するにはどうすればいいですか？</h3>
        <p>アカウントおよび関連するすべてのデータを削除するには、<a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a> までメールでご連絡ください。30日以内にリクエストを処理いたします。</p>

        <h3>SlowRead は無料ですか？</h3>
        <p>SlowRead は、毎日の読書機能を含む無料プランを提供しています。SlowRead Pro にアップグレードすると、AI読書コンパニオン、無制限のブックマークなど、追加機能をご利用いただけます。</p>
      </main>

      <Footer lang="ja" />
    </>
  );
}
