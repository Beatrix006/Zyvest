const modules = [
  {
    id: 'login', icon: '↗', title: 'Log in', path: 'Authentication & User Access',
    summary: 'Sign in with email/password or Google. The application routes users to the next step required by onboarding and approval status.',
    flow: ['Open the Zyvest login page', 'Choose email/password or Login with Google', 'For email/password, enter the registered email and password, then click Login', 'For Google, authenticate with Google and match the verified email to a Zyvest account', 'If the verified email is new, start signup/onboarding', 'After valid authentication, route incomplete onboarding to its next required step', 'Route a fully submitted application awaiting review to Pending Admin Approval', 'After admin approval, route to the Dashboard and unlock all User modules'],
    rules: ['Email and Password are required for password sign-in. Invalid credentials keep the user on the login page and show an error.', 'A Google email matching an existing account links to that Zyvest account. A new verified Google email starts signup/onboarding and must complete phone verification, KYC, nominee details, and bank account setup.', 'Forgot your password? sends an email reset link; the user sets a new password through that link.', 'After signup, users complete KYC, nominee, and bank setup before entering Pending Admin Approval. Pending approval does not grant access to the Approved-user modules.', 'Admin approval routes the user to the Dashboard and makes all User modules available. Rejection routes the user to the review reason and correction/resubmission path.', 'The login page also exposes a language selector and a Sign up link.'],
    checks: ['Email/password sign-in accepts valid credentials and rejects invalid credentials with a clear message.', 'Google sign-in matches verified email correctly and does not create a duplicate account.', 'Incomplete onboarding resumes at its next required step.', 'A submitted application awaiting review opens Pending Admin Approval.', 'Approved users reach the Dashboard with all User modules unlocked; Rejected users see a correction path.', 'Password recovery sends a reset link and permits setting a new password.']
  },
  {
    id: 'signup', icon: '＋', title: 'Sign up', path: 'Onboarding · Step 1',
    summary: 'Create login credentials and verify email and phone, then complete KYC, nominee, and bank setup before admin review.',
    flow: ['Open Zyvest Website and choose Sign Up', 'Enter personal details, email, and phone number', 'Create and confirm a password', 'Accept Terms & Conditions and submit registration', 'Verify the email using its OTP/link', 'Verify the phone number using its OTP', 'Continue to the separate KYC Verification module', 'Complete nominee details, then bank account setup', 'Submit the completed onboarding application for admin review', 'Show the Pending Admin Approval page'],
    rules: ['Email and phone must both be verified before the user continues to KYC.', 'Signup alone does not submit the application for admin approval; KYC, nominee, and bank setup are required next steps.', 'After the application is submitted, show Pending Admin Approval. Full Dashboard and User modules become available only after Approved.', 'Admin review changes the application to Approved or Rejected and notifies the user in-app and by email.', 'Rejected users see the review reason and can correct requested details/documents and resubmit.'],
    checks: ['Required fields, terms acceptance, and password confirmation are validated.', 'Email and phone OTPs are each required and have clear success/error states.', 'Post-signup navigation enters KYC Verification, not the Dashboard.', 'All required onboarding modules must be submitted before entering Pending Admin Approval.', 'Approved and Rejected outcomes route to the correct next page and notify the user.']
  },
  {
    id: 'kyc', icon: '▣', title: 'KYC verification', path: 'Onboarding · Step 2',
    summary: 'Complete the identity information and document submission required before admin review.',
    flow: ['Continue after Sign up and contact verification', 'Open KYC Verification', 'Review the identity information requested by the application', 'Enter required details and upload requested documents', 'Review the information and document previews', 'Submit the KYC information', 'Continue to Nominee Details when the submission is accepted'],
    rules: ['KYC is a separate onboarding module between Sign up and Nominee Details.', 'Use document types and field rules configured in the application; this guide does not assume a universal document list.', 'Submitting KYC does not approve the account. Admin review occurs after nominee and bank setup are complete and the full application is submitted.', 'If review requests a correction, show the reason and allow the user to update and resubmit the relevant KYC information.'],
    checks: ['Required KYC fields and documents cannot be skipped.', 'Uploads show validation and a reviewable preview before submission.', 'Successful submission continues to Nominee Details.', 'KYC submission is not presented as approval.']
  },
  {
    id: 'nominee', icon: '♧', title: 'Nominee details', path: 'Onboarding · Step 3',
    summary: 'Capture the nominee information requested by Zyvest after KYC submission.',
    flow: ['Continue from KYC Verification', 'Open Nominee Details', 'Enter the nominee information requested by the application', 'Review the details for accuracy', 'Save and submit nominee details', 'Continue to Bank Account Setup'],
    rules: ['Nominee Details is a required onboarding step after KYC and before bank account setup.', 'Use the required fields, eligibility rules, and validation configured by Zyvest; exact nominee requirements must come from the product/compliance team.', 'If admin review requests a correction, return the user to this step with the reason and preserve already-valid information.'],
    checks: ['Required nominee fields and validation messages are clear.', 'The user can review details before submission.', 'Successful submission continues to Bank Account Setup.', 'Correction requests identify the affected nominee information.']
  },
  {
    id: 'bank-account', icon: '▤', title: 'Bank account setup', path: 'Onboarding · Step 4',
    summary: 'Add the bank account information required for onboarding before submitting for admin approval.',
    flow: ['Continue from Nominee Details', 'Open Bank Account Setup', 'Enter the bank account information requested by the application', 'Complete any configured ownership or account verification step', 'Review and submit the details', 'Submit the completed onboarding application for admin review', 'Open Pending Admin Approval'],
    rules: ['Bank Account Setup is required after Nominee Details and before admin approval.', 'Bank fields, ownership checks, and verification methods must follow configured Zyvest requirements; do not infer them from generic banking conventions.', 'Do not submit the application for Pending Admin Approval until all required KYC, nominee, and bank steps are complete.', 'If admin requests a correction, route the user to the relevant step and preserve other valid submissions.'],
    checks: ['Required bank fields are validated before submission.', 'Any configured verification step has clear Pending/Success/Failure outcomes.', 'The application is submitted only after all required onboarding modules are complete.', 'Submission routes the user to Pending Admin Approval.']
  },
  {
    id: 'approval', icon: '◷', title: 'Pending admin approval', path: 'Onboarding · Step 5',
    summary: 'Show the application review status after KYC, nominee, and bank details are submitted.',
    flow: ['Submit completed KYC, nominee, and bank account details', 'Create an application review request with status Pending', 'Route the user to Pending Admin Approval', 'Show the submitted status and next-step message', 'When admin approves, notify the user in-app and by email', 'Route the approved user to the Dashboard and unlock all User modules', 'If admin rejects or requests corrections, show the reason and route to the required onboarding step'],
    rules: ['Pending Admin Approval is a distinct page after the full onboarding application is submitted.', 'While status is Pending, keep the user on this page and do not expose the Dashboard, trading, wallet, or other Approved-only modules.', 'Admin decisions are Approved or Rejected; communicate the outcome in-app and by email.', 'Approved status unlocks the Dashboard and all User modules according to the User navigation/switches.', 'Rejected status displays the reason and a correction/resubmission path to the relevant KYC, nominee, or bank step.'],
    checks: ['The page appears only after all required onboarding steps are submitted.', 'Pending status does not expose Approved-only modules.', 'Approval unlocks the Dashboard and all User modules without requiring a new registration.', 'Rejection points to the correct step and preserves unrelated valid details.']
  },
  {
    id: 'dashboard', icon: '▦', title: 'Dashboard', path: 'Available after approval',
    summary: 'Choose an active trading account and review its platform-supplied balances, monthly statistics, activity, and notifications.',
    flow: ['Log in with valid credentials', 'If onboarding is incomplete, resume at the next required onboarding step', 'If the completed application is Pending admin review, show Pending Admin Approval instead of Dashboard', 'If Rejected, show the reason and route to the relevant correction/resubmission step', 'After Approved, open the Dashboard and unlock all User modules', 'If the Approved user has no trading account, show the Create trading account empty state', 'If trading accounts exist, require the user to select an Active Live or Demo account', 'Load Total balance, Available balance, Equity, and trading-account details from the platform for the selected account', 'Show current-month trade count, win rate, and P/L for the selected account', 'Show the latest five selected-account transactions and relevant notifications'],
    rules: ['Only Approved users can access the Dashboard and the full set of User modules. Pending applications see Pending Admin Approval; incomplete applications resume onboarding; Rejected applications see the correction path.', 'The user must choose an account; do not silently select a default. Only Active Live/Demo accounts are selectable.', 'Display balance values and labels returned by the trading platform; do not recompute them in the help-center/client logic.', 'An Approved user with no trading account sees a Create trading account action. Suspended or Closed accounts remain viewable with status/history but cannot trade or fund.', 'Recent Activity is the latest five selected-account items across deposits, withdrawals, transfers, and trading transactions.'],
    checks: ['Incomplete, Pending, Rejected, and Approved states route to their appropriate page.', 'The Pending Admin Approval page does not expose the Dashboard or Approved-only modules.', 'Approval unlocks the Dashboard and all User modules without requiring a new registration.', 'Changing the selected account refreshes account details, balances, statistics, and recent activity together.', 'No account-specific figures appear before the user selects an account.', 'Notifications include KYC, wallet, trading, and account events.']
  },
  {
    id: 'profile', icon: '♙', title: 'Profile & account', path: 'Approved → Profile / Settings',
    summary: 'View account details, update permitted profile fields, verify contact changes, and manage KYC submissions.',
    flow: ['Open Profile / Settings from the Dashboard', 'Review legal name, display name, email, phone, account status, and KYC status', 'Edit the display name and save', 'To change phone or email, enter the new contact and request an OTP', 'Verify the OTP; only then replace the saved phone or login email', 'To change legal name, submit supporting documents for admin/KYC review', 'Review KYC status and any admin feedback', 'If Rejected, correct the requested details/documents and resubmit'],
    rules: ['Profile & Account Management is available after approval as part of the unlocked User modules.', 'Display name is self-service editable.', 'A phone number is replaced only after the new number passes OTP verification.', 'A new email must pass OTP verification before it replaces the login email.', 'Legal-name changes require supporting documents and admin/KYC review. An already Approved account stays active during this review.', 'Before approval, KYC and onboarding corrections happen through their onboarding steps; the user does not enter the full Profile module.'],
    checks: ['Unverified phone/email changes do not replace saved contact details.', 'The verified email becomes the login identifier after confirmation.', 'Legal-name changes create a review request and do not suspend an already-Approved account.', 'KYC status, rejection reason, and resubmission action are visible when applicable.']
  },
  {
    id: 'trading-accounts', icon: '◫', title: 'Trading accounts', path: 'Approved → Trading Accounts',
    summary: 'Eligible users can create multiple Live or Demo accounts, monitor provisioning, and select active accounts.',
    flow: ['Open Trading Accounts from the Dashboard', 'Review existing accounts and statuses', 'If Approved, choose Create trading account', 'Select Live or Demo, then choose a platform/server', 'Review available options and platform limits, then submit', 'Show the new account as Pending while the platform provisions it', 'On success, change status to Active and show credentials once', 'If provisioning fails, show the reason and allow retry', 'Use the secure credential reset flow for later credential access', 'Select Active Live/Demo accounts for Dashboard use'],
    rules: ['Trading Accounts is available after approval as part of the unlocked User modules. Only Approved users can create accounts.', 'Multiple accounts are allowed subject to platform limits. Available account types and platform/server choices are controlled by the platform.', 'Provisioning states are Pending, Active, or Failed; existing accounts may also be Suspended or Closed.', 'Credentials are revealed once after successful creation. Subsequent access uses a secure reset flow.', 'Only Active accounts can be selected on the Dashboard. Suspended/Closed accounts retain status/history visibility but cannot trade or fund.'],
    checks: ['Non-Approved users cannot start account creation.', 'Account type and platform/server choices match the options currently enabled for that user.', 'Provisioning transitions Pending to Active or Failed with a useful error and retry path.', 'Credentials appear only once at creation; the reset flow does not reveal the old secret.', 'Suspended/Closed accounts cannot initiate trading or funding actions.']
  },
  {
    id: 'wallet', icon: '◇', title: 'Wallet', path: 'Approved → Wallet',
    summary: 'Approved users with required KYC can deposit, withdraw to verified methods, transfer between their own accounts, and track status.',
    flow: ['Open Wallet; confirm the user is Approved and has required KYC', 'Deposit: choose an enabled payment method and review currency, fees, limits, and estimated amount', 'Submit the deposit and track Pending → Processing → Completed or Failed', 'Credit the wallet only when the deposit is Completed', 'Withdraw: select a verified payment method in the user’s name and enter an amount within available funds/limits', 'Review the withdrawal summary and submit; reserve available funds immediately', 'Track the request; release reserved funds if Failed or Rejected', 'Transfer: select the user’s own wallet or trading account as source and destination', 'Use Active accounts and the same currency; enter an amount within configured limits', 'Review the transfer details and confirm', 'Process the debit and credit atomically, then show the result in history'],
    rules: ['Only Approved users with required KYC can deposit, withdraw, or transfer. Pending/Rejected users cannot start money actions.', 'Show only deposit methods enabled for the user. Disclose currency, fees, limits, and estimated amount before submission.', 'Deposit statuses are Pending, Processing, Completed, and Failed. Wallet funds are credited only on Completed.', 'Withdrawals go only to verified payment methods in the user’s name. Reserve funds on submission and release them on Failed/Rejected.', 'Transfers are limited to the user’s own wallet and trading accounts, Active accounts, same currency, and configured limits shown before confirmation.', 'A confirmed transfer is atomic: debit and credit both succeed together or neither is applied. Record the outcome in transaction history.'],
    checks: ['Ineligible users are blocked before payment/transfer submission.', 'Deposit disclosures and withdrawal destination ownership are visible before confirmation.', 'Deposits do not increase balance before Completed.', 'Failed/Rejected withdrawals restore reserved available funds.', 'Transfer confirmation shows source, destination, amount, currency, and limit status.', 'Transfer results never leave only one side debited or credited.']
  }
];

