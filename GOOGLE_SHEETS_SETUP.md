# Configuration Google Sheets pour le formulaire de contact

## Étape 1: Créer une Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille de calcul
3. Nommez-la "FIIDI Contact Form Responses"
4. Créez les colonnes suivantes dans la première ligne :
   - A1: `name`
   - B1: `email` 
   - C1: `subject`
   - D1: `message`
   - E1: `timestamp`

## Étape 2: Créer le Google Apps Script

1. Dans votre Google Sheet, allez dans `Extensions > Apps Script`
2. Supprimez le code par défaut et collez ce code :

```javascript
function doPost(e) {
  try {
    // Ouvrir la feuille de calcul
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Récupérer les données du formulaire
    var name = e.parameter.name;
    var email = e.parameter.email;
    var subject = e.parameter.subject;
    var message = e.parameter.message;
    var timestamp = e.parameter.timestamp;
    
    // Ajouter une nouvelle ligne avec les données
    sheet.appendRow([name, email, subject, message, timestamp]);
    
    // Envoyer un email de notification à appfiidi@gmail.com
    var emailBody = `
Nouveau message reçu via le formulaire de contact FIIDI:

Nom: ${name}
Email: ${email}
Sujet: ${subject}
Message: ${message}
Date: ${new Date(timestamp).toLocaleString('fr-FR')}

---
Ce message a été automatiquement généré depuis le site FIIDI.
    `;
    
    GmailApp.sendEmail(
      'appfiidi@gmail.com',
      `[FIIDI] Nouveau message de contact: ${subject}`,
      emailBody
    );
    
    // Retourner une réponse de succès
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // En cas d'erreur
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Étape 3: Déployer le script

1. Cliquez sur "Déployer" > "Nouveau déploiement"
2. Sélectionnez "Application web" comme type
3. Mettez la description : "FIIDI Contact Form Handler"
4. Exécuter en tant que : "Moi"
5. Accès : "Tout le monde"
6. Cliquez sur "Déployer"
7. Copiez l'URL du déploiement

## Étape 4: Mettre à jour le code React

Dans le fichier `src/pages/Contact/Contact.js`, remplacez :
```javascript
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

Par :
```javascript
const scriptURL = 'VOTRE_URL_DE_DEPLOIEMENT_ICI';
```

**Important :** L'URL doit se terminer par `/exec` pour fonctionner correctement.

Exemple d'URL complète :
```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycby...../exec';
```

## Test

1. Redémarrez votre application React
2. Allez sur la page Contact
3. Remplissez et soumettez le formulaire
4. Vérifiez que :
   - Les données apparaissent dans votre Google Sheet
   - Vous recevez un email de notification à appfiidi@gmail.com

## Permissions

La première fois que vous déployez, Google vous demandera d'autoriser l'accès à :
- Google Sheets (pour écrire les données)
- Gmail (pour envoyer les notifications)

## Sécurité

- Le script est sécurisé et ne peut être exécuté que via les requêtes POST
- Toutes les données sont stockées dans votre Google Sheet privée
- Les emails sont envoyés uniquement à appfiidi@gmail.com

## Troubleshooting

Si le formulaire ne fonctionne pas :
1. Vérifiez que l'URL du script est correcte
2. Assurez-vous que le script Apps Script est déployé comme "Application web"
3. Vérifiez les permissions dans Google Apps Script
4. Consultez les logs dans Google Apps Script pour voir les erreurs
