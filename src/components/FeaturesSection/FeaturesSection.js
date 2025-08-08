import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section section">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title yellow-bg">
            Retour en image sur le FIIDI FESTIVAL
          </h2>
        </div>
        <div className="features-grid">
          <div className="feature-card"></div>
          <div className="feature-card"></div>
          <div className="feature-card"></div>
          <div className="feature-card"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
