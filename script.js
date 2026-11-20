const modules = [
  {
    id: 'login', icon: '↗', title: 'Log in', number: '01', step: 'Authentication', path: 'Authentication & Access',
    summary: 'Sign in to your Zyvest website account using email and password or Google, with direct routing based on account state.',
    flow: [
      'On the Zyvest website, open the Login page',
      'Choose email/password sign in or Login with Google',
      'For email/password, enter your registered email and password, then click Login',
      'For Google, authenticate with your Google account matching your verified email',
      'If the verified Google email is new, the site routes you to complete signup/onboarding',
      'If onboarding was previously started, the site resumes at your next required step (KYC, Nominee, or Pending KYC approval)',
      'Approved users are able to get the Wallet feature and access the dashboard'
    ],
    rules: [
      'Email and Password are required for password sign-in. Invalid credentials keep the user on the login page and show an error.',
      'A Google email matching an existing account links to that Zyvest account. A new verified Google email starts signup/onboarding.',
      'Forgot your password? sends an email reset link; the user sets a new password through that link.',
      'Users whose submissions are under review can sign in and see their status updates on the dashboard.',
      'When Zyvest approves an account, the user is able to get the Wallet feature and access the remaining User navigation modules. Rejected users receive the review reason and a correction/resubmission path.',
      'The login page also exposes a language selector and a Sign up link.'
    ],
    checks: [
      'Email/password sign-in accepts valid credentials and rejects invalid credentials with a clear message.',
      'Google sign-in matches verified email correctly and does not create a duplicate account.',
      'Incomplete onboarding resumes at its next required step.',
      'Users awaiting review can see status updates on their dashboard.',
      'Approved users are able to get the Wallet feature; Rejected users see a correction path.',
      'Password recovery sends a reset link and permits setting a new password.'
    ]
  },
  {
    id: 'signup', icon: '＋', title: 'Sign up', number: '02', step: 'Steps 1–4 · Onboarding', path: 'Onboarding & Verification',
    hasSubmodules: true,
    summary: 'Complete the 4 onboarding steps: Step 1 (Registration & Email OTP), Step 2 (KYC Verification), Step 3 (Nominee Details), and Step 4 (Pending KYC approval).',
    flow: [
      'Step 1 · Sign up & Email OTP: Fill in Full Name, Email, optional Phone, Referral Code (Apply), Password & Confirm, check Terms, click green Sign up (or Google Sign up), and verify email OTP within 2:28',
      'Step 2 · KYC Verification: Complete Personal Details (DOB calendar, Country, State, Address, Pincode, Profession, declarations), upload valid government ID (Passport, Aadhar, Voter ID, PAN up to 10 MB), and complete face scan (or Skip)',
      'Step 3 · Nominee Details: Enter Nominee Name, Date of Birth, select Relation from searchable dropdown, enter Email ID, and check accurate information & Terms checkbox (or Skip)',
      'Step 4 · Pending KYC approval: Reach the Submission Under Review page, view pending status with "Go to Dashboard" button, and receive notification upon approval/rejection'
    ],
    rules: [
      'Sign up includes all 4 onboarding steps merged inside this module: Step 1 (Sign up & OTP), Step 2 (KYC Verification), Step 3 (Nominee Details), and Step 4 (Pending KYC approval).',
      'Full Name, Email Address, Password, Confirm Password, and Terms agreement are required for standard registration.',
      'Phone Number is optional on the initial form; Referral Code can be applied if available.',
      'Google Sign up routes through Google account selection and displays Zyvest Capital UAT consent for name and profile picture.',
      'Email OTP verification has a 2:28 countdown timer with a Resend OTP option below the OTP field.',
      'Each subsequent onboarding step (KYC, Nominee, Pending KYC approval) can be accessed and reviewed via the step cards below.',
      'Approved users get full access to Wallet and platform features; rejected users receive specific review feedback and a correction path.'
    ],
    checks: [
      'Registration form validates all required fields, passwords match, and terms checkbox is checked.',
      'Email OTP verification validates the 6-digit code before the 2:28 timer expires.',
      'All 4 onboarding steps (Step 1 to Step 4) are accessible sequentially inside this module.',
      'Upon final submission, the Submission Under Review screen presents a working "Go to Dashboard" button.',
      'Approved users receive full access to Wallet and platform modules.'
    ]
  },
  {
    id: 'profile', icon: '♙', title: 'Profile & account', number: '03', step: 'Settings & Account Types', path: 'Dashboard · Settings & Account Types',
    summary: 'Centralized location to view and manage profile identification, user level upgrades, account type plans ("Choose a plan that is right for you" including Copier Group with spread range and leverage), personal details, KYC status & re-setup, nominee authorization, and dual-channel 2FA.',
    flow: [
      'Top Navigation & Settings Access: On the Zyvest Dashboard, locate and click the Settings icon or User Profile dropdown menu in the top navigation bar to open the Profile & Account workspace',
      'Account Identification & Level Upgrades: Review Profile Picture, unique Zyvest ID, and current Account Level (e.g., Level 1), and click the "Upgrade" option to view tier requirements or request an account level advancement',
      'Account Types — "Choose a plan that is right for you": Open the Account Types section or modal to review available trading account plans. Compare plans including Copier Group, Standard, and Raw Spread, evaluating their Range of Spread (e.g. 0.0 – 1.2 pips) and Leverage (e.g. up to 1:500)',
      'Manage Profile Details: Inspect verified personal information: Full Name, Display Name (with inline Edit Icon), Date of Birth, Phone Number, Mail ID (Email), Address, and Country',
      'Edit Display Name: Click the Edit Icon next to Display Name to modify your platform handle directly inline',
      'Locked Compliance Records: Full Name, Date of Birth, Address, Country, Phone Number, and Mail ID display a Lock Icon restricting unverified inline edits to maintain compliance',
      'KYC Verification Status & Re-Setup: Review your KYC verification status (Active / Verified) and click the "Re-Setup" button if you need to submit updated identity cards or re-verify documents',
      'Nominee Details: Read emergency fund management guidelines and select "Add" to assign an authorized nominee (Legal Name, Relation, DOB, Email) to manage funds in case of emergency',
      'Two-Factor Authentication (2FA): Manage account security with dual options: select "Generate new code with mail" to receive OTP verification passcodes via registered email, or "Open authenticator app" to configure TOTP security with Google Authenticator or Authy',
      'Change Password & Login History: Select Change Password (with navigation arrow) to open the credential update screen, and review Login History timestamps, IP addresses, and device logs'
    ],
    rules: [
      'The Profile & Account page is accessible from both the Dashboard top navigation User menu and the Settings sidebar.',
      'Profile Picture visually identifies the account holder; Your ID and Account Level are system-assigned identifiers with an accessible Upgrade path.',
      'Account Types features a dedicated modal module titled "Choose a plan that is right for you", detailing plans like Copier Group with specific Range of Spread and Leverage.',
      'Copier Group is designed specifically for copy trading with floating spreads from 0.0 to 1.2 pips and leverage up to 1:500.',
      'Display Name has an active Edit Icon and can be updated directly inline; registered personal fields (Full Name, Date of Birth, Address, Country, Phone Number, Mail ID) display a Lock Icon restricting direct unverified changes.',
      'Phone Number and Mail ID changes require multi-factor OTP confirmation before taking effect.',
      'KYC Verification Status displays Active standing, with a functional "Re-Setup" action for identity document renewals and re-verification.',
      'Nominee Details allows users to add an authorized emergency contact to manage funds, subject to verified documentation under platform policy.',
      'Two-Factor Authentication (2FA) supports both "Generate new code with mail" (email OTP) and "Open authenticator app" (time-based TOTP code via Google Authenticator / Authy).',
      'Change Password includes an arrow icon directing users to a separate screen for credential updates, and Login History preserves an audit trail of previous authentication sessions.'
    ],
    checks: [
      'Top navigation bar displays all 11 platform elements and Settings sidebar smoothly toggles Profile, KYC, 2FA, and Notifications.',
      'Account Identification displays Profile Picture, unique Your ID, Account Level badge, and functional Upgrade button.',
      'Account Types opens the "Choose a plan that is right for you" module displaying Copier Group, spread ranges, and leverage options.',
      'Manage Profile displays Full Name, Display Name, Date of Birth, Phone Number, Mail ID, Address, and Country.',
      'Display Name edit icon opens direct inline editing, while locked fields (Full Name, DOB, Address, Country, Phone, Mail ID) show the Lock icon.',
      'KYC status reflects Active with accessible "Re-Setup" option.',
      'Nominee Details section includes emergency description and functional "Add" button.',
      'Two-Factor Authentication (2FA) provides accessible options for both "Generate new code with mail" and "Open authenticator app".',
      'Change Password navigates via the arrow icon to the password update screen.',
      'Login history accurately audits previous authentication activities with timestamp, IP, and device data.'
    ],
    sections: [
      {
        eyebrow: 'PLATFORM ACCESS',
        title: 'Top Navigation Bar',
        description: 'The top navigation bar provides access to the major modules of the Zyvest platform.',
        items: [
          ['Zyvest Logo', 'Displays the Zyvest Capital logo and represents the platform\'s branding.', 'Branding'],
          ['Dashboard', 'Provides access to the main dashboard, where users can view an overview of their account.', 'Main View'],
          ['Wallet', 'Allows users to access their wallet and view available balance and transaction-related information.', 'Funds'],
          ['Account Type', 'Provides access to account type-related information and options, opening the plan chooser modal.', 'Account'],
          ['IB', 'Provides access to the Introducing Broker (IB) section.', 'Broker'],
          ['Support', 'Allows users to access customer support services.', 'Help Desk'],
          ['PAMM', 'Provides access to the PAMM (Percentage Allocation Management Module) section.', 'Investment'],
          ['Copy Trading', 'Allows users to access copy trading features and related information.', 'Trading'],
          ['Notification Icon', 'Displays notifications and updates related to the user\'s account and platform activities.', 'Alerts'],
          ['Theme Icon', 'Allows users to switch between available application themes (light and dark mode).', 'Interface'],
          ['User Profile Dropdown', 'Displays the logged-in user\'s name and provides access to account-related options.', 'Menu']
        ]
      },
      {
        eyebrow: 'NAVIGATION & SECTIONS',
        title: 'Settings Sidebar',
        description: 'The Settings sidebar contains different sections through which users can manage their account preferences and security.',
        items: [
          ['Profile', 'Displays the user\'s personal information, account details, nominee information, and security settings.', 'Active Section'],
          ['KYC Verification', 'Provides access to identity verification details and the user\'s KYC verification process.', 'Identity'],
          ['2 Factor Authentication', 'Allows users to configure and manage additional account login security.', 'Security'],
          ['Notifications', 'Provides options to manage notification preferences.', 'Preferences']
        ]
      },
      {
        eyebrow: 'ACCOUNT IDENTIFICATION',
        title: 'Account Identification & User Level Upgrading',
        description: 'Displays the user\'s registered account identification data, profile image, current account level, and upgrading options.',
        items: [
          ['Profile Picture', 'Displays the profile photograph uploaded by the user with image upload/change support. It helps visually identify the account holder.', 'Visual ID'],
          ['Your ID', 'Displays the unique identification number assigned to the user by Zyvest. Used across all platform operations.', 'Unique ID'],
          ['Account Level', 'Displays current user membership tier (e.g., Level 1). Higher levels offer lower fees and higher limits.', 'Level 1'],
          ['Upgrade Option', 'Provides an option for the user to explore tier progression criteria or request an immediate account level upgrade.', 'Action Button']
        ]
      },
      {
        eyebrow: 'TRADING ACCOUNTS & PLANS',
        title: 'Account Types · Choose a Plan That Is Right for You',
        description: 'Inside Account Types, a dedicated module opens allowing users to "Choose a plan that is right for you". Compare plans like Copier Group with their Range of Spread and Leverage.',
        items: [
          ['Account Types Module', 'Clicking Account Types opens the dedicated "Choose a plan that is right for you" module.', 'Modal View'],
          ['Copier Group Plan', 'Designed specifically for copy trading. Features floating Range of Spread (0.0 – 1.2 pips) and Leverage up to 1:500.', 'Range: 0.0–1.2 | Lev: 1:500'],
          ['Standard Plan', 'Zero-commission retail trading plan with Range of Spread (1.0 – 1.8 pips) and Leverage up to 1:500.', 'Range: 1.0–1.8 | Lev: 1:500'],
          ['Raw Spread (ECN) Plan', 'Direct interbank liquidity with raw Range of Spread from 0.0 pips and Leverage up to 1:500.', 'Range: 0.0+ | Lev: 1:500'],
          ['VIP / Investor Plan', 'Tailored account for high-net-worth clients with custom institutional spreads and Leverage up to 1:200.', 'Range: 0.0+ | Lev: 1:200'],
          ['Range of Spread', 'Specifies the spread range (difference between bid and ask) offered across trading instruments for each plan.', 'Spread Metric'],
          ['Leverage', 'Purchasing power multiplier configured per account plan (e.g. 1:100, 1:200, 1:500) determining margin requirements.', 'Leverage Multiplier']
        ]
      },
      {
        eyebrow: 'PERSONAL INFORMATION',
        title: 'Manage Profile (Personal Details)',
        description: 'Displays personal information collected during registration and KYC verification, with indicators for editable vs. locked compliance fields.',
        items: [
          ['Full Name', 'Displays the user\'s complete registered legal name (e.g., Kabir Singh). Restricted from direct inline edits.', '🔒 Locked'],
          ['Display Name', 'Displays the nickname/alias representing the user within the platform. Accompanied by an Edit Icon for direct inline editing.', '✏️ Edit Icon'],
          ['Date of Birth', 'Displays the user\'s registered date of birth matching official KYC documents.', '🔒 Locked'],
          ['Phone Number', 'Displays registered mobile number including country code. Modifications require phone OTP validation.', '🔒 Locked'],
          ['Mail ID', 'Displays registered email address used for platform authentication. Modifications require dual email verification.', '🔒 Locked'],
          ['Address', 'Displays registered residential address verified during identity onboarding.', '🔒 Locked'],
          ['Country', 'Displays registered country and regulatory jurisdiction associated with the account.', '🔒 Locked'],
          ['Edit Icon (UI Element)', 'Indicates that the corresponding field can be edited directly inline (Display Name).', 'Editable UI'],
          ['Lock Icon (UI Element)', 'Indicates compliance-locked fields requiring formal re-verification or OTP to modify.', 'Restricted UI']
        ]
      },
      {
        eyebrow: 'COMPLIANCE STANDING',
        title: 'KYC Verification Status & Re-Setup',
        description: 'Displays current Know Your Customer (KYC) compliance status and provides a re-verification trigger.',
        items: [
          ['KYC Verification Status', 'Displays the current Know Your Customer (KYC) verification status of the user\'s account.', 'Verification'],
          ['KYC Status Indicator', 'Indicates whether the user\'s KYC verification is Active, Verified, or Pending.', 'Status: Active'],
          ['Re-Setup Option', 'Action button allowing the user to initiate the KYC re-verification process and submit updated ID documents.', 'Action Button']
        ]
      },
      {
        eyebrow: 'EMERGENCY AUTHORIZATION',
        title: 'Nominee Details',
        description: 'Allows users to add an authorized nominee who can manage their funds in case of an emergency, subject to platform policies.',
        items: [
          ['Nominee Details Section', 'Displays the section where nominee-related authorization is configured and managed.', 'Overview'],
          ['Emergency Description', 'Explains that users can appoint an authorized person to manage funds in case of an emergency under platform rules.', 'Policy Notice'],
          ['Add Button', 'Allows the user to initiate the process of recording an authorized nominee (Name, Relation, DOB, Email).', 'Action Button']
        ]
      },
      {
        eyebrow: 'SECURITY CONTROLS',
        title: 'Two-Factor Authentication (2FA)',
        description: 'Provides robust multi-factor security controls, including generating one-time passcodes via email and linking authenticator apps.',
        items: [
          ['2 Factor Authentication (2FA)', 'Displays the current two-factor authentication status of the user\'s account (Active / Inactive).', 'Status: Active/Inactive'],
          ['Generate New Code with Mail', 'Security feature that generates and sends a fresh 6-digit one-time verification passcode directly to the user\'s registered Mail ID.', 'Email OTP'],
          ['Open Authenticator App Option', 'Security feature providing direct integration with authenticator apps (Google Authenticator, Authy) via QR code and secret key.', 'TOTP App'],
          ['2FA Setup / Reconfigure', 'Action button allowing the user to configure or adjust two-factor authentication preferences.', 'Action Button']
        ]
      },
      {
        eyebrow: 'CREDENTIALS & AUDIT',
        title: 'Change Password & Login History',
        description: 'Provides access to password credentials update and a detailed historical audit of account login sessions.',
        items: [
          ['Change Password', 'Informs users that they can update their account password to maintain credentials security.', 'Credentials'],
          ['Arrow Icon (Navigation)', 'Indicates that clicking the section will navigate the user to another page or screen for changing the password.', 'Navigation Link'],
          ['Logins Section', 'Displays previous session audit entries with timestamp, IP address, device, and location data.', 'Session Log'],
          ['History Description', 'Provides a transparent audit trail of previous authentication attempts to monitor account integrity.', 'Audit Record']
        ]
      }
    ]
  },
  {
    id: 'wallet', icon: '◇', title: 'Wallet', number: '04', step: 'Fund Management', path: 'Dashboard · Wallet & Funds',
    summary: 'Approved users are able to get the full Wallet feature for deposits, withdrawals, internal MT5 transfers, real-time balance management, and transaction statement tracking.',
    flow: [
      'Access Wallet: After account approval and KYC completion, open Wallet from the top navigation bar',
      'Account Overview: Review your Total Balance, Available Balance, Reserved Funds, and connected MT5 Account Equities',
      'Deposit Funds: Select an enabled payment method (Bank Wire, Cards, Crypto), review limits, fees, and estimated credit time, and complete the payment',
      'Track Deposit: Monitor transaction lifecycle from Pending → Processing → Completed, with automatic credit to Available Balance',
      'Withdraw Funds: Select a verified destination method in your registered legal name, specify the amount within available limits, and submit',
      'Reserve & Process: Observe the requested amount move to Reserved Funds immediately while Zyvest verifies and executes the payout',
      'Internal Transfer: Select source (Wallet or MT5) and destination (MT5 or Wallet), enter the transfer amount, review real-time exchange rates if applicable, and confirm',
      'Atomic Execution: Transfers process atomically in real-time with instant balance updates across both accounts',
      'Transaction History: Filter history by date, type, or status, inspect detailed transaction receipts, and export statements'
    ],
    rules: [
      'The Wallet feature is unlocked for approved users who have completed KYC verification.',
      'Deposit methods displayed are dynamically restricted to methods enabled and compliant for the user\'s jurisdiction.',
      'All deposit fees, minimum/maximum thresholds, and processing times must be fully disclosed before confirmation.',
      'Withdrawal destinations must be verified and registered in the user\'s own legal name (third-party payouts are strictly prohibited).',
      'Available balance is reserved immediately upon withdrawal submission; if rejected or cancelled, funds are restored to available balance.',
      'Internal transfers between Wallet and MT5 accounts process atomically with zero internal fee markup.',
      'Every wallet movement generates a permanent transaction ID, timestamp, and audit trail available in Transaction History.'
    ],
    checks: [
      'Wallet navigation is accessible for approved users with full feature access.',
      'Available, Reserved, and MT5 balances update accurately following each transaction.',
      'Deposit workflow shows clear fee, currency, and limit disclosures before submission.',
      'Withdrawal form restricts destinations to verified accounts in the user\'s legal name and enforces balance limits.',
      'Internal transfers execute atomically between Wallet and MT5 without lag or dropped funds.',
      'Transaction filter and history display accurate timestamps, status badges, and transaction IDs.'
    ],
    sections: [
      {
        eyebrow: 'BALANCES & CURRENCIES',
        title: 'Wallet Overview & Account Balances',
        description: 'Displays available, reserved, and total balances across supported account currencies and connected MT5 accounts.',
        items: [
          ['Total Balance', 'Aggregated sum of all funds across your main fiat and crypto balances.', 'Overview'],
          ['Available Balance', 'Funds immediately accessible for new deposits, withdrawals, or trading transfers.', 'Accessible'],
          ['Reserved Funds', 'Amount temporarily locked during active pending withdrawal requests or open operations.', 'Locked'],
          ['Connected MT5 Balances', 'Real-time equity and balance synchronized across connected MT5 trading accounts.', 'MT5 Accounts'],
          ['Multi-Currency Support', 'Hold and manage balances in USD, EUR, GBP, and supported digital assets.', 'Currencies']
        ]
      },
      {
        eyebrow: 'FUNDING METHODS',
        title: 'Deposit Workflow & Disclosures',
        description: 'Step-by-step instructions for funding your Zyvest wallet using verified payment channels.',
        items: [
          ['Enabled Payment Methods', 'Choose between instant bank transfer, wire deposit, credit/debit cards, and supported crypto.', 'Channels'],
          ['Deposit Disclosures', 'Review real-time conversion rates, provider processing fees, minimum/maximum limits, and estimated time.', 'Transparency'],
          ['Deposit Status Tracking', 'Track funding lifecycle: Pending → Processing → Completed (or Failed with clear error reasons).', 'Tracking'],
          ['Credit Confirmation', 'Funds are credited to available wallet balance automatically once payment confirms.', 'Instant Credit']
        ]
      },
      {
        eyebrow: 'WITHDRAWAL CONTROLS',
        title: 'Withdrawal Workflow & Safety Checks',
        description: 'Security rules and procedures for withdrawing funds from your Zyvest wallet.',
        items: [
          ['Verified Destination', 'Withdrawals are strictly permitted only to verified bank accounts or crypto addresses registered in your name.', 'Security Rule'],
          ['Fund Reservation', 'Requested withdrawal amount is immediately reserved from available funds upon submission.', 'Balance Safety'],
          ['Approval & Processing', 'Requests are reviewed and processed; notification sent upon release or completion.', 'Status Cycle'],
          ['Failure & Rejection Release', 'If a withdrawal is rejected or fails, reserved funds are instantly released back to available balance.', 'Auto-Release']
        ]
      },
      {
        eyebrow: 'TRADING TRANSFERS',
        title: 'Internal Transfer between Wallet & MT5',
        description: 'Move capital seamlessly between your Zyvest Wallet and MT5 trading accounts without external fees.',
        items: [
          ['Source & Destination', 'Transfer funds between Main Wallet and any connected MT5 Live trading account.', 'Direct Route'],
          ['Atomic Processing', 'Debiting the source and crediting the destination execute atomically in real-time.', 'Zero Lag'],
          ['Zero Internal Fees', 'Instant internal capital reallocation without payment provider transaction charges.', 'No Fees'],
          ['Currency Handling', 'Supports same-currency matching or live platform conversion rates before confirmation.', 'Rates Disclosed']
        ]
      },
      {
        eyebrow: 'RECORDS & AUDIT',
        title: 'Transaction History & Statements',
        description: 'Complete historical records for all deposits, withdrawals, transfers, and fees.',
        items: [
          ['Multi-Filter Search', 'Filter history by Transaction Type (Deposit, Withdrawal, Transfer), Date Range, and Status.', 'Filters'],
          ['Transaction Details Dialog', 'Click any transaction to view Transaction ID, Reference Code, Timestamp, Method, and Net Amount.', 'Detailed Receipt'],
          ['Statement Export', 'Export verified PDF and CSV account statements for tax or accounting purposes.', 'Export PDF/CSV']
        ]
      }
    ]
  }
];

