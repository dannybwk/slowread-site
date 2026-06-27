import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '『こころ』をゆっくり読む — 83日で読む夏目漱石',
  description:
    '夏目漱石『こころ』は約15万字。1日1,800字、7分の読書を83日続ければ読み終わる。最後の三分の一を読むために前の三分の二を耐える小説を、最後まで読み切るための実直な計画。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/blog/kokoro-slow-reading',
  },
  openGraph: {
    title: '『こころ』をゆっくり読む — 83日で読む夏目漱石',
    description:
      '1日7分、83日で読み切る夏目漱石『こころ』。最後の三分の一を読むために前の三分の二を耐える小説の、正しい読み方。',
    url: 'https://slowread.xyz/ja/blog/kokoro-slow-reading',
    type: 'article',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-04-23T00:00:00Z',
    authors: ['SlowRead'],
    tags: ['夏目漱石', 'こころ', '日本近代文学', '読書計画', 'ゆっくり読書'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '『こころ』をゆっくり読む — 83日で読む夏目漱石',
    description: '1日7分、83日で読み切る夏目漱石『こころ』の実直な計画。',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '『こころ』をゆっくり読む — 83日で読む夏目漱石',
  description:
    '夏目漱石『こころ』は約15万字。1日1,800字、7分の読書を83日続ければ読み終わる。',
  image: 'https://slowread.xyz/images/og-image.png',
  datePublished: '2026-04-23T00:00:00Z',
  dateModified: '2026-04-23T00:00:00Z',
  author: { '@type': 'Organization', name: 'SlowRead', url: 'https://slowread.xyz' },
  publisher: {
    '@type': 'Organization',
    name: 'SlowRead',
    logo: {
      '@type': 'ImageObject',
      url: 'https://slowread.xyz/images/slowread-logo.png',
    },
  },
  mainEntityOfPage: 'https://slowread.xyz/ja/blog/kokoro-slow-reading',
  inLanguage: 'ja',
  about: {
    '@type': 'Book',
    name: 'こころ',
    author: { '@type': 'Person', name: '夏目漱石' },
  },
};

export default function KokoroArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang="ja" />

      <main className="post container">
        <header className="post-header">
          <div className="post-meta">
            <span>こころ</span>
            <span className="post-meta-dot" />
            <span>夏目漱石</span>
            <span className="post-meta-dot" />
            <span>9分で読めます</span>
          </div>
          <h1>『こころ』をゆっくり読む — 83日で読む夏目漱石</h1>
          <p className="post-subtitle">
            1日7分。1日1,800字。読み終わった夏の終わりに、あなたは別人になっている。
          </p>
        </header>

        <article className="post-body">
          <p>
            日本人のほとんどが『こころ』を一度は読もうとする。そして、ほとんどの人が「下 先生と遺書」の途中でやめる。
          </p>
          <p>
            理由ははっきりしている。『こころ』は、最後の三分の一を読むために、前の三分の二を耐える小説だからだ。
          </p>
          <p>
            速く読める本ではない。速く読んではいけない本でもない。ゆっくり読むためにデザインされた本だ。このことを、漱石は 1914 年の時点で知っていた。私たちが忘れているだけだ。
          </p>

          <h2>なぜ『こころ』は速読に向かないのか</h2>
          <p>三部構成を思い出してほしい。</p>
          <ul>
            <li>
              <strong>上 先生と私</strong>
              ——「私」が鎌倉で「先生」と出会い、東京で交流を続ける
            </li>
            <li>
              <strong>中 両親と私</strong>——父の危篤で帰郷する
            </li>
            <li>
              <strong>下 先生と遺書</strong>
              ——先生から届いた長い手紙。彼の過去のすべて
            </li>
          </ul>
          <p>
            多くの読者は「上」と「中」を地味だと感じる。起きる事件が少ない。会話が多い。「先生」は肝心のことを何も言わない。
          </p>
          <p>
            しかし漱石は、これを意図して書いている。「上」と「中」で、読者は「私」と同じ速度で「先生」への距離を縮めていく。「なぜこの人はこんなに影があるのか」という疑問が、二ヶ月間ゆっくり発酵する。
          </p>
          <p>
            その発酵が終わった瞬間、「下」の手紙が届く。もし「上」を一日で読み終わってしまえば、「下」は単なる告白小説になる。二ヶ月かけて読んだとき、それは自分宛ての手紙になる。
          </p>
          <blockquote>
            <p>「記憶して下さい。私はこんな風にして生きて来たのです。」</p>
            <cite>——夏目漱石『こころ』下 先生と遺書</cite>
          </blockquote>
          <p>この一文が効くかどうかは、それまでの 60 日で決まる。</p>

          <h2>計算：83日の根拠</h2>
          <p>『こころ』は岩波文庫版で約 15 万字。</p>
          <div className="math-callout">
            <div className="math-line">150,000 字 &divide; 1,800 字／日</div>
            <div className="math-result">&asymp; 83 日</div>
          </div>
          <p>
            1 日 1,800 字は、現代小説で言えば 2 ページ半。読書時間にして 6〜7 分。疲れない速度で、きちんと文字が目に入る速度だ。
          </p>
          <p>
            83 日 &asymp; 2 ヶ月と 3 週間。今日から始めれば、夏の終わりには読み終わる。
          </p>

          <h2>読み方の五つの指針</h2>
          <h3>一、「先生」を急いで理解しようとしないこと</h3>
          <p>
            漱石は「先生」の正体を下巻まで明かさない。これは推理小説の技法ではなく、人生の技法だ。私たちが他人を理解するとき、最初に見えるのは「影」だけだ。「影」だけでその人を好きになれる段階があってから、初めて実体が明かされる。この順番を守った読者だけが、『こころ』の本当の重さを受け取れる。
          </p>
          <h3>二、「上」を飛ばさないこと</h3>
          <p>
            多くの人が「上」を「退屈」と感じて「下」へ飛ばしたくなる。それは事故である。「上」は退屈なのではなく、静かなのだ。静けさが 30 日続いたあとに来る手紙だからこそ、手紙が効く。
          </p>
          <h3>三、登場人物は三人覚えるだけでいい</h3>
          <p>『こころ』の核心は三人で構成される：</p>
          <ul>
            <li>先生</li>
            <li>K（先生の親友）</li>
            <li>奥さん（かつてのお嬢さん）</li>
          </ul>
          <p>
            この三角形がすべて。他の人物（先生の父、私の両親など）は、三角形の外側の光を調整する役割にすぎない。
          </p>
          <h3>四、下巻の手紙は一日で読み切らないこと</h3>
          <p>
            下巻を読み始めたとき、止まらなくなる人が多い。その衝動に 3 日だけ抗ってほしい。下巻を 3 日に分けて読んだ人と、一晩で読んだ人では、ラストの衝撃が完全に違う。理由は単純で、先生が手紙を一晩で書いたわけではないからだ。
          </p>
          <h3>五、読み終わったら、数日誰にも話さないこと</h3>
          <p>
            『こころ』はすぐに感想を言語化すると、本が逃げる。一週間、ただ自分の中に置いておく。
          </p>

          <h2>立ち止まるべき五つの箇所</h2>
          <ol>
            <li>
              <strong>上 第一章、鎌倉の海で「先生」を見つける場面</strong>
              ——書き出しの静けさ。日本近代文学で最も穏やかな冒頭の一つ。
            </li>
            <li>
              <strong>
                上、先生が「あなたはそのお嬢さんを愛しているのですか」と問う場面
              </strong>
              ——すでに先生の過去が透けて見える瞬間。
            </li>
            <li>
              <strong>
                下、K が「精神的に向上心のないものはばかだ」と言う場面
              </strong>
              ——この台詞が伏線として効いてくることを覚えておくこと。
            </li>
            <li>
              <strong>
                下、先生が同じ言葉を自分の中で反芻する場面
              </strong>
              ——K の言葉が何十ページも後に返ってくる。この距離こそが漱石の構造。
            </li>
            <li>
              <strong>
                下、先生が明治天皇の崩御と乃木大将の殉死を聞く場面
              </strong>
              ——『こころ』は夏目漱石の時代論でもある。一つの時代が終わる音が響く。
            </li>
          </ol>

          <h2>『こころ』を 83 日読むと何が起きるか</h2>
          <p>
            読み終わった日、何か起きるわけではない。『こころ』は爆発しない。ただ、それから半年、一年、十年、あなたは自分の中に「先生」を持ったまま生きる。
          </p>
          <p>
            人間関係で小さな裏切りをしそうになったとき。友人と同じ人を好きになったとき。自分の中の「K」に気づいたとき。
          </p>
          <p>
            漱石が 1914 年に書いた手紙は、その瞬間にあなた宛てに届く。83 日かけて読んだ人にだけ、届くようになっている。
          </p>
          <p>これが『こころ』をゆっくり読む理由である。</p>

          <div className="post-footer">
            <h3>毎朝、『こころ』の一節を</h3>
            <p>
              SlowRead はあなたのペースに合わせて日程を自動調整し、AI 読書コンパニオンが明治の時代背景や登場人物の関係を静かに補足します。無料ではじめる。
            </p>
            <div className="store-buttons">
              <a
                href="https://apps.apple.com/app/id6759947443"
                className="store-btn"
              >
                App Store でダウンロード
              </a>
            </div>
          </div>

          <div className="related-posts">
            <h3>あわせて読む</h3>
            <div className="blog-list">
              <a href="/ja/blog/roshi-tao-te-ching" className="blog-card">
                <div className="blog-card-meta">
                  <span>道徳経</span>
                  <span className="post-meta-dot" />
                  <span>8分で読めます</span>
                </div>
                <h2 className="blog-card-title">
                  『老子（道徳経）』を一日一章、81日で読む
                </h2>
                <p className="blog-card-excerpt">
                  世界でいちばん短い名著で、いちばん読み損ねやすい一冊——一日一章、81日で読む老子と、誤解され尽くした言葉。
                </p>
              </a>
            </div>
          </div>

          <a href="/ja/blog" className="post-back">
            &larr; 読書ノートに戻る
          </a>
        </article>
      </main>

      <Footer lang="ja" />
    </>
  );
}
