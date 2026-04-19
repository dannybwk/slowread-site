import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '常見問題 FAQ',
  description:
    'SlowRead 慢讀經典常見問題：如何使用、收費方式、支援語言、AI 伴讀助手等完整解答。',
  alternates: {
    canonical: 'https://slowread.xyz/zh/faq',
    languages: { en: 'https://slowread.xyz/faq', ja: 'https://slowread.xyz/ja/faq' },
  },
  openGraph: {
    title: '常見問題 — SlowRead 慢讀經典',
    description: '關於 SlowRead 慢讀經典的一切——每日經典文學閱讀 App。',
    url: 'https://slowread.xyz/zh/faq',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

const faqs = [
  {
    q: '什麼是 SlowRead 慢讀經典？',
    a: 'SlowRead 慢讀經典是一款行動閱讀 App，每天推送一段公版經典文學選讀。結合 AI 伴讀助手、雙語對照閱讀、智慧排程與閱讀連續紀錄，讓深度閱讀成為你的日常——不是速讀，不是摘要，只有你、一段文字，和思考的空間。',
  },
  {
    q: 'SlowRead 是免費的嗎？',
    a: '是的！SlowRead 完全免費下載使用。免費版包含每日一段閱讀、完整公版書庫、閱讀連續紀錄、個人化排程和每日提醒。Pro 進階版（每月 $3.99）解鎖無限閱讀、AI 伴讀助手、雙語對照閱讀、離線閱讀等功能。',
  },
  {
    q: 'SlowRead 有哪些書？',
    a: 'SlowRead 提供來自世界各地的公版經典文學——從《紅樓夢》、《道德經》、《西遊記》到《傲慢與偏見》、《沉思錄》、《乞力馬扎羅的雪》。涵蓋中國古典、西方小說、日本文學、哲學等類型。每本書都經過人工版權確認與精心排版。',
  },
  {
    q: 'AI 伴讀助手怎麼運作？',
    a: 'AI 伴讀（Pro 功能）解決讀經典最常放棄的兩大原因：「忘記前面演什麼了」和「看不懂這裡在說什麼」。每段閱讀後，它會提供前情提要讓你不遺失劇情、隨閱讀進度更新的人物關係圖、文化背景與文學典故解析。免費用戶每天可體驗 2 張 AI 卡片。支援繁中、英文、日文、法文回應。',
  },
  {
    q: 'SlowRead 支援多語言嗎？',
    a: '支援！SlowRead 提供雙語並排閱讀功能，可以用原文搭配翻譯閱讀經典，或切換為僅原文模式。免費用戶可在每本書的前 3 頁體驗雙語模式。支援全球主要語系。無論你是文學愛好者還是語言學習者，都能找到最適合的閱讀方式。',
  },
  {
    q: '一本書要讀多久？',
    a: '取決於你的閱讀節奏。例如《紅樓夢》全書 731,000 字，以每天 2,800 字（約 7 分鐘）的速度，大約 262 天可以讀完。SlowRead 會為每本書計算個人化閱讀排程。',
  },
  {
    q: '中斷一天會怎樣？',
    a: '完全沒有懲罰！你的閱讀排程會自動重新計算。書會等你。Pro 會員還能使用「連續凍結」（每月 2 次），忙碌時也能守住連續紀錄。SlowRead 的設計理念是透過正向動力鼓勵持續閱讀，而不是製造壓力或罪惡感。',
  },
  {
    q: '段落是怎麼切分的？',
    a: 'SlowRead 用 AI 找到故事的自然停頓處——章節分界、場景轉換、主題轉折。絕對不會在句子中間斷開或在字數湊滿時切割。每段日常閱讀都是完整的、令人滿足的閱讀體驗。',
  },
  {
    q: 'SlowRead 有 Android 版嗎？',
    a: 'SlowRead 目前在 iOS App Store 上架。Android 版本正在規劃中。你可以訪問 slowread.xyz 獲取最新消息。',
  },
  {
    q: 'SlowRead 跟書摘 App 有什麼不同？',
    a: '不同於 Blinkist 等書摘 App 把整本書濃縮成 15 分鐘摘要，SlowRead 呈現的是作者的原文——每一個字都是作者親筆所寫——只是分成每日可消化的份量。你體驗的是作者原汁原味的聲音、風格和敘事，不是改寫過的版本。',
  },
  {
    q: '一天可以讀超過一段嗎？',
    a: '免費版每天一段閱讀。Pro 進階版可以無限閱讀——想繼續看就繼續看，不受限制。你的排程會自動根據實際進度調整。',
  },
  {
    q: 'SlowRead 有廣告嗎？',
    a: '沒有。SlowRead 沒有廣告，永遠不會有。沒有彈出視窗、沒有橫幅廣告、沒有贊助內容、沒有黑暗模式。公版書永遠免費。我們相信閱讀體驗應該是神聖且不受干擾的。',
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

export default function ZhFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="zh" />

      <main className="legal container">
        <h1>常見問題</h1>
        <p className="faq-intro">
          關於 SlowRead 慢讀經典的一切——每日經典文學閱讀 App。
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

      <Footer lang="zh" />
    </>
  );
}
