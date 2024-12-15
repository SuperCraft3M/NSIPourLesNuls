-- ******************** CORRECTION EXERCICES ********************

-- 1. Trouve les utilisateurs ayant passé plus de 3 commandes de burgers 🍔.

SELECT u.nom AS utilisateur, COUNT(c.id) AS total_commandes  
FROM commandes AS c  
INNER JOIN utilisateurs AS u  
ON c.id_utilisateur = u.id  
WHERE c.produit LIKE '%burger%'  
GROUP BY u.id, u.nom  
HAVING total_commandes > 3;

-- 2. Liste les produits commandés plus de 10 fois, triés par quantité décroissante.

SELECT c.produit, SUM(c.quantite) AS total_quantite  
FROM commandes AS c  
GROUP BY c.produit  
HAVING total_quantite > 10  
ORDER BY total_quantite DESC;

-- 3. Affiche l’âge moyen des utilisateurs ayant un email Yahoo.

SELECT AVG(u.age) AS age_moyen  
FROM utilisateurs AS u  
WHERE u.email LIKE '%yahoo%';







