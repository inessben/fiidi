import React from 'react';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Conditions Générales d'Utilisation</h1>
          <p className="legal-date">Dernière mise à jour : 18 janvier 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant les services FIIDI, vous acceptez d'être lié par ces conditions générales d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description du service</h2>
            <p>FIIDI est une plateforme dédiée à :</p>
            <ul>
              <li>La découverte de nouveaux talents musicaux et artistiques</li>
              <li>L'organisation et la promotion d'événements culturels</li>
              <li>La mise en relation entre artistes et professionnels</li>
              <li>Le partage de contenu culturel et artistique</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Inscription et compte utilisateur</h2>
            <div className="legal-note">
              <p><strong>Important :</strong> Vous devez avoir au moins 16 ans pour créer un compte FIIDI.</p>
            </div>
            <p>Pour utiliser certaines fonctionnalités, vous devez créer un compte en fournissant :</p>
            <ul>
              <li>Des informations exactes et à jour</li>
              <li>Une adresse email valide</li>
              <li>Un mot de passe sécurisé</li>
            </ul>
            <p>Vous êtes responsable de la confidentialité de votre mot de passe et de toutes les activités de votre compte.</p>
          </section>

          <section className="legal-section">
            <h2>4. Utilisation acceptable</h2>
            <h3>Vous vous engagez à :</h3>
            <ul>
              <li>Respecter les droits d'auteur et de propriété intellectuelle</li>
              <li>Ne pas publier de contenu offensant, diffamatoire ou illégal</li>
              <li>Ne pas usurper l'identité d'autrui</li>
              <li>Ne pas utiliser le service à des fins commerciales non autorisées</li>
              <li>Respecter la vie privée des autres utilisateurs</li>
            </ul>

            <h3>Il est interdit de :</h3>
            <ul>
              <li>Utiliser des robots, scrapers ou autres outils automatisés</li>
              <li>Tenter de contourner les mesures de sécurité</li>
              <li>Publier du spam ou du contenu non sollicité</li>
              <li>Harceler ou intimider d'autres utilisateurs</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Contenu utilisateur</h2>
            <p>
              En publiant du contenu sur FIIDI, vous accordez à FIIDI une licence non exclusive, 
              transférable, sous-licenciable, libre de redevances et mondiale pour utiliser, 
              afficher, reproduire, modifier, adapter et distribuer ce contenu.
            </p>
            <p>Vous déclarez et garantissez que :</p>
            <ul>
              <li>Vous détenez tous les droits sur le contenu publié</li>
              <li>Votre contenu ne viole aucune loi ou droit de tiers</li>
              <li>Vous avez obtenu toutes les autorisations nécessaires</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Propriété intellectuelle</h2>
            <p>
              Tous les éléments du service FIIDI (design, textes, images, logos, etc.) 
              sont protégés par les droits de propriété intellectuelle et appartiennent à FIIDI ou à ses licenseurs.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Suspension et résiliation</h2>
            <p>FIIDI se réserve le droit de :</p>
            <ul>
              <li>Suspendre ou résilier votre compte en cas de violation des présentes conditions</li>
              <li>Supprimer du contenu non conforme</li>
              <li>Modifier ou interrompre le service avec ou sans préavis</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Limitation de responsabilité</h2>
            <div className="legal-warning">
              <p>
                <strong>Clause importante :</strong> FIIDI ne peut être tenu responsable des dommages 
                indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation de nos services.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>9. Modifications</h2>
            <p>
              FIIDI se réserve le droit de modifier ces conditions à tout moment. 
              Les modifications entrent en vigueur dès leur publication sur le site. 
              L'utilisation continue du service après modification constitue une acceptation des nouvelles conditions.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Droit applicable</h2>
            <p>
              Ces conditions sont régies par le droit français. 
              Tout litige sera soumis à la compétence exclusive des tribunaux de Marseille.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact</h2>
            <p>
              Pour toute question concernant ces conditions d'utilisation :
              <a href="mailto:appfiidi@gmail.com" className="legal-link">appfiidi@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
