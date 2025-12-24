import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-wrapper">
          <Link to="/">
            <h1 className="logo">FIIDI</h1>
          </Link>
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <Link
                  to="/application"
                  className={`nav-link ${isActiveLink('/application') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  L'application
                </Link>
              </li>
              <li>
                <Link
                  to="/festival"
                  className={`nav-link ${isActiveLink('/festival') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Le festival
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="https://app.fiidi.fr/seConnecter"
                  className="nav-link-login"
                  onClick={closeMobileMenu}
                >
                  Se connecter
                </Link>
              </li>
              <li>
                <Link
                  to="https://app.fiidi.fr/creerCompte"
                  className="btn btn-primary create-account-button"
                  onClick={closeMobileMenu}
                >
                  S'inscrire
                </Link>
              </li>
              <li>
                <button
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
                  title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
                >
                  {isDarkMode ? (
                    <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                  ) : (
                    <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </nav>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link
              to="/"
              className={`mobile-nav-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/application"
              className={`mobile-nav-link ${isActiveLink('/application') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              L'application
            </Link>
          </li>
          <li>
            <Link
              to="/festival"
              className={`mobile-nav-link ${isActiveLink('/festival') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Le festival
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`mobile-nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="https://app.fiidi.fr/seConnecter"
              className="mobile-nav-link-login"
              onClick={closeMobileMenu}
            >
              Se connecter
            </Link>
          </li>
          <li>
            <Link
              to="https://app.fiidi.fr/creerCompte"
              className={`mobile-nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              S'inscrire
            </Link>
          </li>
          <li className="mobile-theme-toggle-container">
            <button
              className="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
            >
              {isDarkMode ? (
                <>
                  <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                  <span>Mode clair</span>
                </>
              ) : (
                <>
                  <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  <span>Mode sombre</span>
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
