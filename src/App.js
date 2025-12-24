import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Application from './pages/Application/Application';
import Festival from './pages/Festival/Festival';
import Contact from './pages/Contact/Contact';
import CookiePolicy from './pages/Legal/CookiePolicy';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Mentions from './pages/Legal/Mentions';
import Sitemap from './pages/Legal/Sitemap';
import './App.css';

// Composant pour scroll vers le haut lors du changement de route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/application" element={<Application />} />
              <Route path="/festival" element={<Festival />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal/cookies" element={<CookiePolicy />} />
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/mentions" element={<Mentions />} />
              <Route path="/legal/sitemap" element={<Sitemap />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
