# Zyvest User Flows — Business Rules

This document records the agreed business rules for the User guide and application routing.

## 1. Signup, onboarding, and approval

1. Collect personal details, email, phone, password, password confirmation, and Terms & Conditions acceptance.
2. Require OTP verification for both email and phone.
3. Continue to a separate **KYC Verification** step. Collect requested identity information and documents; submission is not approval.
4. Continue to **Nominee Details**, then **Bank Account Setup**.
5. Submit for admin review only after all required onboarding steps are complete. Set status to **Pending** and show the **Pending Admin Approval** page.
6. Admin review changes the status to **Approved** or **Rejected**. Notify the user in-app and by email.
7. For **Rejected**, show the review reason and route the user to the relevant onboarding step. Preserve other valid submissions; resubmission returns the application to Pending.

Exact KYC document types, nominee fields, bank fields, and bank verification rules must come from Zyvest product/compliance configuration; do not invent them in the flow guide.

## 2. Sign in and recovery

- Support email/password and Google sign-in.
- Route valid credentials according to state: incomplete onboarding resumes at its next required step; Pending opens Pending Admin Approval; Rejected opens correction/resubmission; Approved opens **Wallet**.
- Link Google sign-in to an existing account by verified email. A new verified Google email starts signup/onboarding and must complete phone verification, KYC, nominee, bank, and approval steps.
- Password recovery sends an email reset link; the user sets a new password through that link.
- Invalid credentials keep the user on the login page and show a clear error.

## 3. Access by account state

| State | User landing page | Available user actions |
| --- | --- | --- |
| Onboarding incomplete | Next required onboarding step | Complete signup, KYC, nominee, or bank setup |
| Pending | Pending Admin Approval | View review status and wait for a decision |
| Approved | Wallet | Use Wallet first; remaining approved User modules are available through User navigation/switches |
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

## Implementation boundary and configuration points

The help center is a static HTML/CSS/JavaScript documentation prototype. It presents these flows and supports local screenshot previews; it does not authenticate users, approve KYC, or process payments. Those actions must be enforced by Zyvest application/backend services.

Before wiring production behavior, map existing services/configuration for OTP expiry/resend limits, password policy, accepted KYC documents, nominee requirements, bank verification, review SLA, payment methods/currencies/fees/limits, provider status codes, transfer endpoints, and audit/notification events. Render authoritative service outcomes and never infer transaction completion from request submission.
