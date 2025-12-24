import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroBackground from '../../assets/images/homepage/hero.jpg';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-background" style={{ backgroundImage: `url(${heroBackground})` }}></div>

        {/* Animated background elements */}
        <div className="hero-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        <div className="hero-gradient-orb hero-orb-1"></div>
        <div className="hero-gradient-orb hero-orb-2"></div>

        <div className="hero-container">
          {/* Download Section - Left */}
          <div className="hero-download-section animate-fade-in-left">
            <div className="hero-download-badge animate-pulse">
              <span className="badge-dot"></span>
              Disponible maintenant
            </div>
            <h3 className="hero-download-title">Téléchargez l'app FIIDI</h3>
            <p className="hero-download-description">
              Rejoignez la communauté de ceux qui veulent changer les règles du cinéma indépendant.
            </p>

            <div className="hero-store-buttons">
              <a
                href="https://apps.apple.com/fr/app/fiidi/id6504772951"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-store-button hero-app-store"
              >
                <div className="store-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="store-text-wrapper">
                  <span className="store-download-text">Télécharger sur</span>
                  <span className="store-name-text">App Store</span>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.mycompany.fiidi&hl=fr&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-store-button hero-google-play"
              >
                <div className="store-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="store-text-wrapper">
                  <span className="store-download-text">Disponible sur</span>
                  <span className="store-name-text">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Main Content - Right */}
          <div className="hero-content animate-fade-in-right">

            <h1 className="hero-title gradient-text-animated">
              FIIDI
            </h1>

            <h2 className="hero-subtitle">
              Le réseau social qui révolutionne l'industrie créative
            </h2>

            <p className="hero-description">
              Une plateforme innovante qui connecte les talents du cinéma indépendant.
              Collaborez, créez, et transformez vos projets en réalité.
            </p>

            <div className="hero-actions">
              <Link to="/application" className="btn btn-primary btn-large btn-magnetic">
                <span>Découvrir l'app</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/festival" className="btn btn-secondary btn-large">
                Le festival
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">1k+</span>
                <span className="hero-stat-label">Talents inscrits</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">500+</span>
                <span className="hero-stat-label">Projets réalisés</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">50+</span>
                <span className="hero-stat-label">Métiers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Découvrir</span>
        </div>
      </section>

      {/* What is FIIDI Section */}
      <section className="section what-is-fiidi">
        <div className="container">
          <div className="section-header" data-animate>
            <span className="section-badge">À propos</span>
            <h2 className="section-title-large">
              Qu'est-ce que <span className="gradient-text-animated">FIIDI</span> ?
            </h2>
            <p className="section-description">
              FIIDI réunit une application et un festival autour d'une mission commune :
              connecter les talents du cinéma indépendant et créer des opportunités de collaboration.
            </p>
          </div>

          <div className="feature-cards">
            <div className="feature-card" data-animate>
              <div className="feature-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <div className="feature-card-content">
                <h3>L'Application</h3>
                <p>
                  Une plateforme sociale dédiée aux talents du cinéma pour se rendre visibles,
                  collaborer et développer leur réseau professionnel.
                </p>
                <Link to="/application" className="feature-link">
                  En savoir plus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="feature-card-glow"></div>
            </div>

            <div className="feature-card" data-animate>
              <div className="feature-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div className="feature-card-content">
                <h3>Le Festival</h3>
                <p>
                  Un événement annuel à Marseille qui met en lumière les nouvelles voix du cinéma
                  dans un esprit ouvert, festif et accessible à tous.
                </p>
                <Link to="/festival" className="feature-link">
                  Découvrir
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="feature-card-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header" data-animate>
            <span className="section-badge">Notre ADN</span>
            <h2 className="section-title-large">
              Nos <span className="gradient-text-animated">Valeurs</span>
            </h2>
            <p className="section-description">
              FIIDI est porté par des valeurs fortes qui guident chacune de nos actions
              pour créer un écosystème inclusif et dynamique.
            </p>
          </div>

          <div className="values-grid">
            {[
              { icon: '💡', title: 'Créativité', desc: 'Encourager l\'innovation et l\'originalité dans chaque projet', color: '#FFD700' },
              { icon: '🤝', title: 'Collaboration', desc: 'Favoriser les échanges et le travail d\'équipe', color: '#FFB800' },
              { icon: '🌍', title: 'Inclusivité', desc: 'Ouvrir le cinéma à toutes les voix et tous les talents', color: '#FFA500' },
              { icon: '🚀', title: 'Innovation', desc: 'Repenser l\'industrie avec les outils de demain', color: '#FF8C00' }
            ].map((value, index) => (
              <div key={index} className="value-card hover-lift" data-animate style={{ '--delay': `${index * 0.1}s` }}>
                <div className="value-icon-wrapper">
                  <span className="value-icon">{value.icon}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
                <div className="value-card-border" style={{ '--accent-color': value.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section className="section professions-section">
        <div className="container">
          <div className="section-header" data-animate>
            <span className="section-badge">Écosystème</span>
            <h2 className="section-title-large">
              Tous les <span className="gradient-text-animated">métiers</span> du cinéma
            </h2>
            <p className="section-description">
              FIIDI rassemble tous les talents de l'industrie cinématographique
              pour créer un écosystème complet et collaboratif.
            </p>
          </div>

          <div className="professions-marquee" data-animate>
            <div className="marquee-track">
              {[
                'Réalisateurs', 'Acteurs', 'Producteurs', 'Scénaristes',
                'Directeurs Photo', 'Monteurs', 'Ingénieurs Son', 'Compositeurs',
                'Costumiers', 'Maquilleurs', 'Assistants Réalisation', 'Techniciens'
              ].map((job, index) => (
                <div key={index} className="profession-tag">
                  <span className="profession-dot"></span>
                  {job}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                'Réalisateurs', 'Acteurs', 'Producteurs', 'Scénaristes',
                'Directeurs Photo', 'Monteurs', 'Ingénieurs Son', 'Compositeurs'
              ].map((job, index) => (
                <div key={`dup-${index}`} className="profession-tag">
                  <span className="profession-dot"></span>
                  {job}
                </div>
              ))}
            </div>
          </div>

          <div className="professions-grid" data-animate>
            {[
              { title: 'Création', jobs: ['Réalisateurs', 'Scénaristes', 'Directeurs artistiques'] },
              { title: 'Production', jobs: ['Producteurs', 'Assistants', 'Régisseurs'] },
              { title: 'Technique', jobs: ['Directeurs Photo', 'Cadreurs', 'Électriciens'] },
              { title: 'Post-production', jobs: ['Monteurs', 'Étalonneurs', 'VFX Artists'] }
            ].map((category, index) => (
              <div key={index} className="profession-category">
                <h4 className="category-title">{category.title}</h4>
                <ul className="category-jobs">
                  {category.jobs.map((job, jobIndex) => (
                    <li key={jobIndex}>{job}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-animate>
            <div className="cta-background">
              <div className="cta-orb cta-orb-1"></div>
              <div className="cta-orb cta-orb-2"></div>
            </div>
            <span className="cta-badge">Prêt à commencer ?</span>
            <h2 className="cta-title">
              Rejoignez la <span className="gradient-text-animated">révolution</span>
            </h2>
            <p className="cta-description">
              Que vous soyez professionnel confirmé ou talent émergent,
              FIIDI vous accompagne dans votre parcours cinématographique.
            </p>
            <div className="cta-actions">
              <Link to="/application" className="btn btn-primary btn-large btn-magnetic animate-glow">
                Télécharger l'app
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
