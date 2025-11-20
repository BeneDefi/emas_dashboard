# EMAS-FI Dashboard

## Overview
EMAS-FI is a gold-backed financial platform dashboard built with React, TypeScript, and Vite. The application provides users with a comprehensive interface to manage their gold holdings, staking, loans, and view their profile.

## Project Structure
This is a monorepo containing multiple React applications:
- `emasfi_dashboard/` - Main dashboard application (primary frontend)
- `profile/` - Standalone profile viewer
- `overview/` - Additional overview component

The primary application is `emasfi_dashboard`, which includes all features integrated into a single dashboard.

## Tech Stack
- **Framework**: React 18.2.0
- **Build Tool**: Vite 6.0.4
- **Language**: TypeScript
- **Routing**: Wouter 3.7.1
- **UI Components**: Shadcn UI (based on Radix UI)
- **Styling**: Tailwind CSS 3.4.16
- **Charts**: Recharts 3.4.1

## Features
The dashboard includes the following screens:
1. **Dashboard Overview** - Main landing page with portfolio statistics and charts
2. **Buy Gold** - Interface for purchasing gold
3. **Staking** - Gold staking management
4. **Loans** - Loan management interface
5. **Profile** - User profile and account details

## Development

### Running Locally
The application runs on port 5000 with the development server configured to work with Replit's proxy:
```bash
cd emasfi_dashboard
npm install
npm run dev
```

### Configuration
The Vite configuration (`emasfi_dashboard/vite.config.ts`) is set up for Replit environment:
- Host: 0.0.0.0
- Port: 5000
- HMR configured for proxy (clientPort: 443)

## Deployment
The project is configured for static deployment:
- Build command: `cd emasfi_dashboard && npm run build`
- Output directory: `emasfi_dashboard/dist`

## Recent Changes
- **2024-11-20**: Initial Replit setup
  - Installed Node.js 20 toolchain
  - Configured Vite for Replit proxy support
  - Added missing dependencies (@radix-ui/react-dropdown-menu)
  - Copied Profile screen from separate profile project
  - Set up workflow for development server
  - Configured static deployment

## Notes
- The application uses custom CSS variables for typography defined in Tailwind
- Charts may show dimension warnings in console - this is cosmetic and doesn't affect functionality
- WebSocket HMR warnings about port 443 are expected in Replit environment
