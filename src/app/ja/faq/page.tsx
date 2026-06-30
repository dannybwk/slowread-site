import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'よくある質問 FAQ',
  description:
    'SlowReadのよくある質問：使い方、料金、対応言語、AI読書パートナーなどの完全ガイド。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/faq',
    languages: { en: 'https://slowread.xyz/faq', 'zh-Hant': 'https://slowread.xyz/zh/faq' },
  },
  openGraph: {
    title: 'よくある質問 — SlowRead',
    description: 'SlowReadについて知りたいことすべて——毎日の古典文学リーディングアプリ。',
    url: 'https://slowread.xyz/ja/faq',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

const faqs = [
  {
    q: 'SlowReadとは？',
    a: 'SlowReadは、毎日パブリックドメインの古典文学を一節ずつお届けするモバイル読書アプリです。AI読書パートナー、バイリンガル対訳、スマートスケジュール、読書ストリークを組み合わせ、深い読書を日常の習慣にします——速読でもなく、要約でもなく、あなたと一節の文章と静かな時間。',
  },
  {
    q: 'SlowReadは無料ですか？',
    a: 'はい！SlowReadは完全無料でダウンロード・利用できます。無料プランにはパブリックドメイン全書庫、読書ストリーク、パーソナライズされたスケジュール、毎日のリマインダー、月間読書レポート、そしてAI伴読（毎日5枚）とバイリンガル（最初の3ページ）のお試し体験が含まれます。Proプラン（月額$3.99）では無制限AI伴読、完全バイリンガル対訳、オフライン閲覧、ストリークフリーズ、年間読書レポートが解放されます。',
  },
  {
    q: 'どんな本がありますか？',
    a: 'SlowReadは世界中のパブリックドメインの古典を厳選して収録しています。「吾輩は猫である」「源氏物語」「武士道」から「高慢と偏見」「自省録」「紅楼夢」「道徳経」まで。西洋小説、中国古典、日本文学、哲学など幅広いジャンルをカバー。すべての書籍は著作権を確認し、丁寧にフォーマットされています。',
  },
  {
    q: 'AI読書パートナーはどう機能しますか？',
    a: 'AI読書パートナー（Pro機能）は、古典文学で挫折する二大理由「前の話を忘れた」「背景がわからない」を解決します。各節の後に、あらすじの振り返りで前の話を忘れないようにし、読み進めるごとに更新される人物関係図、文化的背景と文学的典故の解説を提供します。無料ユーザーは毎日5枚のAIカードをお試しいただけます。日本語、英語、中国語、フランス語に対応。',
  },
  {
    q: 'SlowReadは多言語に対応していますか？',
    a: 'はい！SlowReadはバイリンガル並列読書に対応しており、原文と翻訳を並べて古典を読めます。バイリンガルと原文のみを切り替えられます。無料ユーザーは各書籍の最初の3ページでバイリンガルモードをお試しいただけます。世界の主要言語に対応。文学愛好家にも語学学習者にも最適な読書体験を提供します。',
  },
  {
    q: '一冊読み終えるのにどのくらいかかりますか？',
    a: 'あなたのペース次第です。例えば「紅楼夢」（731,000字）は、1日2,800字（約7分）のペースで約262日かかります。SlowReadがすべての本にパーソナライズされた読書スケジュールを計算します。',
  },
  {
    q: '一日休んだらどうなりますか？',
    a: '何も問題ありません！ペナルティはありません。読書スケジュールは自動で再計算されます。本はあなたを待っています。Proメンバーは「ストリークフリーズ」（月2回まで）を使って、忙しい日もストリークを守れます。SlowReadはプレッシャーや罪悪感ではなく、ポジティブなモチベーションで一貫した読書を促すように設計されています。',
  },
  {
    q: 'パッセージはどう分割されますか？',
    a: 'SlowReadはAIを使って物語の自然な区切りを見つけます——章の切れ目、場面転換、テーマの転換点。文の途中で切ったり、字数で機械的に区切ることは一切ありません。毎日の一節が完結した、満足できる読書体験になるよう設計されています。',
  },
  {
    q: 'SlowReadはAndroidで使えますか？',
    a: 'はい。SlowReadはiOS（App Store）とAndroid（Google Play）の両方でご利用いただけます。',
  },
  {
    q: 'SlowReadと要約アプリの違いは？',
    a: 'Blinkistなどの要約アプリは本を15分のダイジェストに圧縮しますが、SlowReadは著者の原文をそのままお届けします——一字一句、著者が書いたまま——ただし毎日消化できる分量に分けて。著者本来の声、文体、物語を体験できます。要約版ではありません。',
  },
  {
    q: '1日に複数の節を読めますか？',
    a: 'はい、いつでも。「毎日一節」はSlowReadがおすすめするペースです——古典をじっくり味わえる速度でありながら、700節ある大作も確実に読み終えられるリズム。ただし、乗っているときに続けて読むことは何も止められません。無料プランもProプランも同じです。スケジュールは実際の進捗に応じて自動調整されます。',
  },
  {
    q: 'SlowReadに広告はありますか？',
    a: 'ありません。SlowReadには広告が一切なく、将来もありません。ポップアップ、バナー、スポンサーコンテンツ、ダークパターンは一切なし。パブリックドメインの本は永遠に無料です。読書体験は神聖で、邪魔のないものであるべきだと信じています。',
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

export default function JaFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="ja" />

      <main className="legal container">
        <h1>よくある質問</h1>
        <p className="faq-intro">
          SlowReadについて知りたいことすべて——毎日の古典文学リーディングアプリ。
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

      <Footer lang="ja" />
    </>
  );
}
