import React from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturesSection />
    </div>
  );
};

export default Home;