const viewElements = {
  home: document.querySelector('#overviewView'),
  user: document.querySelector('#userView'),
  admin: document.querySelector('#adminView')
};
const grid = document.querySelector('#moduleGrid');
const search = document.querySelector('#searchInput');
const empty = document.querySelector('#emptyState');
let currentView = 'home';

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function setView(view) {
  if (!viewElements[view]) return;
  currentView = view;
  Object.entries(viewElements).forEach(([name, element]) => { element.hidden = name !== view; });
  document.querySelectorAll('.nav-button').forEach(button => button.classList.toggle('active', button.dataset.view === view || (view === 'home' && button.dataset.view === 'home')));
  document.querySelectorAll('.switch-button').forEach(button => button.classList.toggle('selected', button.dataset.view === view));
  document.querySelector('.top-links').classList.remove('open');
  document.querySelector('#menuToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderModules() {
  const query = search.value.trim().toLowerCase();
  const visible = modules.filter(module => `${module.title} ${module.path} ${module.summary} ${module.flow.join(' ')} ${module.rules.join(' ')} ${module.checks.join(' ')}`.toLowerCase().includes(query));
  grid.innerHTML = visible.map(module => `
    <button class="module-card" data-module="${module.id}" aria-label="Open ${escapeHtml(module.title)} guide">
      <span class="module-icon">${module.icon}</span><span class="module-path">${escapeHtml(module.path)}</span>
      <strong>${escapeHtml(module.title)}</strong><span class="module-summary">${escapeHtml(module.summary)}</span>
      <span class="module-action">Open overview <b>→</b></span>
    </button>`).join('');
  empty.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;
  grid.querySelectorAll('[data-module]').forEach(button => button.addEventListener('click', () => openModule(button.dataset.module)));
}

function openModule(id) {
  const module = modules.find(item => item.id === id);
  if (!module) return;
  const detail = document.createElement('section');
  detail.className = 'detail-page';
  detail.setAttribute('role', 'dialog');
  detail.setAttribute('aria-modal', 'true');
  detail.setAttribute('aria-labelledby', 'detailTitle');
  detail.innerHTML = `
    <div class="detail-topbar"><button class="back-link close-detail">← All user flows</button><span class="detail-counter">USER GUIDE · ${escapeHtml(module.path)}</span><button class="close-button close-detail" aria-label="Close guide">×</button></div>
    <div class="detail-content">
      <p class="eyebrow">USER FLOW OVERVIEW</p><h1 id="detailTitle">${escapeHtml(module.title)}</h1><p class="detail-intro">${escapeHtml(module.summary)}</p>
      <div class="flow-layout">
        <section class="detail-panel"><h2>Application flow</h2><ol class="flow-list">${module.flow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol></section>
        <section class="detail-panel check-panel"><h2>What to verify</h2><ul>${module.checks.map(check => `<li>${escapeHtml(check)}</li>`).join('')}</ul></section>
      </div>
      <section class="detail-panel business-rules"><p class="eyebrow">IMPLEMENTATION RULES</p><h2>Business rules & account states</h2><ul>${module.rules.map(rule => `<li>${escapeHtml(rule)}</li>`).join('')}</ul></section>
      <section class="screenshots-panel"><div class="screenshot-heading"><div><p class="eyebrow">VISUAL WALKTHROUGH</p><h2>Step screenshots</h2><p>Add screenshots to show the screen for each part of this flow.</p></div><label class="upload-button">＋ Add screenshots<input class="screenshot-input" type="file" accept="image/*" multiple></label></div>
        <div class="upload-hint">Choose one or more image files. Screenshots are previewed in this page; this static demo does not upload them to a server.</div>
        <div class="screenshot-grid" aria-live="polite"><div class="screenshot-empty">No screenshots added yet.</div></div>
      </section>
    </div>`;
  document.body.append(detail);
  document.body.style.overflow = 'hidden';
  const close = () => {
    detail.querySelectorAll('.screenshot-card img').forEach(image => URL.revokeObjectURL(image.src));
    detail.remove();
    document.body.style.overflow = '';
  };
  detail.querySelectorAll('.close-detail').forEach(button => button.addEventListener('click', close));
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail.querySelector('.screenshot-input').addEventListener('change', event => addScreenshots(event.target.files, detail));
  detail.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') keepFocusInside(event, detail);
  });
  detail.querySelector('.close-button').focus();
}

