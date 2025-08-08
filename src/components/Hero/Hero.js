import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <div className="hero-logo">
                  <div className="logo-f-large">F</div>
                </div>
                <div className="hero-text">
                  <p className="hero-subtitle">Vidéo de présentation de FIIDI APP</p>
                  <button className="play-button">
                    Voir la vidéo de présentation (1:08)
                  </button>
                </div>
              </div>
              <div className="hero-right">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="phone-content"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-title">
              <h1>
                <span className="yellow-accent">FIIDI FESTIVAL :</span> LE FESTIVAL OÙ LES IDÉES PRENNENT VIE
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="scrolling-text">
        <div className="scrolling-content">
          UN FESTIVAL ANNUEL À NE PAS RATER &nbsp;&nbsp; UN FESTIVAL ANNUEL À NE PAS RATER &nbsp;&nbsp;
        </div>
      </div>
    </section>
  );
};

export default Hero;
