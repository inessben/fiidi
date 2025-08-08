import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <div className="logo-f">F</div>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/application" className="nav-link">L'application</Link>
            <Link to="/festival" className="nav-link">Le festival</Link>
            <Link to="/blog" className="nav-link">Le blog</Link>
            <Link to="/connexion" className="btn btn-primary">Se connecter</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
