import { Category } from '../../types/course';

export const sqlCourse: Category = {
  id: 'sql',
  title: 'SQL',
  description: 'Apprenez à manipuler les bases de données',
  icon: 'Database',
  subCategories: [
    {
      id: 'bases-explaination',
      title: 'Introduction',
      description: 'Introduction afin de comprendre à quoi elles servent.',
      content: [
        {
          type: 'text',
          content: `
# 🌟 **Introduction aux bases de données** 🌟

Les bases de données... Ça sonne sérieux, non ? Mais en vrai, c'est juste un truc qu'on utilise TOUS LES JOURS sans même y penser. 😎

👉 **Exemple de fou** :
Quand tu remplis un formulaire pour te faire livrer ton burger préféré 🍔, ou que tu crées un compte sur Insta 📱, toutes ces infos sont stockées dans... une base de données !

**Mais y’a un hic 🤔** : Les bases de données, elles fonctionnent uniquement sur des serveurs ! 🖥️

---

## **Et si on n’a pas de serveur ?! 😱**

Pas de panique, jeune padawan du code 🧙‍♂️ ! Avant tout, sache qu’un *langage de programmation serveur* est un langage qui s’exécute directement sur un serveur (merci Captain Obvious 🦸).

💡 Heureusement, y’a des logiciels qui sauvent la mise. En NSI, tu vas sûrement utiliser un logiciel du genre :
- **WAMP** pour Windows 🪟,
- **MAMP** pour Mac 🍏,
- **LAMP/XAMP** si tu veux faire le/la techie de l’extrême.

Ces logiciels transforment ton PC (ou ton Mac) en *mini-serveur maison*. Genre, ton propre serveur perso dans ta chambre 🤯.

**Et si tu veux pas installer ces trucs ?** Pas de souci. Tout fonctionnera pareil, sauf que ton interface aura un look différent. Easy peasy.

---

## **🌐 Installer les logiciels (en mode fastoche)**

Choisis ton système d’exploitation et clique sur le bon lien pour télécharger :

- **Windows** : [Télécharge WAMP](https://www.wampserver.com/) 🖥️
- **MacOS** : [Télécharge MAMP](https://www.mamp.info/en/) 🍏
- **Linux** : [Télécharge LAMP](ttps://ampps.com/downloads/) 🐧

⚠️ **Pro Tip** : Fais bien gaffe à suivre le tuto d’installation pour éviter de maudire ton ordi à 2h du mat'.

---

🎉 Voilà ! Maintenant tu es ready pour devenir le boss des bases de données. Prends ton courage, ton clavier, et GO 🚀 !
`},
        {
          type: 'buttonGroup',
          content: '',
          buttons: [
            {
              text: "WAMP (Windows)",
              link: "https://www.wampserver.com/",
              variant: "primary",
              icon: "ExternalLink"
            },
            {
              text: "MAMP (Mac)",
              link: "https://www.mamp.info/en/",
              variant: "primary",
              icon: "ExternalLink"
            },
            {
              text: "LAMP (Linux/Mac)",
              link: "https://ampps.com/downloads/",
              variant: "primary",
              icon: "ExternalLink"
            }
          ]
        },
      ],
    },
    {
      id: 'bases-terminal',
      title: 'Terminal et commandes de bases',
      description: 'Présentation de la console MariaDB & explications des commandes de bases.',
      content: [
        {
          type: 'text',
          content: `
## 🎮 **La console MariaDB : Ton nouveau terrain de jeu !** 🎮  

Alors, la console MariaDB, ce n’est pas une PS5, c’est clair. Mais t'inquiète, c’est quand même cool (promis 🤞). C’est un outil pour discuter direct avec le serveur, genre t’es un hacker dans un film 🎬.  

---

### **🛠️ Comment ouvrir la console MariaDB ?**  

1. Lance **WAMP**.  
2. Clique sur **MariaDB** puis sur **console MariaDB**.  

🎯 *C’est comme ouvrir une boîte magique pour programmer comme un boss.*  

![Console MariaDB avec WAMP](/imgs/sql/wamp-console-mariadb.png)  

---

### **🔐 Connecte-toi !**  

Quand tu ouvres la console, il faut s’identifier :  

- **Nom d’utilisateur** : \`root\`  
- **Mot de passe** : Vide (appuie juste sur **Entrée**).  

❗ **Si ça ne marche pas :** Demande à ton prof les identifiants (ou trouve un plan B 😅).  

---

## **💻 Les commandes de base pour MariaDB**  

On commence par les classiques. Tu veux voir les bases de données déjà créées ? Facile :`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `# Affiche les bases de données existantes
SHOW DATABASES;`,
            explanations: {
              'SHOW DATABASES;': "Cette commande liste toutes les bases de données déjà prêtes à l’emploi sur ton serveur.",
            }
          }
        },
        {
          type: 'text',
          content: `
> 💡 **Astuce** : Mets toujours un point-virgule \`;\` à la fin de tes commandes, sinon... *ça marchera pas* 😬.
---

## **⚡ Créer, supprimer et utiliser une base de données**

Bon, afficher les bases, c’est bien beau, mais faut aussi savoir les manipuler. Voici comment faire :`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `# Supprime une bases de donnée
DROP DATABASE maBase;

# Crée une base de donnée
CREATE DATABASE maBase;

# Utilise une base de donnée
USE maBase;`,
            explanations: {
              'DROP DATABASE maBase;': "Supprime la base de données 'maBase' 🗑️ (*Bye bye*).",
              'CREATE DATABASE maBase;': "Crée une nouvelle base de données 'maBase' ✨",
              'USE maBase;': "Active la base 'maBase' pour bosser dessus 👨‍💻."
            }
          }
        },
        {
          type: 'text',
          content: `
---

## 🎉 **Félicitations !**
Tu sais maintenant discuter avec MariaDB comme un pro. Prêt à coder, supprimer et créer des bases à gogo ? Let's gooo 🚀 !`},
      ]
    },
    {
      id: 'create-table',
      title: 'Créer une table',
      description: 'Créer une table dans une base de données.',
      content: [
        {
          type: 'text',
          content: `
# 🛠️ **Créer une table dans MariaDB : Le guide ultime (avec style)** 🎉  

Bon, t’as une base de données ? Super, mais elle est vide. C’est comme un burger sans steak : inutile. 🍔 Maintenant, on va apprendre à **créer une table** et à la personnaliser avec classe.  

---

### **🛑 La commande magique : \`CREATE TABLE\`**  

Voici la formule de base pour créer une table :`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `# Exemple de structuration non fonctionnel
CREATE TABLE nom_de_la_table (
  colonne1 TYPE_DE_DONNÉE CONSTRAINTS,
  colonne2 TYPE_DE_DONNÉE CONSTRAINTS,
  ...
) ENGINE=InnoDB;`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
#### **💡 Décryptage des éléments :**  
- **\`nom_de_la_table\`** : Le nom que tu donnes à ta table. C’est comme son prénom, choisis un truc clair. 😎  
- **\`colonne1\` et \`colonne2\`** : Les noms des colonnes, alias les catégories de données que tu veux stocker.  
- **\`TYPE_DE_DONNÉE\`** : Le type d’info que la colonne va contenir (texte, nombres, dates…).  
- **\`CONSTRAINTS\`** : Les règles pour chaque colonne (ex. "doit toujours avoir une valeur").  
- **\`ENGINE = InnoDB\`** : Le moteur utilisé pour gérer ta table. *InnoDB* est le choix par défaut (et le meilleur 💪).  

---

### **📝 Exemple simple : Créer une table d’utilisateurs**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `# Requête pour créer une table d'utilisateurs
CREATE TABLE utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  date_inscription DATE
) ENGINE=InnoDB;`,
            explanations: {
              'CREATE TABLE utilisateurs (': "Crée une table nommée 'utilisateurs' 🎉",
              'id INT AUTO_INCREMENT PRIMARY KEY,': "Crée une colonne 'id' qui s'incrémente automatiquement et est la clé primaire 🔑",
              'nom VARCHAR(50) NOT NULL,': "Crée une colonne 'nom' de type texte (50 caractères max) qui ne peut pas être vide ❌",
              'email VARCHAR(100) UNIQUE,': "Crée une colonne 'email' de type texte (100 caractères max) qui doit être unique 🌟",
              'date_inscription DATE': "Crée une colonne 'date_inscription' de type date 📅",
              ') ENGINE=InnoDB;': "Utilise le moteur InnoDB pour gérer la table 🚀"
            }
          }
        },
        {
          type: 'text',
          content: `

#### **🚀 Explications détaillées ligne par ligne :**  
- \`id INT AUTO_INCREMENT PRIMARY KEY\` :  
  - **\`INT\`** : La colonne contient des nombres entiers.  
  - **\`AUTO_INCREMENT\`** : L’id s’incrémente tout seul (1, 2, 3...), ce qu'il veut dire qu'il augmente de 1 automatiquement à chaque nouveau utilisateur.  
  - **\`PRIMARY KEY\`** : C’est la clé primaire de la table, chaque utilisateur aura un ID différent. 🆔  

- \`nom VARCHAR(50) NOT NULL\` :  
  - **\`VARCHAR(50)\`** : Texte jusqu’à 50 caractères (prénoms, noms, etc.).  
  - **\`NOT NULL\`** : Impossible de laisser cette case vide. Pas de nom = pas de compte. 🙅  

- \`email VARCHAR(100) UNIQUE\` :  
  - **\`VARCHAR(100)\`** : Texte jusqu’à 100 caractères (emails).  
  - **\`UNIQUE\`** : Chaque email doit être unique. Pas de doublon, pas de spam. 📧  

- \`date_inscription DATE\` :  
  - **\`DATE\`** : Contient une date (ex. "2024-12-12").  

- \`ENGINE = InnoDB\` :  
  - Utilise **InnoDB** pour gérer la table avec des fonctionnalités avancées comme les *transactions* et les *clés étrangères*. Ne t'attarde pas trop là-dessus, met le juste à chaque fois. 😅  

---

### **🔥 Les types de données principaux :** (à connaitre)

![Types de données principales](${'/imgs/sql/insert-parameters-types.png'})

---

### **🌟 Les contraintes utiles :** (à connaitre)

![Contraintes utiles](${'/imgs/sql/insert-parameters-constraints.png'})

---

### **⚡ Ton tour : Essaye !**

Crée une table avec les colonnes que tu veux ! Voici un TP à suivre :

![TP Créer une table](${'/imgs/sql/create-table-tp.png'})

🚀 Maintenant, à toi de jouer. C’est comme construire une maison... mais pour tes données 🏡 !
`},
        {
          type: 'button',
          content: '',
          buttons: [{
            text: "Correction",
            link: "/resources/exercice-create-table.png",
            download: true,
            variant: "primary",
            icon: "Download"
          }]
        }
      ]
    }
  ]
};