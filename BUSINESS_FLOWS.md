# Zyvest Website User Flows — Business Rules

This document records product-flow rules for the Zyvest website. The Help Center displays these instructions separately; it does not perform the product actions described below.

## 1. Signup, onboarding, and approval

1. Collect personal details, email, phone, password, password confirmation, and Terms & Conditions acceptance.
2. Require OTP verification for both email and phone.
3. Continue to a separate **KYC Verification** step. Collect requested identity information and documents; submission is not approval.
4. Continue to **Nominee Details**, then **Bank Account Setup**.
5. Submit the onboarding request for admin review only after all required steps are complete. Set status to **Pending** and communicate the review status and next steps through the Zyvest website and email; there is no separate user-facing Pending Admin Approval guide/page in this Help Center.
6. Admin review changes the status to **Approved** or **Rejected**. Notify the user in-app and by email.
7. For **Rejected**, show the review reason and route the user to the relevant onboarding step. Preserve other valid submissions; resubmission returns the request to Pending.

Exact KYC document types, nominee fields, bank fields, and bank verification rules must come from Zyvest product/compliance configuration; do not invent them in the flow guide.

## 2. Sign in, 2FA Setup Gate, and recovery

- Support email/password and Google sign-in.
- **Post-Login 2FA Security Gate:**
  1. Once valid login credentials or Google auth succeed, if two-factor authentication is not yet enabled or configured, the platform prompts the user with the **"2FA not enabled"** security gate.
  2. The user is presented with two setup and verification options:
     - **Option 1: Generate new code with mail:** Automatically dispatches a 6-digit one-time passcode (OTP) to the user's verified registered email with a 10-minute validity countdown.
     - **Option 2: Open authenticator app:** Generates an authenticating QR code and manual setup secret key for pairing with Google Authenticator, Microsoft Authenticator, or Authy, accepting the live 6-digit TOTP code.
  3. Once the 6-digit code is submitted and verified, the security gate unlocks and routes the user directly to the **User Dashboard** (`/dashboard`).
- Route valid credentials according to user state: incomplete onboarding resumes at its next required step; Pending users receive review status and next-step updates; Rejected opens correction/resubmission; Approved users pass 2FA and land on the **Dashboard** and **Wallet**.
- Link Google sign-in to an existing account by verified email. A new verified Google email starts signup/onboarding and must complete phone verification, KYC, nominee, bank, and approval steps.
- Password recovery sends an email reset link; the user sets a new password through that link.
- Invalid credentials keep the user on the login page and show a clear error.

## 3. Access by account state

| State | User landing page | Available user actions |
| --- | --- | --- |
| Onboarding incomplete | Next required onboarding step | Complete signup, KYC, nominee, or bank setup |
| Pending | Zyvest website review status | View status updates and wait for a decision; Dashboard/Wallet actions remain unavailable |
| 2FA Pending / Not Enabled | 2FA Setup Gate | Choose "Generate new code with mail" or "Open authenticator app", enter 6-digit code |
| Approved & Verified | Dashboard (`/dashboard`) & Wallet (`/user_wallet`) | Full access to Withdrawable Balance, Deposits, Withdrawals, Transfers, MT5 accounts, and Bank Connect |
| Rejected | Correction/resubmission step | View reason, correct requested information/documents, resubmit |

Pending/Rejected users cannot access approved-user modules. Admin approval opens Wallet as the first page; it does not route through a Dashboard.

## 4. Profile and account management

- Profile & Account Management is available after approval.
- Users may edit their display name directly.
- To change a phone number, verify the new number by OTP before replacing the saved number.
- To change the login email, verify the new email by OTP, then replace the saved login email.
- A legal-name change requires supporting documents and admin/KYC review. An already Approved account remains active while this name change is reviewed.
- Before approval, KYC work and corrections happen in onboarding, not in the full Profile module.

## 5. Wallet

### Eligibility and landing

- After admin approval, route the user directly to Wallet.
- Deposit, withdrawal, and transfer actions require **Approved** status and required KYC.
- Pending/Rejected users cannot open Wallet actions.

### Deposit

1. Show only methods enabled for the user.
2. Before submission, disclose currency, fees, limits, and estimated amount.
3. Status sequence: **Pending → Processing → Completed** or **Failed**.
4. Credit the wallet only when the deposit reaches Completed.

### Withdrawal

1. Destination must be a verified payment method in the user's name.
2. Reserve the requested amount from available funds when the request is submitted.
3. On **Failed** or **Rejected**, release the reserved amount. On completion, finalize the debit.

### Transfer

1. Offer only source/destination options configured for the user's own account.
2. Require a supported same-currency source and destination with available funds.
3. Show configured limits before confirmation.
4. Process atomically: debit and credit both succeed together or neither is applied. Record the result in transaction history.

## Help Center and product boundary

The Help Center is a separate static website built with HTML/CSS/JavaScript. It displays workflow documentation and project-managed screenshot assets. It does not authenticate users, create accounts, submit KYC, approve onboarding, or process Wallet transactions. Those actions occur on the Zyvest website and must be enforced by Zyvest backend services.

Do not add product sign-in or transaction behavior to this Help Center unless the project is intentionally changed from documentation site to product implementation. KYC document types, nominee requirements, bank verification, review SLA, payment methods/currencies/fees/limits, provider status codes, transfer options, and notification rules must come from Zyvest product configuration; do not invent them in the guide.
