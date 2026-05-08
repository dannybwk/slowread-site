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
        <p className="last-updated">最終更新日：2026年5月8日</p>

        <p>SlowRead（以下「当社」または「本アプリ」）は、お客様のプライバシーを保護することに尽力しています。本プライバシーポリシーでは、当社のモバイルアプリケーションをご利用いただく際に、お客様の情報をどのように収集、使用、保護するかについて説明します。</p>

        <h2>1. 収集する情報</h2>
        <p>当社は以下の種類の情報を収集します：</p>
        <ul>
          <li><strong>アカウント情報：</strong>アカウント作成時に、メールアドレスと表示名を収集します。Apple または Google でサインインされた場合、お客様がこれらのサービスを通じて共有を承認した情報のみを受け取ります。</li>
          <li><strong>読書データ：</strong>パーソナライズされた読書体験を提供するために、読書の進捗状況、ブックマーク、読書ストリーク、設定を保存します。</li>
          <li><strong>デバイス情報：</strong>トラブルシューティングやアプリの改善のために、基本的なデバイス情報（デバイスの種類、OSバージョン、アプリバージョン）を収集します。</li>
          <li><strong>購入情報：</strong>SlowRead Pro にご登録いただいた場合、Apple App Store、Google Play Store、および RevenueCat から購入、更新、解約のイベント通知を受け取ります。お客様のクレジットカード情報を受け取ったり保存することはありません&mdash;それらは Apple、Google、および基盤となる決済処理業者によって完全に処理されます。当社が保存するのは、サブスクリプションのステータス（active、expired、cancelled）、購入日、更新日のみで、これに基づいてアプリは適切なコンテンツ層を表示します。</li>
        </ul>

        <h2>2. 情報の利用目的</h2>
        <ul>
          <li>読書体験の提供とパーソナライズ</li>
          <li>読書ストリークと進捗状況の追跡・表示</li>
          <li>プッシュ通知の送信（毎日の読書リマインダー）※オプトインの場合のみ</li>
          <li>お客様のリクエストに応じて AI 読書補助コンテンツ（あらすじ、人物関係図、文化的背景）を生成</li>
          <li>サブスクリプションの処理および Pro 権限の複数デバイス間での同期</li>
          <li>アプリのクラッシュ診断と問題修正</li>
          <li>機能の使用状況を把握しアプリを改善</li>
        </ul>

        <h2>3. サードパーティサービス</h2>
        <p>当社は以下のサードパーティサービスを使用しています：</p>
        <ul>
          <li><strong>Supabase：</strong>クラウドデータベースおよび認証インフラストラクチャ。お客様のアカウント、読書の進捗状況、設定を保存します。</li>
          <li><strong>Apple サインイン / Google サインイン：</strong>認証プロバイダー。お客様がこれらのサービスを通じて共有することを選択した情報のみを受け取ります。</li>
          <li><strong>Anthropic（Claude）：</strong>AI 伴読コンテンツの生成。お客様が AI 読書補助（あらすじ、人物関係図、文化的背景）をリクエストされた際に、関連する文章テキストを Anthropic の API に送信します。お客様の名前、メールアドレス、読書履歴、アカウント識別子は送信しません&mdash;文章は匿名で送信され、不透明なキャッシュ識別子のみで紐付けられます。</li>
          <li><strong>RevenueCat：</strong>サブスクリプションおよびアプリ内購入の管理。匿名のユーザー識別子と購入イベントを受け取り、お客様の Pro 権限を複数のデバイス間で同期します。お客様のメールアドレスや表示名は受け取りません。</li>
          <li><strong>Sentry：</strong>エラートラッキング。問題が発生した際に修正できるよう、匿名のクラッシュレポート、エラースタックトレース、デバイスメタデータ（モデル、OSバージョン、アプリバージョン）を収集します。デフォルトで個人情報を収集することはありません。</li>
          <li><strong>PostHog：</strong>匿名の使用状況分析。匿名のインストール ID をキーとして機能の使用イベントを収集します&mdash;メールアドレスも表示名も含みません。どの画面が人気で、どこでユーザーが詰まっているかを把握するために使用します。</li>
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
