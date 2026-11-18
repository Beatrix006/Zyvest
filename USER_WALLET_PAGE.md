# Zyvest – User Wallet Page

## 1. Overview
The Wallet page is unlocked for approved users who have completed KYC verification. It provides centralized management for total balances, available funds, reserved payout capital, deposits, withdrawals, internal transfers between the wallet and connected MT5 accounts, and transaction audit statements.

## 2. Balances & Account Overview
- **Total Balance:** Aggregated sum of all funds across primary fiat and cryptocurrency balances.
- **Available Balance:** Real-time accessible capital ready for withdrawals, new deposits, or allocation into MT5 trading accounts.
- **Reserved Funds:** Capital temporarily held in escrow during active withdrawal requests or pending operations.
- **Connected MT5 Balances:** Real-time synchronization of equity, margin, and balance across connected MT5 trading accounts.
- **Multi-Currency Accounts:** Dedicated balance tracking for USD, EUR, GBP, and supported digital assets.

## 3. Deposit Workflow
1. Select an enabled payment channel compliant with user jurisdiction (Bank Wire, Credit/Debit Cards, Crypto).
2. Review real-time deposit disclosures including conversion rates, provider processing fees, minimum/maximum limits, and estimated credit time.
3. Submit and track funding lifecycle: `Pending → Processing → Completed` (or `Failed` with explicit error descriptions).
4. Available funds are automatically and instantly credited once provider confirmation is received.

## 4. Withdrawal Workflow
1. Destination accounts must be verified and registered under the user's legal name (third-party payouts strictly disallowed).
2. The requested withdrawal sum is immediately debited from available funds and locked in `Reserved Funds`.
3. If approved and processed, the reserved amount is settled and finalized.
4. If rejected or cancelled, the reserved amount is automatically and immediately restored to Available Balance.

## 5. Internal Transfers (Wallet ↔ MT5)
- Move capital instantly between Main Wallet and connected MT5 live trading accounts.
- Transfers execute atomically in real-time (debit and credit succeed together or neither executes).
- Zero internal fees or hidden markups for internal reallocations.
- Currency matching and live platform conversion rates are disclosed before user confirmation.

## 6. Transaction History & Statements
- Search and filter records by Transaction Type (`Deposit`, `Withdrawal`, `Transfer`), Date Range, and Status (`Completed`, `Pending`, `Failed`).
- Detailed transaction dialogue displays Transaction ID, Reference Hash, Method, Net Amount, Fee breakdown, and Timestamp.
- Export verified PDF and CSV account statements for tax and accounting records.
