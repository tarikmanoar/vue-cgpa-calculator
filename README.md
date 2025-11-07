# FCUB CGPA Calculator

A Progressive Web Application (PWA) for calculating semester GPAs and overall CGPA for FCUB students across **8 departments**.

## Features

### Multi-Department Support 🎓
- **8 Departments**: CSE, EEE, Public Health, Law, Business Administration, English, Sociology, Agriculture
- **Dynamic Curriculum**: Each department has its own courses, credits, and semester structure
- **Easy Switching**: Change department anytime from Settings
- **First-Run Onboarding**: Select your department when you first open the app

### GPA Calculation
- **Semester GPA Calculator**: Calculate GPA for individual semesters with course-level grade input
- **Overall CGPA Calculator**: Calculate cumulative GPA across multiple semesters
- **Bangladesh Grading System**: Automatic classification (First Class with Distinction, First Class, Second Class, Third Class, Pass)
- **Required GPA Calculator**: Find out what GPA you need in remaining semesters to achieve your target CGPA

### Performance Analytics 📊
- **Grade Distribution**: Visual breakdown of your grades (A+, A, A-, B+, etc.)
- **Semester Trends**: Track your performance across semesters
- **Statistics**: Highest, lowest, and average GPA with trend analysis (improving, declining, stable)

### Data Management 💾
- **Export Data**: Backup your data as JSON file
- **Import Data**: Restore data or transfer between devices
- **Clear Data**: Remove all data with two-step confirmation
- **Privacy First**: All data stored locally on your device

### Modern Features ✨
- **PWA Support**: Works offline and can be installed on devices
- **Responsive Design**: Works on all screen sizes (mobile, tablet, desktop)
- **Accessibility**: WCAG 2.1 AA compliant
- **Dark/Light Theme**: Support for system preferences and manual toggle
- **Offline-First**: Full functionality without internet connection

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
