# Zyvest User Flows — Business Rules

This document records the agreed business rules for the User guide and the application implementation reference.

## 1. Signup, onboarding, and approval

1. Collect personal details, email, phone, password, password confirmation, and Terms & Conditions acceptance.
2. Require OTP verification for both email and phone.
3. Continue to a separate **KYC Verification** step. Collect requested identity information and documents; submission is not approval.
4. Continue to **Nominee Details**, then **Bank Account Setup**.
5. Submit for admin review only after required onboarding steps are complete. Set status to **Pending** and show the **Pending Admin Approval** page.
6. Admin review changes status to **Approved** or **Rejected**. Notify the user in-app and by email.
7. For **Rejected**, show the review reason and route the user to the relevant onboarding step. Preserve other valid submissions; resubmission returns the application to Pending.

Exact KYC document types, nominee fields, bank fields, and bank verification rules must come from Zyvest product/compliance configuration; do not invent them in the flow guide.

## 2. Sign in and recovery

- Support email/password and Google sign-in.
- Route valid credentials according to state: incomplete onboarding resumes at its next required step; Pending opens Pending Admin Approval; Rejected opens correction/resubmission; Approved opens the Dashboard.
- Link Google sign-in to an existing account by verified email. A new verified Google email starts signup/onboarding and must complete phone verification, KYC, nominee, bank, and approval steps.
- Password recovery sends an email reset link; the user sets a new password through that link.
- Invalid credentials keep the user on the login page and show a clear error.

## 3. Access by account state

| State | User landing page | Available user actions |
| --- | --- | --- |
| Onboarding incomplete | Next required onboarding step | Complete signup, KYC, nominee, or bank setup |
| Pending | Pending Admin Approval | View review status and wait for a decision |
| Approved | Dashboard | All User modules; account status and wallet rules still apply |
| Rejected | Correction/resubmission step | View reason, correct requested information/documents, resubmit |

Pending/Rejected users cannot access the Dashboard, trading, wallet, or other Approved-only modules. Approval unlocks the complete User module set according to the User navigation/switches.

## 4. Dashboard

1. After approval, open the Dashboard. An Approved user with no trading account sees a **Create trading account** empty state.
2. If trading accounts exist, require the user to choose an **Active Live** or **Active Demo** account; do not select a default.
3. Display Total balance, Available balance, Equity, and account details using values and labels returned by the trading platform. Do not calculate replacement values in the client.
4. Show current-month trade count, win rate, and P/L for the selected account.
5. Show the latest five transactions for the selected account, with date, type, amount, and status. Include deposits, withdrawals, transfers, and trading transactions.
6. Show notifications for KYC status, deposits, withdrawals, transfers, trading, and account alerts.
7. Suspended/Closed trading accounts remain visible for status/history but cannot trade or fund.

## 5. Profile and account management

- Profile & Account Management is available after approval.
- Users may edit their display name directly.
- To change a phone number, verify the new number by OTP before replacing the saved number.
- To change the login email, verify the new email by OTP, then replace the saved login email.
- A legal-name change requires supporting documents and admin/KYC review. An already Approved account remains active while this name change is reviewed.
- Before approval, KYC work and corrections happen in onboarding, not in the full Profile module.

## 6. Trading accounts

1. Only Approved users may create trading accounts.
2. Allow multiple accounts subject to platform limits.
3. User selects **Live** or **Demo**, then a currently enabled platform/server.
4. After submission, show **Pending** while the platform provisions the account.
5. Provisioning ends in **Active** or **Failed**. A failure shows its reason and offers retry.
6. Reveal credentials once after successful creation; provide a secure reset flow for later access.
7. Display lifecycle states **Pending, Active, Failed, Suspended, Closed**.
8. Only Active Live/Demo accounts may be selected on the Dashboard. Suspended/Closed accounts retain status/history visibility but cannot trade or fund.

## 7. Wallet

### Eligibility

- Deposit, withdrawal, and transfer actions require **Approved** status and required KYC.
- Suspended/Closed trading accounts cannot be funded. Transfers may use only Active accounts and an available wallet.

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

1. Source and destination must be the user's own wallet or trading accounts.
2. Trading accounts must be Active; the wallet must be available.
3. Source and destination must use the same currency.
4. Show configured limits before confirmation.
5. Process atomically: debit and credit both succeed together or neither is applied. Record the result in transaction history.

## Implementation boundary and configuration points

The help center is a static HTML/CSS/JavaScript documentation prototype. It presents these flows and supports local screenshot previews; it does not authenticate users, approve KYC, provision trading accounts, process payments, or persist uploaded screenshots. These actions must be enforced by Zyvest application/backend services.

Before wiring production behavior, map existing services/configuration for OTP expiry/resend limits, password policy, accepted KYC documents, nominee requirements, bank verification, review SLA, platform account limits, payment methods/currencies/fees/limits, provider status codes, and audit/notification events. Render authoritative service outcomes and never infer transaction completion from request submission.
