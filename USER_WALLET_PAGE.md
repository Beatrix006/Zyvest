# Zyvest – User Wallet & Dashboard Page Documentation

## 1. Overview
The **User Wallet** (`/user_wallet`) and **Dashboard** (`/dashboard`) represent the central financial command center for authenticated and KYC-approved Zyvest users. This integrated module gives users full control over fund deposits, withdrawals, peer-to-peer and internal transfers, MT5 trading account provisioning, connected bank accounts, whitelisted USDT addresses, and real-time transaction ledger auditing.

---

## 2. Balance Summary & Overview Cards

At the top of the User Wallet and Dashboard interfaces, users are presented with clear, real-time metrics reflecting their liquid capital, trading equity, and operational holds:

```
+---------------------------------------------------------------------------------------------------------+
|  Withdrawable Balance                                                                                   |
|  $183,750.50                                                                                            |
|  Total Balance (MT5 + Wallet): $233,401.74                                                              |
|                                                                                                         |
|  [ Deposit ]                      [ Withdraw ]                      [ Transfer ]                        |
+---------------------------------------------------------------------------------------------------------+
|  Total Bonus                                    |  Approval in Progress                                 |
|  $0.00                                          |  $3,831.46                                            |
|  Unused Bonus: $0.00                            |  Funds set aside for withdrawal processing.           |
+---------------------------------------------------------------------------------------------------------+
```

| Field / Metric | Description | Functionality & Rules |
|---|---|---|
| **Withdrawable Balance** | The net amount immediately available for withdrawal or external transfer. | Calculated by taking the wallet balance plus free MT5 trading equity minus active margin requirements and unvested trading credits. |
| **Total Balance (MT5 + Wallet)** | The combined financial value of the user's entire Zyvest account. | Real-time aggregate sum combining all funds held in the primary Zyvest user wallet and all connected MetaTrader 5 (MT5) trading accounts. |
| **Deposit Button** | Primary funding action button. | Opens the multi-channel **Deposit Modal** with options to fund either the user wallet or connected MT5 accounts directly. |
| **Withdraw Button** | Primary fund retrieval action button. | Opens the **Withdrawal Modal** allowing users to withdraw funds to registered bank accounts or crypto wallets. |
| **Transfer Button** | Primary internal and P2P reallocation button. | Opens the **Transfer Modal** for moving capital between user wallets (P2P) or between internal MT5 trading accounts. |
| **Total Bonus** | Displays platform trading promotional credits. | Shows total promotional bonus allocated, alongside a sub-label for **Unused Bonus** available for margin support. |
| **Approval in Progress** | Funds temporarily quarantined for pending withdrawals. | Displays the monetary sum currently set aside and locked while pending compliance review, admin verification, and bank settlement. |

---

## 3. Deposit Module (`Deposit` Modal)

The Deposit module provides seamless funding options tailored to user convenience. The modal features two distinct tabs:

```
              +-----------------------------------+-----------------------------------+
              |         Deposit To Wallet         |       Deposit To MT5 Account      |
              +-----------------------------------+-----------------------------------+
```

### A. Deposit To Wallet
Funds the user's centralized Zyvest fiat/crypto wallet balance.

* **Deposit Instructions Panel (Left Banner):**
  1. *Copy the bank details and initiate a wire transfer.*
  2. *Upload the transaction proof when submitting the payment order.*
  3. *Enter the transferred amount as per the proof.*
  4. *Your deposit will be processed once funds reach admin bank account.*

