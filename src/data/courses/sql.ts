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
    }
  ]
};