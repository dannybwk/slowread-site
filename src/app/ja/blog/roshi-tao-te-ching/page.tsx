import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: '『老子（道徳経）』を一日一章、81日で読む',
  description:
    '『老子（道徳経）』はわずか五千字、八十一章。世界でいちばん短い名著であり、いちばん読み損ねやすい本でもある。一日一章、81日で読み切る。なぜ速読は老子を平らにしてしまうのか、引用され尽くして誤解された言葉、そして実直な計画。',
  alternates: {
    canonical: 'https://slowread.xyz/ja/blog/roshi-tao-te-ching',
    languages: {
      en: 'https://slowread.xyz/blog/how-to-read-tao-te-ching',
      'zh-Hant': 'https://slowread.xyz/zh/blog/dao-de-jing-81-days',
    },
  },
  openGraph: {
    title: '『老子（道徳経）』を一日一章、81日で読む',
    description:
      '一日一章、81日で読み切る『老子（道徳経）』。なぜ速読は老子を平らにしてしまうのか、引用され尽くして誤解された言葉。',
    url: 'https://slowread.xyz/ja/blog/roshi-tao-te-ching',
    type: 'article',
    locale: 'ja_JP',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    publishedTime: '2026-06-27T00:00:00Z',
    authors: ['SlowRead'],
    tags: ['老子', '道徳経', '道家', '中国古典', '読書計画', 'ゆっくり読書'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '『老子（道徳経）』を一日一章、81日で読む',
    description: '一日一章、81日で読み切る『老子（道徳経）』全八十一章。',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '『老子（道徳経）』を一日一章、81日で読む',
  description:
    '『老子（道徳経）』はわずか五千字、八十一章。世界でいちばん短い名著であり、いちばん読み損ねやすい本でもある。',
  image: 'https://slowread.xyz/images/og-image.png',
  datePublished: '2026-06-27T00:00:00Z',
  dateModified: '2026-06-27T00:00:00Z',
  author: { '@type': 'Organization', name: 'SlowRead', url: 'https://slowread.xyz' },
  publisher: {
    '@type': 'Organization',
    name: 'SlowRead',
    logo: {
      '@type': 'ImageObject',
      url: 'https://slowread.xyz/images/slowread-logo.png',
    },
  },
  mainEntityOfPage: 'https://slowread.xyz/ja/blog/roshi-tao-te-ching',
  inLanguage: 'ja',
  about: {
    '@type': 'Book',
    name: '老子（道徳経）',
    author: { '@type': 'Person', name: '老子' },
  },
};

export default function RoshiArticle() {
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
            <span>道徳経</span>
            <span className="post-meta-dot" />
            <span>老子</span>
            <span className="post-meta-dot" />
            <span>8分で読めます</span>
          </div>
          <h1>『老子（道徳経）』を一日一章、81日で読む</h1>
          <p className="post-subtitle">
            世界でいちばん短い名著。そして、いちばん読み損ねやすい一冊。
          </p>
        </header>

        <article className="post-body">
          <p>『老子』は一時間もあれば読み終わる。それが罠だ。</p>
          <p>
            老子の全文はおよそ五千字、八十一章。数行しかない章もある。何十万字もの小説と並べれば、薄い小冊子に見える。だから人は腰を下ろし、一晩で最初から最後まで通読し、本を閉じ、「水」や「無為」についての東洋的な何かを理解した気になる。すべての字を読んで、ひとつの字とも出会っていない。
          </p>
          <p>
            『老子』が人類の書いたなかで最も読み返される本なのは、「読み終わる」ことを拒むからだ。一つひとつの章は、静かな水面に落とす石だ。八十一個を一度に投げ込めば、ただの雑音になる。一日に一個ずつ落として波紋を見つめて、はじめてその本が読める。
          </p>

          <h2>なぜ『老子』は速読に向かないのか</h2>
          <p>冒頭の一文が、もうルールを告げている。</p>
          <blockquote>
            <p>「道の道とすべきは、常の道に非ず。名の名とすべきは、常の名に非ず。」</p>
            <cite>——『老子』第一章</cite>
          </blockquote>
          <p>
            速く読めば、なぞなぞか、おみくじの言葉のように響く。ゆっくり読めば、それは扉に貼られた警告だ。<em>ここにあるものは、掴んだ瞬間に消える。</em>この本は逆説で組み上げられている——柔は剛に勝ち、空(から)であることが役に立ち、聖人は「無為を為す」。逆説は速度で通り抜けられない。逆説とは、それが矛盾に感じられなくなり、世界の実際の動き方の描写に感じられはじめるまで、その中に留まらなければならないものだ。
          </p>
          <p>
            逆説を速読すれば、ただスローガンに平らにされる。「少ないほど豊か」「流れに身をまかせよ」。一時間の通読で多くの人が持ち帰るのはそれで、それは老子の意図のほとんど逆だ。
          </p>

          <h2>計算：81日の根拠</h2>
          <p>この本は、自分で区切ってくれている——八十一章、一日に一章。</p>
          <div className="math-callout">
            <div className="math-line">81 章 &divide; 1 章／日</div>
            <div className="math-result">&asymp; 81 日</div>
          </div>
          <p>
            一章を読むのに二、三分。残りの一日をかけて消化する。それが設計だ。距離を稼ごうとしているのではない——81 日は三ヶ月足らず、あなたが「いつか読もう」と思って積み上げてきた時間より短い。一日ひとつの考えに、一日ついて回ってもらうのだ。
          </p>
          <p>八十一章はこう分かれている。</p>
          <ul>
            <li>
              <strong>第 1&ndash;37 章——「道経」。</strong>
              前半は主に「ものの本性」について。道そのもの、虚、水、樸(ぼく)（まだ削られていない木）。一日目は抽象的だが、三十日目には妙に実用的になる。
            </li>
            <li>
              <strong>第 38&ndash;81 章——「徳経」。</strong>
              後半は、人——とりわけ治める者——がどう振る舞うべきかへ向かう。有名な政治の一句もここにある。「大国を治むるは小鮮を烹(に)るが若し」。
            </li>
          </ul>
          <p>
            この区切りを律儀に守る必要はない。現代の読者の多くは気づきさえしない。だが、本が半ばで角を曲がると知っておくと、「同じことの繰り返しだ」と感じる日に助けになる——その繰り返しは円ではなく、螺旋だ。
          </p>

          <h2>引用され尽くし、読み違えられる三つの言葉</h2>
          <p>
            <strong>「千里の行も足下より始まる。」</strong>
          </p>
          <p>
            この本でいちばん引用される一句であり、いちばん自己啓発のポスターにされる一句。だが、その全体（第六十四章）はもっと冷たく、もっと奇妙だ。前後は「災いは起きる前がいちばん処理しやすい」「合抱の木も毫末より生ず」を語っている。大きな目標を追えという応援歌ではない。小さなことが大きくなる前に、それに目を向けよという助言だ。
          </p>
          <blockquote>
            <p>「上善は水の如し。水は善く万物を利して争わず、衆人の悪(にく)む所に処(お)る。故に道に幾(ちか)し。」</p>
            <cite>——『老子』第八章</cite>
          </blockquote>
          <p>
            速く読めば、美しい自然の比喩。ゆっくり読めば、それは生き方の理論まるごとだ。万物の役に立ち、争わず、人が嫌う低い場所に身を置く。この一章が描くことを、人は何十年かけてもできずにいる。八日目に「わかる」べきではない。八百日目に思い出すべきなのだ。
          </p>
          <p>
            <strong>「人を知る者は智、自ら知る者は明なり。」</strong>
          </p>
          <p>
            第三十三章。整った格言にしか見えない——老子が同じことを繰り返していると気づくまでは。彼は静かに、何度も、外を制することより内を制することを上に置く。八十一日のあいだに十回その手つきに出会うころ、それは引用ではなく、世界を見るレンズになっている。
          </p>

          <h2>実際に効く四つの読み方</h2>
          <ol>
            <li>
              <strong>この一章を読み、次の章は読まないこと。</strong>
              この稽古の要点は「止まる」ことだ。一章が三行しかないとき、「もう少しだけ」という誘惑は途方もない。こらえる。短い章のあとの余白は、その章の一部だ。
            </li>
            <li>
              <strong>一度、声に出して読むこと。</strong>
              『老子』はもともと詩と呪文の中間のようなものだった。原文では多くの章が韻を踏む。読み下しでも、そのリズムは目が滑り落とす意味を運ぶ。耳は目より遅い——それこそが要点だ。
            </li>
            <li>
              <strong>「意味」を調べないこと。</strong>
              一句ごとに膨大な注釈がある。それは二周目にとっておく。一周目は、章が分からないままでいさせる。留まった困惑は理解になる。検索した困惑は、誰かの意見になる。
            </li>
            <li>
              <strong>二つの訳を比べる——ただし、読み終えたあとで。</strong>
              原文があまりに凝縮されているため、どの現代語訳も一致しない。ひとつの訳と八十一日暮らしたあと、二つ目を読むのは、同じ山を別の谷から見るようなものだ。そこから始めてはいけない。前半で勝ち取るのだ。
            </li>
          </ol>

          <h2>81日目に何が起きるか</h2>
          <p>
            何も、自分から名乗り出てはこない。第八十一章——「信言は美ならず、美言は信ならず」——を読むと、本は始まったときと同じように、儀式もなく終わる。解くべき筋もなく、最後の啓示もない。
          </p>
          <p>
            けれど章は去らない。意味のない口論のさなかに<em>「柔は剛に勝つ」</em>が聞こえる。予定を詰め込みすぎたとき、器が役に立つのは中の「空」のおかげだと思い出す。この本は信念を与えない。本来そっとしておくべきものを無理に押している――その瞬間の自分に気づくための、八十一の小さな道具を与えるのだ。
          </p>
          <p>
            それが『老子』がずっとあなたにしてくれる、ただ一つのことだ。そして五千字は、それをするのに十分すぎる広さだ。
          </p>

          <div className="post-footer">
            <h3>毎朝、『老子』を一章ずつ</h3>
            <p>
              SlowRead は毎朝一章を届け、そこで止まります。AI
              読書コンパニオンが、老子が当然知っているものとした先秦の背景を静かに補い、しかもこの本を宿題に変えてしまわない。無料ではじめる。
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
              <a href="/ja/blog/kokoro-slow-reading" className="blog-card">
                <div className="blog-card-meta">
                  <span>こころ</span>
                  <span className="post-meta-dot" />
                  <span>9分で読めます</span>
                </div>
                <h2 className="blog-card-title">
                  『こころ』をゆっくり読む — 83日で読む夏目漱石
                </h2>
                <p className="blog-card-excerpt">
                  速く読んではいけないもう一冊。最後の三分の一を読むために前の三分の二を耐える小説を、83日で読み切る計画。
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