const onboardingSubmodules = {
  'step-1': {
    id: 'step-1',
    number: '01',
    step: 'Step 1',
    title: 'Sign up & Email OTP',
    summary: 'Create login credentials with personal details or Google, verify email OTP, and begin your onboarding.',
    flow: [
      'On the Zyvest website, open the Sign up page',
      'Enter your Full Name and Email Address',
      'Optionally enter a Phone Number',
      'Optionally enter a Referral Code and select Apply if available',
      'Enter a Password and Confirm Password',
      'Check the Agree to Privacy Policy & Terms & Conditions checkbox and click the green Sign up button',
      'Or choose Google Sign up: select a Google account or add an account, then confirm sharing your name and profile picture with Zyvest Capital UAT',
      'On the "Please verify your email" page, enter the OTP sent to your email before the 2:28 countdown timer expires',
      'Use the Resend OTP option below the OTP field if needed once available',
      'Select Continue after entering the valid OTP to proceed to Step 2 (KYC Verification)'
    ],
    rules: [
      'Full Name, Email Address, Password, Confirm Password, and Terms checkbox are mandatory.',
      'Phone Number and Referral Code are optional.',
      'Google Sign up routes through Google account selection and displays Zyvest Capital UAT consent.',
      'The email OTP expires after 2:28; Resend OTP is available below the input field.'
    ],
    checks: [
      'Form fields, password matching, and terms acceptance are validated.',
      'Email OTP timer and Resend OTP link behave as expected.',
      'Valid OTP entry unlocks Step 2 (KYC Verification).'
    ]
  },
  'kyc': {
    id: 'kyc',
    number: '02',
    step: 'Step 2',
    title: 'KYC Verification',
    summary: 'Complete personal details, upload a valid government ID, and complete face verification (or skip steps) to verify identity.',
    flow: [
      'After email OTP verification, open the KYC Verification personal details page',
      'Enter your Legal Full Name and select your Date of Birth using the calendar date picker',
      'Select your Country from the dropdown and your State from the dropdown',
      'Fill in your Address, Pincode, and select your Profession',
      'Check the declaration confirming the information provided is accurate and agreeing to the Privacy Policy and Terms & Conditions',
      'Select "Apply for Manual Verification" (or choose "Skip for Now" to defer)',
      'On the KYC Document Verification page ("Upload valid government ID for verification"), search for and select your document type (Passport, Aadhar Card, Voter ID, PAN Card, and more searchable via the top search bar)',
      'Upload your document file (accepted formats: JPEG, PNG, PDF; maximum file size: up to 10 MB)',
      'Click "Continue" to proceed, or select "Skip for Now"',
      'On the Face Verification page, grant camera permissions ("Allow Zyvest Capital to take pictures and record video")',
      'Select "Start Verification" to perform face verification, or choose "Skip for Now"',
      'Continue to Step 3 (Nominee Details) upon completion'
    ],
    rules: [
      'KYC Verification consists of three stages: Personal Details, Document Verification, and Face Verification.',
      'Personal Details requires Legal Full Name, Date of Birth (calendar date picker), Country, State, Address, Pincode, Profession, and the accuracy & Terms checkbox.',
      'Document Verification supports Passport, Aadhar Card, Voter ID, PAN Card, and more via a top search bar; uploaded files must be JPEG, PNG, or PDF up to 10 MB.',
      'Face Verification requires camera access permission ("Allow Zyvest Capital to take pictures and record video") and clicking "Start Verification".',
      'Each stage provides a "Skip for Now" option allowing users to defer verification steps.',
      'Submitting KYC moves the user to Step 3 (Nominee Details).'
    ],
    checks: [
      'All required KYC fields (Legal Full Name, Date of Birth picker, Country, State, Address, Pincode, Profession) and declaration checkboxes are validated.',
      'Document search bar filters accepted government IDs (Passport, Aadhar Card, Voter ID, PAN Card, etc.).',
      'File upload strictly validates accepted formats (JPEG, PNG, PDF) and the 10 MB size limit.',
      'Camera permissions prompt appears correctly during Face Verification, with "Start Verification" activating the camera.',
      '"Skip for Now" is available and functional at each stage.',
      'Successful submission routes the user to Step 3 (Nominee Details).'
    ]
  },
  'nominee': {
    id: 'nominee',
    number: '03',
    step: 'Step 3',
    title: 'Nominee Details',
    summary: 'Add nominee information with relation selection, complete declarations, and continue to Step 4.',
    flow: [
      'Continue from KYC Verification to the Add Nominee page on the Zyvest website',
      'Enter the Nominee\'s Name and Date of Birth',
      'Select the Relation with Nominee using the dropdown (with searchable relation options)',
      'Enter the Nominee\'s Email ID and attach any requested nominee fields',
      'Check the declaration confirming the entered information is accurate and agreeing to the Privacy Policy and Terms & Conditions',
      'Select "Continue" to submit nominee details, or select "Skip for Now"',
      'Proceed to Step 4 (Pending KYC approval) upon completing or skipping nominee details'
    ],
    rules: [
      'Nominee Details captures the Nominee Name, Date of Birth, Relation with Nominee (via searchable dropdown), and Nominee Email ID.',
      'The declaration checkbox confirming information accuracy and agreement to Privacy Policy and Terms & Conditions must be checked to continue.',
      'Users can choose "Continue" to submit nominee details or choose "Skip for Now".',
      'Completed nominee details are preserved during the review process.'
    ],
    checks: [
      'Nominee fields (Name, Date of Birth, Email ID) and searchable Relation dropdown function properly.',
      'Declaration checkbox is required when clicking "Continue".',
      '"Skip for Now" allows the user to proceed without submitting nominee details immediately.',
      'Advancing from nominee details leads to Step 4 (Pending KYC approval).'
    ]
  },
  'admin-approval': {
    id: 'admin-approval',
    number: '04',
    step: 'Step 4',
    title: 'Pending KYC approval',
    summary: 'Review submission status, access the dashboard while under review, and track review outcomes.',
    flow: [
      'After completing KYC verification and nominee details (or choosing to defer), reach the "Submission Under Review" page',
      'Review the status notification indicating your KYC submission is pending approval',
      'Select "Go to Dashboard" to explore your account dashboard while awaiting approval',
      'Receive in-app and email notification once Zyvest reviews your KYC submission',
      'When Approved, unlock the Wallet feature and full user platform navigation',
      'If Rejected, view the specific review reason and access the direct correction/resubmission path'
    ],
    rules: [
      'The "Submission Under Review" screen informs users that their application is with the admin team.',
      'Users can navigate to their Dashboard using the "Go to Dashboard" button while in pending status.',
      'Review sets the account to Approved or Rejected and sends instant in-app and email alerts.',
      'When Zyvest approves an account, the user is able to get the Wallet feature and access all user modules.',
      'Rejected applications display clear feedback and guide the user back to correct specific information or re-upload documents.'
    ],
    checks: [
      'The "Submission Under Review" page displays clear status messaging and a functional "Go to Dashboard" button.',
      'Status banner is visible on the dashboard while the account is under review.',
      'Approval immediately unlocks the Wallet feature and platform navigation.',
      'Rejection displays the exact reason and opens the correction flow.'
    ]
  }
};

