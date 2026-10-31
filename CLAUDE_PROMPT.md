# Claude Prompt — Zyvest Help Center UI and Flow Refinement

Copy the prompt below into Claude with the `zyvest-help-center` project files attached or open.

---

You are refining the existing Zyvest Capital Help Center in this project. Work directly with the current HTML, CSS, JavaScript, README, and `BUSINESS_FLOWS.md`. First inspect the files and understand the current structure. Then improve the front-end design and implementation while preserving the agreed business logic below.

## Goals

- Create a polished, clear, responsive help-center interface with a distinct **User** and **Admin** role choice.
- Make the User onboarding sequence easy to follow: **Sign up → KYC Verification → Nominee Details → Bank Account Setup → Pending Admin Approval → Dashboard after approval**.
- Improve spacing, typography, hierarchy, responsive behavior, component consistency, and empty/error states.
- Add restrained, purposeful animations and transitions. Respect `prefers-reduced-motion`; avoid distracting motion or animation that blocks reading.
- Keep detailed flow pages scannable, with the application steps, business rules/account states, verification checklist, and screenshot upload/preview area.
- Keep the existing screenshot preview and caption behavior unless you improve it without requiring a server. Clearly communicate that selected images are local previews and are not uploaded or saved by this static prototype.
- Keep the project easy to open in a modern browser without a build step or package installation.

## Business logic — preserve these rules

### Signup and onboarding

1. Collect personal details, email, phone, password, password confirmation, and Terms & Conditions acceptance.
2. Require OTP verification for both email and phone.
3. Continue to a separate KYC Verification step.
4. Continue to Nominee Details, then Bank Account Setup.
5. Submit the complete application for admin review only after all required onboarding steps are complete. Show the Pending Admin Approval page while the application is pending.
6. Admin review sets the application to Approved or Rejected. Notify users in-app and by email.
7. For Rejected, show the reason and route the user to the relevant onboarding step to correct and resubmit. Preserve other valid submissions.

### Login and access routing

- Support email/password, password recovery by email reset link, and Google sign-in.
- A Google login with a verified email matching an existing Zyvest account links to that account. A new verified Google email starts signup/onboarding and must complete phone verification and the remaining onboarding steps.
- After valid authentication, route incomplete onboarding to its next required step; route Pending applications to Pending Admin Approval; route Rejected applications to correction/resubmission; route Approved accounts to the Dashboard.
- The Dashboard and full User module set are available only after approval. Do not describe Pending users as having full Dashboard access.

### Approved-user modules

- **Dashboard:** user must choose an Active Live or Active Demo account; do not silently select a default. Show balance values/labels returned by the trading platform. Statistics are current-month trades, win rate, and P/L. Recent Activity is the latest five selected-account items with date, type, amount, and status, covering deposits, withdrawals, transfers, and trading transactions. Notifications cover KYC, wallet, trading, and account alerts. An Approved user with no trading account sees a Create trading account empty state.
- **Profile:** display name is editable. Phone/email changes take effect only after OTP verification; a verified new email becomes the login email. Legal-name changes require supporting documents and admin/KYC review; an already Approved account stays active during the review.
- **Trading Accounts:** only Approved users may create multiple accounts subject to platform limits. User selects Live or Demo and then an enabled platform/server. Provisioning status is Pending, then Active or Failed; show the failure reason and allow retry. Reveal credentials once after successful creation; provide a secure reset flow afterward. Supported account statuses are Pending, Active, Failed, Suspended, and Closed. Only Active accounts can be selected on the Dashboard. Suspended/Closed accounts remain visible for status/history but cannot trade or fund.
- **Wallet:** only Approved users with required KYC may deposit, withdraw, or transfer. Show only enabled deposit methods and disclose currency, fees, limits, and estimated amount before submission. Deposit status is Pending → Processing → Completed or Failed; credit funds only on Completed. Withdraw only to verified payment methods in the user's name; reserve available funds at submission and release them if Failed/Rejected. Transfers are between the user's own wallet and trading accounts, require Active accounts and same currency, show configured limits before confirmation, and process atomically so debit and credit both succeed or neither does.

## Important boundaries

- This project is a **static help-center prototype**, not Zyvest's authenticated application or backend. Do not claim to implement real authentication, OTP, Google OAuth, KYC approval, trading-account provisioning, wallet/payment processing, or access control without existing service integrations.
- Do not invent KYC document types, nominee fields, bank fields, verification methods, fees, currencies, limits, review timelines, support contacts, or compliance requirements. Use neutral wording or clearly marked TODO/configuration placeholders when the project does not define them.
- Keep Admin as a clear, well-designed placeholder for future Admin flow modules. Do not fabricate Admin workflows.
- Keep user-facing copy simple and task-focused. Avoid fake balances, fake success messages, or fake transaction results.
- Do not remove or overwrite unrelated project files. Do not introduce a framework, package manager, or dependency unless the existing implementation makes it necessary.

## Quality and delivery

- Keep semantic HTML, keyboard navigation, visible focus states, accessible labels, and suitable contrast.
- Make all role switches, module cards, detail pages, close/back actions, search, and screenshot controls work across desktop and mobile widths.
- Avoid console errors, broken references, invalid markup, and CSS/JavaScript errors. Review the final changed files and use only validation tools already available in the project; do not install packages.
- Keep copy and code in sync with `BUSINESS_FLOWS.md`.
- When finished, summarize the design changes, list the files changed, describe what was checked, and call out any product requirements that still need Zyvest confirmation.

---
