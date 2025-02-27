# 🛠️ Comment créer un package Node.js "About Me" ?
Je vais t'apprendre a créer une commande `npx` qui affiche une carte de "visite" (about-me) dans le terminal, avec un menu interactif 
---

## 📍 1. Choisir un nom de package
Avant de commencer, choisis un nom unique pour ton package npm (attention, c'est important).  
Ce sera la commande que les utilisateurs taperont dans leur terminal :

Exemple de commande :
```sh
npx nom-commande
```

## 📍 2. Créer un nouveau dossier et fichier
```sh
mkdir nom-du-package
cd nom-du-package
```

## 📍 3. Initialiser le projet en tant que package Node.js
On utilise cette commande ci-dessous pour initialiser notre projet en tant que package Node.js :
```sh
npm init -y
```

## 📍 4. Création d'un script JS exécutable
On n'oublie pas de créer d'abord notre fichier :
```sh
touch index.js
```

Et ensuite, on ajoute dans notre package.json :
```json
"bin": {
  "nom-commande": "./index.js"
},
```

Pour rendre le script exécutable, il va falloir faire une dernière étape dans notre terminal :

### Linux & MacOS :
```sh
chmod +x index.js
```

### Windows :
**PS** : git doit être installé.
```sh
git update-index --chmod=+x index.js
```

Tu peux maintenant aussi "link" ta commande pour la tester localement : 

```sh
npm link
```

## 📍 5. Installation des dépendances (facultatif)
Tu peux utiliser plusieurs outils pour rendre ton CLI plus interactif et surtout plus joli ! :
```sh
npm install boxen chalk inquirer clear open
```

| 📦 Package    | 🛠️ Description |
|--------------|--------------------------|
| **boxen**    | Permet d'afficher du texte encadré dans une boîte, utile pour organiser l'affichage dans le terminal. |
| **chalk**    | Ajoute des couleurs et du style (gras, italique) au texte dans le terminal pour le rendre plus lisible. |
| **inquirer** | Crée des menus interactifs où l'utilisateur peut sélectionner une option, répondre à une question, etc. |
| **clear**    | Nettoie l'écran du terminal avant d'afficher du contenu, pour un rendu plus propre. |
| **open**     | Ouvre un lien web ou un fichier directement dans le navigateur ou l'application par défaut du système. |

Je te laisse t'amuser et consulter les différentes documentations/tutoriels pour explorer ces packages !
**(Tu peux voir le code dans mon repo pour avoir un exemple concret d'utilisation de ces packages)**

## ✨ 6. Publication sur NPM
**Si tu as fini d'écrire ton package, alors tu peux maintenant le publier !**

Commence par te connecter : 

**PS** : Tu dois créer un compte sur le site [npm](https://www.npmjs.com/)
```sh
npm login
```

Ensuite, publie ton package :
```sh
npm publish
```

Maintenant, tu peux tester n'importe ou ta commande ! : 
```sh 
npx nom-commande
```
