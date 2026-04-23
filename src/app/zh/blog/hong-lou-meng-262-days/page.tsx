import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '讀完《紅樓夢》需要多久？一份 262 天的慢讀計畫',
  description:
    '《紅樓夢》全本 120 回、約 73 萬字。每天 7 分鐘、每天 2,800 字，262 天讀完。給第一次想認真讀紅樓夢的讀者一份誠實、具體、可執行的慢讀計畫。',
  alternates: {
    canonical: 'https://slowread.xyz/zh/blog/hong-lou-meng-262-days',
  },
  openGraph: {
    title: '讀完《紅樓夢》需要多久？一份 262 天的慢讀計畫',
    description:
      '每天 7 分鐘、每天 2,800 字，262 天讀完《紅樓夢》全本 120 回。誠實、具體、可執行的慢讀計畫。',
    url: 'https://slowread.xyz/zh/blog/hong-lou-meng-262-days',
    type: 'article',
    locale: 'zh_TW',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-04-23T00:00:00Z',
    authors: ['SlowRead'],
    tags: ['紅樓夢', '曹雪芹', '古典文學', '閱讀計畫', '慢讀'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '讀完《紅樓夢》需要多久？一份 262 天的慢讀計畫',
    description: '每天 7 分鐘、每天 2,800 字，262 天讀完紅樓夢全本 120 回。',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '讀完《紅樓夢》需要多久？一份 262 天的慢讀計畫',
  description:
    '《紅樓夢》全本 120 回、約 73 萬字。每天 7 分鐘、每天 2,800 字，262 天讀完。',
  image: 'https://slowread.xyz/images/og-image.png',
  datePublished: '2026-04-23T00:00:00Z',
  dateModified: '2026-04-23T00:00:00Z',
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
  mainEntityOfPage: 'https://slowread.xyz/zh/blog/hong-lou-meng-262-days',
  inLanguage: 'zh-Hant',
  about: {
    '@type': 'Book',
    name: '紅樓夢',
    author: { '@type': 'Person', name: '曹雪芹' },
  },
};

export default function HongLouMengArticle() {
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
            <span>紅樓夢</span>
            <span className="post-meta-dot" />
            <span>曹雪芹</span>
            <span className="post-meta-dot" />
            <span>9 分鐘閱讀</span>
          </div>
          <h1>讀完《紅樓夢》需要多久？一份 262 天的慢讀計畫</h1>
          <p className="post-subtitle">
            每天 7 分鐘。每天 2,800 字。一本書讀完的那個秋天，你會是另外一個人。
          </p>
        </header>

        <article className="post-body">
          <p>大部分人第一次翻開《紅樓夢》都撐不過第五回。</p>
          <p>
            原因很簡單：前五回是曹雪芹為了建立世界觀而寫的「設定章節」——女媧補天、通靈寶玉、警幻仙姑、太虛幻境、金陵十二釵判詞。一口氣讀下去，會被漢賦式的引文和密集的人名埋起來。第五回結束，讀者已經陣亡一半。
          </p>
          <p>
            但真正的《紅樓夢》從第六回「賈寶玉初試雲雨情，劉姥姥一進榮國府」才開始。這個斷點，是全書最殘酷的地方：熬過前五回的人才配讀下去，但前五回本身根本不是故事。
          </p>
          <p>
            這篇文章要告訴你：怎麼用每天 7 分鐘，在 262 天內讀完《紅樓夢》全本 120
            回，而且真的記得發生了什麼。
          </p>

          <h2>為什麼《紅樓夢》不適合快讀</h2>
          <p>
            曹雪芹花了十年寫前八十回，「披閱十載，增刪五次」。這句話不是客套。《紅樓夢》的文字密度比任何現代小說都高——一句對白可能同時在做三件事：刻畫性格、暗示未來、埋伏筆。
          </p>
          <p>
            舉一個最常被忽略的例子。第三回，黛玉初進賈府，王熙鳳還沒見到人就聽見笑聲：
          </p>
          <blockquote>
            <p>
              「一語未了，只聽後院中有人笑聲，說：『我來遲了，不曾迎接遠客！』」
            </p>
            <cite>——《紅樓夢》第三回</cite>
          </blockquote>
          <p>
            十三個字。「我來遲了」——定下王熙鳳一輩子「先聲奪人」的做派；「不曾迎接遠客」——這個「遠」字暗示她已經知道黛玉的身份、出身、地位。這是《紅樓夢》最基本的寫法：每一個字都在做事。
          </p>
          <p>
            你用快讀的速度滑過這一段，什麼都不會發生。你用慢讀的速度停三十秒，王熙鳳這個角色就進入了你的記憶，而且一輩子不會離開。
          </p>
          <p>這就是為什麼《紅樓夢》要慢讀。</p>

          <h2>數學：262 天的由來</h2>
          <p>
            《紅樓夢》全本 120 回，總字數約 731,017 字（以庚辰本加程乙本續四十回為準）。
          </p>
          <div className="math-callout">
            <div className="math-line">731,017 字 &divide; 2,800 字／天</div>
            <div className="math-result">&asymp; 262 天</div>
          </div>
          <p>
            每天 2,800 字相當於一頁半現代小說，閱讀時間大約 7 分鐘。這個速度快到不會累，慢到你真的能讀進去每個字。
          </p>
          <p>
            262 天 &asymp; 8 個半月。如果你今天開始，十月多就能讀完。這比你過去十年想讀《紅樓夢》所累積的時間短多了。
          </p>

          <h2>怎麼拆：全書的五段結構</h2>
          <p>
            《紅樓夢》不是線性小說。慢讀前先知道五個階段，你會知道自己在哪裡：
          </p>
          <ul>
            <li>
              <strong>第 1&ndash;5 回（Day 1&ndash;15）</strong>
              ：設定章節。讀起來最辛苦。忍住不要跳。其中第五回的「金陵十二釵判詞」是全書的劇透——你現在讀不懂正常，等後面角色出現再回來對照，是《紅樓夢》獨有的樂趣。
            </li>
            <li>
              <strong>第 6&ndash;39 回（Day 16&ndash;100）</strong>
              ：大觀園建立、劉姥姥、秦可卿之死、元春省親、寶玉挨打。這一段是全書節奏最舒服的部分，人物一個接一個登場，你會不知不覺上癮。
            </li>
            <li>
              <strong>第 40&ndash;80 回（Day 101&ndash;180）</strong>
              ：曹雪芹原本結尾前夜。黛玉寄人籬下的孤獨、晴雯之死、抄檢大觀園——力道最強的一段在這裡。
            </li>
            <li>
              <strong>第 81&ndash;100 回（Day 181&ndash;220）</strong>
              ：高鶚續書開始。文風有落差，但故事還在走。
            </li>
            <li>
              <strong>第 101&ndash;120 回（Day 221&ndash;262）</strong>
              ：結局段。黛玉之死、寶玉出家、賈府崩塌。讀得太快會錯過所有伏筆的收網。慢下來。
            </li>
          </ul>

          <h2>給會卡關的人：三個具體建議</h2>
          <h3>一、第一次讀不要記人名</h3>
          <p>
            《紅樓夢》裡登場人物將近一千個。任何試圖「搞懂每一個誰是誰」的讀者都會放棄。第一次讀，只要記住這幾組就夠：
          </p>
          <ul>
            <li>賈寶玉、林黛玉、薛寶釵（主角三角）</li>
            <li>賈母、王夫人、鳳姐（當家三代女性）</li>
            <li>四春：元春、迎春、探春、惜春</li>
            <li>襲人、晴雯、紫鵑（核心丫鬟）</li>
          </ul>
          <p>
            其他人出現就出現，不認識也沒關係，讀到第三十回你自然就記住了。
          </p>
          <h3>二、遇到詩詞可以先跳過</h3>
          <p>
            《紅樓夢》裡的詩有兩種：一種是情節推進（例如第三十七回海棠社寫菊花詩），一種是純粹炫技。第一次讀，把詩當作空氣，讀故事就好。第二次讀再回來看詩。這是《紅樓夢》老讀者的共識，沒有人第一次讀就懂每首詩。
          </p>
          <h3>三、不要查背景資料</h3>
          <p>
            不要去看紅學考證。不要去搜「曹雪芹生平」。不要去讀脂硯齋批語。這些東西是第二次讀之後才有用的。第一次讀就搜，你會把自己讀成一個知道答案的人，失去進入故事的能力。
          </p>

          <h2>最值得慢下來的五個段落</h2>
          <p>
            讀《紅樓夢》262 天，如果只能在五個地方真正停下來，我會選這些：
          </p>
          <ol>
            <li>
              <strong>第三回，黛玉進府見賈母</strong>——「老祖宗叫我來的。」全書氣場最穩的一場戲。
            </li>
            <li>
              <strong>第二十三回，寶黛共讀《西廂記》</strong>
              ——「我就是個多愁多病的身，你就是那傾國傾城的貌。」青春期最純粹的告白。
            </li>
            <li>
              <strong>第三十二回，寶玉訴肺腑</strong>
              ——「你放心。」三個字。全書最輕又最重的一句話。
            </li>
            <li>
              <strong>第七十七回，晴雯之死</strong>
              ——讀完會難過一整天。是《紅樓夢》情緒最濃的一章。
            </li>
            <li>
              <strong>第九十八回，黛玉之死</strong>
              ——「寶玉，寶玉，你好……」六個字，八個標點，三個世紀的爭論。
            </li>
          </ol>
          <p>
            這五段讀到的時候，放下手機，倒杯水，把那一頁讀三遍。《紅樓夢》一生只會這樣打中你幾次。
          </p>

          <h2>262 天之後</h2>
          <p>
            讀完的那一天，你不會有特別的感覺。《紅樓夢》沒有 happy ending，也沒有
            sad ending——它停在一片白茫茫大地真乾淨。
          </p>
          <p>
            但接下來的一兩個月，你會在很多意想不到的時刻想起書裡的片段。聽到親戚吵架會想起鳳姐。看到朋友失戀會想起黛玉。經過一個老宅會想起大觀園。你的人生被加了一層底色，那層底色叫「我讀過紅樓夢」。
          </p>
          <p>這就是《紅樓夢》在 262 天之後會做的事。也是它唯一會做的事。</p>

          <div className="post-footer">
            <h3>每天一段《紅樓夢》</h3>
            <p>
              SlowRead 依你的閱讀速度排程，AI 伴讀會默默告訴你第幾回是誰登場、上次出現在哪裡、這句暗示了什麼。免費開始。
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

          <a href="/zh/blog" className="post-back">
            &larr; 回到慢讀筆記
          </a>
        </article>
      </main>

      <Footer lang="zh" />
    </>
  );
}
