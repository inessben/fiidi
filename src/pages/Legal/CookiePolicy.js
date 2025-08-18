import React from 'react';
import './Legal.css';

const CookiePolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Politique de Cookies</h1>
          <p className="legal-date">Dernière mise à jour : 18 janvier 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile 
              lorsque vous visitez notre site web. Les cookies nous permettent de reconnaître votre 
              navigateur et de capturer et mémoriser certaines informations.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Comment utilisons-nous les cookies ?</h2>
            <p>FIIDI utilise des cookies pour plusieurs raisons :</p>
            <ul>
              <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement de base du site</li>
              <li><strong>Cookies de performance :</strong> Nous aident à améliorer nos services</li>
              <li><strong>Cookies de fonctionnalité :</strong> Mémorisent vos préférences</li>
              <li><strong>Cookies d'analyse :</strong> Nous permettent de comprendre l'utilisation du site</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Types de cookies que nous utilisons</h2>
            
            <div className="cookie-table">
              <div className="cookie-row">
                <div className="cookie-type">
                  <h4>Cookies strictement nécessaires</h4>
                  <p>Ces cookies sont indispensables au bon fonctionnement du site.</p>
                </div>
                <div className="cookie-duration">Durée de session</div>
              </div>
              
              <div className="cookie-row">
                <div className="cookie-type">
                  <h4>Cookies de performance</h4>
                  <p>Collectent des informations sur l'utilisation du site de manière anonyme.</p>
                </div>
                <div className="cookie-duration">30 jours</div>
              </div>
              
              <div className="cookie-row">
                <div className="cookie-type">
                  <h4>Cookies de fonctionnalité</h4>
                  <p>Mémorisent vos choix et préférences pour améliorer votre expérience.</p>
                </div>
                <div className="cookie-duration">1 an</div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>4. Gestion des cookies</h2>
            <p>
              Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. 
              Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et 
              configurer la plupart des navigateurs pour empêcher leur installation.
            </p>
            
            <div className="browser-instructions">
              <h4>Instructions par navigateur :</h4>
              <ul>
                <li><strong>Chrome :</strong> Paramètres > Confidentialité et sécurité > Cookies</li>
                <li><strong>Firefox :</strong> Options > Vie privée et sécurité > Cookies</li>
                <li><strong>Safari :</strong> Préférences > Confidentialité > Cookies</li>
                <li><strong>Edge :</strong> Paramètres > Cookies et autorisations de site</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2>5. Cookies tiers</h2>
            <p>
              Dans certains cas particuliers, nous utilisons également des cookies fournis par des tiers de confiance. 
              Les services tiers que nous utilisons incluent :
            </p>
            <ul>
              <li>Google Analytics pour l'analyse du trafic</li>
              <li>Réseaux sociaux pour les boutons de partage</li>
              <li>Services de vidéos intégrées</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Consentement</h2>
            <p>
              En continuant à naviguer sur notre site, vous consentez à notre utilisation des cookies 
              conformément à cette politique. Si vous ne souhaitez pas accepter les cookies, 
              veuillez ajuster les paramètres de votre navigateur.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Modifications de cette politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique de cookies de temps à autre. 
              Nous vous encourageons à consulter régulièrement cette page pour rester informé 
              de la façon dont nous utilisons les cookies.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de cookies, 
              vous pouvez nous contacter à l'adresse : 
              <a href="mailto:appfiidi@gmail.com" className="legal-link">appfiidi@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
