import './styles/globals.css'
import './styles/variables.css'
import Script from 'next/script'

export const metadata = {
  title: '3D STL Files Marketplace',
  description: 'Download high-quality 3D printable STL files',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <nav className="navbar">
            <div className="logo">
              <span className="logo-icon">🎨</span>
              3D STL Market
            </div>
            <div className="search-bar">
              <input type="search" placeholder="Search for 3D models..." />
              <button className="search-button">🔍</button>
            </div>
            <div className="nav-links">
              <a href="/models"><span className="nav-icon">🎮</span>Models</a>
              <a href="/categories"><span className="nav-icon">📂</span>Categories</a>
              <a href="/upload"><span className="nav-icon">⬆️</span>Upload</a>
              <a href="/account" className="account-link"><span className="nav-icon">👤</span>Account</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>3D STL Market</h3>
              <p>Your go-to marketplace for high-quality 3D printable STL files</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="/models">Models</a>
              <a href="/categories">Categories</a>
              <a href="/upload">Upload</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQ</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} 3D STL Market. All rights reserved.</p>
          </div>
        </footer>
        <Script id="tawk-script">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6795146b825083258e0b0c1b/1iif5fgsu';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
