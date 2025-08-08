import React from 'react';
import './AppStores.css';

const AppStores = () => {
  return (
    <section className="app-stores section">
      <div className="container">
        <div className="stores-container">
          <div className="store-button app-store">
            <div className="store-icon">🍎</div>
            <div className="store-text">
              <span className="download-text">Download on the</span>
              <span className="store-name">App Store</span>
            </div>
          </div>
          <div className="store-button google-play">
            <div className="store-icon">▶️</div>
            <div className="store-text">
              <span className="download-text">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </div>
          </div>
        </div>
        <div className="app-description">
          <h2 className="yellow-bg">FIIDI APP, c'est quoi concrètement ?</h2>
          <div className="description-grid">
            <div className="description-card"></div>
            <div className="description-card"></div>
            <div className="description-card"></div>
            <div className="description-card"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStores;
