import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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
    </div>
  );
};

export default Contact;
