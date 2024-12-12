-- ******************** CORRECTION EXERCICES ********************

-- Structure de la table `client`

CREATE TABLE client (
  id INT,
  nom VARCHAR,
  dateinscription DATE,
  prenom VARCHAR,
  adresse VARCHAR,
  ville VARCHAR,
  cp VARCHAR,
  credithoraire INT,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

-- Structure de la table `vehicule`

CREATE TABLE vehicule (
  immat VARCHAR(10),
  modele VARCHAR,
  couleur VARCHAR,
  PRIMARY KEY (immat)
) ENGINE=InnoDB;


-- Structure de la table `lecon`

CREATE TABLE lecon (
  date DATE,
  eleve INT,
  heure TIME,
  nbh INT,
  faite BOOLEAN,
  auto VARCHAR(10),
  PRIMARY KEY(date),
  FOREIGN KEY(auto) REFERENCES vehicule(immat),
  FOREIGN KEY(eleve) REFERENCES client(id)
) ENGINE=InnoDB;







