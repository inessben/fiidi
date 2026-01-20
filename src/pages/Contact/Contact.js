import React, { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import './Contact.css';

const Contact = () => {
  // Données structurées pour la page Contact
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact FIIDI",
    "description": "Contactez l'équipe FIIDI pour toute question sur l'application ou le festival de cinéma indépendant.",
    "url": "https://fiidi.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "FIIDI",
      "email": "appfiidi@gmail.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "appfiidi@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["French", "English"]
      },
      "sameAs": [
        "https://www.instagram.com/fiidi.app.festival/",
        "https://linkedin.com/company/fiidi/",
        "https://youtube.com/@fiidiapp"
      ]
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Configuration Google Sheets via Google Apps Script
      const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
      
      const formDataForSheet = new FormData();
      formDataForSheet.append('name', formData.name);
      formDataForSheet.append('email', formData.email);
      formDataForSheet.append('subject', formData.subject);
      formDataForSheet.append('message', formData.message);
      formDataForSheet.append('timestamp', new Date().toISOString());
      
      // Envoi vers Google Sheets
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataForSheet
      });
      
      if (response.ok) {
        alert('Message envoyé avec succès ! Nous vous répondrons rapidement à appfiidi@gmail.com.');
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
      
      // Reset du formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement à appfiidi@gmail.com');
    }
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact - FIIDI Cinéma Indépendant"
        description="Contactez l'équipe FIIDI pour vos questions sur l'application ou le festival de cinéma indépendant. Email : appfiidi@gmail.com. Réponse sous 24h."
        keywords="contact FIIDI, email FIIDI, partenariat cinéma, collaboration festival, support FIIDI app, presse cinéma indépendant"
        structuredData={contactStructuredData}
      />
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Contactez-nous</h1>
            <p className="hero-description">
              Une question, une suggestion ou envie de collaborer ?
              Notre équipe est là pour vous accompagner dans votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Envoyez-nous un message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="general">Question générale</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="festival">Festival FIIDI</option>
                    <option value="application">Application mobile</option>
                    <option value="presse">Demande presse</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="support">Support technique</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre demande en détail..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Informations de contact</h2>

              <div className="contact-info-grid">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>appfiidi@gmail.com</p>
                    <p className="contact-desc">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Adresse</h3>
                    <p>Paris, France</p>
                    <p className="contact-desc">Sur rendez-vous uniquement (pro)</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Suivez-nous</h3>
                    <div className="social-links">
                      <a href="https://www.instagram.com/fiidi.app.festival/" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                      <a href="https://linkedin.com/company/fiidi/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <a href="https://youtube.com//@fiidiapp" target="_blank" rel="noopener noreferrer">
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Instagram */}
      <section className="instagram-section">
        <div className="container">
          <a 
            href="https://www.instagram.com/fiidi.app.festival/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-card"
          >
            <div className="instagram-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div className="instagram-card-text">
              <h3 className="instagram-title">Suivez-nous sur Instagram</h3>
              <p className="instagram-subtitle">@fiidi.app.festival</p>
            </div>
            <span className="instagram-follow-btn">Suivre</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
