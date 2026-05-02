import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '刪除帳號與資料',
  description: '如何刪除您的 SlowRead 慢讀經典帳號及所有相關資料。',
  alternates: {
    canonical: 'https://slowread.xyz/zh/delete-account',
    languages: {
      en: 'https://slowread.xyz/delete-account',
      ja: 'https://slowread.xyz/ja/delete-account',
    },
  },
  openGraph: {
    title: '刪除帳號與資料 — SlowRead 慢讀經典',
    description: '如何刪除您的 SlowRead 帳號及所有相關資料。',
    url: 'https://slowread.xyz/zh/delete-account',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function ZhDeleteAccountPage() {
  return (
    <>
      <Header lang="zh" />

      <main className="legal container">
        <h1>刪除您的帳號與資料</h1>
        <p className="last-updated">最後更新：2026 年 5 月 3 日</p>

        <p>
          SlowRead 尊重您對個人資料的控制權。您可以隨時在 app 內刪除帳號及所有相關資料。
        </p>

        <h2>如何在 App 內刪除帳號</h2>
        <ol>
          <li>開啟您裝置上的 SlowRead app。</li>
          <li>
            前往 <strong>個人</strong>（Profile）分頁。
          </li>
          <li>
            點選 <strong>刪除帳號</strong>。
          </li>
          <li>依畫面指示確認刪除。</li>
        </ol>

        <h2>會被刪除的資料</h2>
        <p>刪除帳號後，以下資料將永久移除：</p>
        <ul>
          <li>個人檔案資訊（Email、顯示名稱、偏好設定）</li>
          <li>所有閱讀進度、書籤與閱讀歷史</li>
          <li>閱讀連續紀錄與統計資料</li>
          <li>AI 伴讀對話紀錄</li>
          <li>筆記、畫線與儲存的段落</li>
          <li>訂閱紀錄（依稅務或法規須保留的部分除外）</li>
        </ul>

        <h2>保留期限</h2>
        <p>
          大部分資料會立即刪除。加密備份會在 30 天內清除。依法須保留的紀錄（例如稅務交易紀錄）僅保留至法律規定的期限。
        </p>

        <h2>無法登入 App？</h2>
        <p>
          如果您無法登入 app 自行刪除，請使用您帳號所綁定的 Email 寄信至{' '}
          <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a>，我們將在 30 天內處理您的請求。
        </p>

        <h2>有其他問題？</h2>
        <p>
          關於資料刪除的更多說明，請參閱我們的{' '}
          <a href="/zh/privacy">隱私權政策</a>，或聯繫{' '}
          <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a>。
        </p>
      </main>

      <Footer lang="zh" />
    </>
  );
}
