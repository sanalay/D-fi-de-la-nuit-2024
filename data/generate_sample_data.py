"""
generate_sample_data.py
-----------------------
Génère un jeu de données synthétique de transactions fintech
pour tester le notebook de clustering clients.

Usage:
    python data/generate_sample_data.py

Sortie:
    data/transactions.csv  — transactions brutes (une ligne = une transaction)
    data/customers.csv     — attributs clients agrégés (une ligne = un client)
"""

import numpy as np
import pandas as pd
from pathlib import Path

SEED = 42
rng = np.random.default_rng(SEED)

# ── Paramètres ─────────────────────────────────────────────────────────────────
N_CUSTOMERS = 2_000
N_TRANSACTIONS = 30_000
START_DATE = pd.Timestamp("2023-01-01")
END_DATE = pd.Timestamp("2024-01-01")

SEGMENTS = {
    "premium_actif":     {"weight": 0.15, "avg_amount": 850,  "freq": 12, "balance": 8000},
    "regulier_moyen":    {"weight": 0.35, "avg_amount": 180,  "freq": 6,  "balance": 1500},
    "occasionnel":       {"weight": 0.30, "avg_amount": 95,   "freq": 2,  "balance": 400},
    "inactif":           {"weight": 0.12, "avg_amount": 40,   "freq": 0.5,"balance": 150},
    "risque_eleve":      {"weight": 0.08, "avg_amount": 1200, "freq": 3,  "balance": 300},
}

COUNTRIES = ["FR", "MA", "SN", "CI", "TN", "DZ", "CM"]
CHANNELS   = ["mobile", "web", "agence", "ATM"]
ACCOUNT_TYPES = ["courant", "epargne", "pro"]
TRANSACTION_TYPES = ["virement", "paiement_carte", "retrait", "depot", "prelevement"]


def _assign_segments(n: int) -> np.ndarray:
    weights = [v["weight"] for v in SEGMENTS.values()]
    labels  = list(SEGMENTS.keys())
    return rng.choice(labels, size=n, p=weights)


def generate_customers(n: int = N_CUSTOMERS) -> pd.DataFrame:
    """Génère un DataFrame de clients avec leurs attributs de base."""
    segments = _assign_segments(n)
    tenure_days = rng.integers(30, 1825, size=n)  # 1 mois à 5 ans
    balances = np.array([
        max(0, rng.normal(SEGMENTS[s]["balance"], SEGMENTS[s]["balance"] * 0.4))
        for s in segments
    ])
    customers = pd.DataFrame({
        "customer_id":    [f"C{i:05d}" for i in range(1, n + 1)],
        "segment_true":   segments,          # label de référence (non utilisé au clustering)
        "country":        rng.choice(COUNTRIES, size=n, p=[0.4, 0.2, 0.1, 0.1, 0.08, 0.07, 0.05]),
        "account_type":   rng.choice(ACCOUNT_TYPES, size=n, p=[0.6, 0.25, 0.15]),
        "tenure_days":    tenure_days,
        "avg_balance":    np.round(balances, 2),
        "registration_date": pd.date_range(start="2019-01-01", periods=n, freq="12h"),
    })
    return customers


def generate_transactions(customers: pd.DataFrame, n: int = N_TRANSACTIONS) -> pd.DataFrame:
    """Génère un DataFrame de transactions liées aux clients."""
    customer_ids = customers["customer_id"].values
    segments_map = customers.set_index("customer_id")["segment_true"].to_dict()

    # Pondération : les clients très actifs génèrent plus de transactions
    freq_map = {cid: SEGMENTS[seg]["freq"] for cid, seg in segments_map.items()}
    weights  = np.array([freq_map[cid] for cid in customer_ids], dtype=float)
    weights /= weights.sum()

    chosen_ids = rng.choice(customer_ids, size=n, p=weights)

    amounts = np.array([
        max(1, rng.lognormal(
            mean=np.log(max(1, SEGMENTS[segments_map[cid]]["avg_amount"])),
            sigma=0.7
        ))
        for cid in chosen_ids
    ])

    # Quelques grosses transactions pour les clients à risque élevé
    risk_mask = np.array([segments_map[cid] == "risque_eleve" for cid in chosen_ids])
    big_tx_mask = risk_mask & (rng.random(n) < 0.05)
    amounts[big_tx_mask] *= rng.uniform(5, 20, size=big_tx_mask.sum())

    date_range_seconds = int((END_DATE - START_DATE).total_seconds())
    tx_dates = START_DATE + pd.to_timedelta(
        rng.integers(0, date_range_seconds, size=n), unit="s"
    )

    transactions = pd.DataFrame({
        "transaction_id":   [f"T{i:07d}" for i in range(1, n + 1)],
        "customer_id":      chosen_ids,
        "date":             tx_dates,
        "amount":           np.round(amounts, 2),
        "type":             rng.choice(TRANSACTION_TYPES, size=n, p=[0.3, 0.35, 0.15, 0.15, 0.05]),
        "channel":          rng.choice(CHANNELS, size=n, p=[0.45, 0.30, 0.10, 0.15]),
        "is_international": rng.random(n) < 0.12,
        "is_flagged":       rng.random(n) < 0.01,  # fraude simulée
    })
    return transactions.sort_values("date").reset_index(drop=True)


def main():
    out_dir = Path(__file__).parent
    customers_path    = out_dir / "customers.csv"
    transactions_path = out_dir / "transactions.csv"

    print("Génération des données…")
    customers    = generate_customers()
    transactions = generate_transactions(customers)

    customers.to_csv(customers_path, index=False)
    transactions.to_csv(transactions_path, index=False)

    print(f"✔ {len(customers):,} clients  → {customers_path}")
    print(f"✔ {len(transactions):,} transactions → {transactions_path}")


if __name__ == "__main__":
    main()
