# D-fi de la nuit 2024

Ce dépôt contient deux projets développés dans le cadre du **Défi de la nuit 2024** :

1. 🌊 **Quiz Challenge** — Application web de quiz sur le thème de l'Océan
2. 🏦 **Clustering Clients Fintech** — Notebook Jupyter/Colab pour la segmentation de clients

---

## 🌊 Quiz Challenge

Application web interactive de quiz créée pour le challenge **NUIT DE L'INFO**, sur le thème de l'Océan.

### Fonctionnalités

- Questions à choix multiples sur les enjeux environnementaux marins
- Feedback instantané avec explications
- Design responsive adapté mobiles et desktops

### Technologies

- **HTML / CSS / JavaScript** (vanilla)

### Utilisation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/sanalay/D-fi-de-la-nuit-2024.git
   ```
2. Ouvrir `index.html` dans un navigateur.

---

## 🏦 Clustering Clients Fintech

Notebook Jupyter pédagogique complet pour segmenter des clients d'une application fintech  
à partir de leur comportement transactionnel.

### Fichier

```
notebooks/customer_clustering_fintech.ipynb
```

### Ouvrir sur Google Colab

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sanalay/D-fi-de-la-nuit-2024/blob/main/notebooks/customer_clustering_fintech.ipynb)

### Fonctionnalités du notebook

| Étape | Description |
|-------|-------------|
| 0 | Installation automatique des dépendances (Colab + local) |
| 1 | Ingestion : vos données CSV **ou** dataset synthétique réaliste |
| 2 | Exploration & Nettoyage (EDA, winsorisation, doublons) |
| 3 | Feature Engineering RFM + comportement transactionnel + indicateurs anomalie |
| 4 | Prétraitement (RobustScaler + PCA) |
| 5 | Comparatif K-Means / HDBSCAN / Agglomératif / GMM |
| 6 | Évaluation : Silhouette, Davies-Bouldin, Calinski-Harabasz |
| 7 | Visualisations : PCA 2D, UMAP, heatmap profils, boxplots, radar |
| 8 | Interprétation métier & export CSV des résultats |

### Utilisation locale

1. Installer les dépendances :
   ```bash
   pip install numpy pandas matplotlib seaborn scikit-learn hdbscan umap-learn
   ```
2. Lancer Jupyter :
   ```bash
   jupyter notebook notebooks/customer_clustering_fintech.ipynb
   ```

### Utiliser vos propres données

Dans la cellule **Étape 1** du notebook, passez `USE_SYNTHETIC_DATA = False`  
et indiquez le chemin vers votre fichier CSV dans `DATA_PATH`.

Le CSV doit contenir au minimum les colonnes suivantes :

| Colonne | Type | Description |
|---------|------|-------------|
| `customer_id` | str | Identifiant unique du client |
| `transaction_date` | date | Date de la transaction (YYYY-MM-DD) |
| `amount` | float | Montant de la transaction |
| `transaction_type` | str | `credit` ou `debit` |
| `category` | str | Catégorie marchande (optionnel) |
| `country` | str | Pays (optionnel) |

### Modèles comparés

| Modèle | Points forts |
|--------|-------------|
| **K-Means** | Rapide, interprétable, bon pour segments « ronds » |
| **HDBSCAN** | Détecte outliers, robuste aux formes complexes |
| **Agglomératif** | Dendrogramme, utile pour analyse métier |
| **GMM** | Probabilités d'appartenance, frontières souples |

### Dépendances Python

- `numpy`, `pandas`, `matplotlib`, `seaborn` (standard)
- `scikit-learn` ≥ 1.0
- `hdbscan` ≥ 0.8
- `umap-learn` ≥ 0.5 *(optionnel — uniquement pour la visualisation UMAP)*

---

*Projet réalisé dans le cadre du **D-fi de la nuit 2024**.*