// Screenshot assets are added to the project by the Help Center editor, not uploaded by site visitors.
const guideScreenshots = {
  login: [],
  signup: [],
  kyc: [],
  nominee: [],
  'admin-approval': [],
  profile: [],
  wallet: []
};

const ibModules = {
  'ib-management': {
    title: 'IB Management',
    summary: 'Review IB requests and existing partners, inspect a request, and see the fields used when adding an IB.',
    flow: ['Open IB → IB Management on the Zyvest website.', 'Review the summary cards for Total IB, Total IB Requests, Total Clients, and Total Reward.', 'Choose Requesters, Partners, or Termination to view the corresponding list.', 'Search for an IB or narrow the list with Status, IB Type, IB Level, Country, or Date.', 'Select View & Proceed to inspect a request. The reference shows the applicant details with Approve and Reject controls.', 'To add an IB, select Add New IB, search for a user, choose an IB Type, then select Add.', 'Use the row and status shown on the website to confirm the outcome. This Help Center does not submit or approve requests.'],
    references: [
      ['ib-management-overview.png','IB Management overview with summary cards, tabs, filters, and IB rows.'],
      ['ib-management-requesters-tab.png','IB Management Requesters tab and requester list.'],
      ['ib-management-review-request.png','IB request details with applicant information and Approve or Reject controls.'],
      ['ib-management-add-ib.png','Add New IB dialog with user and IB type fields.'],
      ['ib-management-add-ib-form.png','Add New IB form reference.'],
      ['ib-management-status-filter.png','IB Management status filter options.'],
      ['ib-management-type-filter.png','IB Management IB Type filter.'],
      ['ib-management-level-filter.png','IB Management IB Level filter.'],
      ['ib-management-country-filter.png','IB Management Country filter.'],
      ['ib-management-date-filter.png','IB Management Date filter.']
    ],
    sections: [
      {title:'Summary cards and page controls',items:[
        ['Total IB','Count of Introducing Brokers displayed in the summary.'],['Total IB Requests','Request count displayed by the page. The reference does not define how request states affect this count.'],['Total Clients','Client count displayed in the summary.'],['Total Reward','Reward amount shown by the page.'],['Requesters / Partners / Termination','Switch between the named IB lists or the termination area.'],['Search IB','Find an IB record by the text accepted by the website search.'],['Report','Opens the report action shown in the toolbar.'],['View','Opens the table display options shown in the toolbar.'],['Add New IB','Opens a form to select a user and an IB Type.'] ]},
      {title:'Filters and request review',items:[
        ['Status','Filter by the shown statuses: Approved, Pending, or Rejected.'],['IB Type','Narrow the list by the available IB type.'],['IB Level','Filter by the displayed level, including Main IB or Sub IB.'],['Country','Narrow the list by country.'],['Date','Filter records by date.'],['View & Proceed','Open the selected request details for review.'],['Approve / Reject','Decision controls shown in the request detail reference; use the Zyvest website’s confirmation and policy before taking action.'] ]},
      {title:'IB Management table columns',items:[
        ['Take Action','Open the row action, shown as View & Proceed for requests.'],['IB ID','Identifier for the Introducing Broker record.'],['User ID','Zyvest identifier of the associated user.'],['Name','Name displayed for the IB.'],['Email','Email associated with the IB record.'],['IB Type','Type assigned to the IB.'],['IB Level','Level displayed for the IB, such as Main IB or Sub IB.'],['Country','Country recorded for the IB.'],['Termination Status','Termination state shown in the table.'],['IB Status','Current IB status displayed in the row.'],['Reg Date','Registration date shown for the record.'],['Direct Client','Direct client count displayed for the IB.'],['Trading volume Lots','Trading volume measured in lots as displayed.'],['Trading volume USD','Trading volume value in USD as displayed.'],['Reward Amount','Reward amount displayed for the IB.'] ]},
      {title:'Add New IB fields',items:[['Select User','Search for and select the user to associate with the new IB.'],['IB Type','Choose the IB type for the selected user.'],['Cancel','Close the form without adding from this dialog.'],['Add','Submit the selected user and IB type on the Zyvest website.']]}
    ]
  },
  'ib-type': {
    title:'IB Type', summary:'Understand the IB type list, its filters, and the fields shown when an administrator creates or edits a type.',
    flow:['Open IB → IB Type on the Zyvest website.','Review the Total IB Types, Total IB, Total Clients, and Total Reward summary cards.','Search for a type or filter by Status, Registration, or Level.','Use View & Edit on a row to inspect or update a type.','To create a type, choose Add New Type and complete the required name, registration, and approval fields.','Add the description and any optional reward conditions shown in the form.','Review the reward criteria and status. The form notes that levels and symbols must be defined before status can be Enabled.','Select Save & Continue and follow the website’s next step. Update Symbols is also visible in the toolbar; the screenshots do not show its full workflow.'],
    references:[
      ['ib-type-overview.png','IB Type overview with summary cards, filters, actions, and type records.'],['ib-type-status-filter.png','IB Type status filter.'],['ib-type-registration-filter.png','IB Type Registration filter.'],['ib-type-level-filter.png','IB Type Level filter.'],['ib-type-column-visibility.png','IB Type table column visibility menu.'],['ib-type-create-form-top.png','Upper fields of the Add New IB Type form.'],['ib-type-create-form-bottom.png','Reward criteria and status fields near the bottom of the form.']
    ],
    sections:[
      {title:'Summary cards and page controls',items:[['Total IB Types','Number of IB types shown.'],['Total IB','Number of Introducing Brokers shown.'],['Total Clients','Number of clients shown.'],['Total Reward','Reward amount displayed in the summary.'],['Search IB Types','Find a type using the website search.'],['Status / Registration / Level','Filter the type list by the selected property.'],['Report','Open the report action shown on the page.'],['View','Open table display options.'],['Update Symbols','A symbols action is visible; the supplied screenshots do not show its detailed behavior.'],['Add New Type','Open the IB type creation form.']]},
      {title:'IB Type table columns',items:[['Take Action','Open View & Edit for the selected type.'],['Type ID','Identifier assigned to the type.'],['Name','Type name.'],['Description','Description recorded for the type.'],['Registration','Registration setting displayed, such as Public, Private, or Restricted.'],['Status','Type status displayed as Enabled or Disabled.'],['Approval','Approval setting shown for the type.'],['No of IB','Number of IBs associated with the type.'],['No of Clients','Number of clients associated with the type.'],['Level','Level value displayed for the type.'],['No Of Tier','Tier count shown in the table.'],['Created Date','Date the type was created.'],['Reward Amount','Reward amount displayed for the type.']]},
      {title:'Add New IB Type form',items:[['Name · required','Enter the name for this IB type.'],['Description','Enter a description for the type.'],['Registration · required','Choose the registration setting. The filter reference shows Public, Private, and Restricted.'],['Approval · required','Set the approval option presented by the form.'],['Mask Email · required','Set the email masking option presented by the form.'],['Reward Condition · optional','Optional condition text/setting shown by the form.'],['Traders','Reward criterion field shown in the lower form.'],['Trading Volume in Lots','Reward criterion based on lot volume.'],['Trading Volume in USD','Reward criterion based on USD volume.'],['Status · required','The form says status can be Enabled only after levels and symbols are defined.'],['Cancel','Leave the form without saving.'],['Save & Continue','Save the form and continue to the next website step.']]},
      {title:'Filters and table display',items:[['Status filter','Choose Enabled or Disabled.'],['Registration filter','Choose Public, Private, or Restricted.'],['Level filter','Choose the level values shown by the website.'],['Column visibility','Use the column menu to show or hide available table columns.']]}
    ]
  },
  clients:{
    title:'Clients',summary:'See how the Clients page lists IB-linked customers, what each summary and table column means, and how the Link User to IB form is presented.',
    flow:['Open IB → Clients on the Zyvest website.','Review Total Clients, Total IB, Total Main IB, and Total Sub IB.','Search the client list or filter by IB Type, IB Status, Country, or Date.','Select View on a row to inspect that client record.','To associate a user with an IB, choose Link User to IB.','Search and select a User to Link, then search and select the IB Name. Both fields are required in the reference.','Select Add to submit on the Zyvest website, or Cancel to leave without submitting.','Return to the list and use its displayed values to confirm the association. This Help Center does not change client records.'],
    references:[['ib-clients-overview.png','Clients overview with summary cards, search, filters, actions, and client rows.'],['ib-clients-ib-type-filter.png','Clients IB Type filter.'],['ib-clients-ib-status-filter.png','Clients IB Status filter.'],['ib-clients-country-filter.png','Clients Country filter.'],['ib-clients-date-filter.png','Clients Date filter.'],['ib-clients-link-user-to-ib.png','Link User to IB dialog with the two required search fields.']],
    sections:[
      {title:'Summary cards and page controls',items:[['Total Clients','Total number of direct clients under IBs shown in the reference.'],['Total IB','Number of Introducing Brokers shown.'],['Total Main IB','Count of Main IB records displayed.'],['Total Sub IB','Count of Sub IB records displayed.'],['Search Clients','Search the visible client list.'],['IB Type','Filter clients by IB type.'],['IB Status','Filter clients by the displayed IB status.'],['Country','Filter clients by country.'],['Date','Filter client records by date.'],['Report','Open the report action shown in the toolbar.'],['View','Open the table display options.'],['Link User to IB','Open the form for selecting a user and an IB.']]},
      {title:'Clients table columns',items:[['Take Action','Open the row’s View action.'],['User ID','Zyvest identifier for the client.'],['Name','Name displayed for the client.'],['Country','Country recorded for the client.'],['Email','Email associated with the client.'],['IB Type','IB type displayed for the client association.'],['IB','IB association indicator/value displayed in the row.'],['IB Name','Name of the associated Introducing Broker.'],['Trades','Trade count displayed for the client.'],['Trading Volume in Lots','Trading volume in lots shown for the client.'],['Trading Volume in USD','Trading volume in USD shown for the client.'],['Reward','Reward value displayed for the client.'],['Reg Date','Registration date displayed for the client.']]},
      {title:'Link User to IB form',items:[['User to Link · required','Search for the user by name or ID and select the matching user.'],['IB Name · required','Search for and select the destination IB by name or ID.'],['Cancel','Close the form without submitting the association.'],['Add','Submit the selected user and IB association on the Zyvest website.']]}
    ]
  },
  'trading-groups':{title:'Trading Groups',comingSoon:true},report:{title:'Report',comingSoon:true},'reward-transaction':{title:'Reward Transaction',comingSoon:true},'ib-hierarchy':{title:'IB Hierarchy',comingSoon:true}
};

