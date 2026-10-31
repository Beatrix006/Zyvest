# Claude Prompt — Zyvest Help Center Refinement

Copy this prompt into Claude with the `zyvest-help-center` project files attached or open.

---

You are refining the existing Zyvest Capital Help Center. Inspect the current HTML, CSS, JavaScript, README, and `BUSINESS_FLOWS.md`, then improve the front-end while preserving the agreed business rules below.

## Goals

- Keep a clear **User** and **Admin** role choice.
- Keep the onboarding path easy to follow: **Sign up → KYC Verification → Nominee Details → Bank Account Setup → Pending Admin Approval → Wallet after approval**.
- Preserve the working light/dark theme control. The theme must apply consistently to the header, navigation, content, detail pages, and footer, and remain selected between visits when browser storage is available.
- Improve typography, spacing, responsive behavior, contrast, focus states, empty/error states, and component consistency.
- Use restrained animations and transitions; respect `prefers-reduced-motion`.
- Keep detailed pages scannable, with flow steps, business rules/account states, verification checks, and screenshot upload/preview.
- Keep screenshot previews local to the current page; do not imply that screenshots are uploaded or saved by this static prototype.
- Keep the project openable in a modern browser without a build step or package installation.

## Business logic — preserve these rules

### Signup and onboarding

1. Collect personal details, email, phone, password, password confirmation, and Terms & Conditions acceptance.
2. Require OTP verification for both email and phone.
3. Continue to a separate KYC Verification step, then Nominee Details, then Bank Account Setup.
4. Submit for admin review only after all required onboarding steps are complete. Show Pending Admin Approval while the application is pending.
5. Admin review sets Approved or Rejected and notifies the user in-app and by email.
6. For Rejected, show the reason and route to the relevant onboarding step for correction/resubmission.

### Login and access routing

- Support email/password, password recovery by email reset link, and Google sign-in.
- Link Google to an existing account by verified email. A new verified Google email starts signup/onboarding and must complete phone verification, KYC, nominee, bank, and approval.
- Route valid logins by state: incomplete onboarding resumes at the next step; Pending opens Pending Admin Approval; Rejected opens correction/resubmission; Approved opens Wallet.
- Admin approval routes directly to Wallet as the first approved-user page. Do not route through a Dashboard.
- Pending and Rejected users cannot access approved-user modules.

### Approved-user modules

- **Wallet is the post-approval landing page.** Only Approved users with required KYC may deposit, withdraw, or transfer.
- Deposits show only enabled methods and disclose currency, fees, limits, and estimated amount before submission. Status is Pending → Processing → Completed or Failed; credit only on Completed.
- Withdrawals go only to verified payment methods in the user's name. Reserve available funds on submission and release them if Failed/Rejected.
- Transfers use only source/destination options configured for the user's own account, same-currency options, and configured limits shown before confirmation. Process atomically so both debit and credit succeed, or neither does.
- **Profile:** display name is editable. Phone/email changes take effect only after OTP verification; verified new email becomes the login email. Legal-name changes require supporting documents and admin/KYC review; an already Approved account stays active during review.
- Keep other approved-user modules available through User navigation/switches. Wallet is the first page after approval.

## Important boundaries

- This project is a **static help-center prototype**, not Zyvest's authenticated application/backend. Do not claim real authentication, OTP, Google OAuth, KYC approval, or payment processing without service integrations.
- Do not invent KYC document types, nominee/bank fields, verification methods, fees, currencies, limits, review timelines, support contacts, or compliance rules. Use neutral wording or marked configuration placeholders.
- Keep Admin as a well-designed placeholder for future Admin flows; do not fabricate workflows.
- Do not create fake balances, fake success messages, or fake transaction results.
- Do not remove unrelated files or add a framework/dependency without a concrete need.

## Quality and delivery

- Keep semantic HTML, keyboard navigation, visible focus, accessible labels, suitable contrast, and mobile support.
- Ensure role switches, module cards, detail/back/close actions, search, theme toggle, and screenshot controls work.
- Avoid console errors, broken references, invalid markup, and CSS/JavaScript errors. Use only existing validation tools; do not install packages.
- Keep the UI copy synchronized with `BUSINESS_FLOWS.md`.
- Summarize the design changes, changed files, checks performed, and product rules that still need Zyvest confirmation.

---
