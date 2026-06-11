# Ecommerce Project

A modern ecommerce storefront built with React, TypeScript, Vite, and Tailwind CSS. This project demonstrates a scalable architecture, reusable UI components, and a streamlined user flow for product browsing, cart management, and checkout.

## Key Features

- Responsive product catalog with filtering and search
- Shopping cart management with quantity controls
- Authentication-ready page structure
- Checkout experience with order summary
- Modular component architecture for maintainability

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Query
- Axios
- Zod

## Setup

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
ecommerce-project/
├── public/                  # Static assets
├── src/                     # Application source code
│   ├── components/          # Reusable UI components
│   ├── constants/           # Configuration files
│   │   └── api.ts
│   ├── contexts/            # React context providers for global state
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Feature pages and routing
│   │   ├── homePage/
│   │   │   ├── components/  # Home-specific UI elements
│   │   │   └── HomePage.tsx
│   │   └── productPage/
│   │       ├── components/  # Product-specific UI elements
│   │       └── ProductPage.tsx
│   ├── services/            # API client and network requests
│   ├── types/               # TypeScript type definitions and interfaces
│   └── utilities/           # Pure helper functions
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contribution

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Submit a pull request with a clear description

## License

This project is licensed under the MIT License. See `LICENSE` for details.
