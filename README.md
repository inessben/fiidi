# FIIDI - Site Vitrine

Site vitrine officiel pour FIIDI, l'application et le festival dédiés au cinéma indépendant.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
npm install
```

### Développement
```bash
npm start
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production
```bash
npm run build
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header/         # Navigation principale
│   ├── Footer/         # Pied de page
│   ├── Hero/           # Section héro page d'accueil
│   ├── FeaturesSection/ # Section fonctionnalités
│   ├── AppHero/        # Héro page application
│   ├── AppStores/      # Liens téléchargement app
│   └── AppFeatures/    # Fonctionnalités app
├── pages/              # Pages principales
│   ├── Home/           # Page d'accueil
│   ├── LApplication/   # Page application
│   ├── LeFestival/     # Page festival
│   └── LeBlog/         # Page blog
└── App.js              # Configuration des routes
```

## 🎨 Design System

### Couleurs principales
- Jaune accent: `#FFD700`
- Noir: `#000000`
- Gris foncé: `#333333`
- Blanc: `#FFFFFF`

### Composants CSS réutilisables
- `.btn` - Boutons génériques
- `.btn-primary` - Bouton principal jaune
- `.yellow-bg` - Fond jaune
- `.yellow-accent` - Texte jaune
- `.container` - Conteneur centré
- `.section` - Espacement vertical

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints à:
- Mobile: < 768px
- Desktop: ≥ 768px

## 🔧 Technologies utilisées

- React 18
- React Router DOM
- CSS3 (Grid & Flexbox)
- Mobile-first responsive design

## 📄 Pages disponibles

- **Accueil** (`/`) - Page principale avec héro et présentation
- **L'Application** (`/application`) - Détails sur l'application mobile
- **Le Festival** (`/festival`) - Informations complètes sur le festival
- **Le Blog** (`/blog`) - Section blog (en développement)

## 🚀 Déploiement

Le projet peut être déployé sur n'importe quelle plateforme supportant les applications React statiques:
- Netlify
- Vercel
- GitHub Pages
- Heroku

## 👥 Contribution

Ce projet suit les conventions de code standard React avec:
- Composants fonctionnels
- Hooks React
- Structure modulaire
- CSS séparé par composant
