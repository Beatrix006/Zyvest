const modules = [
  {
    id: 'login', icon: '↗', title: 'Log in', path: 'Authentication & User Access',
    summary: 'This guide explains how to sign in on the Zyvest website using email/password or Google, and where the website routes each account state.',
    flow: ['On the Zyvest website, open the Login page', 'Choose email/password or Login with Google', 'For email/password, enter the registered email and password, then click Login', 'For Google, authenticate with Google and match the verified email to a Zyvest account', 'If the verified email is new, start signup/onboarding on the Zyvest website', 'After valid authentication, incomplete onboarding resumes at its next required step', 'Approved users open Wallet; users whose onboarding is under review receive status updates through the Zyvest website'],
    rules: ['Email and Password are required for password sign-in. Invalid credentials keep the user on the login page and show an error.', 'A Google email matching an existing account links to that Zyvest account. A new verified Google email starts signup/onboarding and must complete phone verification, KYC, nominee details, and bank account setup.', 'Forgot your password? sends an email reset link; the user sets a new password through that link.', 'After signup, users complete KYC, nominee, and bank setup. While the completed request is under review, approved-user actions remain unavailable.', 'When Zyvest approves an account, Wallet is the first available page. Rejected users receive the review reason and a correction/resubmission path.', 'The login page also exposes a language selector and a Sign up link.'],
    checks: ['Email/password sign-in accepts valid credentials and rejects invalid credentials with a clear message.', 'Google sign-in matches verified email correctly and does not create a duplicate account.', 'Incomplete onboarding resumes at its next required step.', 'Users awaiting review can see status updates; approved-only actions remain unavailable.', 'Approved users land on Wallet; Rejected users see a correction path.', 'Password recovery sends a reset link and permits setting a new password.']
  },
  {
    id: 'signup', icon: '＋', title: 'Sign up', path: 'Onboarding · Step 1',
    summary: 'Create login credentials and verify email and phone, then complete KYC, nominee, and bank setup before the review decision.',
    flow: ['On the Zyvest website, choose Sign Up', 'Enter personal details, email, and phone number', 'Create and confirm a password', 'Accept Terms & Conditions and submit registration', 'Verify the email using its OTP/link', 'Verify the phone number using its OTP', 'Continue to the separate KYC Verification guide', 'Complete nominee details, then bank account setup', 'Submit the completed onboarding request for admin review', 'Check the Zyvest website or email for review status and the next step'],
    rules: ['Email and phone must both be verified before the user continues to KYC.', 'Signup alone does not submit the onboarding request for admin review; KYC, nominee, and bank setup are required next steps.', 'After submission, the request is reviewed. Approved users go to Wallet first and can use the remaining User navigation modules.', 'Admin review sets the account to Approved or Rejected and notifies the user in-app and by email.', 'Rejected users see the review reason and can correct requested details/documents and resubmit.'],
    checks: ['Required fields, terms acceptance, and password confirmation are validated.', 'Email and phone OTPs are each required and have clear success/error states.', 'Post-signup navigation enters KYC Verification, not Wallet.', 'The completed onboarding request is submitted for review after all required steps.', 'Approved users land on Wallet; Rejected users reach the correct correction path.']
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
    summary: 'Add and verify the bank account details required to complete Zyvest website onboarding.',
    flow: ['Continue from Nominee Details on the Zyvest website', 'Open Bank Account Setup', 'Enter the bank account information requested on the website', 'Complete any configured ownership or account verification step', 'Review and submit the details', 'Submit the completed onboarding request for admin review', 'Check the Zyvest website or email for the review decision and next step'],
    rules: ['Bank Account Setup is required after Nominee Details and before the onboarding request can be reviewed.', 'Bank fields, ownership checks, and verification methods must follow configured Zyvest requirements; do not infer them from generic banking conventions.', 'The Zyvest website communicates the review status and next steps to the user.', 'If admin requests a correction, the website routes the user to the relevant step and preserves other valid submissions.'],
    checks: ['Required bank fields are validated before submission.', 'Any configured verification step has clear Pending/Success/Failure outcomes.', 'The onboarding request is submitted only after all required website steps are complete.', 'The user receives the configured review status and next-step information.']
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

// Screenshot assets are added to the project by the Help Center editor, not uploaded by site visitors.
const guideScreenshots = {
  login: [],
  signup: [],
  kyc: [],
  nominee: [],
  'bank-account': [],
  profile: [],
  wallet: []
};

const adminAreas = {
  dashboard: {
    title: 'Dashboard',
    summary: 'See the dashboard charts and the metrics shown in the reference.',
    charts: [
      { title: 'Activity chart', text: 'Plots activity across the dates shown on the chart.' },
      { title: 'Net Revenue Chart', text: 'Shows total revenue change over the displayed three-month period.' }
    ],
    metrics: [
      { group: 'Financial activity', items: [
        ['Total Deposit', 'Displays the total deposit value reported on the dashboard.'],
        ['Total Withdraw', 'Displays the total withdrawal value reported on the dashboard.'],
        ['Pending Deposit', 'Shows deposits currently marked as pending.'],
        ['Pending Withdraw', 'Shows withdrawals currently marked as pending.'],
        ['Pending IB Withdraw', 'Shows IB withdrawal items currently marked as pending.'],
        ['Total IB Withdraw', 'Displays the total IB withdrawal value reported on the dashboard.']
      ] },
      { group: 'Users and accounts', items: [
        ['KYC Unverified', 'Shows users whose identity verification is not marked verified.'],
        ['Total IB', 'Displays the dashboard total for Introducing Brokers.'],
        ['Demo Accounts', 'Shows the number of demo accounts.'],
        ['Live Accounts', 'Shows the number of live accounts.'],
        ['Active Users', 'Shows the active user total.'],
        ['Pending Bank Details', 'Shows bank detail items waiting for review.'],
        ['Pending IB Request', 'Shows Introducing Broker requests waiting for review.'],
        ['Total Users', 'Shows the total user count.']
      ] },
      { group: 'Support tickets', items: [
        ['Open Tickets', 'Shows support tickets that remain open.'],
        ['Closed Tickets', 'Shows support tickets marked closed.'],
        ['Escalated Tickets', 'Shows support tickets that have been escalated.']
      ] }
    ]
  },
  customers: {
    title: 'Customers',
    summary: 'Review customer records across User Management, KYC Management, Bank Account Management, and MT5 Management.',
    references: [
      { src: './screenshots/admin-customers-user-management.png', alt: 'Zyvest admin User Management screen with customer metrics, filters, and user records', caption: 'User Management · customer overview, KYC status, filters, and user records.' },
      { src: './screenshots/admin-customers-mt5-management.png', alt: 'Zyvest admin MT5 Management screen with account metrics, filters, and MT5 records', caption: 'MT5 Management · account counts, filters, and MT5 account records.' }
    ],
    sections: [
      { title: 'User Management', items: [
        ['Total Users', 'Counts the registered users shown in User Management.'],
        ['Active Users', 'Counts users whose account status is active.'],
        ['KYC Verified', 'Counts users who have completed KYC verification.'],
        ['Disabled Accounts', 'Counts accounts that are disabled.'],
        ['Search & filters', 'Search users, then narrow results by Status, Country, Profession, KYC Status, or Date.'],
        ['Row & page actions', 'View & Edit opens a user record. Report, View, and Add New User are shown in the toolbar.']
      ] },
      { title: 'User Management · table columns', items: [
        ['Take Action', 'Select a row or open its View & Edit action.'],
        ['User ID', 'Unique Zyvest identifier for the user.'],
        ['Name of the User', 'Name displayed for the user.'],
        ['Country', 'Country recorded on the user profile.'],
        ['KYC Status', 'Current identity verification status.'],
        ['Wallet Balance', 'Wallet amount displayed for the user.'],
        ['IB Status', 'Whether the user’s Introducing Broker status is enabled.'],
        ['IB ID', 'Identifier for the associated Introducing Broker, when present.'],
        ['Account Status', 'Current status of the user account.'],
        ['Email ID', 'Email address associated with the user.'],
        ['Phone Number', 'Phone number recorded for the user.'],
        ['Date of Submission', 'Date the user record or application was submitted.'],
        ['2FA', 'Whether two-factor authentication is active.'],
        ['Profession', 'Profession recorded on the user profile.'],
        ['DOB', 'Date of birth recorded on the user profile.']
      ] },
      { title: 'MT5 Management', items: [
        ['Total Users', 'Counts the users represented in MT5 management.'],
        ['Demo Accounts', 'Counts accounts created for practice trading.'],
        ['Live Accounts', 'Counts accounts created for live trading.'],
        ['Accounts / Requested', 'Switch between existing MT5 accounts and account requests.'],
        ['Search & filters', 'Search MT5 accounts and filter by Group Name, Country, Date, or Account Type.'],
        ['Row & page actions', 'View Details opens an account record. Report, View, and Add MT5 Account appear in the toolbar.']
      ] },
      { title: 'MT5 Management · table columns', items: [
        ['Take Action', 'Open View Details for the selected account.'],
        ['MT5 ID', 'Identifier assigned to the MT5 trading account.'],
        ['User ID', 'Zyvest identifier of the account owner.'],
        ['Name of the User', 'Name displayed for the account owner.'],
        ['Email ID', 'Email address associated with the account owner.'],
        ['Account Type', 'Whether the account is Live or Demo.'],
        ['Group Name', 'Trading group assigned to the account.'],
        ['Status', 'Current status of the MT5 account.'],
        ['Registration Date', 'Date the MT5 account was registered.']
      ] },
      { title: 'KYC Management', items: [
        ['KYC review area', 'Use this Customers tab to access KYC-related customer records and review information. The supplied reference shows the tab but not its detailed fields or actions.']
      ] },
      { title: 'Bank Account Management', items: [
        ['Bank details area', 'Use this Customers tab to access customer bank account information. The supplied reference shows the tab but not its detailed fields or actions.']
      ] }
    ]
  },
  transactions: {
    title: 'Transactions',
    summary: 'Review wallet balances and the pending deposit, withdrawal, and internal transfer queues shown in the supplied Zyvest Admin references.',
    references: [
      { src: './screenshots/admin-transactions-all-wallets.png', alt: 'Admin Transactions All Wallets screen with account totals and wallet records', caption: 'All Wallets · customer wallet overview, balance filters, and wallet records.' },
      { src: './screenshots/admin-transactions-deposit-wallet.png', alt: 'Admin pending deposits screen with Wallet selected', caption: 'Deposits · Wallet view with pending totals, filters, and transaction rows.' },
      { src: './screenshots/admin-transactions-deposit-mt5.png', alt: 'Admin pending deposits screen with MT5 selected', caption: 'Deposits · MT5 view with account identifiers and deposit details.' },
      { src: './screenshots/admin-transactions-withdraw-wallet.png', alt: 'Admin pending withdrawals screen with Wallet selected', caption: 'Withdrawals · Wallet view with withdrawal method and destination details.' },
      { src: './screenshots/admin-transactions-withdraw-mt5.png', alt: 'Admin pending withdrawals screen with MT5 selected', caption: 'Withdrawals · MT5 view with trading account identifiers and withdrawal details.' },
      { src: './screenshots/admin-transactions-transfer-wallet.png', alt: 'Admin internal transfer screen with Wallet selected', caption: 'Internal Transfer · Wallet view showing sender and recipient records.' },
      { src: './screenshots/admin-transactions-transfer-mt5.png', alt: 'Admin internal transfer screen with MT5 selected', caption: 'Internal Transfer · MT5 view showing source and destination trading accounts.' }
    ],
    sections: [
      { title: 'Transaction modules', items: [
        ['All Wallets', 'See each user’s wallet summary, including balance, bonus balance, IB status, and number of MT5 accounts.'],
        ['Deposits · Wallet', 'Review wallet deposit requests, their payment method, amount, destination, date, and status.'],
        ['Deposits · MT5', 'Review deposit requests associated with MT5 accounts, including the MT5 ID and account details.'],
        ['Withdrawals · Wallet', 'Review wallet withdrawal requests, including the bank or crypto destination and request status.'],
        ['Withdrawals · MT5', 'Review withdrawal requests linked to MT5 accounts, including the MT5 ID and payment destination.'],
        ['Internal Transfer · Wallet', 'Review who is sending and receiving a wallet transfer, the amount, date, and status.'],
        ['Internal Transfer · MT5', 'Review wallet transfer details alongside the source and destination MT5 account IDs.'],
        ['Filters and actions', 'Search or narrow the visible records with the on-screen filters. Report, View, and transaction actions are shown above the tables.']
      ] }
    ]
  },
  support: { title: 'Support', comingSoon: true },
  ib: { title: 'IB', comingSoon: true },
  bonus: { title: 'Bonus', comingSoon: true },
  'user-levels': { title: 'User Levels', comingSoon: true },
  settings: { title: 'Settings', comingSoon: true },
  tools: { title: 'Tools', comingSoon: true }
};

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
  const screenshots = guideScreenshots[module.id] || [];
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
      <section class="screenshots-panel"><div class="screenshot-heading"><div><p class="eyebrow">VISUAL WALKTHROUGH</p><h2>Website step screenshots</h2><p>Reference screenshots for the steps in this guide.</p></div></div>
        <div class="screenshot-grid">${screenshots.length ? screenshots.map(screenshot => `<figure class="screenshot-card"><img src="${escapeHtml(screenshot.src)}" alt="${escapeHtml(screenshot.alt || screenshot.caption || module.title)}"><figcaption>${escapeHtml(screenshot.caption || '')}</figcaption></figure>`).join('') : '<div class="screenshot-empty">Screenshots for this guide will appear here when added to the Help Center.</div>'}</div>
      </section>
    </div>`;
  document.body.append(detail);
  document.body.style.overflow = 'hidden';
  const close = () => {
    detail.remove();
    document.body.style.overflow = '';
  };
  detail.querySelectorAll('.close-detail').forEach(button => button.addEventListener('click', close));
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') keepFocusInside(event, detail);
  });
  detail.querySelector('.close-button').focus();
}

function openAdminArea(id) {
  const area = adminAreas[id];
  if (!area) return;
  const detail = document.createElement('section');
  detail.className = 'detail-page';
  detail.setAttribute('role', 'dialog');
  detail.setAttribute('aria-modal', 'true');
  detail.setAttribute('aria-labelledby', 'adminDetailTitle');
  detail.innerHTML = `
    <div class="detail-topbar"><button class="back-link close-admin-detail">← Admin overview</button><span class="detail-counter">ZYVEST WEBSITE · ADMIN GUIDE</span><button class="close-button close-admin-detail" aria-label="Close guide">×</button></div>
    <div class="detail-content admin-detail-content">
      <p class="eyebrow">HELP CENTER · ADMIN GUIDE</p>
      <h1 id="adminDetailTitle">${escapeHtml(area.title)}</h1>
      ${area.summary ? `<p class="detail-intro">${escapeHtml(area.summary)}</p>` : ''}
      ${area.comingSoon ? `<section class="admin-coming-soon"><span class="admin-coming-soon-label">GUIDE STATUS</span><h2>Update coming soon</h2><p>The detailed ${escapeHtml(area.title)} guide will be added when its workflow is provided.</p></section>` : `
        ${area.references?.length ? `<section class="customer-reference-grid" aria-label="${escapeHtml(area.title)} screenshots">${area.references.map(ref => `<figure class="customer-reference"><img src="${escapeHtml(ref.src)}" alt="${escapeHtml(ref.alt)}"><figcaption>${escapeHtml(ref.caption)}</figcaption></figure>`).join('')}</section>` : ''}
        ${area.sections?.map(group => `<section class="dashboard-explanation"><h2>${escapeHtml(group.title)}</h2><div class="dashboard-metric-grid customer-guide-grid">${group.items.map(([title, text]) => `<article class="dashboard-info-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</div></section>`).join('') || ''}
        ${area.charts?.length ? `<section class="dashboard-explanation"><h2>Charts</h2><div class="dashboard-chart-grid">${area.charts.map(chart => `<article class="dashboard-info-card"><h3>${escapeHtml(chart.title)}</h3><p>${escapeHtml(chart.text)}</p></article>`).join('')}</div></section>` : ''}
        ${area.metrics?.map(group => `<section class="dashboard-explanation"><h2>${escapeHtml(group.group)}</h2><div class="dashboard-metric-grid">${group.items.map(([title, text]) => `<article class="dashboard-info-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</div></section>`).join('') || ''}
      `}
      <aside class="admin-reference-note"><strong>About this guide</strong><p>This page explains an area of the separate Zyvest website. It does not perform administrator actions or change account data.</p></aside>
    </div>`;
  document.body.append(detail);
  document.body.style.overflow = 'hidden';
  const close = () => { detail.remove(); document.body.style.overflow = ''; };
  detail.querySelectorAll('.close-admin-detail').forEach(button => button.addEventListener('click', close));
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') keepFocusInside(event, detail);
  });
  detail.querySelector('.close-button').focus();
}

function keepFocusInside(event, container) {
  const focusable = [...container.querySelectorAll('button, input, [tabindex="0"]')].filter(item => !item.disabled);
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('.nav-button').forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelector('.admin-function-grid')?.addEventListener('click', event => {
  const card = event.target.closest('[data-admin-area]');
  if (card) openAdminArea(card.dataset.adminArea);
});
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