const ibModuleCards = [
  {id:'ib-management',title:'IB Management',summary:'Review IB requests, partner records, filters, and visible approval actions.'},
  {id:'ib-type',title:'IB Type',summary:'Understand type settings, registration options, reward criteria, and table fields.'},
  {id:'clients',title:'Clients',summary:'Explore client relationships, table columns, filters, and linking a user to an IB.'},
  {id:'trading-groups',title:'Trading Groups',summary:'This IB area is under construction.',comingSoon:true},
  {id:'report',title:'Report',summary:'This IB area is under construction.',comingSoon:true},
  {id:'reward-transaction',title:'Reward Transaction',summary:'This IB area is under construction.',comingSoon:true},
  {id:'ib-hierarchy',title:'IB Hierarchy',summary:'This IB area is under construction.',comingSoon:true}
];

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
  support: {
    title: 'Support',
    summary: 'Review support tickets, narrow the ticket list, and create a ticket for a selected user on the Zyvest website.',
    references: [
      { src: './screenshots/admin-support-ticket-list.png', alt: 'Admin Support ticket list with ticket summary cards, filters, table, and column menu', caption: 'Support ticket list · summary cards, search and filters, row actions, and configurable table columns.' },
      { src: './screenshots/admin-support-status-filter.png', alt: 'Support ticket list with the status filter open', caption: 'Status filter · Open, In Progress, Awaiting Reply, Escalated, Resolved, Reopened, and Closed.' },
      { src: './screenshots/admin-support-date-filter.png', alt: 'Support ticket list with date filter choices', caption: 'Date filter · Today, One Week, One Month, and One Year.' },
      { src: './screenshots/admin-support-type-filter.png', alt: 'Support ticket list with ticket type filter options', caption: 'Type filter · filter by ticket type, such as bug issue or feature request.' },
      { src: './screenshots/admin-support-team-filter.png', alt: 'Support ticket list with team filter choices', caption: 'Team filter · narrow tickets by the listed support team.' },
      { src: './screenshots/admin-support-priority-filter.png', alt: 'Support ticket list with priority filter choices', caption: 'Priority filter · high, low, medium, and critical.' },
      { src: './screenshots/admin-support-create-type.png', alt: 'Create New Ticket form with ticket type choices open', caption: 'Create ticket · select a ticket type, such as feature request or bug issue.' },
      { src: './screenshots/admin-support-create-priority.png', alt: 'Create New Ticket form with priority choices open', caption: 'Create ticket · set priority to high, low, medium, or critical.' },
      { src: './screenshots/admin-support-create-ticket.png', alt: 'Create New Ticket form with user target, ticket type, priority, title, description, and attachment controls', caption: 'Create New Ticket · select a user, enter the required details, optionally add a template or attachments, then create the ticket.' }
    ],
    flow: [
      'On the Zyvest website, open Admin → Support.',
      'Select Create Ticket to open the Create New Ticket form.',
      'Search for and select the Ticket Target user.',
      'Choose a Ticket Type and Ticket Priority.',
      'Enter the Ticket Title and Description; the screenshot marks these fields as required.',
      'Optionally select a ticket template or add attachments. The supplied form shows three attachment slots.',
      'Select Create Ticket to submit the form on the Zyvest website.',
      'Return to the ticket list and use the ticket ID and status to locate and follow the record.'
    ],
    sections: [
      { title: 'Support overview and controls', items: [
        ['Open Tickets', 'Count of tickets currently shown as open.'],
        ['Tickets In Progress', 'Count of tickets shown as being worked on.'],
        ['Closed Tickets', 'Count of tickets marked closed.'],
        ['Escalated Tickets', 'Count of tickets marked escalated.'],
        ['Search and filters', 'Search tickets or filter by Status, Priority, Team, Type, and Date.'],
        ['Report status', 'The supplied screen labels the ticket report summaries “Report Coming Soon.”'],
        ['Report, View, and Create Ticket', 'Report and View are toolbar controls; Create Ticket opens the form described above.']
      ] },
      { title: 'Ticket list columns', items: [
        ['Ticket Id', 'Unique reference used to identify a ticket.'],
        ['Raiser Id', 'Zyvest user ID of the person who raised the ticket.'],
        ['Priority', 'Urgency level assigned to the ticket.'],
        ['Ticket Type', 'Ticket category, such as bug issue or feature request.'],
        ['Title', 'Short subject describing the ticket.'],
        ['Status', 'Current ticket state shown in the list.'],
        ['Raiser Name', 'Name of the user who raised the ticket.'],
        ['Raiser Email', 'Email address associated with the ticket raiser.'],
        ['Created By', 'Indicates who created the ticket, such as User.'],
        ['Team', 'Support team assigned to the ticket.'],
        ['Assigned Emp', 'Employee assigned to handle the ticket, when assigned.'],
        ['Assigned Date', 'Date an employee was assigned.'],
        ['Created Date', 'Date the ticket was created.'],
        ['Updated Date', 'Most recent date the ticket record was updated.'],
        ['Toggle columns', 'Choose which available columns are displayed in the ticket table.']
      ] },
      { title: 'Create ticket form options', items: [
        ['Ticket Target', 'Search for the user the ticket is being created for.'],
        ['Ticket Type', 'Choose the category; the screenshots show feature request and bug issue.'],
        ['Ticket Priority', 'Choose high, low, medium, or critical.'],
        ['Ticket Title', 'Enter a short subject for the support request.'],
        ['Description', 'Describe the issue or request; formatting controls are available.'],
        ['Ticket Template', 'Optionally select a saved template to help prepare the description.'],
        ['Attachments', 'Add supporting files using the attachment slots shown in the form.'],
        ['Create Ticket', 'Submit the completed form on the Zyvest website.']
      ] },
      { title: 'Ticket status labels', items: [
        ['Open', 'Ticket is open in the support queue.'],
        ['In Progress', 'Ticket is marked as being handled.'],
        ['Awaiting Reply', 'The ticket is marked as waiting for a reply.'],
        ['Escalated', 'The ticket is marked as escalated for additional attention.'],
        ['Resolved', 'The ticket is marked as resolved.'],
        ['Reopened', 'A previously resolved or closed ticket has been reopened.'],
        ['Closed', 'The ticket is marked closed.']
      ] }
    ]
  },
  ib: { title: 'IB', directory: true, summary: 'Browse clear guides to IB Management, IB Type, and Clients. The remaining areas are marked under construction until their workflows are documented.' },
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
  const visible = modules.filter(module => {
    let text = `${module.title} ${module.number || ''} ${module.step || ''} ${module.path} ${module.summary} ${module.flow.join(' ')} ${module.rules.join(' ')} ${module.checks.join(' ')}`;
    if (module.hasSubmodules) {
      Object.values(onboardingSubmodules).forEach(sub => {
        text += ` ${sub.title} ${sub.summary} ${sub.flow.join(' ')} ${sub.rules.join(' ')} ${sub.checks.join(' ')}`;
      });
    }
    return text.toLowerCase().includes(query);
  });
  grid.innerHTML = visible.map(module => `
    <button class="module-card" data-module="${module.id}" aria-label="Open ${escapeHtml(module.title)} guide">
      <div class="module-card-header">
        <span class="module-card-number">${escapeHtml(module.number || '')}</span>
        <span class="module-step-badge">${escapeHtml(module.step || '')}</span>
        <span class="module-icon">${module.icon}</span>
      </div>
      <span class="module-path">${escapeHtml(module.path)}</span>
      <strong>${escapeHtml(module.title)}</strong><span class="module-summary">${escapeHtml(module.summary)}</span>
      ${module.hasSubmodules ? '<div class="submodule-pill-list"><span class="submodule-pill">Step 1: Sign up</span><span class="submodule-pill">Step 2: KYC</span><span class="submodule-pill">Step 3: Nominee</span><span class="submodule-pill">Step 4: Pending KYC Approval</span></div>' : ''}
      ${module.id === 'profile' ? '<div class="submodule-pill-list"><span class="submodule-pill">User Level Upgrade</span><span class="submodule-pill">Account Types: Copier Group</span><span class="submodule-pill">Spread & Leverage</span><span class="submodule-pill">Manage Profile</span><span class="submodule-pill">KYC Re-Setup</span><span class="submodule-pill">2FA: Mail & App</span></div>' : ''}
      <span class="module-action">Open overview <b>→</b></span>
    </button>`).join('');
  empty.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;
  grid.querySelectorAll('[data-module]').forEach(button => button.addEventListener('click', () => openModule(button.dataset.module)));
}

