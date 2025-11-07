Chapter 3

SYSTEM DESIGN AND METHODOLOGY

3.1 System Design and Methodology

The FCUB CGPA Calculator was designed using a modular, component-based architecture following modern software engineering principles. The system prioritizes user experience, data integrity, performance, and offline reliability. This chapter details the architectural design, workflow, technologies, and implementation methodology used in developing the application.

3.2 System Architecture and Workflow

3.2.1 System Architecture

The application follows a three-tier architecture adapted for client-side Progressive Web Applications:

**Presentation Layer (View)**:
- Vue.js components for user interface
- Responsive layouts using Tailwind CSS v4
- Route-based navigation with Vue Router
- Component structure:
  - `MainLayout.vue`: Application shell with navigation
  - `SemesterGPA.vue`: Semester-wise GPA calculator interface
  - `OverallCGPA.vue`: Multi-semester CGPA tracking
  - `Statistics.vue`: Analytics and performance insights
  - `Settings.vue`: Department selection and preferences
  - `DataManagement.vue`: Export/import functionality
  - `DepartmentOnboarding.vue`: First-run department selection

**Business Logic Layer (State Management)**:
- Pinia store (`cgpa.ts`) serves as the single source of truth
- Computed properties for reactive calculations:
  - `calculateSemesterGPA`: Weighted average for selected semester
  - `calculateCGPA`: Cumulative GPA across all semesters
  - `calculateRequiredGPA`: Determines needed GPA for target CGPA
  - `getClassification`: Bangladesh grading system classification
  - `getGradeDistribution`: Statistical analysis of grade patterns
  - `getSemesterTrend`: Performance trends across semesters
- Department management system:
  - Eight department data modules (CSE, EEE, Public Health, Law, Business, English, Sociology, Agriculture)
  - Dynamic curriculum loading based on selected department
  - Department switching with data persistence

**Data Persistence Layer**:
- IndexedDB (v2) for local storage
- Database: `fcub-cgpa-calculator`
- Object stores:
  - `courseGrades`: Stores course code → grade mappings
  - `semesterGPAs`: Stores semester → GPA mappings
  - `settings`: Stores user preferences and department selection
- Asynchronous operations using the `idb` library
- Error handling with `pendingSync` flag for failed operations

**Service Worker Layer**:
- Workbox-powered service worker (`sw.ts`)
- Precaching of application assets (HTML, CSS, JavaScript, icons)
- Runtime caching strategies:
  - CacheFirst for images and static assets
  - StaleWhileRevalidate for CSS and JavaScript
- Background sync for offline data changes
- Push notification infrastructure (ready for future features)

**PWA Infrastructure**:
- Web App Manifest with 8 icon sizes (48px to 512px)
- 4 app shortcuts for quick navigation
- 4 screenshots (2 wide for desktop, 2 narrow for mobile)
- Theme colors and display preferences

```
[Figure 3.1: System Architecture Diagram - To be inserted]

┌─────────────────────────────────────────────────────────┐
│                    User Interface Layer                 │
│  ┌────────────┐ ┌────────────┐ ┌──────────────────┐   │
│  │ Semester   │ │  Overall   │ │   Statistics     │   │
│  │ GPA View   │ │ CGPA View  │ │   & Analytics    │   │
│  └────────────┘ └────────────┘ └──────────────────┘   │
│  ┌────────────┐ ┌────────────┐ ┌──────────────────┐   │
│  │  Settings  │ │    Data    │ │    Developer     │   │
│  │   & Dept   │ │ Management │ │      Info        │   │
│  └────────────┘ └────────────┘ └──────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────┐
│              State Management (Pinia Store)             │
│  ┌──────────────────────────────────────────────────┐  │
│  │  • courseGrades (Map<course, grade>)            │  │
│  │  • semesterGPAs (Map<semester, gpa>)            │  │
│  │  • activeDepartmentId                           │  │
│  │  • Computed: calculateGPA, calculateCGPA        │  │
│  │  • Methods: saveGrade, exportData, importData   │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────┐
│         Data Persistence (IndexedDB v2)                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │ courseGrades │ │ semesterGPAs │ │   settings   │   │
│  │ object store │ │ object store │ │ object store │   │
│  └──────────────┘ └──────────────┘ └──────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────┐
│           Service Worker (Offline Support)              │
│  • Precache app shell (HTML, CSS, JS)                  │
│  • Runtime cache (images, fonts, data)                 │
│  • Background sync for offline changes                 │
│  • Push notification support                           │
└─────────────────────────────────────────────────────────┘
```

3.2.2 System Workflow

The application workflow follows a logical sequence from initial setup through daily usage:

**Initial Setup Flow**:
1. User visits the application URL or launches installed PWA
2. Service worker registers and begins precaching assets
3. Application checks IndexedDB for existing data
4. If first visit (`isFirstRun = true`):
   - Display `DepartmentOnboarding` modal
   - User selects their department from 8 options
   - Selection saved to IndexedDB `settings` store
   - Department-specific curriculum loaded
