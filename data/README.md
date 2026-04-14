# Dossier `data/`

## Contenu

| Fichier | Description |
|---|---|
| `generate_sample_data.py` | Script Python qui génère deux fichiers CSV synthétiques de démonstration |
| `customers.csv` | *(généré)* 2 000 clients avec leurs attributs de base |
| `transactions.csv` | *(généré)* 30 000 transactions liées aux clients |

## Utiliser vos propres données

Le notebook `notebooks/customer_clustering.ipynb` inclut une cellule de configuration qui
vous permet de pointer vers n'importe quel fichier CSV. Remplacez simplement les chemins
`CUSTOMERS_PATH` et `TRANSACTIONS_PATH` par vos propres fichiers.

### Colonnes attendues — `customers.csv`

| Colonne | Type | Description |
|---|---|---|
| `customer_id` | string | Identifiant unique du client |
| `country` | string | Pays de résidence |
| `account_type` | string | Type de compte (`courant`, `epargne`, `pro`, …) |
| `tenure_days` | int | Ancienneté en jours |
| `avg_balance` | float | Solde moyen (optionnel) |

### Colonnes attendues — `transactions.csv`

| Colonne | Type | Description |
|---|---|---|
| `transaction_id` | string | Identifiant unique de la transaction |
| `customer_id` | string | Référence au client |
| `date` | datetime | Date/heure de la transaction |
| `amount` | float | Montant de la transaction |
| `type` | string | Type (`virement`, `paiement_carte`, `retrait`, …) |
| `channel` | string | Canal (`mobile`, `web`, `agence`, `ATM`) |
| `is_international` | bool | Transaction internationale ? |
| `is_flagged` | bool | Transaction suspecte/signalée ? (optionnel) |

## Générer les données synthétiques

```bash
python data/generate_sample_data.py
```

Ou dans le notebook Colab :

```python
!python data/generate_sample_data.py
```
