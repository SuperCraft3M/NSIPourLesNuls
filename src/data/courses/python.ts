import { Category } from '../../types/course';

export const pythonCourse: Category = {
  id: 'python',
  title: 'Python',
  description: 'Apprenez les bases de la programmation avec Python',
  icon: 'Code2',
  subCategories: [
    {
      id: 'bases-notions',
      title: 'Bases & Notions',
      description: 'Les concepts fondamentaux de Python',
      content: `
# Introduction à Python

Python est un langage de programmation polyvalent et facile à apprendre (c'est pour ça qu'on l'apprend au lycée). Il est généralement bien apprécié car il est clair et lisible.

Mais le langage Python comme son nom l'indique est un langage, et comme tout langage il y a des choses à apprendre 😐

## Comment ça marche ?

Déjà pour commencer je suis désolé de te l'apprendre, mais python ne comprend pas le français 😅. Il faut donc lui parler dans sa langue, qui est un dérivé de l'anglais 😁.
Mais ca va le faire t'es fort(e) en anglais 👀

Commencons simplement par les variables et les types de données. (C'est pas si compliqué que ça en a l'air)
Il existe plusieurs types de variables que tu vas devoir malheureusement apprendre, mais je suis là pour t'aider 😊.

**Voici les plus importantes à connaitre :**
![Tableau des variables](${'/imgs/variables.png'})

## Variables et Types de Données

En Python, vous n'avez pas besoin de déclarer le type d'une variable. Le type est déterminé automatiquement lors de l'affectation.

![Code Example](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)
      `,
      codeExamples: [
        {
          code: `# Déclaration de variables
age = 17
nom = "Alice"
moyenne = 15.5
est_etudiant = True`,
          explanations: {
            'age = 17': "Une variable de type entier (int)",
            'nom = "Alice"': "Une variable de type chaîne de caractères (str)",
            'moyenne = 15.5': "Une variable de type nombre décimal (float)",
            'est_etudiant = True': "Une variable de type booléen (bool)"
          }
        }
      ],
      // pdfUrl: '/resources/python-bases.png' // TODO: Add the correct URL
    },
    {
      id: 'boucles',
      title: 'Boucles',
      description: 'Maîtrisez les boucles for et while',
      content: `
# Les Boucles en Python

Les boucles permettent de répéter des instructions plusieurs fois. Python propose deux types de boucles principales : for et while.

![Programming Loops](https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

## La boucle for

La boucle for est utilisée pour itérer sur une séquence (liste, tuple, chaîne de caractères...).

![Code Editor](https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)
      `,
      codeExamples: [
        {
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
      ],
      pdfUrl: '/resources/python-boucles.pdf'
    }
  ]
};