function addScreenshots(files, detail) {
  const container = detail.querySelector('.screenshot-grid');
  container.querySelector('.screenshot-empty')?.remove();
  [...files].filter(file => file.type.startsWith('image/')).forEach(file => {
    const url = URL.createObjectURL(file);
    const card = document.createElement('figure');
    card.className = 'screenshot-card';
    card.innerHTML = `<img src="${url}" alt="Screenshot for ${escapeHtml(detail.querySelector('#detailTitle').textContent)}"><figcaption><input type="text" aria-label="Screenshot caption" placeholder="Add a short caption"><button type="button" class="remove-screenshot" aria-label="Remove screenshot">Remove</button></figcaption>`;
    card.querySelector('.remove-screenshot').addEventListener('click', () => { URL.revokeObjectURL(url); card.remove(); if (!container.querySelector('.screenshot-card')) container.innerHTML = '<div class="screenshot-empty">No screenshots added yet.</div>'; });
    container.append(card);
  });
}

function keepFocusInside(event, container) {
  const focusable = [...container.querySelectorAll('button, input, [tabindex="0"]')].filter(item => !item.disabled);
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('.nav-button').forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
search.addEventListener('input', renderModules);
document.querySelector('#menuToggle').addEventListener('click', event => {
  const nav = document.querySelector('.top-links');
  const isOpen = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
});
document.querySelector('#year').textContent = new Date().getFullYear();
renderModules();
