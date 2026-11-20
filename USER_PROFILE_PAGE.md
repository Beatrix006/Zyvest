# Zyvest – User Profile & Account Page Documentation

## 1. Overview
The **Profile & Account** page is a centralized workspace within the Zyvest platform that allows users to manage their identity, trading account tiers, personal details, nominee authorization, security settings, KYC status, two-factor authentication, and login activity.

It is accessible directly from the **Zyvest Dashboard** via the top navigation bar or the **Settings** sidebar menu.

---

## 2. Top Navigation Bar
The top navigation bar provides instant access to all core platform modules and utilities:

| Field / Menu | Explanation | Classification |
|---|---|---|
| **Zyvest Logo** | Displays the official Zyvest Capital brand logo and links to the main home view. | Branding |
| **Dashboard** | Provides access to the main dashboard showing equity, charts, and quick actions. | Navigation |
| **Wallet** | Unlocked for approved users to manage deposits, withdrawals, and internal transfers. | Funds |
| **Account Type** | Dedicated entry point to view account plans and open the plan selection modal. | Accounts |
| **IB** | Introducing Broker management section for commissions, rebates, and sub-clients. | Broker |
| **Support** | Customer help desk ticket management and real-time support requests. | Help Desk |
| **PAMM** | Percentage Allocation Management Module for pooled investment accounts. | Investment |
| **Copy Trading** | Copy trading interface to discover, follow, and mirror master strategy providers. | Trading |
| **Notification Icon** | Bell icon alerting users to system notices, deposit confirmations, and security alerts. | Alerts |
| **Theme Icon** | One-click toggle switching between Light and Dark application themes. | Interface |
| **User Profile Dropdown** | Displays the logged-in user's name and avatar, opening account settings and logout. | Menu |

---

## 3. Settings Sidebar
The Settings sidebar categorizes user preferences and compliance settings into clear functional views:

| Menu Item | Explanation | Status Indicator |
|---|---|---|
| **Profile** | Displays personal details, account identification, nominee information, and security. | Active Section |
| **KYC Verification** | Identity verification portal tracking document status and submission history. | Verified / Active |
| **2 Factor Authentication** | Dual-channel login and withdrawal security configuration (Mail code & Authenticator app). | Security Tier |
| **Notifications** | Configuration options for email alerts, push notifications, and trade execution notices. | Preferences |

---

## 4. Account Identification & User Level Upgrading

Located at the top of the Profile workspace, this section presents the user's primary credentials and platform status:

| Field / Element | Explanation | Functionality |
|---|---|---|
| **Profile Picture** | Displays the avatar or photograph uploaded by the user with image upload/change support. Visually confirms account identity. | Upload / Replace Photo |
| **Your ID** | System-assigned unique numeric account identifier (e.g. `ZYV-849201`). Quoted in all support and funding queries. | Read-Only Identifier |
| **Account Level** | Displays current user membership tier (e.g., `Level 1`). Higher levels offer higher leverage, lower commissions, and elevated withdrawal limits. | Tier Status Badge |
| **Upgrade Option** | Interactive action button allowing eligible users to explore tier progression criteria or request an immediate account level upgrade. | Action Button |

---

## 5. Account Types — "Choose a plan that is right for you"

Inside the Account Types section (accessible from the Profile page and top navigation), an interactive module/modal opens titled **"Choose a plan that is right for you"**.

This module allows users to evaluate and select from distinct trading plans tailored to manual traders, scalpers, institutional accounts, and copy trading participants.

### Key Trading Account Plans

| Plan Name | Target Audience | Range of Spread | Leverage | Commission | Minimum Deposit | Key Highlights |
|---|---|---|---|---|---|---|
| **Copier Group** | Copy Trading & Strategy Followers | **0.0 – 1.2 pips** (Floating) | **Up to 1:500** (Flexible) | $3.00 / lot | $100 | Seamless sync with master traders, automatic risk stop-loss, copy ratio customization. |
| **Standard Account** | Beginners & Day Traders | **1.0 – 1.8 pips** (Floating) | **Up to 1:500** | $0 (Markup included) | $50 | Zero commission on all currency pairs, instant market execution, ideal for discretionary trading. |
| **Raw Spread (ECN)** | Scalpers & Algorithmic Traders | **From 0.0 pips** (Raw interbank) | **Up to 1:500** | $3.50 / lot per side | $200 | Direct Tier-1 interbank liquidity feeds, ultra-low latency, optimal for automated Expert Advisors (EAs). |
| **VIP / Institutional** | High-Volume & Professional Investors | **From 0.0 pips** (Institutional) | **Up to 1:200** | Custom negotiable rates | $10,000 | Dedicated personal account manager, custom VPS hosting, priority liquidity queue, expedited payouts. |

### Core Account Parameters Explained
- **Range of Spread:** Represents the difference between the Bid and Ask prices across trading instruments. Floating spreads dynamically tighten during peak market liquidity.
- **Leverage:** The margin multiplier (e.g. 1:100, 1:200, 1:500) determining the borrowing power available to open market positions relative to account equity.

