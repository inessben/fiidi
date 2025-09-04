import React, { useEffect, useState } from 'react';
import './Application.css';

const Application = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowDownloadModal(true);
  };

  const closeModal = () => {
    setShowDownloadModal(false);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target.classList.contains('download-modal')) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (showDownloadModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showDownloadModal]);

  return (
    <div className="application-page">
      <section className="app-hero">
        <div className="app-hero-content">
          <div className="app-hero-left">
            <div className={`animate-fade-in-up ${isLoaded ? '' : 'opacity-0'}`}>
              <div className="hero-badge">
                Le réseau des industries créatives et culturelles
              </div>
              <h1 className="hero-title">
                FIIDI APP
              </h1>
              <h2 className="hero-subtitle">
                Le premier réseau social dédié aux métiers de l'audiovisuel et du cinéma
              </h2>
              <p className="hero-description">
                Créez votre profil, publiez des annonces, élargissez votre réseau et découvrez de nouvelles opportunités de collaboration dans l'industrie cinématographique.
              </p>
              <div className="hero-actions">
                <button onClick={handleDownloadClick} className="btn btn-primary btn-large">
                  Télécharger l'app
                </button>
                <a href="#features" className="btn btn-secondary btn-large">
                  Découvrir les fonctionnalités
                </a>
              </div>
            </div>
          </div>
          <div className="app-hero-right">
            <div className="hero-video-container">
              <iframe
                src="https://www.youtube.com/embed/Hw3YK7CrLoo?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                title="FIIDI APP Présentation Vidéo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="hero-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section des statistiques */}
      <section className="app-stats section">
        <div className="container">
          <div className="hero-stats">
            <div className="hero-stat" style={{ '--index': 0 }}>
              <span className="hero-stat-number" style={{ '--index': 0 }}>1k+</span>
              <span className="hero-stat-label">Talents inscrits</span>
            </div>
            <div className="hero-stat" style={{ '--index': 1 }}>
              <span className="hero-stat-number" style={{ '--index': 1 }}>500+</span>
              <span className="hero-stat-label">Projets réalisés</span>
            </div>
            <div className="hero-stat" style={{ '--index': 2 }}>
              <span className="hero-stat-number" style={{ '--index': 2 }}>50+</span>
              <span className="hero-stat-label">Métiers représentés</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="app-description section">
        <div className="container">
          <div className="description-grid">
            <div className="description-card" data-content="profile">
              <div className="card-header">
                <div className="card-icon-overlay">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7C13.9 7 13 7.9 13 9V13H11V9C11 7.9 10.1 7 9 7L3 7V9H9V16C9 17.1 9.9 18 11 18H13C14.1 18 15 17.1 15 16V9H21Z" />
                  </svg>
                </div>
                <h3>Profil Personnel</h3>
              </div>
              <div className="card-content">
                <p>Créez votre carte de visite numérique complète avec :</p>
                <ul>
                  <li>Compétences et spécialisations</li>
                  <li>Portfolio et expériences</li>
                  <li>Coordonnées et réseaux sociaux</li>
                  <li>Recommandations et avis</li>
                </ul>
              </div>
            </div>

            <div className="description-card" data-content="announcements">
              <div className="card-header">
                <div className="card-icon-overlay">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M20 8C20.6 8 21 8.4 21 9V19C21 19.6 20.6 20 20 20H4C3.4 20 3 19.6 3 19V9C3 8.4 3.4 8 4 8H8.5L7 6.5C6.6 6.1 6.6 5.4 7 5S8.4 5.4 8.5 5.5L10 7H14L15.5 5.5C15.9 5.1 16.6 5.1 17 5.5C17.4 5.9 17.4 6.6 17 7L15.5 8.5H20M12 9C10.3 9 9 10.3 9 12S10.3 15 12 15 15 13.7 15 12 13.7 9 12 9M12 13C11.4 13 11 12.6 11 12S11.4 11 12 11 13 11.4 13 12 12.6 13 12 13Z" />
                  </svg>
                </div>
                <h3>Annonces & Casting</h3>
              </div>
              <div className="card-content">
                <p>Publiez et découvrez des opportunités :</p>
                <ul>
                  <li>Castings et recrutements</li>
                  <li>Équipements et locations</li>
                  <li>Lieux de tournage</li>
                  <li>Collaborations créatives</li>
                </ul>
              </div>
            </div>

            <div className="description-card" data-content="networking">
              <div className="card-header">
                <div className="card-icon-overlay">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M12,9C14.67,9 20,10.34 20,13V20H4V13C4,10.34 9.33,9 12,9M12,10.9C9.03,10.9 5.9,12.36 5.9,13V18.1H18.1V13C18.1,12.36 14.97,10.9 12,10.9M8,13A2,2 0 0,1 10,15A2,2 0 0,1 8,17A2,2 0 0,1 6,15A2,2 0 0,1 8,13M16,13A2,2 0 0,1 18,15A2,2 0 0,1 16,17A2,2 0 0,1 14,15A2,2 0 0,1 16,13Z" />
                  </svg>
                </div>
                <h3>Réseau & Collaboration</h3>
              </div>
              <div className="card-content">
                <p>Connectez-vous avec des passionnés :</p>
                <ul>
                  <li>Messagerie instantanée</li>
                  <li>Groupes par spécialité</li>
                  <li>Suivi de projets</li>
                  <li>Événements et festivals</li>
                </ul>
              </div>
            </div>

            <div className="description-card" data-content="platform">
              <div className="card-header">
                <div className="card-icon-overlay">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M17,14L18.18,18.5L23,19L18.18,19.5L17,24L15.82,19.5L11,19L15.82,18.5L17,14M6.5,17L7.18,19.5L10,20L7.18,20.5L6.5,23L5.82,20.5L3,20L5.82,19.5L6.5,17Z" />
                  </svg>
                </div>
                <h3>Plateforme Innovante</h3>
              </div>
              <div className="card-content">
                <p>Le premier réseau social dédié au cinéma :</p>
                <ul>
                  <li>Interface intuitive et moderne</li>
                  <li>Recherche intelligente</li>
                  <li>Analytics et insights</li>
                  <li>Outils créatifs intégrés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de téléchargement */}
      {showDownloadModal && (
        <div className="download-modal" onClick={handleModalBackdropClick}>
          <div className="download-modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="modal-title">Télécharger FIIDI APP</h2>
            <p className="modal-subtitle">Rejoignez la communauté des passionnés du cinéma indépendant</p>

            <div className="app-modal-store-buttons">
              <a
                href="https://apps.apple.com/fr/app/fiidi/id6504772951"
                target="_blank"
                rel="noopener noreferrer"
                className="app-modal-store-button app-store"
              >
                <div className="app-modal-store-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="app-modal-store-text-wrapper">
                  <span className="app-modal-store-download-text">Télécharger sur</span>
                  <span className="app-modal-store-name-text">App Store</span>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.mycompany.fiidi&hl=fr&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="app-modal-store-button google-play"
              >
                <div className="app-modal-store-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="app-modal-store-text-wrapper">
                  <span className="app-modal-store-download-text">Disponible sur</span>
                  <span className="app-modal-store-name-text">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
