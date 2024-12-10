import { Category } from '../../types/course';

export const pythonCourse: Category = {
  id: 'python',
  title: 'Python',
  description: 'Apprenez les bases de la programmation avec Python',
  icon: 'Code2',
  subCategories: [
    {
      id: 'bases-variables',
      title: 'Les bases: les variables',
      description: 'Les bases de python, en commençant par les variables',
      content: [
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

![Tableau des variables](${'/imgs/python/variables.png'})

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
              'age = 17': "Une variable de type entier (int), ici 17 est la valeur de la variable.",
              'nom = "Alice"': "Une variable de type chaîne de caractères (str), ici 'Alice' est la valeur de la variable.",
              'moyenne = 15.5': "Une variable de type nombre décimal (float), ici 15.5 est la valeur de la variable.",
              'est_etudiant = True': "Une variable de type booléen (bool), ici True (vrai) est la valeur de la variable.",
              'liste_matiere = ["maths", "français", "anglais"]': "Une variable de type liste (list), ici la liste contient 3 éléments.",
              'dico_notes = {"maths": 12, "français": 15, "anglais": 17}': "Une variable de type dictionnaire (dict), ici le dictionnaire contient 3 clés (maths, français, anglais) et 3 valeurs (12, 15, 17)."
            }
          }
        }
      ],
      pdfUrl: '/resources/python-bases-variables.pdf'
    },
    {
      id: 'bases-boucles',
      title: 'Les bases: les boucles',
      description: 'Les bases de python, le principe de boucles',
      content: [
        {
          type: 'text',
          content: `
# 🔄 Une boucle, c'est quoi ?

Une **boucle** en programmation, c’est le fait de demander à l'ordinateur de **répéter** (ou *itérer*, pour utiliser un mot compliqué) une ou plusieurs instructions un certain nombre de fois.

En Python, il existe **deux types de boucles**:  
1. La boucle **\`for\`**  
2. La boucle **\`while\`**

Mais alors, qu'est-ce qui les différencie ? 🤔

---

## 🌀 La boucle \`for\`

La boucle **\`for\`** est utilisée pour itérer sur une **séquence** (comme une liste, un tuple ou une chaîne de caractères).  
En termes simples, cela signifie que tu peux répéter une ou plusieurs instructions pour **chaque élément** d’une séquence.

Voici un exemple pour mieux comprendre :`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `# La boucle for
for i in range(5):
    print(i)
    
# Parcourir une liste
fruits = ["pomme", "banane", "orange"]
for fruit in fruits:
    print(fruit)`,
            explanations: {
              'for i in range(5):': "Boucle qui s'exécute 5 fois (de 0 à 4), parce que oui, en informatique, on commence à compter à partir de 0.",
              'print(i)': "Affiche la valeur de i à chaque itération (c'est à dire a chaque fois que la boucle est exécutée).",
              'fruits = ["pomme", "banane", "orange"]': "Création d'une liste de fruits",
              'for fruit in fruits:': "Parcourt chaque élément de la liste fruits",
              'print(fruit)': "Affiche chaque élément de la liste fruits (autrement dit, chaque fruit)."
            }
          }
        },
        {
          type: 'text',
          content: `
Voila pour les boucles dites **for**. _C'est boucles sont vraiment simple elles vont se complexifier dans les prochains cours_.

Mais pour l'instant, c'est tout ce que tu as besoin de savoir 😊.

---
## 🔁 Les boucles \`while\`

Les boucles **\`while\`** sont légèrement plus complexes. Elles permettent de répéter une ou plusieurs instructions **tant qu’une condition est vraie**.  

Par exemple, tant que tu as une bonne moyenne, tes parents te laissent sortir. Mais dès que tu as une mauvaise moyenne, c’est fini 😅.

Voici un exemple pour clarifier :`},
        {
          type: 'code',
          content: '',
          codeExample: {
            code: `# La boucle while
moyenne = 20
while moyenne >= 10:
    print("Bravo ! Tu peux sortir !")
    moyenne = moyenne - 1`,

            explanations: {
              'moyenne = 20': "Déclaration de la variable moyenne avec la valeur 20. (C'est une moyenne de rêve 😅)",
              'while moyenne >= 10:': "Tant que la moyenne est supérieure ou égale à 10, les instructions qui suivent sont exécutées. (en gros tes parents te laissent sortir)",
              'moyenne = moyenne - 1': "A chaque itération, la moyenne diminue de 1. Ce concept est TRÈS important, sinon tu ne pourras jamais sortir 😅."
            }
          }
        },
        {
          type: 'text',
          content: `
### ⚠️ Attention à la décrémentation

Le concept de **décrémentation** (c'est-à-dire diminuer une valeur, souvent de 1) est **très important** dans une boucle \`while\`.  

Si tu oublies de décrémenter ou de modifier ta condition, tu risques de créer une **boucle infinie**, et ça, c'est vraiment pas cool 😅.  

> Une boucle infinie peut sérieusement ralentir ton ordinateur avec des programmes plus complexes !

---

## 🎯 À retenir sur les boucles de base

Voilà, tu sais maintenant tout ce qu'il faut pour utiliser les boucles **\`for\`** et **\`while\`** en Python. C'est une base solide pour aller plus loin ! 💪

Maintenant, c'est à toi de t’entraîner 😊.`},

      ],
      /* pdfUrl: '/resources/python-bases-boucles.pdf'  TODO: PDF */
    },
  ]
};