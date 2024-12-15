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

🚀 Maintenant, à toi de jouer. C’est comme construire une maison... mais pour tes données 🏡 !
`}
      ]
    },
    {
      id: 'create-table-keys',
      title: 'Clés Primaires et Secondaires',
      description: 'A quoi servent les clefs primaires et secondaires ?',
      content: [
        {
          type: 'text',
          content: `
# 🛠️ **Créer une table avec des clés primaires et des clés étrangères (foreign keys)**  

Les clés primaires et les clés étrangères (foreign keys) sont la base des bases en bases de données (tu l'as ? 😏). Elles permettent de structurer les tables et de créer des liens entre elles.  

---

### **🔑 Qu’est-ce qu’une clé primaire (Primary Key) ?**  
Une **clé primaire** identifie chaque ligne de manière unique dans une table. C’est comme ton numéro d’identité : personne d’autre n’a le même.  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `-- Ajout d'une clé primaire dans la requête.
id INT AUTO_INCREMENT PRIMARY KEY
# OU (oui il a 2 méthodes)
PRIMARY KEY (id)`,
            explanations: {
              'id INT AUTO_INCREMENT PRIMARY KEY': "Ici, on défini l'attribu 'id' comme PRIMARY KEY 🔑 donc en élément unique !",
              'PRIMARY KEY (id)': "On défini l'attribu 'id' comme PRIMARY KEY 🔑, mais cette fois-ci à la fin de la requête."
            }
          }
        },
        {
          type: 'text',
          content: `
---

### **🌐 Qu’est-ce qu’une clé étrangère (Foreign Key) ?**  
Une **clé étrangère** est un lien entre deux tables. Elle fait référence à une clé primaire dans une autre table, un peu comme une adresse qui pointe vers une maison. 🏡  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `-- On ajoute des clés étrangères
FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id),
FOREIGN KEY (id_véhicule) REFERENCES véhicules(id)`,
            explanations: {
              'FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id),': "On ajoute une clé étrangère nomée 'id_utilisateur' dans cette table. Et on ajoute sa référence qui est 'id' dans la table 'utilisateurs'",
              'FOREIGN KEY (id_véhicule) REFERENCES véhicules(id)': "Ici, on fait la même chose mais avec les IDs de véhicules."
            }
          }
        },
        {
          type: 'text',
          content: `
Parfait 😊, maintenant regardons comment utiliser les clés primaires et étrangères dans des cas concrets.

---

## **Exemple complet : Créer deux tables avec des liens**  

Imaginons que tu veux créer une table \`utilisateurs\` et une table \`commandes\` (parce que nos utilisateurs aiment commander des pizzas 🍕).
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `-- Table des utilisateurs
CREATE TABLE utilisateurs (
  id INT AUTO_INCREMENT, -- Clé primaire
  nom VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- Table des commandes
CREATE TABLE commandes (
  id INT AUTO_INCREMENT, -- Clé primaire
  id_utilisateur INT, -- Clé étrangère
  produit VARCHAR(50) NOT NULL,
  date_commande DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)
) ENGINE=InnoDB;`,
            explanations: {
              'id INT AUTO_INCREMENT, -- Clé primaire': "On crée un élément pour notre base de donné et nous le marquons comme clé primaire SANS l'avoir encore défini (c'est juste pour se rappeler 😁)",
              'PRIMARY KEY (id)': "Ici, on défini enfin l'élément 'id' comme PRIMARY KEY",
              'id_utilisateur INT, -- Clé étrangère': "On crée un élément pour notre base de donné et nous le marquons comme clé étrangère SANS l'avoir encore défini (c'est juste pour se rappeler 😁)",
              'FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)': "Ici, on défini la clé étrangère 'id_utilisateur' et on le relis à l'élément 'id' de la table 'utilisateurs'."
            }
          }
        },
        {
          type: 'text',
          content: `
---

### **🚀 Explications complètes :**  