function openOnboardingSubmodule(id, opener) {
  const sub = onboardingSubmodules[id];
  if (!sub) return;
  const detail = document.createElement('section');
  detail.className = 'detail-page onboarding-subpage';
  detail.setAttribute('role', 'dialog');
  detail.setAttribute('aria-modal', 'true');
  detail.setAttribute('aria-labelledby', 'subDetailTitle');
  detail.innerHTML = `
    <div class="detail-topbar">
      <button class="back-link close-sub-detail">← Sign up guide</button>
      <span class="detail-counter">ZYVEST ONBOARDING · ${escapeHtml(sub.step.toUpperCase())} OF 04</span>
      <button class="close-button close-sub-detail" aria-label="Return to Sign up guide">×</button>
    </div>
    <div class="detail-content">
      <p class="eyebrow">HELP CENTER · ONBOARDING ${escapeHtml(sub.step.toUpperCase())}</p>
      <h1 id="subDetailTitle">${escapeHtml(sub.title)}</h1>
      <p class="detail-intro">${escapeHtml(sub.summary)}</p>
      <div class="flow-layout">
        <section class="detail-panel">
          <h2>Steps on the Zyvest website</h2>
          <ol class="flow-list">${sub.flow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
        </section>
        <section class="detail-panel check-panel">
          <h2>What to verify</h2>
          <ul>${sub.checks.map(check => `<li>${escapeHtml(check)}</li>`).join('')}</ul>
        </section>
      </div>
      <section class="detail-panel business-rules">
        <p class="eyebrow">IMPLEMENTATION RULES</p>
        <h2>Business rules & account states</h2>
        <ul>${sub.rules.map(rule => `<li>${escapeHtml(rule)}</li>`).join('')}</ul>
      </section>
    </div>`;
  document.body.append(detail);
  const close = () => {
    detail.remove();
    opener?.focus();
  };
  detail.querySelectorAll('.close-sub-detail').forEach(btn => btn.addEventListener('click', close));
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail.addEventListener('keydown', event => {
    event.stopPropagation();
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') keepFocusInside(event, detail);
  });
  detail.querySelector('.close-button').focus();
}

