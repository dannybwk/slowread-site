import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '支援',
  description: 'SlowRead 慢讀經典支援中心。如有任何問題或建議，歡迎聯繫我們。',
  alternates: {
    canonical: 'https://slowread.xyz/zh/support',
    languages: { en: 'https://slowread.xyz/support', ja: 'https://slowread.xyz/ja/support' },
  },
  openGraph: {
    title: '支援 — SlowRead 慢讀經典',
    description: '如有任何問題或建議，歡迎聯繫我們。',
    url: 'https://slowread.xyz/zh/support',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function ZhSupportPage() {
  return (
    <>
      <Header lang="zh" />

      <main className="legal container">
        <h1>支援</h1>

        <h2>聯繫我們</h2>
        <p>如果您有任何問題、建議或需要協助，歡迎透過以下方式聯繫我們：</p>
        <p><a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a></p>
        <p>我們通常會在 1-2 個工作天內回覆。</p>

        <h2>常見問題</h2>

        <h3>SlowRead 是怎麼運作的？</h3>
        <p>SlowRead 每天為您推送一段經典文學段落。按照自己的節奏閱讀，累積閱讀連續紀錄，逐步讀完整部經典名著。</p>

        <h3>如何更換正在閱讀的書？</h3>
        <p>前往「書庫」分頁瀏覽所有可用書籍，點選任何一本即可開始閱讀。您可以隨時切換書籍。</p>

        <h3>什麼是雙語對照模式？</h3>
        <p>雙語對照模式會同時顯示原文與譯文，讓您可以並排閱讀兩種語言的版本。</p>

        <h3>閱讀連續紀錄如何運作？</h3>
        <p>完成每日閱讀即可維持連續紀錄。每連續閱讀一天，紀錄就會增加一天。如果漏讀一天，紀錄將歸零。</p>

        <h3>如何刪除帳號？</h3>
        <p>如需刪除帳號及所有相關資料，請發送郵件至 <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a>，我們將在 30 天內處理您的請求。</p>

        <h3>SlowRead 是免費的嗎？</h3>
        <p>SlowRead 提供免費版本，包含每日閱讀功能。升級為 SlowRead Pro 可解鎖 AI 伴讀、無限書籤等更多功能。</p>
      </main>

      <Footer lang="zh" />
    </>
  );
}
