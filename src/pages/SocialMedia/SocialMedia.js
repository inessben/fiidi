import React, { useEffect, useState } from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="social-media-page">
      <section className="social-hero">
        <div className="container">
          <div className={`social-hero-content ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="hero-badge">
              🌐 Restez connectés
            </div>
            <h1 className="hero-title">Réseaux Sociaux</h1>
            <h2 className="hero-subtitle">
              Suivez FIIDI sur toutes nos plateformes
            </h2>
            <p className="hero-description">
              Découvrez nos dernières actualités, événements et opportunités sur nos réseaux sociaux
            </p>
          </div>
        </div>
      </section>

      <section className="social-media section">
        <div className="container">
          <h2 className="section-title">Nos Réseaux Sociaux</h2>
          
          <div className="social-grid">
            <div className="social-card instagram-card">
              <div className="social-header">
                <div className="social-icon instagram-icon">📷</div>
                <h3>Instagram</h3>
                <p>Découvrez nos coulisses</p>
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://www.instagram.com/fiidi.app.festival/embed"
                  title="Instagram FIIDI"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  className="social-iframe"
                ></iframe>
              </div>
              <div className="social-footer">
                <a href="https://www.instagram.com/fiidi.app.festival/" target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
                  Voir sur Instagram
                </a>
              </div>
            </div>

            <div className="social-card youtube-card">
              <div className="social-header">
                <div className="social-icon youtube-icon">🎦</div>
                <h3>YouTube</h3>
                <p>Nos vidéos exclusives</p>
              </div>
              <div className="iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PLrAXtmRdnEQeiE7QVzxE4ZN1KZ1KTi8UY"
                  title="YouTube FIIDI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="social-iframe"
                ></iframe>
              </div>
              <div className="social-footer">
                <a href="https://www.youtube.com/@fiidiapp" target="_blank" rel="noopener noreferrer" className="btn btn-youtube">
                  Voir sur YouTube
                </a>
              </div>
            </div>

            <div className="social-card linkedin-card">
              <div className="social-header">
                <div className="social-icon linkedin-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Réseau professionnel</p>
              </div>
              <div className="iframe-container">
                <div className="linkedin-embed">
                  <div className="linkedin-placeholder">
                    <div className="linkedin-logo">💼</div>
                    <h4>FIIDI sur LinkedIn</h4>
                    <p>Suivez-nous pour les dernières actualités professionnelles du cinéma et de l'audiovisuel.</p>
                    <div className="linkedin-stats">
                      <span className="stat">👥 500+ Connexions</span>
                      <span className="stat">🏢 Entreprise certifiée</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-footer">
                <a href="https://www.linkedin.com/company/fiidi" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">
                  Voir sur LinkedIn
                </a>
              </div>
            </div>
            <div className="social-card tiktok-card">
              <div className="social-header">
                <div className="social-icon tiktok-icon">🎵</div>
                <h3>TikTok</h3>
                <p>Contenu créatif</p>
              </div>
              <div className="iframe-container">
                <div className="tiktok-embed">
                  <div className="tiktok-placeholder">
                    <div className="tiktok-logo">🎵</div>
                    <h4>@fiidi.app</h4>
                    <p>Contenu créatif et coulisses de l'industrie cinématographique.</p>
                    <div className="tiktok-stats">
                      <span className="stat">❤️ 1.2K Followers</span>
                      <span className="stat">🎥 Vidéos créatives</span>
                    </div>
                    <div className="tiktok-preview">
                      <div className="video-preview">
                        🎬
                        <span>Dernière vidéo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-footer">
                <a href="https://www.tiktok.com/@fiidi.app" target="_blank" rel="noopener noreferrer" className="btn btn-tiktok">
                  Voir sur TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SocialMedia;
