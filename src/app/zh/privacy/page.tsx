import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '隱私權政策',
  description: 'SlowRead 慢讀經典隱私權政策，了解我們如何蒐集、使用及保護您的資料。',
  alternates: {
    canonical: 'https://slowread.xyz/zh/privacy',
    languages: { en: 'https://slowread.xyz/privacy', ja: 'https://slowread.xyz/ja/privacy' },
  },
  openGraph: {
    title: '隱私權政策 — SlowRead 慢讀經典',
    description: '了解 SlowRead 慢讀經典如何蒐集、使用及保護您的資料。',
    url: 'https://slowread.xyz/zh/privacy',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function ZhPrivacyPage() {
  return (
    <>
      <Header lang="zh" />

      <main className="legal container">
        <h1>隱私權政策</h1>
        <p className="last-updated">最後更新：2026 年 5 月 8 日</p>

        <p>SlowRead 慢讀經典（以下簡稱「我們」或「本 App」）致力於保護您的隱私。本隱私權政策說明我們在您使用本行動應用程式時，如何蒐集、使用及保護您的資訊。</p>

        <h2>1. 我們蒐集的資訊</h2>
        <p>我們蒐集以下類型的資訊：</p>
        <ul>
          <li><strong>帳號資訊：</strong>當您建立帳號時，我們會蒐集您的電子郵件地址及顯示名稱。若您透過 Apple 或 Google 登入，我們僅接收您授權這些服務分享的資訊。</li>
          <li><strong>閱讀資料：</strong>我們會儲存您的閱讀進度、書籤、閱讀連續紀錄及偏好設定，以提供個人化的閱讀體驗。</li>
          <li><strong>裝置資訊：</strong>我們蒐集基本裝置資訊（裝置類型、作業系統版本、App 版本），用於問題排解及改善 App。</li>
          <li><strong>購買資訊：</strong>當您訂閱 SlowRead Pro 時，我們會從 Apple App Store、Google Play Store 及 RevenueCat 收到您的購買、續訂與取消訂閱事件通知。我們不會收到或儲存您的信用卡資訊&mdash;那由 Apple、Google 及底層金流服務商完整處理。我們僅儲存訂閱狀態（active、expired、cancelled）、購買日期與續訂日期，以便 App 顯示對應的內容權限。</li>
        </ul>

        <h2>2. 資訊使用目的</h2>
        <ul>
          <li>提供並個人化您的閱讀體驗</li>
          <li>追蹤並顯示您的閱讀連續紀錄及進度</li>
          <li>發送推播通知（每日閱讀提醒），需經您同意</li>
          <li>當您主動請求時，生成 AI 閱讀輔助內容（劇情回顧、人物關係圖、文化典故）</li>
          <li>處理訂閱並讓您的 Pro 權限跨裝置同步</li>
          <li>診斷 App 當機並修復問題</li>
          <li>了解使用者實際使用情況以改善 App</li>
        </ul>

        <h2>3. 第三方服務</h2>
        <p>我們使用以下第三方服務：</p>
        <ul>
          <li><strong>Supabase：</strong>雲端資料庫及身份驗證基礎設施。儲存您的帳號、閱讀進度與偏好設定。</li>
          <li><strong>Apple 登入 / Google 登入：</strong>身份驗證提供者。我們僅接收您選擇透過這些服務分享的資訊。</li>
          <li><strong>Anthropic（Claude）：</strong>AI 伴讀內容生成。當您主動請求 AI 閱讀輔助（劇情回顧、人物關係圖、文化典故）時，我們會將相關段落文字傳給 Anthropic 的 API。我們不會傳送您的姓名、電子郵件、閱讀紀錄或任何帳號識別資訊&mdash;段落是匿名傳送的，僅以一個不透明的 cache 識別碼為 key。</li>
          <li><strong>RevenueCat：</strong>訂閱與 App 內購買管理。會收到一個匿名使用者識別碼及購買事件，以便讓您的 Pro 權限跨裝置同步。不會收到您的電子郵件或顯示名稱。</li>
          <li><strong>Sentry：</strong>錯誤追蹤。當 App 發生錯誤時，蒐集匿名的當機報告、錯誤堆疊與裝置 metadata（型號、OS 版本、App 版本）以便修復。預設情況下不會蒐集個人資訊。</li>
          <li><strong>PostHog：</strong>匿名使用統計。以匿名安裝 ID 為 key 蒐集功能使用事件&mdash;不含電子郵件、不含顯示名稱。我們用它了解哪些畫面受歡迎、使用者卡在哪裡。</li>
          <li><strong>Expo / React Native：</strong>App 框架。Expo 可能蒐集匿名的當機報告及診斷資料。</li>
        </ul>

        <h2>4. 資料保留與刪除</h2>
        <p>我們在您的帳號有效期間保留您的資料。您可以隨時透過 <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a> 聯絡我們，要求刪除您的帳號及所有相關資料。我們將在 30 日內處理刪除請求。</p>

        <h2>5. 資料安全</h2>
        <p>我們採用業界標準的安全措施來保護您的資料，包括傳輸中加密（TLS）及靜態加密。然而，沒有任何電子儲存方式能保證 100% 安全。</p>

        <h2>6. 兒童隱私</h2>
        <p>本 App 並非針對 13 歲以下兒童。我們不會故意蒐集 13 歲以下兒童的個人資訊。</p>

        <h2>7. 政策變更</h2>
        <p>我們可能不定期更新本隱私權政策。若有重大變更，我們將透過 App 內公告或本頁面通知您。</p>

        <h2>8. 聯絡我們</h2>
        <p>如您對本隱私權政策或您的資料有任何問題，請透過以下方式聯絡我們：</p>
        <p><a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a></p>
      </main>

      <Footer lang="zh" />
    </>
  );
}
