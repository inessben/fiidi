import React, { useState, useEffect, useRef } from 'react';
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
import festival13 from '../../assets/images/festival/_07A9704.jpg';
import festival14 from '../../assets/images/festival/_07A9705.jpg';
import festival15 from '../../assets/images/festival/_07A9710.jpg';
import festival16 from '../../assets/images/festival/_07A9728.jpg';
import festival17 from '../../assets/images/festival/_07A9803.jpg';
import festival18 from '../../assets/images/festival/_07A9811.jpg';
import festival19 from '../../assets/images/festival/_07A9814.jpg';
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
    { src: festival1, alt: "FIIDI Festival 2 - Moment 1" },
    { src: festival2, alt: "FIIDI Festival 2 - Moment 2" },
    { src: festival3, alt: "FIIDI Festival 2 - Moment 3" },
    { src: festival4, alt: "FIIDI Festival 2 - Moment 4" },
    { src: festival5, alt: "FIIDI Festival 2 - Moment 5" },
    { src: festival6, alt: "FIIDI Festival 2 - Moment 6" },
    { src: festival7, alt: "FIIDI Festival 2 - Moment 7" },
    { src: festival8, alt: "FIIDI Festival 2 - Moment 8" },
    { src: festival9, alt: "FIIDI Festival 2 - Moment 9" },
    { src: festival10, alt: "FIIDI Festival 2 - Moment 10" },
    { src: festival11, alt: "FIIDI Festival 2 - Moment 11" },
    { src: festival12, alt: "FIIDI Festival 2 - Moment 12" },
    { src: festival13, alt: "FIIDI Festival 2 - Moment 13" },
    { src: festival14, alt: "FIIDI Festival 2 - Moment 14" },
    { src: festival15, alt: "FIIDI Festival 2 - Moment 15" },
    { src: festival16, alt: "FIIDI Festival 2 - Moment 16" },
    { src: festival17, alt: "FIIDI Festival 2 - Moment 17" },
    { src: festival18, alt: "FIIDI Festival 2 - Moment 18" },
    { src: festival19, alt: "FIIDI Festival 2 - Moment 19" }
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

            <div className="hero-buttons animate-fade-in-up stagger-4">
              <a href="https://www.filmfestplatform.com/fr/festival/5150" target="_blank" rel="noopener noreferrer" className="btn-hero btn-primary btn-magnetic">
                <span>Soumettre un film</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <button className="btn-hero btn-secondary" onClick={() => document.getElementById('call-for-films').scrollIntoView({ behavior: 'smooth' })}>
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

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

      {/* Call for Films Section */}
      <section className="call-for-films-section" id="call-for-films">
        <div className="container">
          <div className="call-for-films-content">
            <h2 className="call-for-films-title">Vous avez un film à défendre ?</h2>
            <p className="call-for-films-description">
              FIIDI met en lumière celles et ceux qui créent en dehors des circuits traditionnels et qui osent raconter autrement.
              <br></br>Date limite d'envoi
              <span className="deadline-date"> 20 Février 2026</span>
            </p>

            <div className="submission-conditions">
              <h3>Conditions de participation</h3>
              <ul className="conditions-list">
                <li><span className="condition-icon">🎬</span> Court-métrage de fiction</li>
                <li><span className="condition-icon">⏱️</span> Durée maximale : 25 minutes</li>
                <li><span className="condition-icon">🎥</span> Production indépendante / petit budget</li>
              </ul>
            </div>


            <a
              href="https://www.filmfestplatform.com/fr/festival/5150"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-submit-film"
            >
              Soumettre votre film
            </a>
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
                  <img src={flyer3} alt="Qu'est-ce que le FIIDI Festival" />
                </div>
              </div>

              <h2 className="yellow-bg section-title">Programmation du Festival</h2>

              <div className="program-grid">
                <div className="program-card">
                  <div className="program-image">
                    <img src={heroBackground} alt="Projections" />
                  </div>
                  <h3>Projections</h3>
                  <p>Découvrez une sélection de films indépendants</p>
                </div>
                <div className="program-card">
                  <div className="program-image">
                    <img src={festival19} alt="Rencontres" />
                  </div>
                  <h3>Rencontres</h3>
                  <p>Échangez avec les réalisateurs et équipes</p>
                </div>
                <div className="program-card">
                  <div className="program-image">
                    <img src={festival4} alt="Table ronde" />
                  </div>
                  <h3>Table ronde</h3>
                  <p>Participez à des discussions professionnelles</p>
                </div>
                <div className="program-card">
                  <div className="program-image">
                    <img src={festival8} alt="Networking" />
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
                        <img src={flyer2} alt="FIIDI Festival 2" />
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
                  <img src={partner2} alt="Partenaire 2" />
                </div>
                <div className="partner-logo">
                  <img src={partner3} alt="Partenaire 3" />
                </div>
                <div className="partner-logo">
                  <img src={partner4} alt="Partenaire 4" />
                </div>
                <div className="partner-logo">
                  <img src={partner5} alt="Partenaire 5" />
                </div>
                <div className="partner-logo">
                  <img src={partner6} alt="Partenaire 6" />
                </div>
                <div className="partner-logo">
                  <img src={partner7} alt="Partenaire 7" />
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
