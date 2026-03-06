import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'SlowRead のプライバシーポリシー。お客様の情報の収集、使用、保護について説明します。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/privacy',
    languages: {
      en: 'https://slowread.xyz/privacy',
      'zh-Hant': 'https://slowread.xyz/zh/privacy',
    },
  },
  openGraph: {
    title: 'プライバシーポリシー — SlowRead',
    description: 'SlowRead がお客様の情報をどのように収集、使用、保護するかをご確認ください。',
    url: 'https://slowread.xyz/ja/privacy',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function JaPrivacyPage() {
  return (
    <>
      <Header lang="ja" />

      <main className="legal container">
        <h1>プライバシーポリシー</h1>
        <p className="last-updated">最終更新日：2026年2月10日</p>

        <p>SlowRead（以下「当社」または「本アプリ」）は、お客様のプライバシーを保護することに尽力しています。本プライバシーポリシーでは、当社のモバイルアプリケーションをご利用いただく際に、お客様の情報をどのように収集、使用、保護するかについて説明します。</p>

        <h2>1. 収集する情報</h2>
        <p>当社は以下の種類の情報を収集します：</p>
        <ul>
          <li><strong>アカウント情報：</strong>アカウント作成時に、メールアドレスと表示名を収集します。Apple または Google でサインインされた場合、お客様がこれらのサービスを通じて共有を承認した情報のみを受け取ります。</li>
          <li><strong>読書データ：</strong>パーソナライズされた読書体験を提供するために、読書の進捗状況、ブックマーク、読書ストリーク、設定を保存します。</li>
          <li><strong>デバイス情報：</strong>トラブルシューティングやアプリの改善のために、基本的なデバイス情報（デバイスの種類、OSバージョン、アプリバージョン）を収集します。</li>
        </ul>

        <h2>2. 情報の利用目的</h2>
        <ul>
          <li>読書体験の提供とパーソナライズ</li>
          <li>読書ストリークと進捗状況の追跡・表示</li>
          <li>プッシュ通知の送信（毎日の読書リマインダー）※オプトインの場合のみ</li>
          <li>アプリの改善と問題の修正</li>
        </ul>

        <h2>3. サードパーティサービス</h2>
        <p>当社は以下のサードパーティサービスを使用しています：</p>
        <ul>
          <li><strong>Supabase：</strong>クラウドデータベースおよび認証インフラストラクチャ。お客様のデータは Supabase のサーバーに安全に保存されます。</li>
          <li><strong>Apple サインイン / Google サインイン：</strong>認証プロバイダー。お客様がこれらのサービスを通じて共有することを選択した情報のみを受け取ります。</li>
          <li><strong>Expo / React Native：</strong>アプリフレームワーク。Expo は匿名のクラッシュレポートと診断データを収集する場合があります。</li>
        </ul>

        <h2>4. データの保持と削除</h2>
        <p>お客様のアカウントが有効な間、データを保持します。<a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a> にご連絡いただくことで、いつでもアカウントおよび関連するすべてのデータの削除をリクエストできます。削除リクエストは30日以内に処理いたします。</p>

        <h2>5. データのセキュリティ</h2>
        <p>当社は、転送中の暗号化（TLS）および保存時の暗号化を含む、業界標準のセキュリティ対策を実施してお客様のデータを保護しています。ただし、電子的な保存方法で100%安全なものはありません。</p>

        <h2>6. 児童のプライバシー</h2>
        <p>本アプリは13歳未満の児童を対象としていません。当社は13歳未満の児童から故意に個人情報を収集することはありません。</p>

        <h2>7. ポリシーの変更</h2>
        <p>本プライバシーポリシーは随時更新される場合があります。重要な変更がある場合は、アプリ内または本ページにてお知らせいたします。</p>

        <h2>8. お問い合わせ</h2>
        <p>本プライバシーポリシーまたはお客様のデータに関するご質問がございましたら、以下までご連絡ください：</p>
        <p><a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a></p>
      </main>

      <Footer lang="ja" />
    </>
  );
}
