import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-wrapper">
        <div className="hero-float-element hero-float-1"></div>
        <div className="hero-float-element hero-float-2"></div>
        <div className="hero-float-element hero-float-3"></div>

        <div className="hero-container">
          <div className="hero-download-section">
            <div className="hero-download-badge">
              📱 Disponible maintenant
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

          <div className="hero-content">
            <div className="hero-badge">
              Le réseau des industries créatives et culturelles
            </div>

            <h1 className="hero-title">
              FIIDI
            </h1>

            <h2 className="hero-subtitle">
              Connecter, valoriser et faire avancer
            </h2>

            <p className="hero-description">
              Une plateforme innovante qui réunit application et festival pour connecter
              les passionnés du cinéma indépendant et créer de nouvelles opportunités.
            </p>

            <div className="hero-actions">
              <Link to="/application" className="btn btn-primary btn-large">
                Découvrir l'app
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
                <span className="hero-stat-label">Métiers représentés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is FIIDI Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Qu'est-ce que FIIDI ?</h2>
            <p>
              FIIDI réunit une application et un festival autour d'une mission commune :
              connecter les talents du cinéma indépendant et créer des opportunités de collaboration. Echanger, travailler, réseauter, faire des rencontres et innover ensemble pour faire avancer l'industrie cinématographique.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            <div className="card">
              <h3 className="gradient-text">L'Application</h3>
              <p>
                Une plateforme sociale dédiée aux talents du cinéma pour se rendre visibles,
                collaborer et développer leur réseau.
              </p>
              <Link to="/application" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                En savoir plus
              </Link>
            </div>

            <div className="card">
              <h3 className="gradient-text">Le Festival</h3>
              <p>
                Un événement annuel à Marseille qui met en lumière les nouvelles voix du cinéma
                dans un esprit ouvert, festif et accessible à tous.
              </p>
              <Link to="/festival" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center">
            <h2>Nos Valeurs</h2>
            <p>
              FIIDI est porté par des valeurs fortes qui guident chacune de nos actions
              et décisions pour créer un écosystème inclusif et dynamique.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {[
              { icon: '💡', title: 'Créativité', desc: 'Encourager l\'innovation et l\'originalité dans chaque projet' },
              { icon: '🤝', title: 'Collaboration', desc: 'Favoriser les échanges et le travail d\'équipe' },
              { icon: '🌍', title: 'Inclusivité', desc: 'Ouvrir le cinéma à toutes les voix et tous les talents' },
              { icon: '🚀', title: 'Innovation', desc: 'Repenser l\'industrie avec les outils de demain' }
            ].map((value, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Tous les métiers du cinéma</h2>
            <p>
              FIIDI rassemble tous les talents de l'industrie cinématographique
              pour créer un écosystème complet et collaboratif.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
            {[
              'Réalisateurs & Réalisatrices',
              'Acteurs & Actrices',
              'Producteurs & Productrices',
              'Scénaristes',
              'Directeurs Photo',
              'Monteurs & Monteuses',
              'Ingénieurs du Son',
              'Compositeurs',
              'Costumiers & Costumières',
              'Maquilleurs & Maquilleuses',
              'Assistants Réalisation',
              'Techniciens & Techniciennes'
            ].map((job, index) => (
              <div key={index} className="glass" style={{ padding: '1.5rem', textAlign: 'center', borderRadius: 'var(--border-radius)' }}>
                <h4 style={{ color: 'var(--primary-gold)', fontSize: '1rem', margin: 0 }}>{job}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Rejoignez la communauté</h2>
            <p>
              Que vous soyez professionnel confirmé ou talent émergent,
              FIIDI vous accompagne dans votre parcours cinématographique.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/application" className="btn btn-primary btn-large">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
