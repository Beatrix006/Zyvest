const modules = [
  {
    id: 'login', icon: '↗', title: 'Log in', path: 'Authentication & User Access',
    summary: 'This guide explains how to sign in on the Zyvest website using email/password or Google, and where the website routes each account state.',
    flow: ['On the Zyvest website, open the Login page', 'Choose email/password or Login with Google', 'For email/password, enter the registered email and password, then click Login', 'For Google, authenticate with Google and match the verified email to a Zyvest account', 'If the verified email is new, start signup/onboarding on the Zyvest website', 'After valid authentication, the Zyvest website routes incomplete onboarding to its next required step', 'A submitted onboarding request awaiting review opens Pending Admin Approval', 'After admin approval, the Zyvest website opens Wallet as the first approved-user page'],
    rules: ['Email and Password are required for password sign-in. Invalid credentials keep the user on the login page and show an error.', 'A Google email matching an existing account links to that Zyvest account. A new verified Google email starts signup/onboarding and must complete phone verification, KYC, nominee details, and bank account setup.', 'Forgot your password? sends an email reset link; the user sets a new password through that link.', 'After signup, users complete KYC, nominee, and bank setup before entering Pending Admin Approval. Pending approval does not grant access to approved-user modules.', 'Admin approval opens Wallet first and unlocks the remaining User navigation modules. Rejection routes the user to the review reason and correction/resubmission path.', 'The login page also exposes a language selector and a Sign up link.'],
    checks: ['Email/password sign-in accepts valid credentials and rejects invalid credentials with a clear message.', 'Google sign-in matches verified email correctly and does not create a duplicate account.', 'Incomplete onboarding resumes at its next required step.', 'A submitted onboarding request awaiting review opens Pending Admin Approval on the Zyvest website.', 'Approved users land on Wallet; Rejected users see a correction path.', 'Password recovery sends a reset link and permits setting a new password.']
  },
  {
    id: 'signup', icon: '＋', title: 'Sign up', path: 'Onboarding · Step 1',
    summary: 'Create login credentials and verify email and phone, then complete KYC, nominee, and bank setup before admin review.',
    flow: ['On the Zyvest website, choose Sign Up', 'Enter personal details, email, and phone number', 'Create and confirm a password', 'Accept Terms & Conditions and submit registration', 'Verify the email using its OTP/link', 'Verify the phone number using its OTP', 'Continue to the separate KYC Verification guide', 'Complete nominee details, then bank account setup', 'Submit the completed onboarding request for admin review', 'The Zyvest website shows Pending Admin Approval'],
    rules: ['Email and phone must both be verified before the user continues to KYC.', 'Signup alone does not submit the onboarding request for admin approval; KYC, nominee, and bank setup are required next steps.', 'After the onboarding request is submitted, the Zyvest website shows Pending Admin Approval. Approved users go to Wallet first and can use the remaining User navigation modules.', 'Admin review sets the account to Approved or Rejected and notifies the user in-app and by email.', 'Rejected users see the review reason and can correct requested details/documents and resubmit.'],
    checks: ['Required fields, terms acceptance, and password confirmation are validated.', 'Email and phone OTPs are each required and have clear success/error states.', 'Post-signup navigation enters KYC Verification, not Wallet.', 'All required onboarding modules must be submitted before entering Pending Admin Approval.', 'Approved users land on Wallet; Rejected users reach the correct correction path.']
  },
  {
    id: 'kyc', icon: '▣', title: 'KYC verification', path: 'Onboarding · Step 2',
    summary: 'Complete the identity information and document submission required before admin review.',
    flow: ['Continue after Sign up and contact verification on the Zyvest website', 'Open KYC Verification', 'Review the identity information requested on the Zyvest website', 'Enter required details and upload requested documents', 'Review the information and document previews', 'Submit the KYC information on the website', 'Continue to Nominee Details when the submission is accepted'],
    rules: ['KYC is a separate website onboarding step between Sign up and Nominee Details.', 'Use document types and field rules configured by Zyvest; this guide does not assume a universal document list.', 'Submitting KYC does not approve the account. Admin review occurs after nominee and bank setup are complete and the onboarding request is submitted.', 'If review requests a correction, the Zyvest website shows the reason and lets the user update and resubmit the relevant KYC information.'],
    checks: ['Required KYC fields and documents cannot be skipped.', 'Uploads show validation and a reviewable preview before submission.', 'Successful submission continues to Nominee Details.', 'KYC submission is not presented as approval.']
  },
  {
    id: 'nominee', icon: '♧', title: 'Nominee details', path: 'Onboarding · Step 3',
    summary: 'Capture the nominee information requested by Zyvest after KYC submission.',
    flow: ['Continue from KYC Verification on the Zyvest website', 'Open Nominee Details', 'Enter the nominee information requested on the website', 'Review the details for accuracy', 'Save and submit nominee details', 'Continue to Bank Account Setup'],
    rules: ['Nominee Details is a required onboarding step after KYC and before bank account setup.', 'Use the required fields, eligibility rules, and validation configured by Zyvest; exact nominee requirements must come from the product/compliance team.', 'If admin review requests a correction, return the user to this step with the reason and preserve already-valid information.'],
    checks: ['Required nominee fields and validation messages are clear.', 'The user can review details before submission.', 'Successful submission continues to Bank Account Setup.', 'Correction requests identify the affected nominee information.']
  },
  {
    id: 'bank-account', icon: '▤', title: 'Bank account setup', path: 'Onboarding · Step 4',
    summary: 'Add the bank account information required for onboarding before submitting for admin approval.',
    flow: ['Continue from Nominee Details on the Zyvest website', 'Open Bank Account Setup', 'Enter the bank account information requested on the website', 'Complete any configured ownership or account verification step', 'Review and submit the details', 'Submit the completed onboarding request for admin review', 'The Zyvest website opens Pending Admin Approval'],
    rules: ['Bank Account Setup is required after Nominee Details and before admin approval.', 'Bank fields, ownership checks, and verification methods must follow configured Zyvest requirements; do not infer them from generic banking conventions.', 'Do not submit the onboarding request for Pending Admin Approval until all required KYC, nominee, and bank steps are complete.', 'If admin requests a correction, the website routes the user to the relevant step and preserves other valid submissions.'],
    checks: ['Required bank fields are validated before submission.', 'Any configured verification step has clear Pending/Success/Failure outcomes.', 'The onboarding request is submitted only after all required website steps are complete.', 'Submission opens Pending Admin Approval on the Zyvest website.']
  },
  {
    id: 'approval', icon: '◷', title: 'Pending admin approval', path: 'Onboarding · Step 5',
    summary: 'This guide explains the Zyvest website page shown after the user submits KYC, nominee, and bank details for review.',
    flow: ['Submit completed KYC, nominee, and bank details on the Zyvest website', 'The website creates an onboarding review request with status Pending', 'The website opens the Pending Admin Approval page', 'Show the submitted status and next-step message', 'When admin approves, notify the user in-app and by email', 'The Zyvest website opens Wallet as the approved user’s first page', 'If admin rejects or requests corrections, show the reason and open the required onboarding step'],
    rules: ['Pending Admin Approval is a distinct Zyvest website page shown after the full onboarding request is submitted.', 'While status is Pending, keep the user on this page and do not expose approved-user modules, including Wallet.', 'Admin decisions are Approved or Rejected; communicate the outcome in-app and by email.', 'Approved status opens Wallet on the Zyvest website; remaining User guides are available through Help Center navigation.', 'Rejected status displays the reason and a correction/resubmission path to the relevant KYC, nominee, or bank step.'],
    checks: ['The page appears only after all required onboarding steps are submitted.', 'Pending status does not expose approved-user modules.', 'Approval opens Wallet without requiring a new registration.', 'Rejection points to the correct step and preserves unrelated valid details.']
  },
  {
    id: 'profile', icon: '♙', title: 'Profile & account', path: 'Approved → Profile / Settings',
    summary: 'View account details, update permitted profile fields, verify contact changes, and manage KYC submissions.',
    flow: ['Open Profile / Settings from the approved-user navigation', 'Review legal name, display name, email, phone, account status, and KYC status', 'Edit the display name and save', 'To change phone or email, enter the new contact and request an OTP', 'Verify the OTP; only then replace the saved phone or login email', 'To change legal name, submit supporting documents for admin/KYC review', 'Review KYC status and any admin feedback', 'If Rejected, correct the requested details/documents and resubmit'],
    rules: ['Profile & Account Management is available after approval as part of the unlocked User modules.', 'Display name is self-service editable.', 'A phone number is replaced only after the new number passes OTP verification.', 'A new email must pass OTP verification before it replaces the login email.', 'Legal-name changes require supporting documents and admin/KYC review. An already Approved account stays active during this review.', 'Before approval, KYC and onboarding corrections happen through their onboarding steps; the user does not enter the full Profile module.'],
    checks: ['Unverified phone/email changes do not replace saved contact details.', 'The verified email becomes the login identifier after confirmation.', 'Legal-name changes create a review request and do not suspend an already-Approved account.', 'KYC status, rejection reason, and resubmission action are visible when applicable.']
  },
  {
    id: 'wallet', icon: '◇', title: 'Wallet', path: 'Approved → Wallet',
    summary: 'Approved users with required KYC can deposit, withdraw to verified methods, transfer between their own accounts, and track status.',
    flow: ['After admin approval, open Wallet as the first approved-user page', 'Confirm the user is Approved and has required KYC', 'Deposit: choose an enabled payment method and review currency, fees, limits, and estimated amount', 'Submit the deposit and track Pending → Processing → Completed or Failed', 'Credit the wallet only when the deposit is Completed', 'Withdraw: select a verified payment method in the user’s name and enter an amount within available funds/limits', 'Review the withdrawal summary and submit; reserve available funds immediately', 'Track the request; release reserved funds if Failed or Rejected', 'Transfer: select an eligible source and destination offered for the user’s own account', 'Use only supported same-currency options and enter an amount within configured limits', 'Review the transfer details and confirm', 'Process the debit and credit atomically, then show the result in history'],
    rules: ['Only Approved users with required KYC can deposit, withdraw, or transfer. Pending/Rejected users cannot start money actions.', 'Show only deposit methods enabled for the user. Disclose currency, fees, limits, and estimated amount before submission.', 'Deposit statuses are Pending, Processing, Completed, and Failed. Wallet funds are credited only on Completed.', 'Withdrawals go only to verified payment methods in the user’s name. Reserve funds on submission and release them on Failed/Rejected.', 'Transfers use only source/destination options enabled for the user’s own account, same-currency options, and configured limits shown before confirmation.', 'A confirmed transfer is atomic: debit and credit both succeed together or neither is applied. Record the outcome in transaction history.'],
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
    <div class="detail-topbar"><button class="back-link close-detail">← All User guides</button><span class="detail-counter">ZYVEST WEBSITE GUIDE · ${escapeHtml(module.path)}</span><button class="close-button close-detail" aria-label="Close guide">×</button></div>
    <div class="detail-content">
      <p class="eyebrow">HELP CENTER · USER GUIDE</p><h1 id="detailTitle">${escapeHtml(module.title)}</h1><p class="detail-intro">${escapeHtml(module.summary)}</p>
      <div class="flow-layout">
        <section class="detail-panel"><h2>Steps on the Zyvest website</h2><ol class="flow-list">${module.flow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol></section>
        <section class="detail-panel check-panel"><h2>What to verify</h2><ul>${module.checks.map(check => `<li>${escapeHtml(check)}</li>`).join('')}</ul></section>
      </div>
      <section class="detail-panel business-rules"><p class="eyebrow">IMPLEMENTATION RULES</p><h2>Business rules & account states</h2><ul>${module.rules.map(rule => `<li>${escapeHtml(rule)}</li>`).join('')}</ul></section>
      <section class="screenshots-panel"><div class="screenshot-heading"><div><p class="eyebrow">VISUAL WALKTHROUGH</p><h2>Website step screenshots</h2><p>Add screenshots of the Zyvest website to illustrate each guide step.</p></div><label class="upload-button">＋ Add screenshots<input class="screenshot-input" type="file" accept="image/*" multiple></label></div>
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
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const themeLabel = themeToggle.querySelector('.theme-label');
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(isDark, save = true) {
  document.body.classList.toggle('dark', isDark);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  themeIcon.textContent = isDark ? '☀' : '☾';
  themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeColor.setAttribute('content', isDark ? '#0c1511' : '#f4f6f8');
  if (save) {
    try { localStorage.setItem('zyvest-help-theme', isDark ? 'dark' : 'light'); } catch {}
  }
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('zyvest-help-theme'); } catch {}
setTheme(savedTheme === 'dark', false);
themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));
document.querySelector('#menuToggle').addEventListener('click', event => {
  const nav = document.querySelector('.top-links');
  const isOpen = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
});
document.querySelector('#year').textContent = new Date().getFullYear();
renderModules();
