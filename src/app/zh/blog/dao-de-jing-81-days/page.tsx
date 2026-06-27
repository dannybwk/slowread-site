import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '讀《道德經》：一天一章，81 天讀完老子',
  description:
    '《道德經》只有五千字、八十一章，是全世界最容易讀壞的一本書。每天一章、81 天讀完。為什麼快讀會把它讀扁、那些被引爛卻被誤解的句子，以及一份誠實可執行的慢讀計畫。',
  alternates: {
    canonical: 'https://slowread.xyz/zh/blog/dao-de-jing-81-days',
    languages: {
      en: 'https://slowread.xyz/blog/how-to-read-tao-te-ching',
      ja: 'https://slowread.xyz/ja/blog/roshi-tao-te-ching',
    },
  },
  openGraph: {
    title: '讀《道德經》：一天一章，81 天讀完老子',
    description:
      '每天一章、81 天讀完《道德經》。為什麼快讀會把老子讀扁，以及那些被引爛卻被誤解的句子。',
    url: 'https://slowread.xyz/zh/blog/dao-de-jing-81-days',
    type: 'article',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-06-27T00:00:00Z',
    authors: ['SlowRead'],
    tags: ['道德經', '老子', '道家', '古典', '閱讀計畫', '慢讀'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '讀《道德經》：一天一章，81 天讀完老子',
    description: '每天一章、81 天讀完《道德經》全本八十一章。',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '讀《道德經》：一天一章，81 天讀完老子',
  description:
    '《道德經》只有五千字、八十一章，是全世界最容易讀壞的一本書。每天一章、81 天讀完。',
  image: 'https://slowread.xyz/images/og-image.png',
  datePublished: '2026-06-27T00:00:00Z',
  dateModified: '2026-06-27T00:00:00Z',
  author: {
    '@type': 'Organization',
    name: 'SlowRead 慢讀經典',
    url: 'https://slowread.xyz',
  },
  publisher: {
    '@type': 'Organization',
    name: 'SlowRead 慢讀經典',
    logo: {
      '@type': 'ImageObject',
      url: 'https://slowread.xyz/images/slowread-logo.png',
    },
  },
  mainEntityOfPage: 'https://slowread.xyz/zh/blog/dao-de-jing-81-days',
  inLanguage: 'zh-Hant',
  about: {
    '@type': 'Book',
    name: '道德經',
    author: { '@type': 'Person', name: '老子' },
  },
};

export default function DaoDeJingArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="zh" />

      <main className="post container">
        <header className="post-header">
          <div className="post-meta">
            <span>道德經</span>
            <span className="post-meta-dot" />
            <span>老子</span>
            <span className="post-meta-dot" />
            <span>8 分鐘閱讀</span>
          </div>
          <h1>讀《道德經》：一天一章，81 天讀完老子</h1>
          <p className="post-subtitle">
            全世界最短的偉大著作，也是最容易被讀壞的一本。
          </p>
        </header>

        <article className="post-body">
          <p>《道德經》一個小時就能讀完。這正是它的陷阱。</p>
          <p>
            老子全書約五千字、八十一章，有些章只有兩三行。跟動輒幾十萬字的小說比起來，它薄得像一本小冊子。於是大家坐下來，一個下午從頭翻到尾，闔上書，覺得自己懂了一點關於「水」和「無為」的東方智慧。每個字都看過了，但一個字也沒真正遇見。
          </p>
          <p>
            《道德經》是人類寫過最耐讀的書，正因為它拒絕「被讀完」。每一章都像丟進靜水裡的一顆石頭。八十一顆一次全丟下去，只會聽見雜音；一天丟一顆、看著漣漪散開，你才會讀到那本書。
          </p>

          <h2>為什麼《道德經》不適合快讀</h2>
          <p>開篇第一句就把規則講明了：</p>
          <blockquote>
            <p>「道可道，非常道；名可名，非常名。」</p>
            <cite>——《道德經》第一章</cite>
          </blockquote>
          <p>
            快讀過去，這像一句繞口令或籤詩。慢讀下來，它其實是貼在門上的警告：<em>裡面的東西，你一抓它就不在了。</em>整本書是用悖論搭起來的——柔弱勝剛強、虛而能用、聖人「為無為」。悖論沒辦法用速度通過。悖論是一種你得待在裡面、直到它不再像矛盾、開始像在描述世界真實運作方式的東西。
          </p>
          <p>
            把悖論快讀過去，只會把它壓扁成口號：「少即是多」「順其自然」。這就是大部分人一個小時讀完後帶走的東西，而它幾乎是老子本意的反面。
          </p>

          <h2>數學：81 天的由來</h2>
          <p>這本書自己幫你分好了——八十一章，一天一章。</p>
          <div className="math-callout">
            <div className="math-line">81 章 &divide; 1 章／天</div>
            <div className="math-result">&asymp; 81 天</div>
          </div>
          <p>
            一章兩三分鐘讀完，剩下一整天慢慢消化。這就是它的設計。你不是在趕進度——81 天不到三個月，比你過去「一直想讀但沒讀」累積的時間還短。你是在讓一個念頭跟著你走一整天。
          </p>
          <p>八十一章是這樣分的：</p>
          <ul>
            <li>
              <strong>第 1&ndash;37 章——〈道經〉。</strong>
              前半主要講「東西的本性」：道本身、虛、水、樸（未經雕琢的木頭）。第一天讀起來很抽象，到第三十天會莫名地實用。
            </li>
            <li>
              <strong>第 38&ndash;81 章——〈德經〉。</strong>
              後半轉向人——尤其是統治者——該怎麼做。著名的政治句子都在這裡：「治大國若烹小鮮。」
            </li>
          </ul>
          <p>
            你不一定要照這個分界讀，多數現代讀者根本沒注意到它。但知道全書走到一半會轉個彎，會在覺得「怎麼一直重複」的日子幫上忙——那重複是螺旋，不是圓圈。
          </p>

          <h2>三句被引爛、卻被讀錯的話</h2>
          <p>
            <strong>「千里之行，始於足下。」</strong>
          </p>
          <p>
            全書最常被引用的一句，也最常被做成勵志海報。但完整那一段（第六十四章）冷得多、也奇怪得多：它前後講的是「禍患在還沒發生前最好處理」「合抱之木生於毫末」。這不是一句鼓勵你追逐大目標的雞湯，而是在講——在小事變大之前先照顧它。
          </p>
          <blockquote>
            <p>「上善若水。水善利萬物而不爭，處眾人之所惡，故幾於道。」</p>
            <cite>——《道德經》第八章</cite>
          </blockquote>
          <p>
            快讀，這是個漂亮的自然比喻；慢讀，它是一整套處世哲學：對萬物有用、不去爭、安住在別人都嫌棄的低處。多少人花幾十年都做不到這一章描述的事。你不該在第八天就「懂」它——你該在第八百天突然想起它。
          </p>
          <p>
            <strong>「知人者智，自知者明。」</strong>
          </p>
          <p>
            第三十三章。乍看只是一句工整的格言，直到你發現老子一直在做同一件事——安靜地、一次又一次地把「向內的掌握」排在「向外的掌握」之上。等八十一天裡你第十次遇到這個手法，它就不再是一句引言，而變成一副看世界的鏡片。
          </p>

          <h2>四個真的有用的讀法</h2>
          <ol>
            <li>
              <strong>只讀這一章，不讀下一章。</strong>
              這份功課的重點是「停下來」。一章只有三行時，「再多讀幾章」的衝動非常強。忍住。短章之後的那片空白，本身就是這一章的一部分。
            </li>
            <li>
              <strong>出聲讀一遍。</strong>
              《道德經》本來就介於詩與咒語之間，很多章在原文是押韻的。就算讀白話，那個節奏也帶著眼睛會滑過去的意思。你的耳朵比眼睛慢——而這正是重點。
            </li>
            <li>
              <strong>不要去查它「是什麼意思」。</strong>
              每一句都有汗牛充棟的註解，留給第二遍。第一次讀，就讓一章是困惑的。你願意待著的困惑會變成理解；你一搜尋的困惑，會變成別人的意見。
            </li>
            <li>
              <strong>對照兩種版本——但要等讀完之後。</strong>
              原文太精簡，沒有任何兩個白話／外文譯本會完全一致。等你跟一個版本相處過八十一天，再讀第二個版本，就像從另一個山谷看同一座山。別從這裡開始，這要靠前面掙來。
            </li>
          </ol>

          <h2>81 天之後</h2>
          <p>
            沒有什麼事會大聲宣告自己。你讀到第八十一章——「信言不美，美言不信」——書就這樣結束了，像它開始時一樣，沒有儀式。沒有情節要收，沒有最後的揭曉。
          </p>
          <p>
            但那些章節不會離開。你會在一場毫無意義的爭執裡聽見<em>「柔弱勝剛強」</em>；你會把行程塞太滿，然後想起一個杯子之所以有用，是因為它中間那塊「空」。這本書不給你信念，它給你八十一件小小的器具，讓你能在「正在硬逼一件本該放手的事」的當下，察覺到自己。
          </p>
          <p>
            這就是《道德經》一直以來唯一會為你做的事。而五千字，做這件事綽綽有餘。
          </p>

          <div className="post-footer">
            <h3>每天一章《道德經》</h3>
            <p>
              SlowRead 每天早上送你一章，然後就停下來。AI 伴讀會默默補上老子預設你早就知道的先秦語境——但不會把這本書變成功課。免費開始。
            </p>
            <div className="store-buttons">
              <a
                href="https://apps.apple.com/app/id6759947443"
                className="store-btn"
              >
                在 App Store 下載
              </a>
            </div>
          </div>

          <div className="related-posts">
            <h3>延伸閱讀</h3>
            <div className="blog-list">
              <a href="/zh/blog/hong-lou-meng-262-days" className="blog-card">
                <div className="blog-card-meta">
                  <span>紅樓夢</span>
                  <span className="post-meta-dot" />
                  <span>9 分鐘閱讀</span>
                </div>
                <h2 className="blog-card-title">
                  讀完《紅樓夢》需要多久？一份 262 天的慢讀計畫
                </h2>
                <p className="blog-card-excerpt">
                  另一本不能快讀的中國經典——每天 7 分鐘，262
                  天讀完全本一百二十回，而且真的記得發生了什麼。
                </p>
              </a>
            </div>
          </div>

          <a href="/zh/blog" className="post-back">
            &larr; 回到慢讀筆記
          </a>
        </article>
      </main>

      <Footer lang="zh" />
    </>
  );
}