5. Main application interface loads with selected department data

**Semester GPA Calculation Flow**:
1. User navigates to Semester GPA view
2. Selects semester from dropdown (1-12 based on department)
3. System loads courses for selected semester from department data
4. User inputs letter grade for each course
5. On each grade input:
   - Grade saved to IndexedDB `courseGrades` store
   - `calculateSemesterGPA` computed property updates
   - GPA displayed in real-time with color-coded classification
6. User can view grade distribution and statistics

**Overall CGPA Calculation Flow**:
1. User navigates to Overall CGPA view
2. System displays input fields for each semester (based on total semesters in department)
3. User can:
   - Manually input GPA for each semester
   - Or system auto-populates if semester GPAs were calculated in Semester GPA view
4. On each input:
   - Semester GPA saved to IndexedDB `semesterGPAs` store
   - `calculateCGPA` computed property recalculates overall CGPA
   - Classification displayed (First Class with Distinction, First Class, etc.)
5. Progress visualization shows completion percentage

**Statistics and Analytics Flow**:
1. User navigates to Statistics view
2. System analyzes stored grade and GPA data
3. Displays:
   - Required GPA calculator (user inputs target CGPA)
   - Grade distribution pie chart or bar graph
   - Semester trend line graph
   - Highest/lowest GPA identification
   - Completion progress tracking
   - Performance statistics (average GPA, total credits completed)

**Data Management Flow**:
1. User navigates to Data Management view
2. Available actions:
   - **Export**: System serializes all data from IndexedDB to JSON, user downloads file
   - **Import**: User uploads previously exported JSON file, system validates and imports
   - **Clear**: User confirms, system removes all data from IndexedDB (with warning)
3. All operations include success/error feedback

**Department Switching Flow**:
1. User navigates to Settings view
2. Selects different department from dropdown
3. System:
   - Updates `activeDepartmentId` in store
   - Saves selection to IndexedDB `settings` store
   - Reloads department-specific curriculum data
   - Updates all views with new department courses and structure
4. User's previously entered grades remain intact (for data portability)

```
[Figure 3.2: Application Workflow - To be inserted]
```

3.3 Tools and Technologies Used

The FCUB CGPA Calculator leverages modern web technologies chosen for their performance, developer experience, and robust feature sets:

**Table 3.1: Technologies and Libraries Used**

| Tool / Library | Version | Purpose / Use |
|----------------|---------|---------------|
| **Vue.js** | 3.5.13 | Progressive JavaScript framework for building reactive user interfaces |
| **TypeScript** | 5.6.3 | Typed superset of JavaScript for type-safe code |
| **Vite** | 6.2.6 | Next-generation frontend build tool with fast HMR |
| **Tailwind CSS** | 4.0.0 | Utility-first CSS framework for rapid UI development |
| **Pinia** | 2.3.0 | State management library for Vue.js |
| **Vue Router** | 4.5.0 | Official routing library for Vue.js |
| **IndexedDB (idb)** | 8.0.1 | Promise-based wrapper for IndexedDB API |
| **Vite PWA Plugin** | 1.0.0 | Zero-config PWA plugin for Vite |
| **Workbox** | 7.0.0 | Service worker libraries for precaching and routing |
| **Shadcn Vue** | Latest | Beautifully designed UI components built with Radix Vue |
| **Lucide Vue** | Latest | Icon library with 1000+ consistent icons |
| **Class Variance Authority** | Latest | CSS class composition for component variants |
| **Radix Vue** | Latest | Unstyled, accessible UI component primitives |

**Development Tools**:
- **Visual Studio Code**: Primary code editor
- **Vitest**: Unit testing framework
- **Happy-DOM**: Lightweight DOM implementation for testing
- **ESLint**: Code quality and style enforcement
- **Prettier**: Code formatting
- **TypeScript Compiler**: Type checking and compilation

**Build and Deployment**:
- **GitHub Actions**: CI/CD pipeline for automated deployment
- **GitHub Pages**: Hosting platform for production deployment
- **npm**: Package manager

**Key Technology Decisions**:

1. **Vue.js 3 Composition API**: Selected for its reactive data binding, component reusability, and excellent TypeScript support. The Composition API provides better code organization and logic reuse compared to Options API.

2. **TypeScript**: Chosen to catch errors at compile-time, improve code maintainability, and provide better developer experience with intelligent code completion.

3. **Tailwind CSS v4**: Selected for rapid UI development with utility classes, excellent responsive design support, and built-in dark mode. Version 4 uses the new `@tailwindcss/vite` plugin for improved build performance.

4. **Vite**: Chosen over traditional bundlers (Webpack) for its lightning-fast Hot Module Replacement (HMR), optimized build output, and excellent developer experience.

5. **IndexedDB over localStorage**: Selected for its ability to store larger amounts of structured data, support for complex queries, and asynchronous API that doesn't block the main thread.

