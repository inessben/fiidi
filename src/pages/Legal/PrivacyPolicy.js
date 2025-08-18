import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Politique de Confidentialité</h1>
          <p className="legal-date">Dernière mise à jour : 18 janvier 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              FIIDI s'engage à protéger votre vie privée. Cette politique de confidentialité 
              explique comment nous collectons, utilisons, stockons et protégeons vos informations 
              personnelles lorsque vous utilisez nos services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Informations que nous collectons</h2>
            
            <div className="terms-grid">
              <div className="terms-card">
                <h4>Informations d'identification</h4>
                <p>Nom, prénom, adresse email, numéro de téléphone</p>
              </div>
              <div className="terms-card">
                <h4>Données d'utilisation</h4>
                <p>Pages visitées, temps passé, interactions avec l'application</p>
              </div>
              <div className="terms-card">
                <h4>Données techniques</h4>
                <p>Adresse IP, navigateur, système d'exploitation, cookies</p>
              </div>
              <div className="terms-card">
                <h4>Préférences</h4>
                <p>Goûts musicaux, événements favoris, préférences artistiques</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>3. Comment nous utilisons vos données</h2>
            <ul>
              <li>Fournir et améliorer nos services</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Communiquer avec vous concernant nos services</li>
              <li>Analyser l'utilisation de notre plateforme</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Base légale du traitement</h2>
            <p>Nous traitons vos données personnelles sur les bases légales suivantes :</p>
            <ul>
              <li><strong>Consentement :</strong> Lorsque vous nous donnez votre accord explicite</li>
              <li><strong>Contrat :</strong> Pour l'exécution de nos services</li>
              <li><strong>Intérêt légitime :</strong> Pour améliorer nos services</li>
              <li><strong>Obligation légale :</strong> Pour respecter la réglementation</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Partage de vos données</h2>
            <div className="legal-warning">
              <p><strong>Important :</strong> Nous ne vendons jamais vos données personnelles à des tiers.</p>
            </div>
            <p>Nous pouvons partager vos données uniquement dans les cas suivants :</p>
            <ul>
              <li>Avec votre consentement explicite</li>
              <li>Avec nos partenaires de confiance (hébergement, analytics)</li>
              <li>En cas d'obligation légale</li>
              <li>Pour protéger nos droits et ceux de nos utilisateurs</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <div className="terms-grid">
              <div className="terms-card">
                <h4>Droit d'accès</h4>
                <p>Demander l'accès à vos données personnelles</p>
              </div>
              <div className="terms-card">
                <h4>Droit de rectification</h4>
                <p>Corriger des données inexactes</p>
              </div>
              <div className="terms-card">
                <h4>Droit à l'effacement</h4>
                <p>Demander la suppression de vos données</p>
              </div>
              <div className="terms-card">
                <h4>Droit à la portabilité</h4>
                <p>Récupérer vos données dans un format structuré</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>7. Sécurité des données</h2>
            <p>Nous mettons en place des mesures techniques et organisationnelles appropriées :</p>
            <ul>
              <li>Chiffrement des données sensibles</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Surveillance et audits réguliers</li>
              <li>Formation du personnel à la protection des données</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Durée de conservation</h2>
            <p>Nous conservons vos données personnelles pendant :</p>
            <ul>
              <li><strong>Compte actif :</strong> Tant que votre compte est actif</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              <li><strong>Données marketing :</strong> 3 ans après le dernier contact</li>
              <li><strong>Obligations légales :</strong> Selon les exigences légales</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Contact</h2>
            <p>
              Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité :
            </p>
            <div className="legal-info">
              <p><strong>Email :</strong> <a href="mailto:appfiidi@gmail.com" className="legal-link">appfiidi@gmail.com</a></p>
              <p><strong>Délégué à la Protection des Données :</strong> <a href="mailto:appfiidi@gmail.com" className="legal-link">appfiidi@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
