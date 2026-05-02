import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'アカウントとデータの削除',
  description: 'SlowRead アカウントと関連するすべてのデータを削除する方法。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/delete-account',
    languages: {
      en: 'https://slowread.xyz/delete-account',
      'zh-Hant': 'https://slowread.xyz/zh/delete-account',
    },
  },
  openGraph: {
    title: 'アカウントとデータの削除 — SlowRead',
    description: 'SlowRead アカウントと関連するすべてのデータを削除する方法。',
    url: 'https://slowread.xyz/ja/delete-account',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function JaDeleteAccountPage() {
  return (
    <>
      <Header lang="ja" />

      <main className="legal container">
        <h1>アカウントとデータの削除</h1>
        <p className="last-updated">最終更新日：2026年5月3日</p>

        <p>
          SlowRead はお客様のデータをコントロールする権利を尊重します。アプリ内からいつでもアカウントと関連するすべてのデータを削除できます。
        </p>

        <h2>アプリ内でアカウントを削除する方法</h2>
        <ol>
          <li>お使いのデバイスで SlowRead アプリを開きます。</li>
          <li>
            <strong>プロフィール</strong>タブに移動します。
          </li>
          <li>
            <strong>アカウントを削除</strong>をタップします。
          </li>
          <li>表示される確認画面で削除を確定します。</li>
        </ol>

        <h2>削除されるデータ</h2>
        <p>アカウントを削除すると、以下のデータは完全に削除されます：</p>
        <ul>
          <li>プロフィール情報（メールアドレス、表示名、設定）</li>
          <li>読書進捗、ブックマーク、読書履歴</li>
          <li>読書ストリークと統計</li>
          <li>AI 読書パートナーの会話履歴</li>
          <li>メモ、ハイライト、保存した一節</li>
          <li>サブスクリプション記録（税務または法令上保持が必要なものを除く）</li>
        </ul>

        <h2>保持期間</h2>
        <p>
          ほとんどのデータは直ちに削除されます。暗号化されたバックアップは 30 日以内に消去されます。法令により保持が義務付けられている記録（税務上の取引記録など）は、法定期間のみ保持されます。
        </p>

        <h2>アプリにアクセスできない場合</h2>
        <p>
          アプリにアクセスできない場合は、お客様のアカウントに登録されているメールアドレスから{' '}
          <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a> までご連絡ください。30 日以内にご請求を処理いたします。
        </p>

        <h2>お問い合わせ</h2>
        <p>
          データ削除についてのご質問は、{' '}
          <a href="/ja/privacy">プライバシーポリシー</a> をご覧いただくか、{' '}
          <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a> までご連絡ください。
        </p>
      </main>

      <Footer lang="ja" />
    </>
  );
}
