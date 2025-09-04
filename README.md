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
npm run start
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

## 👥 Contribution

Ce projet suit les conventions de code standard React avec:
- Composants fonctionnels
- Hooks React
- Structure modulaire
- CSS séparé par composant
