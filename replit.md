# EMAS-FI Dashboard

## Overview
EMAS-FI is a gold-backed financial platform dashboard built with React, TypeScript, and Vite. The application provides users with a comprehensive interface to manage their gold holdings, staking, loans, and view their profile.

## Project Structure
This project follows a feature-first React architecture for better organization and scalability:

```
emasfi_dashboard/
├── src/
│   ├── features/          # Feature-based modules
│   │   ├── dashboard/     # Dashboard overview feature
│   │   │   ├── pages/     # Dashboard pages
│   │   │   └── index.ts   # Feature exports
│   │   ├── buy-gold/      # Gold purchase feature
│   │   │   ├── pages/     # Buy gold pages
│   │   │   ├── components/# Buy gold components
│   │   │   └── index.ts
│   │   ├── staking/       # Staking management feature
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   ├── loans/         # Loan management feature
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   └── profile/       # User profile feature
│   │       ├── pages/
│   │       ├── components/
│   │       └── index.ts
│   ├── components/        # Shared UI components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Sidebar.tsx   # Navigation sidebar
│   │   └── DonutChart.tsx# Chart component
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   ├── assets/           # Static assets (images, etc.)
│   ├── App.tsx           # Main app component
│   └── index.tsx         # Entry point
├── public/               # Public static files
│   └── figmaAssets/      # Design assets from Figma
└── package.json

```

## Tech Stack
- **Framework**: React 18.2.0
- **Build Tool**: Vite 6.0.4
- **Language**: TypeScript
- **Routing**: Wouter 3.7.1
- **UI Components**: Shadcn UI (based on Radix UI)
- **Styling**: Tailwind CSS 3.4.16
- **Charts**: Recharts 3.4.1

## Features
The dashboard includes the following sections:
1. **Dashboard Overview** - Main landing page with portfolio statistics and charts
2. **Buy Gold** - Interface for purchasing gold with live pricing
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
- Path aliases: `@/` → `src/`

### Path Aliases
The project uses TypeScript path aliases for cleaner imports:
- `@/components/*` → `src/components/*`
- `@/features/*` → `src/features/*`
- `@/lib/*` → `src/lib/*`

## Deployment
The project is configured for static deployment:
- Build command: `cd emasfi_dashboard && npm run build`
- Output directory: `emasfi_dashboard/dist`

## Recent Changes
- **2024-11-20**: Restructured to standard React file structure
  - Migrated from Anima-generated screens/sections structure to feature-first architecture
  - Organized features into individual modules with pages and components
  - Updated all imports to use @/ path aliases
  - Moved shared components to top-level components folder
  - Removed duplicate profile and overview folders
  - Consolidated assets structure
  - All routes tested and working correctly

- **2024-11-20**: Initial Replit setup
  - Installed Node.js 20 toolchain
  - Configured Vite for Replit proxy support
  - Added missing dependencies (@radix-ui/react-dropdown-menu)
  - Set up workflow for development server
  - Configured static deployment

## Notes
- The application uses custom CSS variables for typography defined in Tailwind
- Charts may show dimension warnings in console - this is cosmetic and doesn't affect functionality
- WebSocket HMR warnings about port 443 are expected in Replit environment
- The project follows a feature-first architecture for better scalability and maintainability
