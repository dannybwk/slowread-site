import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'SlowRead の利用規約。本アプリをご利用になる前に、以下の規約をよくお読みください。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/terms',
    languages: {
      en: 'https://slowread.xyz/terms',
      'zh-Hant': 'https://slowread.xyz/zh/terms',
    },
  },
  openGraph: {
    title: '利用規約 — SlowRead',
    description: 'SlowRead の利用規約。本アプリをご利用になる前に、以下の規約をよくお読みください。',
    url: 'https://slowread.xyz/ja/terms',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function JaTermsPage() {
  return (
    <>
      <Header lang="ja" />

      <main className="legal container">
        <h1>利用規約</h1>
        <p className="last-updated">最終更新日：2026年2月10日</p>

        <p>SlowRead（以下「本アプリ」）をご利用いただくことにより、以下の規約に同意したものとみなされます。同意いただけない場合は、本アプリのご利用をお控えください。</p>

        <h2>1. 使用許諾</h2>
        <p>当社は、個人的かつ非商用目的に限り、本アプリを使用するための限定的、非独占的、譲渡不可、取消可能なライセンスをお客様に付与します。本アプリのいかなる部分も、複製、改変、配布、販売、またはリースすることはできません。</p>

        <h2>2. コンテンツと著作権</h2>
        <p>SlowRead で提供される文学作品は<strong>パブリックドメイン</strong>です。これらのテキストは自由に読み、共有し、お楽しみいただけます。ただし、本アプリのデザイン、コード、ブランド、キュレーションされたコンテンツは SlowRead の知的財産であり、許可なく複製することはできません。</p>

        <h2>3. ユーザーの行動規範</h2>
        <p>お客様は以下の行為を行わないことに同意するものとします：</p>
        <ul>
          <li>本アプリを違法な目的で使用すること</li>
          <li>本アプリのリバースエンジニアリング、逆コンパイル、逆アセンブルを試みること</li>
          <li>本アプリのサービスまたはサーバーを妨害・破壊すること</li>
          <li>不正な目的で複数のアカウントを作成すること</li>
          <li>自動化ツール（ボット、スクレイパーなど）を使用して本アプリにアクセスすること</li>
        </ul>

        <h2>4. アカウント</h2>
        <p>お客様はアカウントのセキュリティを維持する責任を負います。アカウント作成時には正確な情報を提供する必要があります。当社は、本規約に違反するアカウントを一時停止または終了する権利を留保します。</p>

        <h2>5. 免責事項</h2>
        <p>本アプリは「現状のまま」および「利用可能な状態で」提供され、明示的または黙示的を問わず、いかなる種類の保証も伴いません。当社は、本アプリが中断なく、エラーなく、または有害な要素なく動作することを保証しません。</p>

        <h2>6. 責任の制限</h2>
        <p>法律で認められる最大限の範囲において、SlowRead は、お客様が本アプリを使用したことにより生じた間接的、偶発的、特別、結果的、または懲罰的損害について責任を負いません。</p>

        <h2>7. 終了</h2>
        <p>当社は、理由の有無にかかわらず、事前の通知の有無にかかわらず、いつでもお客様の本アプリへのアクセスを終了または一時停止することができます。終了後、本アプリを使用する権利は直ちに失われます。<a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a> にご連絡いただくことで、いつでもアカウントを削除することもできます。</p>

        <h2>8. 規約の変更</h2>
        <p>当社は、いつでも本規約を変更する権利を留保します。変更後も本アプリの使用を継続した場合、更新された規約に同意したものとみなされます。</p>

        <h2>9. お問い合わせ</h2>
        <p>本利用規約に関するご質問がございましたら、以下までご連絡ください：</p>
        <p><a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a></p>
      </main>

      <Footer lang="ja" />
    </>
  );
}
