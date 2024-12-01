import { Category } from '../../types/course';

export const templateCourse: Category = {
  id: 'template',
  title: 'DEVELOPPEMENT TEMPLATE',
  description: 'Aucune utilisation juste un template',
  icon: 'Code2', // ICON FROM lucide-react (LUCIDICON)
  subCategories: [
    {
      id: 'template',
      title: 'Les bases: les variables',
      description: 'Les bases de python, en commençant par les variables',
      content: [
        {
          type: 'button',
          content: '',
          buttons: [{
            text: "Voir l'exemple",
            link: "/exemple",
            variant: "primary",
            icon: "ExternalLink"
          }]
        },
        {
          type: 'buttonGroup',
          content: '',
          buttons: [
            {
              text: "Option 1",
              link: "/option1",
              variant: "primary"
            },
            {
              text: "Option 2",
              link: "/option2",
              variant: "outline"
            }
          ]
        },
        {
          type: 'text',
          content: `
# 🐍 Introduction à Python

Python est un langage de programmation **polyvalent** et **facile à apprendre** (c'est pour ça qu'on l'apprend au lycée !). Il est généralement très apprécié pour sa **clarté** et sa **lisibilité**.

Cependant, comme son nom l’indique, Python est un langage. Et comme tout langage, il y a des choses à apprendre 😐. Pas de panique, tout ira bien !

---

## 🚀 Comment ça marche ?

D’abord, un petit rappel : **Python ne comprend pas le français** 😅. Eh oui, tu vas devoir lui parler dans un dérivé de l’anglais. 😁

Mais ne t'inquiète pas, tu es sûrement très fort(e) en anglais, non ? 👀

---

## 📚 Les variables et les types de données

Commençons simplement par les **variables** et les **types de données**. Ce n'est pas si compliqué que ça en a l'air !

Il existe plusieurs types de variables que tu vas devoir apprendre. Heureusement, je suis là pour t’aider 😊.

### 🔑 Les types les plus importants à connaître

Voici une vue d’ensemble des types de données essentiels en Python :

![Tableau des variables](${'/imgs/variables.png'})

> **Astuce :** Les noms des types sont toujours en anglais, mais leur fonctionnement est très intuitif.

---

### 🌟 Pourquoi c'est important ?

Les variables sont des éléments clés pour stocker des informations. Ce tableau contient le plus important à savoir sur les variables pour le moment.  

👉 **Tu vois, ce n’est pas si dur !** 😊

---

## 🎯 Passons à la pratique

Maintenant, voyons comment **créer** et **utiliser** des variables en Python.

_(Psst... C'est interactif, clique sur une ligne avec un **trait violet** pour voir une explication détaillée 😉.)_
      `
        },
        {
          type: 'code',
          content: '',

          codeExample: {
            code: `# Déclaration des variables
age = 17
nom = "Alice"
moyenne = 15.5
est_etudiant = True
liste_matiere = ["maths", "français", "anglais"]
dico_notes = {"maths": 12, "français": 15, "anglais": 17}`,
            explanations: {
              'age = 17': "Une variable de type entier (int), ici 12 est la valeur de la variable.",
              'nom = "Alice"': "Une variable de type chaîne de caractères (str), ici 'Alice' est la valeur de la variable.",
              'moyenne = 15.5': "Une variable de type nombre décimal (float), ici 15.5 est la valeur de la variable.",
              'est_etudiant = True': "Une variable de type booléen (bool), ici True (vrai) est la valeur de la variable.",
              'liste_matiere = ["maths", "français", "anglais"]': "Une variable de type liste (list), ici la liste contient 3 éléments.",
              'dico_notes = {"maths": 12, "français": 15, "anglais": 17}': "Une variable de type dictionnaire (dict), ici le dictionnaire contient 3 clés (maths, français, anglais) et 3 valeurs (12, 15, 17)."
            }
          }
        },
        {
          type: 'text',
          content: ` SOME TEXT BETWEEN CODE AND BUTTONS`
        },
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `# Exemple de boucle for
for i in range(5):
print(i)
 
# Parcourir une liste
fruits = ["pomme", "banane", "orange"]
for fruit in fruits:
print(fruit)`,
            explanations: {
              'for i in range(5):': "Boucle qui s'exécute 5 fois (de 0 à 4)",
              'print(i)': "Affiche la valeur de i à chaque itération",
              'fruits = ["pomme", "banane", "orange"]': "Création d'une liste de fruits",
              'for fruit in fruits:': "Parcourt chaque élément de la liste fruits"
            }
          }
        }
      ],
      pdfUrl: '/resources/python-bases-variables.pdf'
    },
  ]
};