#### **🔍 Dans la table \`utilisateurs\` :**  
- **\`id INT AUTO_INCREMENT PRIMARY KEY\`** : Chaque utilisateur a un identifiant unique (clé primaire).  
- **\`nom VARCHAR(50) NOT NULL\`** : Le nom de l’utilisateur, obligatoire (pas de champ vide).  
- **\`email VARCHAR(100) UNIQUE NOT NULL\`** : Chaque email doit être unique et rempli.
- **\`PRIMARY KEY (id)\`** :  
  - Indique que \`id\` correspond à la clé primaire  de cette table (table : \`utilisateurs\`).  

#### **🔍 Dans la table \`commandes\` :**  
- **\`id INT AUTO_INCREMENT PRIMARY KEY\`** : Chaque commande a un ID unique.  
- **\`id_utilisateur INT\`** : Cette colonne stocke l’ID d’un utilisateur (lien avec \`utilisateurs\`).  
- **\`FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id)\`** :  
  - Indique que \`id_utilisateur\` correspond à la clé primaire \`id\` dans \`utilisateurs\`.  

---

### **Les règles des clés étrangères :**  

- **\`REFERENCES table(colonne)\`** : Fait le lien entre une clé étrangère et une clé primaire dans une autre table.

__Pas obligatoire à connaître, mais elles peuvent être utiles.__
- **\`ON DELETE CASCADE\`** : Supprime automatiquement les lignes liées quand la ligne principale est supprimée.  
- **\`ON UPDATE CASCADE\`** : Si la clé primaire change, la clé étrangère est mise à jour.  

---

### **👨‍💻 Autre exemple avec un lien entre 3 tables :**

**⚠️ Nous allons utiliser les différentes méthodes vus, afin d'avoir tous les exemples possibles. Tout n'est pas à connaître par coeur, à toi de faire le tri ! ⚠️**

Tu veux gérer une base de données pour une école avec des tables \`eleves\`, \`cours\` et \`inscriptions\` :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `-- Table des élèves
CREATE TABLE eleves (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

-- Table des cours
CREATE TABLE cours (
  id INT AUTO_INCREMENT,
  titre VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- Table des inscriptions (liens entre élèves et cours)
CREATE TABLE inscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_eleve INT,
  id_cours INT,
  date_inscription DATE NOT NULL,
  FOREIGN KEY (id_eleve) REFERENCES eleves(id) ON DELETE CASCADE,
  FOREIGN KEY (id_cours) REFERENCES cours(id) ON DELETE CASCADE
) ENGINE=InnoDB;`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
---

### **🎉 Récapitulatif des avantages :**  

- Les **clés primaires** garantissent que chaque ligne est unique (pas de doublons).  
- Les **clés étrangères** connectent tes tables et permettent de garder les données cohérentes.  
- Les options comme **ON DELETE CASCADE** ou **ON UPDATE CASCADE** facilitent la gestion des relations.  

---

### **🌟 À toi de jouer !**  
Essaie de créer tes propres tables avec des clés primaires et des foreign keys. C’est comme construire un réseau social, mais avec des tables et pas des amis ! 💻😄  
  `}
      ]
    },
    {
      id: 'create-table-exercice',
      title: 'Exercice : Créer une table',
      description: 'Exercice de validation des connaissances.',
      content: [
        {
          type: 'text',
          content: `
# **⚡ Ton tour : Essaye !**

*Afin de pouvoir faire cet exercice, tu dois absolulent avoir suivit tous les cours précédents.*

Tu vas devoir créer une base de donnée nommée \`autoschool\`. Voici toutes les informations concernant la base à construire :

![TP Créer une table](${'/imgs/sql/create-table-tp.png'})

En espérant que ça n'est pas été trop dur 😉.
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
    },
    {
      id: 'insert-data',
      title: 'Insérer des données dans une table',
      description: 'Apprends à insérer des données dans tes tables avec la commande INSERT INTO.',
      content: [
        {
          type: 'text',
          content: `
# 🍔 **Insérer des données dans une table : Le menu spécial INSERT INTO** 🎉

Maintenant que tu sais créer des tables, il est temps de les remplir ! Une table vide, c’est triste, non ? 😢 Imagine un resto sans clients ou une playlist sans chansons. Avec la commande **INSERT INTO**, tu vas pouvoir **ajouter des données** dans tes tables comme un chef 👩‍🍳.

---

## **🔑 La commande magique : \`INSERT INTO\`**

Voici la formule de base pour insérer des données dans une table :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `INSERT INTO nom_de_la_table (colonne1, colonne2, ...)
VALUES (valeur1, valeur2, ...);`,
            explanations: {
              'INSERT INTO nom_de_la_table (colonne1, colonne2, ...)': "Indique dans quelle table et quelles colonnes tu veux insérer des données.",
              'VALUES (valeur1, valeur2, ...);': "Les valeurs correspondantes à insérer dans les colonnes."
            }
          }
        },
        {
          type: 'text',
          content: `
### **🧩 Décryptage des éléments :**
- **\`nom_de_la_table\`** : Le nom de la table où tu veux ajouter des données.
- **\`colonne1, colonne2, ...\`** : Les colonnes dans lesquelles tu veux insérer des valeurs.
- **\`valeur1, valeur2, ...\`** : Les valeurs correspondantes que tu veux ajouter.

---

## **📝 Exemple simple : Insérer des utilisateurs**

Prenons une table \`utilisateurs\` comme exemple, que nous créons comme ceci :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `CREATE TABLE utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT
) ENGINE=InnoDB;`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
On veut insérer un utilisateur nommé **"Jean Dupont"** avec son email et son âge :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `INSERT INTO utilisateurs (nom, email, age)
VALUES ('Jean Dupont', 'jean.dupont@example.com', 30);`,
            explanations: {
              'INSERT INTO utilisateurs (nom, email, age)': "Indique que tu veux ajouter un utilisateur avec son nom, email et âge.",
              'VALUES (\'Jean Dupont\', \'jean.dupont@example.com\', 30);': "Les valeurs à insérer dans les colonnes correspondantes."
            }
          }
        },
        {
          type: 'text',
          content: `
**👉 Résultat :** Une nouvelle ligne est ajoutée dans la table avec :
- **nom** = "Jean Dupont"
- **email** = "jean.dupont@example.com"
- **age** = 30
- **id** = Généré automatiquement grâce à \`AUTO_INCREMENT\`.

---

## **✨ Variantes de l’insertion**

### **1️⃣ Insérer dans toutes les colonnes (ordre respecté)**

Si tu veux remplir **toutes les colonnes** de la table, tu peux te passer de la liste des colonnes :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `INSERT INTO utilisateurs
VALUES (NULL, 'Alice', 'alice@example.com', 25);`,
            explanations: {
              'INSERT INTO utilisateurs': "Indique que tu veux ajouter un utilisateur dans la table 'utilisateurs'.",
              'VALUES (NULL, \'Alice\', \'alice@example.com\', 25);': "Les valeurs à insérer dans l'ordre des colonnes de la table."
            }
          }
        },
        {
          type: 'text',
          content: `
- **\`NULL\`** : Pour l’ID généré automatiquement.
- Les autres valeurs suivent l’ordre des colonnes dans la table.

### **2️⃣ Insérer plusieurs lignes d’un coup 🚀**

Gagner du temps, c’est toujours une bonne idée ! Voici comment insérer plusieurs utilisateurs en une seule commande :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `INSERT INTO utilisateurs (nom, email, age)
VALUES
  ('Paul Martin', 'paul.martin@example.com', 28),
  ('Emma Leroy', 'emma.leroy@example.com', 22),
  ('Lucas Morel', 'lucas.morel@example.com', 35);`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
> 💡 **Astuce :** Cette méthode est super rapide et pratique quand tu as plein de données à ajouter !

---

## **⚡ Les erreurs courantes et comment les éviter**

### **🚨 Erreur : "Duplicate entry for key 'email'"**
- **Raison** : Tu essaies d’insérer une valeur dans une colonne avec la contrainte **UNIQUE**, mais cette valeur existe déjà.
- **Solution** : Vérifie que l’email est unique avant d’insérer.

### **🚨 Erreur : "Column count doesn’t match value count"**
- **Raison** : Le nombre de colonnes ne correspond pas au nombre de valeurs fournies.
- **Solution** : Vérifie que tu as bien listé toutes les colonnes nécessaires.

---

## **🎨 Exemple avancé : Table des commandes avec des foreign keys**

Imaginons qu’on a une table \`commandes\` qui contient les commandes passées par les utilisateurs, construire de la manière suivante :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `CREATE TABLE commandes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_utilisateur INT,
  produit VARCHAR(50) NOT NULL,
  quantite INT DEFAULT 1,
  date_commande DATE DEFAULT CURRENT_DATE,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)
) ENGINE=InnoDB;`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
### **Insérer une commande pour un utilisateur existant :**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `INSERT INTO commandes (id_utilisateur, produit, quantite)
VALUES (1, 'Pizza Margherita', 2);`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
- **\`id_utilisateur = 1\`** : Fait référence à l’utilisateur avec l’ID 1 dans la table \`utilisateurs\`.
- **\`produit = 'Pizza Margherita'\`** : L’article commandé.
- **\`quantite = 2\`** : Deux pizzas, parce que pourquoi pas. 🍕

### **📋 Récapitulatif des paramètres importants :**

![Paramètres importants pour INSERT INTO](${'/imgs/sql/insert-parameters.png'})

---

## **🎉 À toi de jouer !**

Prends tes tables et commence à les remplir avec des utilisateurs, des commandes ou ce que tu veux ! Amuse-toi et n’oublie pas : les pizzas, c’est sacré 🍕.
`},
      ]
    },
    {
      id: 'select-data',
      title: 'Selectionner des données dans une table',
      description: 'Apprends à selectionner des données dans tes tables avec la commande SELECT.',
      content: [
        {
          type: 'text',
          content: `
# 🌟 **SELECT : Ta baguette magique pour lire des données !**  

Quand tu as une table bien remplie, il te faut un moyen pour retrouver, afficher ou filtrer les données. Pas question de chercher ligne par ligne comme un détective ! 🕵️ Avec **\`SELECT\`**, tu peux récupérer exactement ce dont tu as besoin, rapidement et facilement. 🚀  

---

## **🧙‍♂️ Formule de base : \`SELECT\`**

La commande de base ressemble à ceci :  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT colonne1, colonne2, ...  
FROM nom_de_la_table;`,
            explanations: {
              'SELECT colonne1, colonne2, ...': "Les colonnes que tu veux afficher dans les résultats (ou juste `*` pour tout afficher).",
              'FROM nom_de_la_table': "Le nom de la table où chercher les données.  "
            }
          }
        },
        {
          type: 'text',
          content: `
---

### **📝 Exemple simple : Afficher tous les utilisateurs**  

Prenons une table \`utilisateurs\` :  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `CREATE TABLE utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50),
  email VARCHAR(100),
  age INT
);`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
Pour afficher tout le contenu de la table :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT *  
FROM utilisateurs;`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Toutes les colonnes et toutes les lignes de la table seront affichées. 📋

