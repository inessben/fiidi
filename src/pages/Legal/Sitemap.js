import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Sitemap = () => {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Plan du site</h1>
        <p className="legal-subtitle">Navigation et architecture du site FIIDI</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>Pages principales</h2>
          <div className="sitemap-links">
            <div className="sitemap-category">
              <h3><Link to="/">Accueil</Link></h3>
              <p>Page d'accueil présentant FIIDI et ses services</p>
            </div>
            
            <div className="sitemap-category">
              <h3><Link to="/application">L'Application</Link></h3>
              <p>Découvrez toutes les fonctionnalités de l'application FIIDI</p>
            </div>
            
            <div className="sitemap-category">
              <h3><Link to="/festival">Le Festival</Link></h3>
              <p>Informations sur le festival FIIDI et les événements</p>
            </div>
            
            <div className="sitemap-category">
              <h3><Link to="/contact">Contact</Link></h3>
              <p>Formulaire de contact et informations de contact</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Pages légales</h2>
          <div className="sitemap-links">
            <div className="sitemap-category">
              <h3><Link to="/legal/cookies">Politique de cookies</Link></h3>
              <p>Informations sur l'utilisation des cookies sur notre site</p>
            </div>
            
            <div className="sitemap-category">
              <h3><Link to="/legal/privacy">Politique de confidentialité</Link></h3>
              <p>Comment nous collectons et utilisons vos données personnelles</p>
            </div>
            
            <div className="sitemap-category">
              <h3><Link to="/legal/terms">Conditions générales d'utilisation</Link></h3>
              <p>Conditions d'utilisation de nos services</p>
            </div>
            
            <div className="sitemap-category">
              <h3><Link to="/legal/mentions">Mentions légales</Link></h3>
              <p>Informations légales obligatoires</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Autres liens utiles</h2>
          <div className="sitemap-links">
            <div className="sitemap-category">
              <h3>Support technique</h3>
              <p><Link to="/contact">Formulaire de contact</Link> pour toute assistance</p>
            </div>
            
            <div className="sitemap-category">
              <h3>Espace presse</h3>
              <p><a href="mailto:appfiidi@gmail.com">appfiidi@gmail.com</a></p>
            </div>
            
            <div className="sitemap-category">
              <h3>Partenariats</h3>
              <p><a href="mailto:appfiidi@gmail.com">appfiidi@gmail.com</a></p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Réseaux sociaux</h2>
          <div className="sitemap-links">
            <div className="sitemap-category">
              <h3>Suivez-nous</h3>
              <ul className="social-list">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </div>
          </div>
        </section>

        <div className="legal-footer-note">
          <p>
            <strong>Dernière mise à jour :</strong> Janvier 2025
          </p>
          <p>
            Si vous ne trouvez pas l'information recherchée, n'hésitez pas à nous contacter 
            via notre <Link to="/contact">formulaire de contact</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