* **Form Fields & Parameters:**
  | Field | Type | Description / Requirements |
  |---|---|---|
  | **Transaction Method** | Radio / Toggle | Selection between **Fiat Currency** and **Crypto Currency**. |
  | **From Bank Account** | Dropdown | Populated with user's pre-approved accounts from **My Bank Accounts**. |
  | **To Bank Account** | Dropdown | Selection of the appropriate Zyvest Admin receiving bank account. |
  | **Amount in USD** | Numeric Input | Intended deposit value denominated in USD. |
  | **Converted Value** | Dynamic Label | Real-time automatic conversion value displaying the equivalent amount in the chosen fiat currency or cryptocurrency. |
  | **Write Note** | Text Field (Optional) | User reference note or memo regarding the deposit. |
  | **Campaign Code & [Apply]** | Text Field + Action | Optional promotional campaign or referral bonus code. |
  | **Document Attachment (Proof)** | Drag-and-Drop / Browse | Proof of payment/wire receipt upload: <br>• **Supported Formats:** `JPEG`, `PNG`, `PDF`<br>• **Size Limit:** Up to `10MB` per file<br>• Drag & drop zone or manual file picker. |
  | **Bank Account Summary View** | Preview Box | Bottom summary verifying *From Bank* (Sender legal name, masked ID) $\rightarrow$ *To Bank* (Zyvest admin beneficiary bank, account number, currency). |
  | **Actions** | Action Buttons | **[Cancel]** closes modal; **[Submit]** registers payment order for manual back-office verification. |

---

### B. Deposit To MT5 Account
Directly funds an active MetaTrader 5 live account without requiring a separate step from the wallet.

* **Transaction Methods (3 Options):**
  1. **Fiat Currency:** Wire transfer directly allocated to the selected MT5 trading account.
  2. **Crypto Currency:** Digital asset transfer (USDT TRC20/ERC20) routed to the MT5 account.
  3. **Move Funds to MT5:** Zero-fee instant internal transfer moving existing balance from the Zyvest User Wallet directly into the chosen MT5 account.

* **Form Fields & Parameters:**
  | Field | Type | Description / Requirements |
  |---|---|---|
  | **Select MT5 Account** | Dropdown | Lists all user's MT5 accounts showing Account ID, Account Type (e.g. *Zyvest Gold*, *Copier Grp*), and current balance. |
  | **From Bank Account** | Dropdown | User's verified bank account (for Fiat deposits). |
  | **To Bank Account** | Dropdown | Zyvest Admin receiving bank account. |
  | **Send Bank Details to My Email** | Checkbox / Toggle | Automatically emails official beneficiary bank account coordinates, SWIFT/IBAN details, and wire instructions to the user. |
  | **Amount in USD** | Numeric Input | Transfer amount in USD. |
  | **Converted Value** | Dynamic Label | Converted sum based on selected currency exchange rates. |
  | **Write Note** | Text Field (Optional) | Memo for trading account ledger tracking. |
  | **Campaign Code** | Text Field (Optional) | Deposit bonus or promo code. |
  | **Payment Proof Upload** | File Uploader | Screenshot or receipt of payment (`JPEG`, `PNG`, `PDF`, max 10MB). Verified by the Zyvest finance audit team. |
  | **Account Summary Box** | Information Box | Displays Sender identity, Target MT5 ID, and Beneficiary account details before final submission. |
  | **Actions** | Action Buttons | **[Cancel]** and **[Submit]**. |

---

## 4. Withdraw Module (`Withdraw` Modal)

The Withdrawal interface enforces strict security, verified destination checking, and margin risk management.

```
              +-----------------------------------+-----------------------------------+
              |        Withdraw from Wallet       |        Withdraw from MT5          |
              +-----------------------------------+-----------------------------------+
```

### Core Rules & Functionality
1. **Withdrawable Balance Indicator:** Clearly displays the maximum withdrawable balance. Prevents overdrawing capital needed to maintain open trading positions.
2. **Withdraw from Wallet:**
   * **Destination Selection:** Dropdown selecting from verified accounts under **My Bank Accounts** or whitelisted wallets under **My USDT Address**.
   * **Amount (USD):** Enter withdrawal sum. Enforces platform minimum/maximum thresholds.
   * **Converted Value & Fee Breakdown:** Displays estimated processing fee and net received amount in local fiat or cryptocurrency.
   * **Write Note (Optional):** Reference note.
3. **Withdraw from MT5:**
   * **Select Source MT5 Account:** Choose which live trading account to debit.
   * **Destination:** Direct transfer back to User Wallet, or directly to verified external bank/USDT address.
   * **Free Margin Protection:** Real-time margin verification ensures remaining equity exceeds maintenance margin to prevent forced stop-outs on active trades.
