# Project Structure

## Directory Organization

```
├── .kiro/                    # Kiro IDE configuration
│   ├── settings/            # IDE settings
│   ├── specs/               # Project specifications
│   └── steering/            # AI assistant guidance rules
├── public/                  # Static assets
│   └── img/                 # NFT image collection (1000+ PNG files)
├── src/                     # Source code
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions and constants
└── node_modules/            # Dependencies
```

## Source Code Structure

### `/src/app/` - Next.js App Router
- `layout.js` - Root layout with metadata
- `page.js` - Main page component
- `globals.css` - Global styles

### `/src/components/` - React Components
- `ImageGrid/` - Main grid display component
- `ImageModal/` - Full-screen image viewer
- `ErrorBoundary.js` - Error handling wrapper

### `/src/utils/` - Utilities
- `constants.js` - Psychiatric terms array and helper functions
- `imageData.js` - Image data generation and validation

### `/src/hooks/` - Custom Hooks
- Currently empty, reserved for future custom hooks

## File Naming Conventions

- **Components**: PascalCase directories with PascalCase files (`ImageGrid/ImageGrid.js`)
- **Utilities**: camelCase files (`imageData.js`)
- **Constants**: camelCase with descriptive names
- **CSS Modules**: Component name + `.module.css`

## Import Patterns

- Use path aliases: `@/components/`, `@/utils/`, `@/hooks/`
- Named exports for utilities and constants
- Default exports for React components
- ES6 import/export syntax throughout

## Component Architecture

- **Functional components** with hooks
- **Client-side rendering** where needed (`'use client'`)
- **CSS Modules** for component styling
- **Error boundaries** for graceful error handling
- **State management** via React hooks (useState, useEffect)