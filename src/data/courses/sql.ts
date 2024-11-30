import { Category } from '../../types/course';

export const sqlCourse: Category = {
  id: 'sql',
  title: 'SQL',
  description: 'Apprenez à manipuler les bases de données',
  icon: 'Database',
  subCategories: [
    {
      id: 'bases-sql',
      title: 'Bases de SQL',
      description: 'Les commandes SQL fondamentales',
      content: `
# Introduction à SQL

SQL (Structured Query Language) est le langage standard pour interagir avec les bases de données relationnelles.

## Commandes de Base

Les commandes SQL les plus courantes permettent de manipuler les données dans une base.
      `,
      codeExamples: [
        {
          code: `-- Création d'une table
CREATE TABLE eleves (
    id INT PRIMARY KEY,
    nom VARCHAR(50),
    age INT,
    classe VARCHAR(10)
);

-- Insertion de données
INSERT INTO eleves (id, nom, age, classe)
VALUES (1, 'Alice', 16, '1ere');`,
          explanations: {
            'CREATE TABLE eleves (': "Crée une nouvelle table nommée 'eleves'",
            'id INT PRIMARY KEY,': "Définit une colonne 'id' comme clé primaire",
            'nom VARCHAR(50),': "Colonne pour le nom (texte de max 50 caractères)",
            'INSERT INTO eleves': "Commande pour insérer des données",
            'VALUES (1, \'Alice\', 16, \'1ere\');': "Les valeurs à insérer dans la table"
          }
        }
      ],
      pdfUrl: '/resources/sql-bases.pdf'
    }
  ]
};