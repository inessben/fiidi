import React from 'react';
import AppHero from '../../components/AppHero/AppHero';
import AppStores from '../../components/AppStores/AppStores';
import AppFeatures from '../../components/AppFeatures/AppFeatures';
import './LApplication.css';

const LApplication = () => {
  return (
    <div className="application-page">
      <AppHero />
      <AppStores />
      <AppFeatures />
    </div>
  );
};

export default LApplication;
