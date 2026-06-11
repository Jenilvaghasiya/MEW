import { Settings, Sun, Moon, Menu, X } from 'lucide-react'

function Navbar({
  theme,
  toggleTheme,
  setQuoteModalOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
  isScrolled
}) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-container" id="mew-nav-logo">
          <img 
            src="/Images/logo.png" 
            alt="MEW - Maruti Engineering Works" 
            className="logo-img" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
          />
        </a>

        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a
                href="#"
                className="nav-link active"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#quality"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quality
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="mobile-menu-cta-li">
              <button
                className="btn btn-primary nav-mobile-cta"
                onClick={() => {
                  setQuoteModalOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Request Quote
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle visual theme"
            id="mew-theme-toggle"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setQuoteModalOpen(true)}
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
            id="mew-header-quote-btn"
          >
            Request Quote
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mew-mobile-hamburger"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
