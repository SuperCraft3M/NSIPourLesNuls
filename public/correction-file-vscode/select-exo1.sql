-- ******************** CORRECTION EXERCICES ********************

-- 1. Affiche tous les utilisateurs ayant moins de 30 ans, triés par âge décroissant.

SELECT *  
FROM utilisateurs  
WHERE age < 30  
ORDER BY age DESC;

-- 2. Affiche les commandes passées par les utilisateurs ayant un email Yahoo.

SELECT utilisateur.nom, commandes.produit, commandes.quantite, commandes.date_commande  
FROM commandes 
INNER JOIN utilisateurs  
ON commandes.id_utilisateur = utilisateur.id  
WHERE utilisateur.email LIKE '%yahoo%';


-- 3. Trouve tous les produits commandés plus de 5 fois.

SELECT commandes.produit, SUM(commandes.quantite) AS total_commande  
FROM commandes
GROUP BY commandes.produit  
HAVING total_commande > 5;







