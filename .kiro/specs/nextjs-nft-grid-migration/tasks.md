# Implementation Plan

- [x] 1. Initialize Next.js project and basic setup
  - Create new Next.js 14 project with JavaScript
  - Configure next.config.js for image optimization with simplified settings
  - Set up project structure with src/ directory and component folders
  - Move existing images to public/img/ directory
  - _Requirements: 4.1, 4.3_

- [x] 2. Create core utility functions and constants
  - Implement psychiatric terms array in utils/constants.js
  - Create helper function for generating random psychiatric terms
  - Add image path construction utilities
  - _Requirements: 3.1, 3.2_

- [x] 3. Create image data generation utility
  - Create function to generate array of all 1000+ images
  - Add image existence validation logic
  - Generate random psychiatric terms for each image
  - _Requirements: 3.1, 3.2, 6.5_

- [x] 4. Create GridItem component
  - Build individual grid item component with Next.js Image
  - Add number overlay positioning (top-left corner)
  - Add psychiatric term overlay positioning (bottom-left corner)
  - Implement hover transform effect (1.4x scale)
  - Add click handler for modal opening
  - _Requirements: 3.1, 3.2, 3.5_

- [x] 5. Create ImageGrid component
  - Build main grid container component
  - Integrate Next.js Image components with optimized sizing
  - Implement responsive CSS Grid layout matching original breakpoints
  - Display all images at once using native browser lazy loading
  - _Requirements: 1.1, 1.2, 1.3, 5.1, 5.2, 5.3, 5.4_

- [x] 6. Create ImageModal component
  - Build full-screen modal overlay component
  - Implement Next.js Image with original dimensions and quality 100
  - Add escape key closing functionality
  - Add outside click closing functionality
  - Add image click closing functionality
  - Implement auto-scroll to top on modal open
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 7. Implement CSS styling with modules
- [x] 7.1 Create ImageGrid CSS module
  - Migrate existing grid styles to CSS modules
  - Implement responsive breakpoints (mobile: 10px, tablet: 150px, desktop: 50px)
  - Add grid gap and padding styles matching original design
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 7.2 Create GridItem CSS module
  - Style individual grid items with 1:1 aspect ratio
  - Position number and psychiatric term overlays
  - Implement hover transform effect
  - Style overlay text with proper font sizes and colors
  - _Requirements: 3.1, 3.2, 3.4, 3.5, 5.5_

- [x] 7.3 Create ImageModal CSS module
  - Style full-screen modal overlay with black background
  - Center image container with max dimensions
  - Add smooth transitions for modal open/close
  - _Requirements: 2.2, 2.5_

- [x] 8. Create main page component
  - Build main page component integrating ImageGrid and ImageModal
  - Generate complete image data array on component mount
  - Implement modal state management (open/close)
  - Add image click handler to open modal with selected image
  - Handle modal closing and state reset
  - _Requirements: 1.1, 2.1, 2.3_

- [x] 9. Configure Next.js layout and globals
  - Set up app/layout.js with proper metadata
  - Configure global CSS styles
  - Ensure proper font family (Courier New) is applied
  - _Requirements: 4.2, 5.1_

- [x] 10. Implement error handling and edge cases
  - Add graceful handling for missing images
  - Implement error boundaries for component failures
  - Add fallback states for loading errors
  - _Requirements: 1.5, 6.5_

- [x] 11. Final integration and optimization
  - Test complete user flow from grid to modal
  - Verify responsive design across all breakpoints
  - Ensure image optimization is working correctly
  - Optimize bundle size and remove unused code
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 4.5, 5.1, 5.2, 5.3, 5.4, 5.5_