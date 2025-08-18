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
      {/* Hero Section */}
      <section className="app-hero">
        <div className="app-hero-content">
          <div className="app-hero-left">
            <div className={`animate-fade-in-up ${isLoaded ? '' : 'opacity-0'}`}>
              <div className="hero-badge">
                Réseau social du cinéma
              </div>
              <h1 className="hero-title">
                FIIDI APP
              </h1>
              <h2 className="hero-subtitle">
                Le premier réseau social dédié aux métiers de l'audiovisuel et du cinéma
              </h2>
              <p className="hero-description">
                Créez votre profil professionnel, publiez des annonces, élargissez votre réseau et découvrez de nouvelles opportunités de collaboration dans l'industrie cinématographique.
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
              <span className="hero-stat-label">Professionnels inscrits</span>
            </div>
            <div className="hero-stat" style={{ '--index': 1 }}>
              <span className="hero-stat-number" style={{ '--index': 1 }}>150+</span>
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
                <h3>Profil Professionnel</h3>
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
                <p>Connectez-vous avec des professionnels :</p>
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
            <p className="modal-subtitle">Choisissez votre plateforme :</p>

            <div className="download-cards">
              <a
                href="https://play.google.com/store/apps/details?id=com.mycompany.fiidi&hl=fr&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="download-card"
              >
                <div className="download-card-icon">
                  <svg viewBox="0 0 24 24" className="google-play-icon">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="download-card-content">
                  <h3>Google Play Store</h3>
                  <p>Télécharger pour Android</p>
                </div>
              </a>

              <a
                href="https://apps.apple.com/fr/app/fiidi/id6504772951"
                target="_blank"
                rel="noopener noreferrer"
                className="download-card"
              >
                <div className="download-card-icon">
                  <svg viewBox="0 0 24 24" className="app-store-icon">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="download-card-content">
                  <h3>App Store</h3>
                  <p>Télécharger pour iOS</p>
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
