# Technology Stack

## Framework & Runtime
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **Node.js** - JavaScript runtime

## Styling & UI
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styling
- **PostCSS** - CSS processing

## Development Tools
- **ESLint 9.x** - Code linting with Next.js config
- **Turbopack** - Fast bundler for development

## Build System & Configuration
- **ES Modules** - Modern JavaScript module system
- **Path Aliases** - `@/*` maps to `./src/*`
- **Image Optimization** - Next.js Image component with WebP format

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
```

### Production
```bash
npm run build        # Build for production
npm start           # Start production server
```

### Code Quality
```bash
npm run lint        # Run ESLint checks
```

### Package Management
- Uses **npm** as primary package manager
- Lock file: `package-lock.json`

## Image Handling
- Images stored in `public/img/` directory
- Next.js Image component with optimization enabled
- WebP format conversion for better performance
- Custom device sizes: [640, 1200, 1920]
- Custom image sizes: [50, 150, 500]