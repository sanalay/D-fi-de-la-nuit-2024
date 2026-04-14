# Défi de la Nuit 2024 — NUIT DE L'INFO

Ce dépôt regroupe **deux projets** nés du challenge **NUIT DE L'INFO 2024** :

| Projet | Description | Technologie |
|--------|-------------|-------------|
| 🌊 **Ocean Awareness Quiz** | Quiz interactif sur la protection des océans | HTML / CSS / JavaScript |
| 🏦 **Clustering Clients Fintech** | Segmentation automatique de clients bancaires | Python / Scikit-learn / Colab |

---

## 🌊 Projet 1 — Ocean Awareness Quiz

Quiz à choix multiples sur les enjeux environnementaux liés aux océans, avec feedback immédiat.

### Lancer le quiz

Ouvrez simplement `index.html` dans votre navigateur.

### Fonctionnalités

- Questions sur les océans et le changement climatique
- Feedback coloré instantané (vert = correct, rouge = incorrect)
- Design responsive mobile/desktop

---

## 🏦 Projet 2 — Clustering Clients Fintech

Pipeline complet de **segmentation client** basé sur les comportements transactionnels.

### 📓 Notebook principal

```
notebooks/customer_clustering.ipynb
```

### ▶️ Ouvrir sur Google Colab

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sanalay/D-fi-de-la-nuit-2024/blob/main/notebooks/customer_clustering.ipynb)

### ⚡ Démarrage rapide

**Option A — Google Colab (recommandé)**

1. Cliquez sur le badge « Open in Colab » ci-dessus.
2. Dans Colab : `Exécution → Tout exécuter`.
3. La première cellule installe les dépendances et génère les données synthétiques automatiquement.

**Option B — En local**

```bash
# 1. Cloner le dépôt
git clone https://github.com/sanalay/D-fi-de-la-nuit-2024.git
cd D-fi-de-la-nuit-2024

# 2. Installer les dépendances
pip install -r requirements.txt

# 3. Générer les données synthétiques (si vous n'avez pas vos propres données)
python data/generate_sample_data.py

# 4. Lancer Jupyter
jupyter notebook notebooks/customer_clustering.ipynb
```

### 📁 Structure des fichiers

```
D-fi-de-la-nuit-2024/
│
├── 🌊 Ocean Awareness Quiz
│   ├── index.html          ← Point d'entrée du quiz
│   ├── style.css           ← Styles visuels
│   ├── script.js           ← Logique du quiz
│   └── img/                ← Images
│
├── 🏦 Clustering Clients Fintech
│   ├── notebooks/
│   │   └── customer_clustering.ipynb   ← Notebook principal (Colab-ready)
│   ├── data/
│   │   ├── generate_sample_data.py     ← Génère des données synthétiques
│   │   ├── customers.csv               ← (généré) Attributs clients
│   │   ├── transactions.csv            ← (généré) Historique transactions
│   │   └── customers_segmented.csv     ← (résultat) Clients avec labels
│   └── requirements.txt               ← Dépendances Python
│
└── README.md
```

### 🔬 Contenu du notebook

| Section | Description |
|---------|-------------|
| ⚙️ Configuration | Installation automatique des dépendances |
| 📥 Chargement | Lecture et validation des données (CSV) |
| 🔍 EDA | Distributions, tendances, corrélations |
| 🔧 Feature Engineering | Indicateurs **RFM** + métriques comportementales |
| 🧹 Préprocessing | Log-transform, encodage, RobustScaler |
| 📐 PCA | Réduction dimensionnelle pour visualisation |
| 🤖 Clustering | **K-Means**, **HDBSCAN**, **GMM** |
| 📊 Évaluation | Silhouette, Davies-Bouldin, courbe du coude |
| 👁️ Visualisations | Scatter 2D, heatmaps de profils, Plotly interactif |
| 💼 Interprétation | Personas de segments + recommandations métier |
| 💾 Export | CSV enrichi avec labels de segmentation |

### 📦 Dépendances Python

```
numpy, pandas, scikit-learn, hdbscan, umap-learn,
matplotlib, seaborn, plotly
```

Voir `requirements.txt` pour les versions exactes.

### 🗄️ Brancher vos propres données

Modifiez ces deux lignes dans le notebook (cellule *Configuration*) :

```python
CUSTOMERS_PATH    = Path("data/customers.csv")     # ← votre fichier clients
TRANSACTIONS_PATH = Path("data/transactions.csv")  # ← votre fichier transactions
```

Voir `data/README.md` pour le format attendu des colonnes.

### 🏁 Pistes d'amélioration futures

- Ajouter **UMAP** pour une meilleure visualisation non-linéaire
- **Grid-search** sur les hyperparamètres HDBSCAN
- **Stabilité** des clusters par bootstrap
- Features avancées : séries temporelles, graphe de paiements
- Dashboard interactif avec **Streamlit** ou **Dash**
- Connecter à une base SQL ou un fichier **Parquet**

---

## Technologies utilisées

| Domaine | Outils |
|---------|--------|
| Web | HTML5, CSS3, JavaScript ES6 |
| Data | Python 3.10+, pandas, numpy |
| ML | scikit-learn, HDBSCAN |
| Visualisation | matplotlib, seaborn, plotly |
| Environnement | Google Colab, Jupyter |

## Licence

Projet éducatif réalisé dans le cadre de la **NUIT DE L'INFO 2024**.
