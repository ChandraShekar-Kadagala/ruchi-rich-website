# RUCHI RICH - Premium Spice Catalogue

This is a complete, production-quality frontend application for RUCHI RICH (Ramraj Oil Industries) showcasing their premium spice catalogue.

## Features

- **No Prices/Weights**: Complies with the requirement to omit all pricing and weight information.
- **WhatsApp Checkout**: Complete cart flow ending in a WhatsApp redirect with a pre-filled, formatted order summary.
- **Responsive Design**: Built with Tailwind CSS, fully responsive across mobile, tablet, and desktop.
- **State Management**: Zustand for persistent cart state across sessions.
- **Animations**: Purposeful, smooth transitions and hover effects using Framer Motion.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Missing Assets & Verification Checklist

- **Brand Assets**: The logo (`ruchi-rich-logo.png`) has been mapped. Ensure it is of high resolution and has a transparent background.
- **Product Images**: All 9 product images are mapped. Ensure they are correctly exported.
- **Contact Details**: The provided contact details (`src/config/contact.ts`) use the placeholder email. Please verify if an official email needs to be added.
- **WhatsApp Number**: Currently using `9848246556` for WhatsApp integration. Ensure this number is active on WhatsApp.


## GitHub Sync Workflow

The project includes automated scripts for safe Git workflows:

- \
pm run github:status\: View the current Git status.
- \
pm run github:sync\: Automatically checks for changes, stages them, asks for a commit message, and pushes to GitHub.
- \
pm run github:watch\: (Optional) Automatically watches for file changes and syncs them after 10 seconds of inactivity.

