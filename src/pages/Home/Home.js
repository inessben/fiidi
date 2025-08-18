import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-float-element hero-float-1"></div>
        <div className="hero-float-element hero-float-2"></div>
        <div className="hero-float-element hero-float-3"></div>

        <div className="hero-content">
          <div className="hero-badge">
            Le tremplin des talents du cinéma
          </div>

          <h1 className="hero-title">
            FIIDI
          </h1>

          <h2 className="hero-subtitle">
            Connecter, valoriser et faire avancer
          </h2>

          <p className="hero-description">
            Une plateforme innovante qui réunit application et festival pour connecter
            les professionnels du cinéma indépendant et créer de nouvelles opportunités.
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
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Professionnels</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">150+</span>
              <span className="hero-stat-label">Projets réalisés</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">3</span>
              <span className="hero-stat-label">Années d'existence</span>
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
              connecter les talents du cinéma indépendant et créer des opportunités de collaboration.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            <div className="card">
              <h3 className="gradient-text">L'Application</h3>
              <p>
                Une plateforme sociale dédiée aux professionnels du cinéma pour se rendre visibles,
                collaborer et développer leur réseau professionnel.
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
              FIIDI rassemble tous les professionnels de l\'industrie cinématographique
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
      <section className="section section-light">
        <div className="container">
          <div className="text-center">
            <h2>Rejoignez la communauté</h2>
            <p>
              Que vous soyez professionnel confirmé ou talent émergent,
              FIIDI vous accompagne dans votre parcours cinématographique.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/application" className="btn btn-primary btn-large">
                Commencer maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
