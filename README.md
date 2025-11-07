# FCUB CGPA Calculator

A Progressive Web Application (PWA) for calculating semester GPAs and overall CGPA for the FCUB CSE Program.

## Features

- **Semester GPA Calculator**: Calculate GPA for individual semesters with course-level grade input
- **Overall CGPA Calculator**: Calculate cumulative GPA across multiple semesters
- **Bangladesh Grading System**: Automatic classification (First Class with Distinction, First Class, Second Class, Third Class, Pass)
- **Required GPA Calculator**: Find out what GPA you need in remaining semesters to achieve your target CGPA
- **Performance Analytics**: 
  - Grade distribution statistics
  - Semester performance trends
  - Highest, lowest, and average GPA tracking
  - Performance trend analysis (improving, declining, stable)
- **Data Management**: 
  - Export your data as JSON for backup
  - Import data to restore or transfer between devices
  - Clear all data with confirmation
- **Developer Profile**: Information about the developer
- **PWA Support**: Works offline and can be installed on devices
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: WCAG 2.1 AA compliant
- **Dark/Light Theme**: Support for system preferences and manual toggle

## Technologies Used

- **Vue.js 3**: Frontend framework with Composition API
- **TypeScript**: Type-safe JavaScript
- **Vite**: Modern build tool for faster development
- **Tailwind CSS**: Utility-first CSS framework
- **Pinia**: State management
- **Vue Router**: Navigation and routing
- **IndexedDB**: Client-side storage for offline data persistence
- **Workbox**: PWA service worker tooling

## Performance Optimizations

- Code splitting for each route
- Image optimization with WebP format
- Lazy loading for non-critical resources
- Service worker for offline functionality
- Optimized assets and resources
- First Contentful Paint (FCP) under 1.5s

## PWA Features

- Full offline support
- Installable on desktop and mobile devices
- Background sync for pending calculations
- Offline data persistence using IndexedDB
- Push notifications (where supported)

## Accessibility

- WCAG 2.1 AA compliant
- Proper ARIA attributes
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1
- Skip links for main content
- Responsive to user preferences (reduced motion, etc.)

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fcub-cgpa-calculator.git

# Navigate to the project directory
cd fcub-cgpa-calculator

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

### Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

## Lighthouse Metrics

- **Performance**: ≥95
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95
- **PWA**: All checks passed

## License

MIT

## Credits

Developed by John Doe
