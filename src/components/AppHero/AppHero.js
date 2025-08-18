import React from 'react';
import logo from '../../logo.png';
import './AppHero.css';

const AppHero = () => {
  return (
    <section className="app-hero">
      <div className="app-hero-background">
        <div className="app-hero-overlay">
          <div className="container">
            <div className="app-hero-content">
              <div className="app-hero-left">
                <div className="app-hero-logo">
                  <img src={logo} alt="FIIDI Logo" className="logo-hero" />
                </div>
              </div>
              <div className="app-hero-right">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="phone-content"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-hero-title">
              <h1>
                <span className="yellow-accent">FIIDI APP :</span> LE RÉSEAU SOCIAL DE L'AUDIOVISUEL ET DU CINÉMA
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="scrolling-text">
        <div className="scrolling-content">
          L'APPLICATION EST DISPONIBLE SUR LES PLATEFORMES &nbsp;&nbsp; L'APPLICATION EST DISPONIBLE SUR LES PLATEFORMES &nbsp;&nbsp;
        </div>
      </div>
    </section>
  );
};

export default AppHero;
