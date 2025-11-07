# FCUB CGPA Calculator - AI Coding Agent Instructions

## Project Overview
A Progressive Web App (PWA) for calculating semester GPAs and cumulative CGPA for FCUB students in Bangladesh across **8 departments**. Built with Vue 3 Composition API, TypeScript, Tailwind CSS v4, and offline-first architecture using IndexedDB and Workbox.

### Key Features for Bangladesh Students
- **Multi-Department Support**: 8 departments (CSE, EEE, Public Health, Law, Business, English, Sociology, Agriculture)
- **Department Switching**: Users can select and switch departments with curriculum auto-update
- **Bangladesh Grading System**: Automatic classification (First Class with Distinction, First Class, Second Class, Third Class, Pass)
- **Required GPA Calculator**: Calculate what GPA is needed in remaining semesters to achieve target CGPA
- **Performance Analytics**: Grade distribution, semester trends, and performance statistics
- **Data Portability**: Export/import data for backup and device transfer
- **Offline-First**: Full functionality without internet connection

## Architecture & Data Flow

### State Management Pattern
- **Pinia store** (`src/stores/cgpa.ts`) is the single source of truth for all application data
- All data persists to **IndexedDB** (not localStorage) via the `idb` library
- Two primary data types: `courseGrades` (course code → grade mappings) and `semesterGPAs` (semester → GPA mappings)
- Offline-first: All mutations to store trigger IndexedDB writes with error handling that sets `pendingSync` flag

### Department System (New!)
```typescript
// Department data in src/data/departments/
activeDepartmentId: ref<DepartmentId>('cse') // Current selected department
activeDepartment: computed(() => departments[activeDepartmentId.value])
courseData: computed(() => activeDepartment.value.courseData) // Dynamic per department
semesterCredits: computed(() => activeDepartment.value.semesterCredits)
totalCredits: computed(() => activeDepartment.value.totalCredits)
```

**Department Structure**:
- Each department has separate file in `src/data/departments/`
- Contains: id, name, shortName, totalCredits, totalSemesters, courseData, semesterCredits
- 8 departments supported: CSE (full data), others (sample data for semesters 1-2)
- Department selection stored in IndexedDB `settings` object store

### Critical Data Structures
```typescript
// Department-specific curriculum (now dynamic!)
courseData: computed(() => activeDepartment.value.courseData)
semesterCredits: computed(() => activeDepartment.value.semesterCredits)
GRADES: [{ letter: 'A+', point: 4.00 }, ...] // Same across all departments
```
These are **static TypeScript files** loaded at build time—not user-editable at runtime.

### Bangladesh Grading Classifications
```typescript
getClassification(cgpa: number) => {
  class: 'First Class' | 'Second Class' | 'Third Class' | 'Pass',
  honor: 'with Distinction' | '',
  color: 'green' | 'blue' | 'yellow' | 'orange' | 'gray'
}
```
- First Class with Distinction: ≥ 3.50
- First Class: 3.00 - 3.49
- Second Class: 2.50 - 2.99
- Third Class: 2.00 - 2.49

### Component Communication
- Views consume Pinia store directly—no props drilling
- `MainLayout.vue` wraps all views and handles global concerns (navigation, theme, offline indicator, onboarding)
- `DepartmentOnboarding.vue` shows on first run for department selection
- Route-based views: 
  - `SemesterGPA.vue`: Per-semester calculator with course-level grading
  - `OverallCGPA.vue`: Multi-semester CGPA with semester GPA inputs
  - `Statistics.vue`: Required GPA calculator, classification info, performance stats
  - `DataManagement.vue`: Export, import, and clear data functionality
  - `Settings.vue`: Department selection and theme preferences
  - `Developer.vue`: Developer profile and contact form

## Development Workflow

### Key Commands
```bash
npm run dev              # Vite dev server with HMR
npm run build            # TypeScript check + production build
npm run preview          # Preview production build on :5000
npm run test             # Vitest unit tests
npm run test:coverage    # Coverage with text/json/html reports
npm run typecheck        # vue-tsc without emit
```

### PWA Development
- Service worker source: `src/sw.ts` (injectManifest strategy)
- Use `npm run build && npm run preview` to test PWA features—dev mode doesn't register service worker
- Manifest auto-generated via `vite-plugin-pwa` config in `vite.config.ts`

### Testing Strategy
- Unit tests with Vitest + happy-dom environment
- Accessibility tests using `@axe-core/playwright` (see `test:a11y` script)
- Store logic is testable in isolation—mock IndexedDB via `idb` mocks

## Project-Specific Conventions

### Component Patterns
1. **Composition API only**—no Options API. Use `<script setup lang="ts">` in all `.vue` files
2. **Computed over methods** for derived state (e.g., `calculateSemesterGPA`, `displayGPA`)
3. **Watch for side effects**—see `SemesterGPA.vue` simulated loading pattern when semester changes

### Styling Approach
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin (different from v3 setup)
- Inline utility classes in templates—no separate CSS modules
- Dark mode via class strategy: `darkMode.value` toggles `dark` class on `<html>`
- Accessibility: All interactive elements have ARIA labels and focus-visible styles

