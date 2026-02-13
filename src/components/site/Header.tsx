interface HeaderProps {
  lang: 'en' | 'zh';
}

export default function Header({ lang }: HeaderProps) {
  if (lang === 'zh') {
    return (
      <header className="site-header" id="header">
        <div className="container">
          <a href="/zh" className="logo">SlowRead 慢讀經典</a>
          <nav>
            <ul className="nav-links">
              <li><a href="/zh/privacy">隱私權政策</a></li>
              <li><a href="/zh/terms">使用條款</a></li>
              <li className="lang-switch">
                <a href="/">EN</a> / <span className="active">ZH</span>
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
        <a href="/" className="logo">SlowRead <span className="logo-sub">Savor the Classics</span></a>
        <nav>
          <ul className="nav-links">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li className="lang-switch">
              <span className="active">EN</span> / <a href="/zh">ZH</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
