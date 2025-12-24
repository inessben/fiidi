import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
            </ul>
            <button className="btn-login">Se connecter</button>
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
            <button className="btn-login mobile-btn-login" onClick={closeMobileMenu}>
              Se connecter
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