---

## **🔍 Ajouter des filtres avec \`WHERE\`**

**Tu veux être plus précis ?** Utilise **\`WHERE\`** pour filtrer les résultats. 🎯  

### **Exemple : Trouver les utilisateurs de plus de 18 ans**  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT nom, email  
FROM utilisateurs  
WHERE age > 18;`,
            explanations: {
              'WHERE age > 18;': "Filtre les résultats pour afficher seulement les utilisateurs de plus de 18 ans."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Tu verras les noms et emails des utilisateurs ayant plus de 18 ans.  

### **Opérateurs utiles pour \`WHERE\` :**

![Opérateurs utiles pour WHERE](${'/imgs/sql/select-operators.png'})

---

## **📊 Trier les résultats avec \`ORDER BY\`**

Tu veux voir tes données dans un ordre précis ? Utilise **\`ORDER BY\`**.  

### **Exemple : Trier les utilisateurs par âge (croissant)**  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT nom, age  
FROM utilisateurs  
ORDER BY age ASC;`,
            explanations: {
              'ORDER BY age ASC;': "Trie les résultats par âge, du plus petit au plus grand (ASC = Ascendant)."
            }
          }
        },
        {
          type: 'text',
          content: `
- **\`ASC\`** : Ordre croissant (par défaut).  
- **\`DESC\`** : Ordre décroissant.  

👉 **Résultat :** Les utilisateurs les plus jeunes apparaissent en premier.  

---

## **🎛️ Limiter le nombre de résultats avec \`LIMIT\`**

Pas besoin de voir toute la table ? Affiche seulement les premières lignes avec **\`LIMIT\`**.  

### **Exemple : Afficher les 5 premiers utilisateurs**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT *  
FROM utilisateurs  
LIMIT 5;`,
            explanations: {
              'LIMIT 5;': "Limite les résultats à 5 lignes."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Les 5 premières lignes de la table sont affichées.  

---

## **✨ Combiner plusieurs conditions avec \`AND\` et \`OR\`**

Parfois, un filtre ne suffit pas. Combine-les avec **\`AND\`** et **\`OR\`**.  

### **Exemple : Trouver des utilisateurs adultes avec un email Gmail**  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT nom, email  
FROM utilisateurs  
WHERE age >= 18 AND email LIKE '%@gmail.com';`,
            explanations: {
              'WHERE age >= 18 AND email LIKE \'%@gmail.com\';': "Filtre les utilisateurs adultes avec un email Gmail."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Les utilisateurs majeurs ayant une adresse Gmail seront listés.  

---

## **🔗 Jointure des tables avec \`JOIN\`**

Quand tu as plusieurs tables liées, comme une table \`commandes\` et une table \`utilisateurs\`, tu peux les combiner avec **\`JOIN\`**.  

### **Exemple : Afficher les commandes avec les noms des utilisateurs**  

Imaginons une table \`commandes\` :  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `CREATE TABLE commandes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_utilisateur INT,
  produit VARCHAR(50),
  quantite INT,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)
);`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
Pour afficher les commandes avec les noms des utilisateurs :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT utilisateurs.nom, commandes.produit, commandes.quantite  
FROM commandes  
JOIN utilisateurs  
ON commandes.id_utilisateur = utilisateurs.id;`,
            explanations: {
              'JOIN utilisateurs': "Jointure avec la table utilisateurs.",
              'ON commandes.id_utilisateur = utilisateurs.id': "Lien entre les deux tables."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Une liste des commandes avec le nom de chaque utilisateur associé.  

---

## **⚡ Les erreurs courantes et comment les éviter**

### **🚨 Erreur : "Unknown column"**
- Raison : Tu as mal orthographié le nom d'une colonne ou table.  
- Solution : Vérifie les noms dans ta structure de table.  

#### **🚨 Erreur : "Ambiguous column name"**
- Raison : Deux tables ont des colonnes portant le même nom.  
- Solution : Précise le nom de la table dans ta requête : \`utilisateurs.nom\`.  

---

## 😭 Malheureusement, ce n'est pas tout...

Il te reste encore beaucoup à apprendre sur la requête SELECT, et on voit ca dans le prochain cours. Mais ne t'inquiète pas, tu vas y arriver ! 🚀
`}
      ]
    },
    {
      id: 'select-data-advanced',
      title: 'Selectionner des données (avancé)',
      description: 'Apprends à selectionner des données dans tes tables avec la commande SELECT. (avancé)',
      content: [
        {
          type: 'text',
          content: `
# 🌟 **Commandes avancées avec SELECT : Libère tout le potentiel de ta requête SQL !** 🎯  

Maintenant que tu maîtrises les bases de **\`SELECT\`**, il est temps de plonger dans les fonctionnalités avancées. Voici comment devenir un véritable **pro des requêtes SQL** ! 🚀  

---

## **👥 Les jointures : INNER JOIN et ses aliases**  

Quand tu veux récupérer des données de plusieurs tables liées entre elles, c'est là qu'intervient **\`INNER JOIN\`**.  

### **🔗 Syntaxe de base : INNER JOIN**  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT table1.colonne1, table2.colonne2  
FROM table1  
INNER JOIN table2  
ON table1.cle_etrangere = table2.cle_primaire;`,
            explanations: {
              'SELECT table1.colonne1, table2.colonne2': "Les colonnes que tu veux afficher des deux tables.",
              'FROM table1': "La première table.",
              'INNER JOIN table2': "La deuxième table.",
              'ON table1.cle_etrangere = table2.cle_primaire;': "La condition de jointure entre les deux tables."
            }
          }
        },
        {
          type: 'text',
          content: `

- **\`INNER JOIN\`** : Combine les lignes des deux tables où il y a correspondance entre les clés spécifiées.  
- **\`ON\`** : Spécifie la condition pour faire correspondre les données entre les tables.  

---

### **Exemple : Afficher les commandes avec les noms des utilisateurs**  

Imaginons deux tables :  
- **\`utilisateurs\`** : Contient les infos des utilisateurs (ID, nom, email).  
- **\`commandes\`** : Contient les commandes passées (ID, produit, id_utilisateur).  

`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT utilisateurs.nom, commandes.produit, commandes.quantite  
FROM commandes  
INNER JOIN utilisateurs  
ON commandes.id_utilisateur = utilisateurs.id;`,
            explanations: {
              'INNER JOIN utilisateurs': "Jointure avec la table utilisateurs.",
              'ON commandes.id_utilisateur = utilisateurs.id;': "Lien entre les deux tables."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Chaque ligne montre un produit commandé avec le nom de l'utilisateur correspondant.

---

## **🎭 Utiliser des alias (AS) pour simplifier les requêtes**

Les alias permettent de renommer temporairement des tables ou colonnes pour simplifier les requêtes.

### **Exemple : Alias pour les tables**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT u.nom, c.produit, c.quantite  
FROM utilisateurs AS u  
INNER JOIN commandes AS c  
ON c.id_utilisateur = u.id;`,
            explanations: {
              'FROM utilisateurs AS u': "L'alias 'u' pour la table utilisateurs.",
              'INNER JOIN commandes AS c': "L'alias 'c' pour la table commandes."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Identique au précédent, mais plus lisible grâce à l'utilisation de \`u\` et \`c\`.  

### **Exemple : Alias pour les colonnes**   
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT u.nom AS utilisateur, c.produit AS article, c.quantite AS nombre_commandes  
FROM utilisateurs AS u  
INNER JOIN commandes AS c  
ON c.id_utilisateur = u.id;`,
            explanations: {
              'SELECT u.nom AS utilisateur, c.produit AS article, c.quantite AS nombre_commandes': "Les alias pour les colonnes affichées."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 Les colonnes dans le résultat s'appelleront \`utilisateur\`, \`article\`, et \`nombre_commandes\`.  

---

## **🔎 Filtrer les résultats : IN, BETWEEN, et le % (LIKE)**  

### **1️⃣ Filtrer avec \`IN\` : Une liste de valeurs**  

Utilise **\`IN\`** pour rechercher une valeur parmi plusieurs possibles.   
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT nom, email  
FROM utilisateurs  
WHERE age IN (18, 21, 25);`,
            explanations: {
              'WHERE age IN (18, 21, 25);': "Filtre les utilisateurs ayant 18, 21 ou 25 ans. (C'est comme une liste en python)"
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Les utilisateurs ayant 18, 21 ou 25 ans.  

---

### **2️⃣ Filtrer avec \`BETWEEN\` : Une plage de valeurs**  

Utilise **\`BETWEEN\`** pour définir une plage (inclusif).
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT nom, age  
FROM utilisateurs  
WHERE age BETWEEN 20 AND 30;`,
            explanations: {
              'WHERE age BETWEEN 20 AND 30;': "Filtre les utilisateurs ayant entre 20 et 30 ans (inclus)."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Les utilisateurs ayant entre 20 et 30 ans, inclusivement.

---

### **3️⃣ Filtrer avec \`% \` (LIKE) : Recherche approximative**  

Utilise **\`LIKE\`** avec le symbole **\`%\`** pour rechercher des motifs :  
- **\`% \`** : Remplace zéro ou plusieurs caractères.  
- **\`_\`** : Remplace un seul caractère.  

#### **Exemples :**
1. Trouver les noms commençant par "J" :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT nom  
FROM utilisateurs  
WHERE nom LIKE 'J%';`,
            explanations: {
              'WHERE nom LIKE \'J%\';': "Filtre les noms commençant par 'J'."
            }
          }
        },
        {
          type: 'text',
          content: `
2. Trouver les emails contenant "gmail" :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT email  
FROM utilisateurs  
WHERE email LIKE '%gmail%';`,
            explanations: {
              'WHERE email LIKE \'%gmail%\';': "Filtre les emails contenant 'gmail'."
            }
          }
        },
        {
          type: 'text',
          content: `
---

## **📊 Les fonctions de calcul : COUNT, DISTINCT, SUM, AVG, MAX, MIN**

### **1️⃣ COUNT : Compter les lignes**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT COUNT(*) AS nombre_utilisateurs  
FROM utilisateurs;`,
            explanations: {
              'SELECT COUNT(*) AS nombre_utilisateurs': "Compte le nombre total d'utilisateurs."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Le nombre total d'utilisateurs.

### **2️⃣ DISTINCT : Éliminer les doublons**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT DISTINCT email  
FROM utilisateurs;`,
            explanations: {
              'SELECT DISTINCT email': "Affiche les emails uniques."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Liste des emails uniques.

### **3️⃣ SUM : Faire une somme**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT SUM(quantite) AS total_commandes  
FROM commandes;`,
            explanations: {
              'SELECT SUM(quantite) AS total_commandes': "Calcule la somme totale des quantités de commandes."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Le total des produits commandés.

### **4️⃣ AVG : Calculer une moyenne**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT AVG(age) AS age_moyen  
FROM utilisateurs;`,
            explanations: {
              'SELECT AVG(age) AS age_moyen': "Calcule l'âge moyen des utilisateurs."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** L'âge moyen des utilisateurs.

### **5️⃣ MAX et MIN : Valeurs maximale et minimale**
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT MAX(age) AS age_max, MIN(age) AS age_min
FROM utilisateurs;`,
            explanations: {
              'SELECT MAX(age) AS age_max, MIN(age) AS age_min': "Trouve l'âge maximal et minimal des utilisateurs."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** L'âge maximum et minimum des utilisateurs.

---

## **🔍 Filtrage avancé : HAVING**  

Utilise **\`HAVING\`** pour filtrer les résultats après avoir utilisé une fonction de calcul comme \`COUNT\` ou \`SUM\`.  

### **Exemple : Filtrer les produits commandés plus de 5 fois**  
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT produit, SUM(quantite) AS total_commandes  
FROM commandes  
GROUP BY produit  
HAVING total_commandes > 5;`,
            explanations: {
              'GROUP BY produit': "Regroupe les commandes par produit.",
              'HAVING total_commandes > 5;': "Filtre les produits commandés plus de 5 fois."
            }
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Liste des produits commandés plus de 5 fois.

---

## **🎨 Exemple avancé combinant tout**

Affiche les utilisateurs ayant commandé plus de 3 pizzas :
`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `SELECT u.nom, COUNT(c.id) AS nombre_commandes  
FROM utilisateurs AS u  
INNER JOIN commandes AS c  
ON u.id = c.id_utilisateur  
WHERE c.produit LIKE '%pizza%'  
GROUP BY u.nom  
HAVING nombre_commandes > 3  
ORDER BY nombre_commandes DESC;`,
            explanations: {}
          }
        },
        {
          type: 'text',
          content: `
👉 **Résultat :** Les noms des utilisateurs avec leur nombre de commandes de pizzas, triés du plus gourmand au moins gourmand.

---

## **🎯 Récapitulatif des fonctionnalités avancées**

![Fonctionnalités avancées de SELECT](${'/imgs/sql/select-advenced-parameters.png'})

---

## **🚀 À toi de jouer !**

Tu as maintenant toutes les cartes en main pour devenir un véritable pro de la requête SQL ! 🃏
Tu n'as plus cas t'entrainer avec les exercices pour devenir un vrai pro ! 🚀
`},
      ]
    },
    {
      id: 'select-exercice',
      title: 'Exercice : Selectionner des données',
      description: 'Exercice de validation des connaissances.',
      content: [
        {
          type: 'text',
          content: `
# **🎨 Exercice pratique: Joue avec \`SELECT\` !**

## Tu vas devoir utiliser la commande \`SELECT\` pour extraire des données de la table \`utilisateurs\`. Voici les requêtes à réaliser :

---

### __Exercice 1:__

1. Affiche tous les utilisateurs ayant moins de 30 ans, triés par âge décroissant.
2. Affiche les commandes passées par les utilisateurs ayant un email Yahoo.
3. Trouve tous les produits commandés plus de 5 fois.

> 💡 **Astuce :** Utilise les clauses comme \`WHERE\`, \`ORDER BY\`, et \`INNER JOIN\` pour réussir. Bonne chance ! 🚀
`},
        {
          type: 'button',
          content: '',
          buttons: [{
            text: "Correction",
            link: "/resources/exercice-select-1.png",
            download: true,
            variant: "primary",
            icon: "Download"
          }]
        },
        {
          type: 'text',
          content: `
---

### __Exercice 2:__

1. Trouve les utilisateurs ayant passé plus de 3 commandes de burgers 🍔.  
2. Liste les produits commandés plus de 10 fois, triés par quantité décroissante.  
3. Affiche l’âge moyen des utilisateurs ayant un email Yahoo.  

> 💡 **Astuce :** Combine \`INNER JOIN\`, \`COUNT\`, et \`HAVING\` pour réussir !
`},
        {
          type: 'button',
          content: '',
          buttons: [{
            text: "Correction",
            link: "/resources/exercice-select-2.png",
            download: true,
            variant: "primary",
            icon: "Download"
          }]
        }
      ]
    },
  ]
};