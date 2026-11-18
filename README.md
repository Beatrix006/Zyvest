# Zyvest Website Help Center

A standalone Help Center website built with HTML, CSS, and vanilla JavaScript. It documents user and administrator workflows for the separate Zyvest website.

## Open it

Open `index.html` in a modern browser. No build step or package installation is required.

## What this site does

- Provides User and Admin guide sections for the Zyvest website
- User guides feature 4 primary dashboard modules: Log in, Sign in / Sign up, Profile & account, and Wallet
- The Sign in / Sign up module contains 4 core onboarding stages: Step 1 (Sign up & Email OTP), Step 2 (KYC Verification), Step 3 (Nominee Details), and Step 4 (Pending KYC approval)
- Shows the supplied Admin dashboard reference first, followed by clickable 3 × 3 cards for its nine visible navigation areas
- Shows detailed steps, business rules, account states, verification checks, and project-managed screenshot references
- Includes responsive layout, guide search, role navigation, and persistent light/dark theme

This is a documentation website. Its guide buttons open help content; they do not sign users into Zyvest, create accounts, submit KYC, approve requests, or process Wallet transactions. Use **Open Zyvest website** to visit the separate product site.

Admin overview cards open Help Center detail pages. The Dashboard card includes a thumbnail of the reference image, and its detail explains the charts and every visible metric. The Customers guide includes User Management and MT5 Management references and field descriptions. The Transactions guide includes seven screenshots and concise cards for All Wallets, Wallet/MT5 Deposits, Wallet/MT5 Withdrawals, and Wallet/MT5 Internal Transfers. The Support guide includes nine screenshots, ticket list and filter explanations, status labels, and the admin flow for creating a ticket for a selected user. Other Admin cards say “Update coming soon” until their workflows are provided. Card clicks do not perform administrator actions on the Zyvest website.

The IB card opens a module directory. IB Management, IB Type, and Clients have detailed guides with individually attached screenshots, step-by-step navigation, and plain-language descriptions of visible cards, filters, forms, table columns, and actions. Trading Groups, Report, Reward Transaction, and IB Hierarchy are marked “Under construction” because their workflows are not included in the supplied reference.

## Onboarding route documented here

New users complete sign-up, email OTP verification, KYC verification (personal details, government ID upload, and face verification), and nominee details on the Zyvest website, then reach the "Submission Under Review" page with a link to "Go to Dashboard". After administrative approval, the user receives full access to Wallet and other platform features. The Help Center remains a separate reference site.

See `BUSINESS_FLOWS.md` for the agreed product-flow rules and implementation boundary.

## Screenshots

To add screenshots, attach the images in the project chat. The Help Center editor will place them in the project assets and connect them to the relevant guide; site visitors do not upload screenshots through the front end.