6. **Pinia over Vuex**: Chosen as the official state management solution for Vue 3, offering better TypeScript support, simpler API, and improved devtools integration.

7. **Workbox**: Selected for sophisticated caching strategies, precaching support, and robust offline functionality management.

3.4 Database Design and Data Persistence

The application uses IndexedDB version 2 with three object stores:

**Database Name**: `fcub-cgpa-calculator`

**Object Store 1: courseGrades**
- **Purpose**: Store individual course grades
- **Key Path**: `id` (course code, e.g., "CSE101")
- **Structure**:
```typescript
{
  id: string,        // Course code (e.g., "CSE326")
  grade: string,     // Letter grade (e.g., "A+")
  semester?: number  // Optional semester reference
}
```

**Object Store 2: semesterGPAs**
- **Purpose**: Store calculated GPA for each semester
- **Key Path**: `semester` (semester number)
- **Structure**:
```typescript
{
  semester: number,  // Semester number (1-12)
  gpa: number        // Calculated GPA (0.00-4.00)
}
```

**Object Store 3: settings**
- **Purpose**: Store user preferences and application settings
- **Key Path**: `key`
- **Structure**:
```typescript
{
  key: string,       // Setting name (e.g., "activeDepartment", "isFirstRun")
  value: any         // Setting value (varies by key)
}
```

**Migration Strategy**:
When upgrading from v1 to v2 (adding settings store), the application:
1. Checks database version
2. Creates new object stores if needed
3. Migrates existing data without loss
4. Updates version number

```
[Figure 3.3: IndexedDB Schema - To be inserted]

Database: fcub-cgpa-calculator (v2)
├── courseGrades
│   ├── id: "CSE101" → { grade: "A+" }
│   ├── id: "CSE102" → { grade: "A" }
│   └── ...
├── semesterGPAs
│   ├── semester: 1 → { gpa: 3.75 }
│   ├── semester: 2 → { gpa: 3.85 }
│   └── ...
└── settings
    ├── key: "activeDepartment" → { value: "cse" }
    ├── key: "isFirstRun" → { value: false }
    └── key: "darkMode" → { value: true }
```

3.5 User Interface Design

The user interface follows modern design principles emphasizing clarity, accessibility, and responsiveness:

**Design Principles**:
1. **Simplicity**: Clean, uncluttered interfaces focusing on essential functionality
2. **Consistency**: Uniform component styling and interaction patterns throughout
3. **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML, ARIA labels, and keyboard navigation
4. **Responsiveness**: Fluid layouts adapting seamlessly from mobile (320px) to desktop (1920px+)
5. **Feedback**: Immediate visual feedback for all user actions
6. **Performance**: Optimized rendering with lazy loading and code splitting

**Color Scheme**:
- **Primary**: Blue (#3b82f6) - Trust, education, professionalism
- **Success**: Green - First Class, positive outcomes
- **Warning**: Yellow/Orange - Second/Third Class, caution
- **Error**: Red - Fail, critical actions
- **Dark Mode**: Full support with automatic system preference detection

**Table 3.2: Bangladesh Grading Scale (UI Color Coding)**

| Grade | Points | Percentage | Color | Classification |
|-------|--------|------------|-------|----------------|
| A+ | 4.00 | 80-100% | Dark Green | Excellent |
| A | 3.75 | 75-79% | Green | Very Good |
| A- | 3.50 | 70-74% | Light Green | Good |
| B+ | 3.25 | 65-69% | Yellow-Green | Above Average |
| B | 3.00 | 60-64% | Yellow | Average |
| B- | 2.75 | 55-59% | Orange | Below Average |
| C+ | 2.50 | 50-54% | Light Orange | Pass |
| C | 2.25 | 45-49% | Light Red | Pass |
| D | 2.00 | 40-44% | Red | Pass |
| F | 0.00 | <40% | Dark Red | Fail |

**Table 3.3: Department Information**

| Department | ID | Short Name | Total Semesters | Total Credits |
|------------|-----|------------|-----------------|---------------|
| Computer Science & Engineering | cse | CSE | 12 | 150 |
| Electrical & Electronic Engineering | eee | EEE | 12 | 150 |
| Public Health | public_health | PH | 8 | 120 |
| Law | law | LAW | 8 | 120 |
| Business Administration | business | BBA | 12 | 144 |
| English | english | ENG | 8 | 120 |
| Sociology | sociology | SOC | 8 | 120 |
| Agriculture | agriculture | AGR | 12 | 150 |

**Typography**:
- System font stack for optimal performance and native feel
- Clear hierarchy with varied font sizes (text-sm to text-4xl)
- Adequate line spacing for readability

**Interaction Patterns**:
- Dropdown selects for semester and department selection
- Radio buttons for grade input (clear visual selection)
- Buttons with loading states and disabled states
- Modal dialogs for important actions (first-run onboarding, data clearing confirmation)
- Toast notifications for feedback (success, error, info)

---
