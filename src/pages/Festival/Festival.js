import React, { useState, useEffect, useRef } from 'react';
import SEO from '../../components/SEO/SEO';
import './Festival.css';

import festival1 from '../../assets/images/festival/207A9731.jpg';
import festival2 from '../../assets/images/festival/207A9775.jpg';
import festival3 from '../../assets/images/festival/_04A2268.jpg';
import festival4 from '../../assets/images/festival/_04A2271.jpg';
import festival5 from '../../assets/images/festival/_04A2285.jpg';
import festival6 from '../../assets/images/festival/_04A2288.jpg';
import festival7 from '../../assets/images/festival/_04A2292.jpg';
import festival8 from '../../assets/images/festival/_04A2299.jpg';
import festival9 from '../../assets/images/festival/_04A2310.jpg';
import festival10 from '../../assets/images/festival/_04A2314.jpg';
import festival11 from '../../assets/images/festival/_04A2316.jpg';
import festival12 from '../../assets/images/festival/_04A2326.jpg';
import festival14 from '../../assets/images/festival/_07A9705.jpg';
import festival15 from '../../assets/images/festival/_07A9710.jpg';
import festival16 from '../../assets/images/festival/_07A9728.jpg';
import festival18 from '../../assets/images/festival/_07A9811.jpg';
import heroBackground from '../../assets/images/festival/_07A9798.jpg';
import flyer2 from '../../assets/images/festival/fiidifestival2.png';
import flyer3 from '../../assets/images/festival/fiidifestival3.png';

import partner2 from '../../assets/images/partenaires/2.png';
import partner3 from '../../assets/images/partenaires/3.png';
import partner4 from '../../assets/images/partenaires/4.png';
import partner5 from '../../assets/images/partenaires/5.png';
import partner6 from '../../assets/images/partenaires/6.png';
import partner7 from '../../assets/images/partenaires/7.png';

import feedback1 from '../../assets/videos/temoignages/feedback1.mp4';
import feedback2 from '../../assets/videos/temoignages/feedback2.mp4';
import feedback3 from '../../assets/videos/temoignages/feedback3.mp4';

