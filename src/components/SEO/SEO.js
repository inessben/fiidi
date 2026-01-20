import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant SEO pour gérer les meta tags dynamiques par page
 * Compatible avec React 19 sans dépendances externes
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://fiidi.com/logo512.png',
  ogType = 'website',
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://fiidi.com';
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  
  // Titre par défaut
  const fullTitle = title 
    ? `${title} | FIIDI - Cinéma Indépendant`
    : 'FIIDI | Application et Festival du Cinéma Indépendant';

  useEffect(() => {
    // Mise à jour du titre
    document.title = fullTitle;

    // Fonction pour mettre à jour ou créer une meta tag
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta description
    if (description) {
      updateMetaTag('description', description);
    }

    // Meta keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', ogType, true);
    if (description) {
      updateMetaTag('og:description', description, true);
    }
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }

    // Twitter tags
    updateMetaTag('twitter:title', fullTitle);
    if (description) {
      updateMetaTag('twitter:description', description);
    }
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage);
    }

    // Données structurées spécifiques à la page
    if (structuredData) {
      // Supprimer les anciennes données structurées de page
      const existingPageScript = document.querySelector('script[data-page-structured]');
      if (existingPageScript) {
        existingPageScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-structured', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        const scriptToRemove = document.querySelector('script[data-page-structured]');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [fullTitle, description, keywords, fullUrl, ogImage, ogType, structuredData]);

  return null;
};

export default SEO;