4. **Lifecycle & Status Transition:**
   * Upon clicking **[Submit]**, funds are immediately debited from available funds and placed into **Approval in Progress**.
   * Once approved and wired by the admin, the status transitions to **Approved** in the transaction history.
   * If cancelled or rejected by compliance, funds are immediately restored to **Withdrawable Balance**.

---

## 5. Transfer Module (`Transfer` Modal)

Enables peer-to-peer user wallet transfers and internal trading account transfers.

```
              +-----------------------------------+-----------------------------------+
              |          Wallet Transfer          |           MT5 Transfer            |
              +-----------------------------------+-----------------------------------+
```

### A. Wallet Transfer (Peer-to-Peer / P2P)
* **Left Banner:** *"Transfer to other Wallets — Transfer funds easily to other wallets from your wallet."*
* **Recipient Lookup:**
  * **Enter Recipient Name / ID\*:** User enters recipient email or platform ID (e.g. `ZYVE-500`).
  * **[Find User] Button:** Queries the backend to validate recipient identity and prevent misdirected transfers.
* **Visual Transfer Flow Preview:**
  ```
  +-------------------------+            +-------------------------+
  |  [User Photo]           |    --->    |  [Recipient Avatar]     |
  |  Sender Name            |            |  Recipient Name         |
  |  ZYVE-500               |            |  ZYVE-XXX (or Pending)  |
  +-------------------------+            +-------------------------+
  ```
  *(Displays placeholder `User not selected` until validated).*
* **Type Amount\*:** Numeric USD input.
* **Write Note (Optional):** Remark visible to recipient in their transaction statement.
* **Actions:** `[Cancel]` and `[Send Transfer Request]`.

### B. MT5 Transfer (Internal Account-to-Account)
* Move capital instantly between multiple MT5 trading accounts owned by the same user (e.g. from *Zyvest Gold* to *Copier Grp*) or rebalance between the main wallet and trading terminals.
* Zero internal fees and atomic balance execution.

---

## 6. Account Management & Linked Credentials

Located on the lower left of the **User Wallet** page, these sections display connected credentials with dedicated modal workflows:

---

### A. My MT5 Accounts
Displays all MetaTrader 5 trading accounts associated with the user profile with real-time balance feeds.

* **Header:** Displays `My MT5 Accounts` and card count badge (e.g., `A total of 3 cards are listed`).
* **[+ Add New] Action:** Opens the **Create Live / Demo Account** modal.
* **Account Card Elements:**
  * **Live/Demo Badge & Type:** E.g., `Live - Zyvest Gold`, `Live - Bug Test`, `Live - Copier Grp`.
  * **Connection Status:** Green live status indicator.
  * **MT5 Account ID:** E.g., `3033599`.
  * **Account Balance:** Current equity (e.g., `$64.00`, `$112.00`, `$162.00`).
  * **Bonus:** Credit bonus attached (e.g., `Bonus: $0.00`).

#### Create MT5 Account Modal (`Create Live / Demo Account`)
* **Tabs:** `[Live Account]` and `[Demo Account]`.
* **Left Banner:** *"Create Live Account — Trade in real markets with actual funds—experience full access and real profits."*
* **Fields:**
  | Field | Type | Description |
  |---|---|---|
  | **Account Type\*** | Dropdown / Selector | Select tier (e.g. *Standard*, *Zyvest Gold*, *Copier Grp*). |
  | **Leverage\*** | Dropdown | Choose leverage tier: `100`, `200`, `300`, `500`. |
  | **Initial Deposit\*** | Number / Currency | Desired initial opening balance from user wallet. |
  | **Actions** | Buttons | **[Cancel]** and **[Submit]** (creates MT5 login credentials immediately). |

---

### B. My Bank Accounts
Displays connected beneficiary bank accounts for fiat deposits and withdrawals.

* **Header:** `My Bank Accounts` with count badge (e.g., `A total of 1 accounts are listed`).
* **[+ Add New] Action:** Opens the **Bank Account Connect** modal.
* **Account Card Elements:**
  * Bank Name (e.g. `State Bank of India`).
  * Masked Account Number (e.g. `5058 ******** 5888`).
  * Country tag (`India`) and active badge.