---

## 6. Manage Profile (Personal Information)

The Manage Profile card presents the user's verified personal details collected during onboarding. Strict compliance rules protect verified information against unauthorized alteration.

| Field Name | Display Example | UI Control / Indicator | Editing Policy |
|---|---|---|---|
| **Full Name** | Kabir Singh | 🔒 Lock Icon | **Restricted:** Permanent verified legal name matching government ID. Name changes require administrative review. |
| **Display Name** | KabirTrader | ✏️ Edit Icon | **Editable:** Public platform alias/handle that can be modified directly inline. |
| **Date of Birth** | 14 Aug 1992 | 🔒 Lock Icon | **Restricted:** Compliance-locked birth date matching KYC records. |
| **Phone Number** | +1 (555) 234-8901 | 🔒 Lock Icon | **Protected:** Locked from arbitrary inline edits. Updates require SMS/Phone OTP verification. |
| **Mail ID (Email)** | kabir.singh@example.com | 🔒 Lock Icon | **Protected:** Primary authentication email. Updates require dual-channel email verification. |
| **Address** | 452 Elm Street, Suite 300 | 🔒 Lock Icon | **Restricted:** Residential address verified via proof-of-address documents. |
| **Country** | United States | 🔒 Lock Icon | **Restricted:** Registered jurisdiction determining regulatory jurisdiction and available payment rails. |

---

## 7. KYC Verification Status & Re-Setup

Tracks the user's Know Your Customer (KYC) regulatory compliance standing:

| Field / Element | Explanation | UI Presentation |
|---|---|---|
| **KYC Verification Status** | Displays current account verification standing (e.g., `Active`, `Verified`, or `Under Review`). | Status Badge (`Active`) |
| **Re-Setup Option** | Action button enabling users to update expired identity cards, submit fresh address proofs, or re-verify biometrics. | Action Button (`Re-Setup`) |

---

## 8. Nominee Details (Emergency Authorization)

Allows users to appoint an authorized nominee who can manage or claim account funds in the event of unforeseen contingencies:

| Field / Element | Explanation | UI Presentation |
|---|---|---|
| **Nominee Details Section** | Displays appointed nominee overview or empty placeholder prompt. | Overview Card |
| **Emergency Notice** | Clarifies platform policies governing legal entitlement and proof requirements for nominee disbursement. | Policy Notice |
| **Add / Edit Nominee Button** | Opens the nominee form requiring Nominee Legal Name, Date of Birth, Relationship (Spouse, Child, Parent, etc.), and Contact Email. | Action Button (`Add Nominee`) |

---

## 9. Two-Factor Authentication (2FA)

Zyvest enforces robust multi-factor security protecting login sessions and financial transactions. Two distinct authentication channels are supported:

| Security Channel | Functionality & Workflow | User Action |
|---|---|---|
| **Generate New Code with Mail** | Triggers an immediate one-time 6-digit numeric security passcode dispatched to the user's registered **Mail ID**. Valid for 10 minutes. Ideal for fallback authentication without third-party apps. | Button: `Generate new code with mail` |
| **Open Authenticator App** | Integrates with time-based one-time password (TOTP) apps such as **Google Authenticator**, **Microsoft Authenticator**, or **Authy**. Provides a scanable QR code and backup alphanumeric secret key. | Button: `Open authenticator app` |
| **2FA Status** | Indicates whether two-factor verification is enforced on login and withdrawals (`Active` vs. `Inactive`). | Status Badge |

---

## 10. Credentials & Login History

| Section | Element | Description |
|---|---|---|
| **Change Password** | Password Security Card | Displays password status and features a navigation arrow redirecting the user to the dedicated credential update screen with old password, new password, and confirmation fields. |
| **Login History** | Session Audit Log | Provides a transparent chronological audit trail recording previous login sessions, including: Timestamp, IP Address, Device/Browser Agent, Approximate Location, and Login Status (Success/Failed). |

---

## 11. Summary & Implementation Rules

1. **Dashboard & Settings Integration:** The Profile & Account view is accessible via both top navigation user controls and the Settings sidebar.
2. **Account Upgrades:** The User Level badge displays current status with an accessible Upgrade path.
3. **Account Types Plan Selection:** Inside Account Types, a dedicated modal opens titled **"Choose a plan that is right for you"** showcasing the **Copier Group** plan alongside Standard and Raw Spread options, detailing **Range of Spread** and **Leverage**.
4. **Manage Profile Restrictions:** Personal fields (Full Name, Date of Birth, Address, Country, Phone, Mail ID) remain compliance-locked (🔒), while the Display Name features an interactive Edit Icon (✏️).
5. **KYC Lifecycle:** Current status reflects `Active`, with an accessible `Re-Setup` button for document renewals.
6. **2FA Dual Channels:** Users can choose between **"Generate new code with mail"** for email-delivered codes or **"Open authenticator app"** for TOTP app configuration.
