import { Link, useLocation } from 'react-router-dom';
import { useLang } from './LangContext.jsx';
import { SUPPORTED_LANGS } from '../i18n/index.js';
import './Navbar.css';

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const location = useLocation();

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <div className="navbar__links">
          <Link
            to="/"
            className={`navbar__link${location.pathname === '/' ? ' navbar__link--active' : ''}`}
          >
            {t.nav.about}
          </Link>
          <Link
            to="/download"
            className={`navbar__link${location.pathname === '/download' ? ' navbar__link--active' : ''}`}
          >
            {t.nav.download}
          </Link>
        </div>

        <div className="navbar__lang">
          {SUPPORTED_LANGS.map((code) => (
            <button
              key={code}
              className={`lang-btn${lang === code ? ' lang-btn--active' : ''}`}
              onClick={() => setLang(code)}
              aria-label={`Switch to ${code.toUpperCase()}`}
            >
              {t.lang[code]}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