#### Bank Account Connect Modal
* **Title & Subtitle:** *"Bank Account Connect — Enter the necessary details to connect your bank account"*
* **Form Fields:**
  | Field | Requirement | Description |
  |---|---|---|
  | **Account Holder Name\*** | Required | Legal name matching the Zyvest account KYC identity. |
  | **Account Number\*** | Required | Beneficiary bank account number. |
  | **Country\*** | Required | Dropdown of eligible banking countries. |
  | **IFSC Code** | Optional | Indian Financial System Code (for domestic Indian transfers). |
  | **IBAN Number** | Optional | International Bank Account Number (for EU/SEPA transfers). |
  | **Swift Code\*** | Required | International bank identifier code for international wires. |
  | **Select Bank\*** | Required | Dropdown of registered domestic and international banks. |
  | **Branch\*** | Required | Physical bank branch location. |
  | **Address** | Optional | Full street address of the bank branch. |
  | **Proof of Bank Account\*** | Required (Up to 10MB) | File upload (`JPEG`, `PNG`, `PDF`) of cancelled cheque, bank passbook, or bank statement verifying account holder name and number. |
  | **Actions** | Buttons | **[Submit]** (sends to compliance for approval) and **[Cancel]**. |

---

### C. My USDT Address
Displays whitelisted cryptocurrency payout wallets.

* **Header:** `My USDT Address` with count badge (e.g., `A total of 2 cards are listed`).
* **[+ Add New] Action:** Opens the modal to connect a verified USDT wallet.
* **Fields in Modal:**
  * **Network Protocol:** TRC-20 (Tron) or ERC-20 (Ethereum).
  * **USDT Wallet Address:** Validated crypto wallet address.
  * **Wallet Label:** E.g., *Personal Ledger*, *Exchange Wallet*.
  * **Security Check:** Email/SMS OTP or 2FA confirmation before whitelisting.

---

## 7. Transaction History Ledger

Positioned on the right panel of the **User Wallet** page (`/user_wallet`), providing a comprehensive, auditable transaction log:

### Filter Controls
* **Trans Method:** Filter by *Fiat Currency*, *Crypto Currency*, or *Internal Transfer*.
* **Module:** Filter by *General (Wallet)*, *MT5*, or *Copier*.
* **Trans Type:** Filter by *Debit* or *Credit*.
* **Date:** Calendar datepicker to filter specific transaction periods.

### Transaction History Data Schema

| Column | Description | Real Example from System |
|---|---|---|
| **Transaction** | Description of event | `Copy Master Subscription Fee Debit`, `Wallet Withdrawal`, `Wallet Deposit` |
| **Date** | Submission timestamp | `26/11/2026`, `24/11/2026` |
| **Status** | Current operational status | `Approved` (Settled/Completed), `Pending` (Under Review) |
| **Type** | Ledger entry type | `Debit` (funds outgoing), `Credit` (funds incoming) |
| **Module** | Context origin | `Copier`, `General`, `MT5` |
| **Amount** | Transacted numeric value | `10.0000`, `100.0000`, `251.0000` |

---

## 8. Dashboard Page Context (`/dashboard`)

The **Dashboard** shares the core **Withdrawable Balance** card and the three quick actions (`Deposit`, `Withdraw`, `Transfer`), while surfacing high-level account performance:

1. **Total Transactions Overview:** Displays cumulative monthly transacted capital (e.g. `$180,780.00`) alongside visual monthly volume tracking charts.
2. **Overall Profit/Loss Card:**
   * **MT5 Account Switcher:** Toggle across linked MT5 account IDs (e.g. `3033599`).
   * **Floating PnL:** Real-time unrealized profit/loss across all active trading positions.
   * **Net Realized PnL:** Cumulative closed profit/loss.
   * **Open Positions:** Total count of active market orders.
   * **[Read More] CTA:** Quick jump to detailed MT5 history and analytics.
3. **Educational & Promotional Banners:** Dynamic carousel highlighting Zyvest platform incentives, IB partner programs, and *Finquo Versity* educational trading content.
