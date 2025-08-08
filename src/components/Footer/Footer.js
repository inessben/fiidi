import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2025 FIIDI APP</p>
          </div>
          <div className="footer-center">
            <div className="social-links">
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">▶️</a>
              <a href="#" className="social-link">🎵</a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#">Politique de cookies (UE)</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Conditions générales</a>
              <a href="#">Support Technique</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