const Festival = () => {
  const [showArchives, setShowArchives] = useState(false);
  const observerRef = useRef(null);

  // Données structurées pour la page Festival
  const festivalStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FIIDI Festival - Festival du Cinéma Indépendant à Marseille",
    "description": "Festival annuel du cinéma indépendant. Projections, rencontres avec réalisateurs, tables rondes. +400 films reçus, 17 pays.",
    "url": "https://fiidi.com/festival",
    "mainEntity": {
      "@type": "Event",
      "name": "FIIDI Festival 2026",
      "description": "Festival annuel célébrant les talents émergents du cinéma indépendant à Marseille. Projections de courts-métrages, rencontres professionnelles et networking.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Marseille",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Marseille",
          "addressCountry": "FR"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "FIIDI",
        "url": "https://fiidi.com"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.filmfestplatform.com/fr/festival/5150",
        "description": "Soumission de films pour le festival"
      }
    }
  };

  // Scroll animations
  useEffect(() => {
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

  const festivalImages = [
    { src: festival1, alt: "Public du FIIDI Festival 2024 lors d'une projection de court-métrage à Marseille" },
    { src: festival2, alt: "Réalisateurs et talents émergents sur scène au FIIDI Festival de cinéma indépendant" },
    { src: festival3, alt: "Table ronde avec professionnels du cinéma au FIIDI Festival Marseille" },
    { src: festival4, alt: "Rencontre networking entre réalisateurs et producteurs au festival FIIDI" },
    { src: festival5, alt: "Projection de films indépendants devant le public du FIIDI Festival" },
    { src: festival6, alt: "Ambiance festive et conviviale au FIIDI Festival du cinéma à Marseille" },
    { src: festival7, alt: "Échange entre jeunes réalisateurs et mentors au festival de cinéma FIIDI" },
    { src: festival8, alt: "Session de networking professionnel lors du FIIDI Festival 2024" },
    { src: festival9, alt: "Remise de prix aux talents du cinéma indépendant au FIIDI Festival" },
    { src: festival10, alt: "Discussion entre participants et réalisateurs au festival FIIDI Marseille" },
    { src: festival11, alt: "Moment de partage entre passionnés de cinéma au FIIDI Festival" },
    { src: festival12, alt: "Découverte de nouveaux talents du cinéma indépendant au festival FIIDI" },
    { src: festival14, alt: "Séance de questions-réponses avec un réalisateur au FIIDI Festival" },
    { src: festival15, alt: "Public enthousiaste lors d'une projection au festival de cinéma FIIDI" },
    { src: festival16, alt: "Rencontre entre professionnels de l'audiovisuel au FIIDI Festival Marseille" },
    { src: festival18, alt: "Clôture festive du FIIDI Festival 2024 avec tous les participants" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);
  const totalSlides = Math.ceil(festivalImages.length / imagesPerSlide);

  useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.innerWidth <= 768) {
        setImagesPerSlide(2);
      } else if (window.innerWidth <= 1024) {
        setImagesPerSlide(3);
      } else {
        setImagesPerSlide(4);
      }
    };

    updateImagesPerSlide();
    window.addEventListener('resize', updateImagesPerSlide);

    return () => window.removeEventListener('resize', updateImagesPerSlide);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="festival-page">
      <SEO
        title="FIIDI Festival - Festival du Cinéma Indépendant Marseille"
        description="Participez au FIIDI Festival à Marseille ! Festival de cinéma indépendant : projections de courts-métrages, rencontres avec réalisateurs, networking. +400 films, 17 pays. Soumettez votre film avant le 20 février 2026."
        keywords="FIIDI festival, festival cinéma Marseille, festival cinéma indépendant, court-métrage festival, soumettre film festival, projection cinéma, réalisateurs émergents, festival 2026"
        structuredData={festivalStructuredData}
      />
      {/* Hero Section */}
      <section className="festival-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-overlay"></div>

        {/* Animated elements */}
        <div className="hero-particles">
          <div className="hero-particle hero-particle-1"></div>
          <div className="hero-particle hero-particle-2"></div>
          <div className="hero-particle hero-particle-3"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in-up">
              <span className="festival-name gradient-text-animated">FIIDI FESTIVAL</span>
            </h1>

            <p className="hero-tagline animate-fade-in-up stagger-2">
              Le festival qui révolutionne le cinéma indépendant
            </p>

            <p className="hero-description animate-fade-in-up stagger-3">
              Rejoignez-nous pour célébrer les talents émergents et découvrir les nouvelles voix du cinéma.
            </p>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>
        <iframe
          id="haWidget"
          allowtransparency="true"
          scrolling="auto"
          src="https://www.helloasso.com/associations/fiidi/evenements/fiidi-festival-3eme-edition/widget"
          style={{ width: '100%', height: '750px', border: 'none' }}
          title="FIIDI Festival Widget"
          onLoad={() => {
            window.addEventListener('message', function (e) {
              const dataHeight = e.data.height;
              const haWidgetElement = document.getElementById('haWidget');
              if (dataHeight > parseFloat(haWidgetElement.height || 0)) {
                haWidgetElement.height = dataHeight + 'px';
              }
            });
          }}
        ></iframe>
        <iframe
          id="haWidgetButton"
          allowtransparency="true"
          src="https://www.helloasso.com/associations/fiidi/evenements/fiidi-festival-3eme-edition/widget-bouton"
          style={{ width: '100%', height: '70px', border: 'none' }}
          title="FIIDI Festival Button Widget"
        ></iframe>
      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-header" data-animate>
            <h2 className="stats-main-title">
              <span className="gradient-text-animated">FIIDI</span> en quelques chiffres
            </h2>

          </div>
          <div className="stats-grid">
            <div className="stat-card hover-lift" data-animate style={{ '--delay': '0.1s' }}>
              <div className="stat-icon-wrapper">
                <span className="stat-icon">🎬</span>
              </div>
              <span className="stat-number counter">+400</span>
              <span className="stat-label">Films reçus</span>
              <div className="stat-card-glow"></div>
            </div>
            <div className="stat-card hover-lift" data-animate style={{ '--delay': '0.2s' }}>
              <div className="stat-icon-wrapper">
                <span className="stat-icon">🌍</span>
              </div>
              <span className="stat-number counter">17</span>
              <span className="stat-label">Pays</span>
              <div className="stat-card-glow"></div>
            </div>
            <div className="stat-card hover-lift" data-animate style={{ '--delay': '0.3s' }}>
              <div className="stat-icon-wrapper">
                <span className="stat-icon">🤝</span>
              </div>
              <span className="stat-number counter">+250</span>
              <span className="stat-label">Partenaires</span>
              <div className="stat-card-glow"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Objectif Section */}
      <section className="objectif-section">
        <div className="container">
          <div className="objectif-content">
            <h2 className="objectif-title">
              L'OBJECTIF DU <span className="objectif-highlight">FIIDI FESTIVAL</span> ?
            </h2>
            <div className="objectif-text">
              <p>
                L'objectif du FIIDI Festival est de promouvoir et de <strong>valoriser la création cinématographique à petits budgets</strong> en offrant une véritable plateforme de diffusion, de formation et de mise en réseau aux talents émergents.
              </p>
              <p>
                Le festival s'attache à démocratiser l'accès aux métiers du cinéma en permettant aux jeunes, aux autodidactes et aux <strong>publics éloignés de la culture</strong> de présenter leurs œuvres, de développer leurs compétences et d'intégrer un écosystème professionnel qui leur est souvent inaccessible.
              </p>
              <p>
                <strong>FIIDI encourage l'innovation, soutient l'audace artistique</strong> et met en lumière des projets réalisés avec des moyens limités mais une inventivité remarquable.
              </p>
              <p>
                Par son approche inclusive et ouverte, le festival ambitionne de devenir un tremplin essentiel pour les créateurs de demain et un espace où les pratiques cinématographiques peuvent se réinventer, au plus près de la diversité et des dynamiques du territoire marseillais, français et international.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="festival-content section">
        <div className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <div className="content-block">
                <div className="text-content">
                  <h2>Qu'est-ce que le FIIDI Festival ?</h2>
                  <p>Le FIIDI Festival est un événement annuel dédié au cinéma indépendant, organisé chaque année à Marseille. Il met en lumière les nouvelles voix du cinéma dans un esprit ouvert, festif et accessible à tous.</p>

                  <p>C'est un lieu de rencontre unique où les professionnels et passionnés du secteur peuvent découvrir, échanger et créer des opportunités autour des œuvres émergentes du cinéma indépendant.</p>

                  <p>Le festival propose projections, rencontres avec les réalisateurs, tables rondes et événements de networking dans une ambiance conviviale et inspirante.</p>
                </div>
                <div className="image-placeholder flyer-container">
                  <img src={flyer3} alt="Affiche officielle FIIDI Festival 2026 - Festival du cinéma indépendant à Marseille" />
                </div>
              </div>

              <h2 className="yellow-bg section-title">Programmation du Festival</h2>

              <div className="program-grid">
                <div className="program-card">
                  <div className="program-image">
                    <img src={heroBackground} alt="Projections de courts-métrages indépendants au FIIDI Festival Marseille" />
                  </div>
                  <h3>Projections</h3>
                  <p>Découvrez une sélection de films indépendants</p>
                </div>
                <div className="program-card">
                  <div className="program-image">
                    <img src={festival14} alt="Rencontres avec réalisateurs et équipes de tournage au festival FIIDI" />
                  </div>
                  <h3>Rencontres</h3>
                  <p>Échangez avec les réalisateurs et équipes</p>
                </div>
                <div className="program-card">
                  <div className="program-image">
                    <img src={festival4} alt="Table ronde professionnelle sur le cinéma indépendant au FIIDI Festival" />
                  </div>
                  <h3>Table ronde</h3>
                  <p>Participez à des discussions professionnelles</p>
                </div>
                <div className="program-card">
                  <div className="program-image">
                    <img src={festival8} alt="Session de networking entre professionnels du cinéma au festival FIIDI" />
                  </div>
                  <h3>Networking</h3>
                  <p>Créez des connexions dans l'industrie</p>
                </div>
              </div>

              {/* Archives Section */}
              <div className="archives-section">
                <h2 className="yellow-bg section-title archives-title" onClick={() => setShowArchives(!showArchives)}>
                  Archives - FIIDI Festival 2
                  <span className={`archives-toggle ${showArchives ? 'open' : ''}`}>▼</span>
                </h2>

                {showArchives && (
                  <div className="archives-content">
                    <div className="content-block reverse">
                      <div className="image-placeholder flyer-container">
                        <img src={flyer2} alt="Affiche FIIDI Festival 2 édition 2024 - Archives du festival de cinéma indépendant" />
                      </div>
                      <div className="text-content">
                        <h3>FIIDI Festival 2 - 2024</h3>
                        <p>La deuxième édition du FIIDI Festival a réuni plus de 5000 participants, 120 films projetés, et 50 réalisateurs invités pour des rencontres et débats passionnants.</p>

                        <p>L'événement a permis la signature de nombreux contrats et collaborations, confirmant le rôle essentiel du festival comme catalyseur de projets pour le cinéma indépendant.</p>

                        <p>Le prix du meilleur film a été décerné à "Lumières Urbaines" de Marie Laurent, une œuvre poétique sur la vie nocturne marseillaise.</p>
                      </div>
                    </div>

                    <div className="festival-images-section">
                      <h3 className="archive-subtitle">Retour en images sur le FIIDI Festival 2</h3>

                      <div className="carousel-container">
                        <div className="carousel">
                          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                            &#8249;
                          </button>

                          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {Array.from({ length: totalSlides }, (_, slideIndex) => {
                              const startIndex = slideIndex * imagesPerSlide;
                              const slideImages = festivalImages.slice(startIndex, startIndex + imagesPerSlide);

                              return (
                                <div key={slideIndex} className="carousel-slide multi-image-slide">
                                  {slideImages.map((image, imageIndex) => (
                                    <div key={imageIndex} className="image-item">
                                      <img src={image.src} alt={image.alt} />
                                    </div>
                                  ))}
                                </div>
                              );
                            })}
                          </div>

                          <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                            &#8250;
                          </button>
                        </div>

                        <div className="carousel-indicators">
                          {Array.from({ length: totalSlides }, (_, index) => (
                            <button
                              key={index}
                              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                              onClick={() => goToSlide(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <h3 className="archive-subtitle">Témoignages Vidéo - Festival 2</h3>

                    <div className="video-testimonials-grid">
                      <div className="video-testimonial-card">
                        <div className="video-container">
                          <video
                            src={feedback1}
                            controls
                            playsInline
                            preload="metadata"
                            className="testimonial-video"
                          >
                            Votre navigateur ne supporte pas la lecture vidéo.
                          </video>
                        </div>
                        <div className="video-caption">
                          <p>"Le FIIDI Festival a été un véritable tremplin pour mon film..."</p>
                        </div>
                      </div>

                      <div className="video-testimonial-card">
                        <div className="video-container">
                          <video
                            src={feedback2}
                            controls
                            playsInline
                            preload="metadata"
                            className="testimonial-video"
                          >
                            Votre navigateur ne supporte pas la lecture vidéo.
                          </video>
                        </div>
                        <div className="video-caption">
                          <p>"L'ambiance unique du festival, mêlant professionnalisme..."</p>
                        </div>
                      </div>

                      <div className="video-testimonial-card">
                        <div className="video-container">
                          <video
                            src={feedback3}
                            controls
                            playsInline
                            preload="metadata"
                            className="testimonial-video"
                          >
                            Votre navigateur ne supporte pas la lecture vidéo.
                          </video>
                        </div>
                        <div className="video-caption">
                          <p>"J'ai pu rencontrer des réalisateurs passionnants..."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <h2 className="yellow-bg section-title">Partenaires</h2>

              <div className="partners-grid">
                <div className="partner-logo">
                  <img src={partner2} alt="Logo partenaire officiel du FIIDI Festival de cinéma indépendant" />
                </div>
                <div className="partner-logo">
                  <img src={partner3} alt="Partenaire institutionnel soutenant le festival FIIDI Marseille" />
                </div>
                <div className="partner-logo">
                  <img src={partner4} alt="Sponsor du FIIDI Festival - événement cinéma indépendant" />
                </div>
                <div className="partner-logo">
                  <img src={partner5} alt="Partenaire culturel du festival de cinéma FIIDI" />
                </div>
                <div className="partner-logo">
                  <img src={partner6} alt="Partenaire média du FIIDI Festival à Marseille" />
                </div>
                <div className="partner-logo">
                  <img src={partner7} alt="Soutien officiel du festival FIIDI - cinéma indépendant français" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Festival;
