import Image from 'next/image';

interface HeaderProps {
  lang: 'en' | 'zh' | 'ja';
}

export default function Header({ lang }: HeaderProps) {
  if (lang === 'ja') {
    return (
      <header className="site-header" id="header">
        <div className="container">
          <a href="/ja" className="logo">
            <Image src="/images/slowread-logo.png" alt="SlowRead" width={32} height={32} className="logo-icon" />
            SlowRead
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="/ja/blog">読書ノート</a></li>
              <li><a href="/ja/privacy">プライバシーポリシー</a></li>
              <li><a href="/ja/terms">利用規約</a></li>
              <li className="lang-switch">
                <a href="/">EN</a> / <a href="/zh">ZH</a> / <span className="active">JA</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  if (lang === 'zh') {
    return (
      <header className="site-header" id="header">
        <div className="container">
          <a href="/zh" className="logo">
            <Image src="/images/slowread-logo.png" alt="SlowRead" width={32} height={32} className="logo-icon" />
            SlowRead 慢讀經典
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="/zh/blog">慢讀筆記</a></li>
              <li><a href="/zh/privacy">隱私權政策</a></li>
              <li><a href="/zh/terms">使用條款</a></li>
              <li className="lang-switch">
                <a href="/">EN</a> / <span className="active">ZH</span> / <a href="/ja">JA</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="site-header" id="header">
      <div className="container">
        <a href="/" className="logo">
            <Image src="/images/slowread-logo.png" alt="SlowRead" width={32} height={32} className="logo-icon" />
            SlowRead <span className="logo-sub">Savor the Classics</span>
          </a>
        <nav>
          <ul className="nav-links">
            <li><a href="/blog">Journal</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li className="lang-switch">
              <span className="active">EN</span> / <a href="/zh">ZH</a> / <a href="/ja">JA</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
