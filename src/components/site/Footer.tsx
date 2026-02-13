interface FooterProps {
  lang: 'en' | 'zh';
}

export default function Footer({ lang }: FooterProps) {
  if (lang === 'zh') {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <ul className="footer-links">
              <li><a href="/zh/privacy">隱私權政策</a></li>
              <li><a href="/zh/terms">使用條款</a></li>
              <li><a href="mailto:tplusstudio@gmail.com">聯絡我們</a></li>
            </ul>
            <span className="footer-copy">&copy; 2026 SlowRead 慢讀經典</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="mailto:tplusstudio@gmail.com">Support</a></li>
          </ul>
          <span className="footer-copy">&copy; 2026 SlowRead</span>
        </div>
      </div>
    </footer>
  );
}
