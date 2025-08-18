import React from 'react';
import './Legal.css';

const Mentions = () => {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Mentions légales</h1>
        <p className="legal-subtitle">Informations légales obligatoires</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>Identité de l'éditeur</h2>
          <div className="info-block">
            <p><strong>Nom :</strong> FIIDI APP</p>
            <p><strong>Forme juridique :</strong> [À compléter]</p>
            <p><strong>Capital social :</strong> [À compléter]</p>
            <p><strong>Siège social :</strong> [Adresse à compléter]</p>
            <p><strong>RCS :</strong> [Numéro à compléter]</p>
            <p><strong>SIRET :</strong> [Numéro à compléter]</p>
            <p><strong>Code APE :</strong> [Code à compléter]</p>
            <p><strong>Numéro de TVA intracommunautaire :</strong> [Numéro à compléter]</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <div className="info-block">
            <p><strong>Email :</strong> appfiidi@gmail.com</p>
            <p><strong>Téléphone :</strong> [Numéro à compléter]</p>
            <p><strong>Adresse postale :</strong> [Adresse à compléter]</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>Directeur de la publication</h2>
          <div className="info-block">
            <p><strong>Nom :</strong> [Nom à compléter]</p>
            <p><strong>Qualité :</strong> [Fonction à compléter]</p>
            <p><strong>Contact :</strong> appfiidi@gmail.com</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>Hébergement</h2>
          <div className="info-block">
            <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
            <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
            <p><strong>Site web :</strong> [Site de l'hébergeur]</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale 
            sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
            reproduction sont réservés, y compris pour les documents téléchargeables et 
            les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support quelconque quel 
            qu'il soit est formellement interdite sauf autorisation expresse du directeur 
            de la publication.
          </p>
        </section>

        <section className="legal-section">
          <h2>Responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le 
            site remis à jour à différentes périodes de l'année, mais peut toutefois 
            contenir des inexactitudes ou des omissions.
          </p>
          <p>
            Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, 
            merci de bien vouloir le signaler par email, à l'adresse appfiidi@gmail.com, 
            en décrivant le problème de la manière la plus précise possible.
          </p>
        </section>

        <section className="legal-section">
          <h2>Liens hypertextes</h2>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site web en 
            direction d'autres ressources présentes sur le réseau Internet ne sauraient 
            engager la responsabilité de FIIDI APP.
          </p>
        </section>

        <section className="legal-section">
          <h2>Litiges</h2>
          <p>
            Les présentes conditions du site FIIDI et votre utilisation de ce site sont 
            régies par la loi française. Tout litige portant sur l'utilisation du site 
            FIIDI sera de la compétence exclusive des tribunaux de [Ville à compléter].
          </p>
        </section>

        <div className="legal-footer-note">
          <p>
            <strong>Dernière mise à jour :</strong> Janvier 2025
          </p>
          <p>
            Pour toute question concernant ces mentions légales, vous pouvez nous contacter 
            à l'adresse : <a href="mailto:legal@gmail.com">legal@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentions;