const accountPlansData = [
  {
    id: 'copier-group',
    name: 'Copier Group',
    tag: 'Recommended for Copy Trading',
    icon: '👥',
    spreadRange: '0.0 – 1.2 pips',
    spreadType: 'Floating Spread',
    leverage: 'Up to 1:500',
    minDeposit: '$100',
    commission: '$3.00 / lot',
    execution: 'Instant Market Copy',
    featured: true,
    description: 'Designed specifically for copy trading participants. Automatically mirrors top-performing master traders with real-time execution and risk controls.',
    features: [
      'Automatic sync with master trader strategies',
      'Flexible leverage configuration (1:100 to 1:500)',
      'Tight floating spread range from 0.0 – 1.2 pips',
      'Automated equity stop-loss risk protection',
      'Full MT5 terminal & mobile app compatibility'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Account',
    tag: 'Zero Commission',
    icon: '⚡',
    spreadRange: '1.0 – 1.8 pips',
    spreadType: 'Floating Spread',
    leverage: 'Up to 1:500',
    minDeposit: '$50',
    commission: '$0 (Built into spread)',
    execution: 'Market Execution',
    featured: false,
    description: 'The versatile all-round trading account for beginners and discretionary retail traders seeking zero-commission trading.',
    features: [
      'No added commissions per lot traded',
      'Competitive spread range starting from 1.0 pip',
      'High leverage up to 1:500 for flexible margin',
      'Access to 100+ FX pairs, indices, and metals',
      'Instant deposit and fast automated withdrawal'
    ]
  },
  {
    id: 'raw-spread',
    name: 'Raw Spread (ECN)',
    tag: 'Ultra-Low Spreads',
    icon: '💎',
    spreadRange: 'From 0.0 pips',
    spreadType: 'Raw Interbank',
    leverage: 'Up to 1:500',
    minDeposit: '$200',
    commission: '$3.50 / lot per side',
    execution: 'Direct Interbank Liquidity',
    featured: false,
    description: 'Tailored for day traders, scalpers, and algorithmic Expert Advisors demanding institutional spreads with no markup.',
    features: [
      'Raw interbank spread range starting from 0.0 pips',
      'Fixed low commission fee of $3.50 per lot',
      'High-speed execution via Equinix NY4 server farm',
      'No dealing desk (NDD) with zero requotes',
      'Unrestricted scalping, hedging, and EA trading'
    ]
  },
  {
    id: 'vip-investor',
    name: 'VIP / Institutional',
    tag: 'High Volume Tier',
    icon: '👑',
    spreadRange: 'From 0.0 pips',
    spreadType: 'Institutional Custom',
    leverage: 'Up to 1:200',
    minDeposit: '$10,000',
    commission: 'Volume Rebates Available',
    execution: 'Priority Prime Liquidity',
    featured: false,
    description: 'Premium institutional tier providing personalized liquidity streams, dedicated account management, and tailored margin rules.',
    features: [
      'Lowest institutional spread range on the platform',
      'Tailored leverage up to 1:200 with bespoke margin',
      'Dedicated private VIP account manager',
      'Complimentary ultra-low latency VPS hosting',
      'Priority queue for high-value wallet payouts'
    ]
  }
];

function openAccountTypesPlanModal(opener) {
  const detail = document.createElement('section');
  detail.className = 'detail-page plan-modal-dialog';
  detail.setAttribute('role', 'dialog');
  detail.setAttribute('aria-modal', 'true');
  detail.setAttribute('aria-labelledby', 'planModalTitle');
  detail.innerHTML = `
    <div class="detail-topbar">
      <button class="back-link close-plan-modal">← Profile guide</button>
      <span class="detail-counter">ZYVEST TRADING ACCOUNTS · PLAN CHOOSER</span>
      <button class="close-button close-plan-modal" aria-label="Close plan chooser">×</button>
    </div>
    <div class="detail-content">
      <div class="plan-modal-header">
        <p class="eyebrow"><span class="pulse"></span> ACCOUNT TYPES & TRADING PLANS</p>
        <h1 id="planModalTitle">Choose a plan that is right for you</h1>
        <p>Compare spreads, leverage, commissions, and execution models across Zyvest trading account types. Select any plan to view its complete specifications.</p>
      </div>

      <div class="plan-cards-grid">
        ${accountPlansData.map(plan => `
          <div class="plan-card ${plan.featured ? 'plan-featured' : ''}" data-plan-id="${plan.id}">
            <span class="plan-selected-badge">✓ ACTIVE SELECTION</span>
            <span class="plan-card-tag">${escapeHtml(plan.tag)}</span>
            <div class="plan-card-header">
              <span class="plan-card-icon">${plan.icon}</span>
              <h3 class="plan-card-title">${escapeHtml(plan.name)}</h3>
            </div>
            <p style="margin:0 0 10px;font-size:0.825rem;color:var(--muted);line-height:1.45">${escapeHtml(plan.description)}</p>
            
            <div class="plan-metric-boxes">
              <div class="plan-metric-box">
                <span class="plan-metric-label">Range of Spread</span>
                <span class="plan-metric-value">${escapeHtml(plan.spreadRange)}</span>
              </div>
              <div class="plan-metric-box">
                <span class="plan-metric-label">Max Leverage</span>
                <span class="plan-metric-value">${escapeHtml(plan.leverage)}</span>
              </div>
            </div>

            <ul class="plan-details-list">
              <li><strong>Min Deposit:</strong>&nbsp;${escapeHtml(plan.minDeposit)}</li>
              <li><strong>Commission:</strong>&nbsp;${escapeHtml(plan.commission)}</li>
              <li><strong>Execution:</strong>&nbsp;${escapeHtml(plan.execution)}</li>
              ${plan.features.slice(0, 3).map(f => `<li>${escapeHtml(f)}</li>`).join('')}
            </ul>

            <button type="button" class="plan-select-btn" data-select-plan="${plan.id}">
              ${plan.id === 'copier-group' ? 'Select Copier Plan' : 'Select Plan'}
            </button>
          </div>
        `).join('')}
      </div>

      <div id="planSelectionToast" class="twofa-live-feedback feedback-success" style="margin-top:20px" hidden></div>

      <aside class="admin-reference-note" style="margin-top:22px">
        <strong>About Account Types & Plans</strong>
        <p>This module illustrates the plan chooser workflow on the Zyvest website. Account spreads fluctuate dynamically based on market liquidity and tier conditions. Leverage settings determine required margin and can be adjusted within allowed account limits.</p>
      </aside>
    </div>`;

  document.body.append(detail);
  const close = () => {
    detail.remove();
    opener?.focus();
  };
  detail.querySelectorAll('.close-plan-modal').forEach(btn => btn.addEventListener('click', close));
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail.addEventListener('keydown', event => {
    event.stopPropagation();
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') keepFocusInside(event, detail);
  });

  const toast = detail.querySelector('#planSelectionToast');
  detail.querySelectorAll('[data-select-plan]').forEach(btn => {
    btn.addEventListener('click', () => {
      const planId = btn.dataset.selectPlan;
      const plan = accountPlansData.find(p => p.id === planId);
      detail.querySelectorAll('.plan-card').forEach(c => c.classList.remove('plan-selected'));
      const activeCard = detail.querySelector(`[data-plan-id="${planId}"]`);
      if (activeCard) activeCard.classList.add('plan-selected');
      if (toast && plan) {
        toast.hidden = false;
        toast.innerHTML = `<strong>✓ Plan Selected: ${escapeHtml(plan.name)}</strong> (Range of Spread: <code>${escapeHtml(plan.spreadRange)}</code>, Leverage: <code>${escapeHtml(plan.leverage)}</code>). In your live Zyvest portal, new MT5 accounts will be provisioned under this tier.`;
        toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  detail.querySelector('.close-button').focus();
}

function openAuthenticatorModal(opener) {
  const detail = document.createElement('section');
  detail.className = 'detail-page authenticator-modal-dialog';
  detail.setAttribute('role', 'dialog');
  detail.setAttribute('aria-modal', 'true');
  detail.setAttribute('aria-labelledby', 'authModalTitle');
  detail.innerHTML = `
    <div class="detail-topbar">
      <button class="back-link close-auth-modal">← Profile guide</button>
      <span class="detail-counter">ZYVEST SECURITY · 2FA SETUP</span>
      <button class="close-button close-auth-modal" aria-label="Close authenticator setup">×</button>
    </div>
    <div class="detail-content" style="text-align:center">
      <p class="eyebrow"><span class="pulse"></span> TWO-FACTOR AUTHENTICATION</p>
      <h1 id="authModalTitle" style="font-size:1.45rem;margin:6px 0 10px">Open Authenticator App</h1>
      <p style="margin:0 auto 16px;color:var(--muted);font-size:0.875rem">Scan the QR code with Google Authenticator, Microsoft Authenticator, or Authy, or copy the setup key manually.</p>

      <div class="auth-step-box">
        <div class="auth-qr-frame">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Simulated Authenticator QR Code">
            <rect width="140" height="140" fill="#ffffff"/>
            <rect x="10" y="10" width="35" height="35" fill="#087950"/>
            <rect x="17" y="17" width="21" height="21" fill="#ffffff"/>
            <rect x="22" y="22" width="11" height="11" fill="#087950"/>
            <rect x="95" y="10" width="35" height="35" fill="#087950"/>
            <rect x="102" y="17" width="21" height="21" fill="#ffffff"/>
            <rect x="107" y="22" width="11" height="11" fill="#087950"/>
            <rect x="10" y="95" width="35" height="35" fill="#087950"/>
            <rect x="17" y="102" width="21" height="21" fill="#ffffff"/>
            <rect x="22" y="107" width="11" height="11" fill="#087950"/>
            <rect x="52" y="15" width="10" height="10" fill="#087950"/>
            <rect x="70" y="20" width="14" height="8" fill="#087950"/>
            <rect x="55" y="35" width="8" height="16" fill="#087950"/>
            <rect x="70" y="45" width="18" height="10" fill="#087950"/>
            <rect x="55" y="65" width="30" height="10" fill="#087950"/>
            <rect x="15" y="55" width="10" height="25" fill="#087950"/>
            <rect x="35" y="65" width="10" height="15" fill="#087950"/>
            <rect x="95" y="55" width="15" height="10" fill="#087950"/>
            <rect x="115" y="65" width="15" height="18" fill="#087950"/>
            <rect x="55" y="85" width="12" height="20" fill="#087950"/>
            <rect x="75" y="85" width="16" height="14" fill="#087950"/>
            <rect x="95" y="95" width="15" height="20" fill="#087950"/>
            <rect x="115" y="105" width="15" height="15" fill="#087950"/>
            <rect x="55" y="115" width="30" height="12" fill="#087950"/>
          </svg>
        </div>
        <p style="margin:4px 0;font-size:0.78rem;color:var(--muted)">Account: <strong>Zyvest Capital (Kabir Singh)</strong></p>
        <div class="auth-key-display">
          <code>ZYV-7892-AUTH-KBR9</code>
          <button type="button" class="btn-copy-code" id="btnCopyAuthCode">Copy Key</button>
        </div>
      </div>

      <div style="margin-top:16px">
        <label style="display:block;font-size:0.8125rem;font-weight:700;color:var(--ink);margin-bottom:6px">Enter 6-digit Authenticator Code:</label>
        <div class="totp-input-row">
          <input type="text" maxlength="1" class="totp-digit" value="4" aria-label="Digit 1">
          <input type="text" maxlength="1" class="totp-digit" value="8" aria-label="Digit 2">
          <input type="text" maxlength="1" class="totp-digit" value="2" aria-label="Digit 3">
          <input type="text" maxlength="1" class="totp-digit" value="9" aria-label="Digit 4">
          <input type="text" maxlength="1" class="totp-digit" value="1" aria-label="Digit 5">
          <input type="text" maxlength="1" class="totp-digit" value="6" aria-label="Digit 6">
        </div>
        <button type="button" class="btn-action-primary" id="btnVerifyTotp" style="width:100%;justify-content:center;padding:11px">
          Verify & Enable Authenticator 2FA
        </button>
      </div>

      <div id="authSuccessNotice" class="twofa-live-feedback feedback-success" style="margin-top:14px" hidden></div>
    </div>`;

  document.body.append(detail);
  const close = () => {
    detail.remove();
    opener?.focus();
  };
  detail.querySelectorAll('.close-auth-modal').forEach(btn => btn.addEventListener('click', close));
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail.addEventListener('keydown', event => {
    event.stopPropagation();
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') keepFocusInside(event, detail);
  });

  const copyBtn = detail.querySelector('#btnCopyAuthCode');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy Key'; }, 1800);
    });
  }

  const verifyBtn = detail.querySelector('#btnVerifyTotp');
  const notice = detail.querySelector('#authSuccessNotice');
  if (verifyBtn && notice) {
    verifyBtn.addEventListener('click', () => {
      notice.hidden = false;
      notice.innerHTML = `<strong>✓ 2FA Verified & Active!</strong> Authenticator app paired successfully. Subsequent logins and withdrawals will require this 6-digit code.`;
    });
  }

  detail.querySelector('.close-button').focus();
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
    <div class="detail-topbar"><button class="back-link close-detail">← All User guides</button><span class="detail-counter">ZYVEST WEBSITE GUIDE · ${escapeHtml(module.number ? module.number + ' · ' : '')}${escapeHtml(module.path)}</span><button class="close-button close-detail" aria-label="Close guide">×</button></div>
    <div class="detail-content">
      <p class="eyebrow">HELP CENTER · USER GUIDE${module.step ? ` · ${escapeHtml(module.step.toUpperCase())}` : ''}</p><h1 id="detailTitle">${escapeHtml(module.title)}</h1><p class="detail-intro">${escapeHtml(module.summary)}</p>
      <div class="flow-layout">
        <section class="detail-panel"><h2>Steps on the Zyvest website</h2><ol class="flow-list">${module.flow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol></section>
        <section class="detail-panel check-panel"><h2>What to verify</h2><ul>${module.checks.map(check => `<li>${escapeHtml(check)}</li>`).join('')}</ul></section>
      </div>
      <section class="detail-panel business-rules"><p class="eyebrow">IMPLEMENTATION RULES</p><h2>Business rules & account states</h2><ul>${module.rules.map(rule => `<li>${escapeHtml(rule)}</li>`).join('')}</ul></section>
      ${module.hasSubmodules ? `
        <section class="detail-panel onboarding-submodule-section">
          <div class="ib-section-heading">
            <div>
              <p class="eyebrow">ONBOARDING STEPS 1 TO 4</p>
              <h2>4 Onboarding steps inside Sign up</h2>
              <p>Select any step below to review its exact fields, document formats, and verification rules.</p>
            </div>
            <span>Steps 1–4</span>
          </div>
          <div class="onboarding-cards-grid">
            ${Object.values(onboardingSubmodules).map(sub => `
              <button type="button" class="onboarding-subcard" data-submodule="${sub.id}">
                <div class="onboarding-subcard-header">
                  <span class="onboarding-subcard-number">${sub.number}</span>
                  <span class="module-step-badge">${sub.step}</span>
                </div>
                <strong>${escapeHtml(sub.title)}</strong>
                <p>${escapeHtml(sub.summary)}</p>
                <span class="onboarding-subcard-action">View ${sub.step} guide <b>→</b></span>
              </button>
            `).join('')}
          </div>
        </section>
      ` : ''}
      ${module.id === 'profile' ? `
        <section class="detail-panel interactive-feature-panel">
          <div class="interactive-feature-header">
            <div>
              <p class="eyebrow"><span class="pulse"></span> LIVE INTERACTIVE WORKFLOWS</p>
              <h2>Account Types & 2FA Interactive Controls</h2>
              <p>Test the exact Account Types plan selection ("Choose a plan that is right for you") and dual-channel 2FA workflows directly in this Help Center guide.</p>
            </div>
            <span class="module-step-badge">Interactive Demo</span>
          </div>
          <div class="interactive-action-grid">
            <div class="interactive-action-card">
              <span class="interactive-card-icon">🎯</span>
              <div class="interactive-card-body">
                <h3>Account Types · Plan Selection</h3>
                <p>Click below to open the interactive module: <strong>"Choose a plan that is right for you"</strong>. Compare plans including <strong>Copier Group</strong>, evaluating <strong>Range of Spread</strong> and <strong>Leverage</strong>.</p>
                <button type="button" class="btn-action-primary open-plans-modal-btn">
                  Choose a plan that is right for you <b>→</b>
                </button>
              </div>
            </div>
            <div class="interactive-action-card">
              <span class="interactive-card-icon">🛡️</span>
              <div class="interactive-card-body">
                <h3>Two-Factor Authentication (2FA)</h3>
                <p>Test both verification channels configured for account login protection and withdrawal authentication:</p>
                <div class="twofa-button-group">
                  <button type="button" class="btn-action-secondary twofa-mail-trigger-btn">
                    ✉️ Generate new code with mail
                  </button>
                  <button type="button" class="btn-action-secondary twofa-app-trigger-btn">
                    📱 Open authenticator app
                  </button>
                </div>
                <div class="twofa-live-feedback" id="twofaLiveFeedback" hidden></div>
              </div>
            </div>
          </div>
        </section>
      ` : ''}
      ${module.sections?.length ? `
        <section class="detail-panel profile-sections-container">
          <div class="ib-section-heading">
            <div>
              <p class="eyebrow">DETAILED PAGE MODULES & CONTROLS</p>
              <h2>Profile Page Structure & Components</h2>
              <p>Reference guide for all navigation menus, identification items, personal fields, and security options.</p>
            </div>
            <span>${module.sections.length} Sections</span>
          </div>
          ${module.sections.map(group => `
            <div class="dashboard-explanation" style="margin-top:22px">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px">
                <h3 style="margin:0;font-size:1.1rem;color:var(--ink)">${escapeHtml(group.title)}</h3>
                <span class="module-step-badge" style="font-size:0.75rem">${escapeHtml(group.eyebrow || 'SECTION')}</span>
              </div>
              ${group.description ? `<p style="margin:0 0 12px;color:var(--muted);font-size:0.875rem">${escapeHtml(group.description)}</p>` : ''}
              <div class="dashboard-metric-grid customer-guide-grid">
                ${group.items.map(([title, text, badge]) => `
                  <article class="dashboard-info-card">
                    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px">
                      <h4 style="margin:0;font-size:0.95rem;color:var(--ink)">${escapeHtml(title)}</h4>
                      ${badge ? `<span class="module-step-badge" style="font-size:0.72rem;padding:2px 8px">${escapeHtml(badge)}</span>` : ''}
                    </div>
                    <p style="margin:0;color:var(--muted);font-size:0.85rem;line-height:1.5">${escapeHtml(text)}</p>
                  </article>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </section>
      ` : ''}
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
  detail.querySelectorAll('[data-submodule]').forEach(subButton => {
    subButton.addEventListener('click', () => {
      openOnboardingSubmodule(subButton.dataset.submodule, subButton);
    });
  });

  const plansBtn = detail.querySelector('.open-plans-modal-btn');
  if (plansBtn) {
    plansBtn.addEventListener('click', () => openAccountTypesPlanModal(plansBtn));
  }
  const mail2faBtn = detail.querySelector('.twofa-mail-trigger-btn');
  const app2faBtn = detail.querySelector('.twofa-app-trigger-btn');
  const feedbackBox = detail.querySelector('#twofaLiveFeedback');
  if (mail2faBtn && feedbackBox) {
    mail2faBtn.addEventListener('click', () => {
      feedbackBox.hidden = false;
      feedbackBox.className = 'twofa-live-feedback feedback-success';
      feedbackBox.innerHTML = `<strong>✓ Security Code Dispatched!</strong> A 6-digit one-time verification passcode has been sent to your registered Mail ID (<code>kabir.singh@example.com</code>). Code is valid for 10 minutes.`;
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
  if (app2faBtn) {
    app2faBtn.addEventListener('click', () => openAuthenticatorModal(app2faBtn));
  }
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') keepFocusInside(event, detail);
  });
  detail.querySelector('.close-button').focus();
}

function openIbModule(id, opener) {
  const module = ibModules[id];
  if (!module) return;
  const detail = document.createElement('section');
  detail.className = 'detail-page ib-subpage';
  detail.setAttribute('role', 'dialog');
  detail.setAttribute('aria-modal', 'true');
  detail.setAttribute('aria-labelledby', 'ibDetailTitle');
  const references = module.references || [];
  detail.innerHTML = `
    <div class="detail-topbar"><button class="back-link close-ib-detail">← IB modules</button><span class="detail-counter">ZYVEST WEBSITE · IB GUIDE</span><button class="close-button close-ib-detail" aria-label="Return to IB modules">×</button></div>
    <div class="detail-content admin-detail-content ib-detail-content">
      <p class="eyebrow">HELP CENTER · IB GUIDE</p><h1 id="ibDetailTitle">${escapeHtml(module.title)}</h1>
      ${module.summary ? `<p class="detail-intro">${escapeHtml(module.summary)}</p>` : ''}
      ${module.comingSoon ? `<section class="admin-coming-soon"><span class="admin-coming-soon-label">GUIDE STATUS</span><h2>Under construction</h2><p>The detailed ${escapeHtml(module.title)} guide will be added when its workflow and reference screens are available.</p></section>` : `
        <section class="detail-panel ib-flow-panel"><h2>How to use this page</h2><ol class="flow-list">${module.flow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol></section>
        <section class="dashboard-explanation ib-reference-section"><div class="ib-section-heading"><div><p class="eyebrow">SCREEN BY SCREEN</p><h2>Reference screenshots</h2></div><span>${references.length} screenshots</span></div>
          <div class="customer-reference-grid ib-reference-grid ib-reference-grid-${references.length}" aria-label="${escapeHtml(module.title)} screenshots">${references.map(([file,caption]) => `<figure class="customer-reference"><img src="./screenshots/${escapeHtml(file)}" alt="${escapeHtml(caption)}" loading="lazy"><figcaption>${escapeHtml(caption)}</figcaption></figure>`).join('')}</div>
        </section>
        ${module.sections.map(group => `<section class="dashboard-explanation ib-explanation-section"><h2>${escapeHtml(group.title)}</h2><div class="dashboard-metric-grid customer-guide-grid">${group.items.map(([title,text]) => `<article class="dashboard-info-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</div></section>`).join('')}
      `}
      <aside class="admin-reference-note"><strong>About this guide</strong><p>This Help Center explains how to read the separate Zyvest website. It does not perform IB administration or change user or account data. Labels and actions are described from the supplied screenshots.</p></aside>
    </div>`;
  document.body.append(detail);
  detail.querySelectorAll('.close-ib-detail').forEach(button => button.addEventListener('click', () => {
    detail.remove();
    opener?.focus();
  }));
  detail.addEventListener('click', event => {
    if (event.target === detail) { detail.remove(); opener?.focus(); }
  });
  detail.addEventListener('keydown', event => {
    event.stopPropagation();
    if (event.key === 'Escape') { detail.remove(); opener?.focus(); }
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
      ${area.directory ? `<div class="ib-module-grid" aria-label="IB guide modules">${ibModuleCards.map((module, index) => `<button type="button" class="ib-module-card" data-ib-module="${module.id}"><span class="ib-module-number">${String(index + 1).padStart(2,'0')}</span><strong>${escapeHtml(module.title)}</strong><span>${escapeHtml(module.summary)}</span><b>${module.comingSoon ? 'Under construction' : 'Open guide'} <i>→</i></b></button>`).join('')}</div>` : area.comingSoon ? `<section class="admin-coming-soon"><span class="admin-coming-soon-label">GUIDE STATUS</span><h2>Update coming soon</h2><p>The detailed ${escapeHtml(area.title)} guide will be added when its workflow is provided.</p></section>` : `
        ${area.references?.length ? `<section class="customer-reference-grid${area.title === 'Support' ? ' support-reference-grid' : ''}" aria-label="${escapeHtml(area.title)} screenshots">${area.references.map(ref => `<figure class="customer-reference"><img src="${escapeHtml(ref.src)}" alt="${escapeHtml(ref.alt)}"><figcaption>${escapeHtml(ref.caption)}</figcaption></figure>`).join('')}</section>` : ''}
        ${area.flow?.length ? `<section class="detail-panel support-flow-panel"><h2>Create a ticket for a user</h2><ol class="flow-list">${area.flow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol></section>` : ''}
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
  detail.querySelector('.ib-module-grid')?.addEventListener('click', event => {
    const card = event.target.closest('[data-ib-module]');
    if (card) openIbModule(card.dataset.ibModule, card);
  });
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
document.querySelectorAll('.roadmap-step[data-module]').forEach(button => {
  button.addEventListener('click', () => openModule(button.dataset.module));
});
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
