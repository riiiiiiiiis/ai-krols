# Design Document

## Overview

This design outlines the migration of an existing HTML/CSS/JavaScript NFT grid application to Next.js 14+ with App Router. The primary goal is to leverage Next.js Image optimization to improve performance while preserving the artistic small grid design and all existing functionality. The application will display 1000+ NFT images in a responsive grid with batch loading, infinite scroll, and modal viewing capabilities.

## Architecture

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules (maintaining existing styles)
- **Image Optimization**: Next.js Image component with custom sizing
- **State Management**: React hooks (useState, useEffect, useCallback)
- **Performance**: Virtual scrolling considerations and batch loading

### Project Structure
```
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── ImageGrid/
│   │   ├── ImageGrid.js
│   │   ├── ImageGrid.module.css
│   │   └── GridItem.js
│   ├── ImageModal/
│   │   ├── ImageModal.js
│   │   └── ImageModal.module.css
├── hooks/
│   ├── useInfiniteScroll.js
│   └── useImageBatch.js
├── utils/
│   └── constants.js
└── public/
    └── img/
        ├── 1.png
        ├── 2.png
        └── ... (1000+ images)
```

## Components and Interfaces

### Core Data Structures
```javascript
// NFTImage object structure
const nftImage = {
  id: number,
  src: string,
  alt: string,
  psychTerm: string
};

// Component prop structures
const gridItemProps = {
  image: nftImage,
  onClick: function
};

const imageModalProps = {
  image: nftImage || null,
  isOpen: boolean,
  onClose: function
};

const imageGridProps = {
  images: [nftImage],
  onImageClick: function
};
```

### ImageGrid Component
- **Purpose**: Main grid container displaying NFT thumbnails
- **Features**:
  - Responsive CSS Grid layout matching current breakpoints
  - Batch loading of 50 images per batch
  - Infinite scroll implementation
  - Next.js Image components with optimized thumbnails
- **Image Optimization Strategy**:
  - Grid thumbnails: 50x50px optimized images
  - Quality: 75 for thumbnails
  - Format: WebP with fallback
  - Lazy loading enabled
  - Sizes prop: "(max-width: 768px) 10px, (max-width: 1200px) 50px, 50px"

### GridItem Component
- **Purpose**: Individual grid item with image and overlays
- **Features**:
  - Next.js Image with fill prop for responsive sizing
  - Number overlay (top-left)
  - Psychiatric term overlay (bottom-left)
  - Hover transform effect (1.4x scale)
  - Click handler for modal opening

### ImageModal Component
- **Purpose**: Full-screen modal for viewing high-resolution images
- **Features**:
  - Next.js Image with original dimensions
  - Quality: 100 for full-resolution viewing
  - Escape key, outside click, and image click closing
  - Smooth transitions
  - Auto-scroll to top on open

### Custom Hooks

#### useImageBatch Hook
```javascript
const useImageBatch = (batchSize = 50) => {
  // Returns object with:
  // - images: array of loaded images
  // - loadedCount: number of images loaded
  // - isLoading: boolean loading state
  // - loadNextBatch: function to load next batch
  // - hasMore: boolean if more images available
}
```
- Manages batch loading of images
- Handles image existence validation
- Provides loading states
- Generates random psychiatric terms

#### useInfiniteScroll Hook
```javascript
const useInfiniteScroll = (callback, options) => {
  // Options: { threshold, hasMore, isLoading }
  // Monitors scroll and calls callback when needed
}
```
- Monitors scroll position
- Triggers batch loading when near bottom
- Prevents multiple simultaneous loads

## Data Models

### Image Processing Strategy
1. **Static Images**: All images remain in `/public/img/` directory
2. **Thumbnail Generation**: Next.js Image component handles automatic resizing
3. **Format Optimization**: Automatic WebP conversion with fallback

### Psychiatric Terms Data
```javascript
const PSYCH_TERMS = [
  'anxiety', 'depression', 'bipolar', 'schizo', 'trauma', 'ocd', 'adhd',
  'ptsd', 'panic', 'phobia', 'insomnia', 'mania', 'psychosis', 'disorder',
  'stress', 'compulsion', 'dissociation', 'paranoia', 'neurosis', 'dementia'
];
```

### Image Configuration
```javascript
// next.config.js
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/png'],
    deviceSizes: [640, 1200, 1920],
    imageSizes: [50, 150, 500],
    dangerouslyAllowSVG: false,
    unoptimized: false
  }
};
```

## Error Handling

### Image Loading Errors
- **Strategy**: Graceful degradation with error boundaries
- **Implementation**: 
  - Try-catch blocks in image loading logic
  - Fallback placeholder for failed images
  - Error logging for debugging
  - Continue loading remaining images in batch

### Network Errors
- **Strategy**: Retry mechanism for failed batches
- **Implementation**:
  - Exponential backoff for retries
  - User feedback for persistent failures
  - Offline detection and handling

### Modal State Management
- **Strategy**: Robust state management for modal operations
- **Implementation**:
  - Proper cleanup on component unmount
  - Keyboard event listener management
  - Body scroll lock during modal display



## Performance Optimizations

### Image Optimization
1. **Thumbnail Strategy**: 50x50px thumbnails for grid display
2. **Format Selection**: Automatic WebP with PNG fallback
3. **Lazy Loading**: Native browser lazy loading for off-screen images

### Memory Management
1. **Virtual Scrolling**: Consider implementation if memory issues arise
2. **Image Cleanup**: Proper cleanup of off-screen images
3. **Batch Size Optimization**: 50 images per batch for optimal performance

### Bundle Optimization
1. **Code Splitting**: Automatic with Next.js App Router
2. **Tree Shaking**: Remove unused code

## Responsive Design

### Breakpoint Strategy
- **Mobile (< 768px)**: Maintain current tiny grid design
- **Tablet (768px - 1200px)**: Larger grid items (150px minmax)
- **Desktop (> 1200px)**: Optimal grid size (50px minmax)

### CSS Grid Configuration
```css
.grid-view {
  display: grid;
  grid-gap: 2px;
  padding: 10px;
}

/* Mobile */
.grid-view {
  grid-template-columns: repeat(auto-fill, minmax(10px, 1fr));
}

/* Tablet */
@media (min-width: 768px) {
  .grid-view {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 4px;
    padding: 4px;
  }
}

/* Desktop */
@media (min-width: 1200px) {
  .grid-view {
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  }
}
```

## Migration Strategy

### Phase 1: Project Setup
1. Initialize Next.js 14 project with JavaScript
2. Configure next.config.js for image optimization
3. Set up project structure and basic components

### Phase 2: Core Components
1. Implement ImageGrid component with Next.js Image
2. Create GridItem component with overlays
3. Build ImageModal component with full-resolution display

### Phase 3: Functionality Migration
1. Implement batch loading with custom hooks
2. Add infinite scroll functionality
3. Integrate modal state management

### Phase 4: Styling and Polish
1. Migrate CSS to CSS Modules
2. Ensure responsive design matches original
3. Add hover effects and transitions

### Phase 5: Final Polish
1. Performance optimization
2. Final styling adjustments
3. Production build verification

This design maintains the artistic vision of the small grid while leveraging Next.js's powerful image optimization capabilities to significantly improve performance and user experience.