### Accessibility Requirements
- WCAG 2.1 AA compliant (target: Lighthouse A11y score ≥95)
- Skip link to `#main-content` in `MainLayout.vue`
- Proper semantic HTML: use `<nav>`, `<main>`, `<header>`, `<footer>`
- Form controls must have associated `<label>` or `aria-label`

### TypeScript Usage
- Strict mode enabled in `tsconfig.app.json`
- Interface definitions inline in store (see `Course`, `SemesterGPAs` in `cgpa.ts`)
- Path alias `@/` maps to `./src` (Vite + TypeScript config)

## Integration Points

### IndexedDB Schema
Database: `fcub-cgpa-calculator` (v2)
- Object store: `courseGrades` (keyPath: `id`, stores `{ id: courseCode, grade: string }`)
- Object store: `semesterGPAs` (keyPath: `semester`, stores `{ semester: number, gpa: number }`)
- Object store: `settings` (keyPath: `key`, stores `{ key: 'activeDepartment'|'isFirstRun', value: any }`) **(New in v2)**

### Service Worker Caching
- Precache: All build assets via `self.__WB_MANIFEST`
- Runtime cache: Google Fonts (StaleWhileRevalidate), images (CacheFirst with 30-day expiration)
- Background sync: `sync` event with tag `'sync-pending-data'` triggers `syncPendingData()`

### Router Behavior
- Lazy-loaded route components: `() => import('@/views/...')`
- Meta field `title` updates `document.title` in `beforeEach` guard
- 404 handling via catch-all route: `/:pathMatch(.*)*`

## Common Pitfalls

1. **Don't use localStorage**—all persistence is IndexedDB for PWA best practices (except darkMode preference)
2. **Don't modify `courseData` or `semesterCredits` at runtime**—these are static curriculum definitions
3. **Build before testing PWA**—service worker doesn't register in dev mode
4. **Tailwind v4 differences**: Uses `@tailwindcss/vite` plugin, no `tailwind.config.js` imports in PostCSS
5. **Dark mode**: Theme is controlled by Pinia store + localStorage, not Tailwind's built-in dark mode toggle
6. **Bangladesh grading**: Use `getClassification()` helper, not custom logic for class determination
7. **Department data**: Use computed properties (`courseData.value`, `semesterCredits.value`) not static constants

## File Structure Patterns

```
src/
  data/
    departments/   # Department data files (NEW!)
      types.ts           # TypeScript interfaces
      index.ts           # Export all departments
      cse.ts             # CSE department (complete)
      eee.ts, law.ts, etc.  # Other departments
  stores/          # Pinia stores (domain logic, IndexedDB integration)
  views/           # Route-level components (lazy-loaded)
    SemesterGPA.vue      # Per-semester calculator
    OverallCGPA.vue      # Multi-semester CGPA
    Statistics.vue       # Analytics & required GPA calculator
    DataManagement.vue   # Export/import/clear data
    Settings.vue         # Department & theme settings (NEW!)
    Developer.vue        # Developer profile
  components/
    DepartmentOnboarding.vue  # First-run modal (NEW!)
    layout/        # App-level layout components (MainLayout)
    ui/            # shadcn-vue components (Reka UI + CVA)
  router/          # Vue Router config
  sw.ts            # Service worker (Workbox)
```

## Adding New Features

### Adding a New Route
1. Create component in `src/views/`
2. Add route to `src/router/index.ts` with lazy import and `meta.title`
3. Add navigation link in `MainLayout.vue` (both desktop and mobile menus)

### Adding New UI Components
- Use shadcn-vue CLI: `npx shadcn-vue@latest add <component>`
- Config in `components.json` points to `src/components/ui`
- Icon library: lucide-vue-next (already configured)

### Modifying GPA Calculation
- All logic is in computed properties in `cgpa.ts`
- `calculateSemesterGPA`: weighted average based on selected semester courses
- `calculateCGPA`: weighted average across all semesters with saved GPAs
- `calculateRequiredGPA`: determines needed GPA for remaining semesters to hit target
- Grade points defined in `GRADES` constant—modify there for grading scale changes

### Adding Statistics/Analytics
- Use computed properties in store for reactive statistics
- See `getGradeDistribution`, `getSemesterTrend`, `getGPAStats` as examples
- Store statistics in Pinia for global access across components

## Data Management Features

### Export/Import Pattern
```typescript
// Export: Returns JSON string with version, timestamp, and all data
const data = store.exportData()

// Import: Accepts JSON string, validates, and saves to IndexedDB
const result = await store.importData(jsonString)

// Clear: Removes all data from memory and IndexedDB
const result = await store.clearAllData()
```

### Bangladesh-Specific Features
- **Classification Display**: Use `getClassification(cgpa)` for consistent color-coded class display
- **Required GPA**: `calculateRequiredGPA(targetCGPA)` returns required GPA, achievability, and helpful messages
- **Performance Trends**: `getSemesterTrend` and `getGPAStats` provide analytics for student performance tracking

