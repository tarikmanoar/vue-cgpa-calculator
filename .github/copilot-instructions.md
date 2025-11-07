# FCUB CGPA Calculator - AI Coding Agent Instructions

## Project Overview
A Progressive Web App (PWA) for calculating semester GPAs and cumulative CGPA for the FCUB CSE Program. Built with Vue 3 Composition API, TypeScript, Tailwind CSS v4, and offline-first architecture using IndexedDB and Workbox.

## Architecture & Data Flow

### State Management Pattern
- **Pinia store** (`src/stores/cgpa.ts`) is the single source of truth for all application data
- All data persists to **IndexedDB** (not localStorage) via the `idb` library
- Two primary data types: `courseGrades` (course code → grade mappings) and `semesterGPAs` (semester → GPA mappings)
- Offline-first: All mutations to store trigger IndexedDB writes with error handling that sets `pendingSync` flag

### Critical Data Structures
```typescript
// Hard-coded FCUB CSE curriculum data in cgpa.ts
courseData: { [semester: 1-8]: Course[] }
semesterCredits: { '1': 20.50, '2': 23.50, ... }
GRADES: [{ letter: 'A+', point: 4.00 }, ...]
```
These are **not** user-editable—they represent fixed FCUB CSE program requirements.

### Component Communication
- Views consume Pinia store directly—no props drilling
- `MainLayout.vue` wraps all views and handles global concerns (navigation, theme, offline indicator)
- Route-based views: `SemesterGPA.vue` (per-semester calculator), `OverallCGPA.vue` (multi-semester CGPA)

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
Database: `fcub-cgpa-calculator` (v1)
- Object store: `courseGrades` (keyPath: `id`, stores `{ id: courseCode, grade: string }`)
- Object store: `semesterGPAs` (keyPath: `semester`, stores `{ semester: number, gpa: number }`)

### Service Worker Caching
- Precache: All build assets via `self.__WB_MANIFEST`
- Runtime cache: Google Fonts (StaleWhileRevalidate), images (CacheFirst with 30-day expiration)
- Background sync: `sync` event with tag `'sync-pending-data'` triggers `syncPendingData()`

### Router Behavior
- Lazy-loaded route components: `() => import('@/views/...')`
- Meta field `title` updates `document.title` in `beforeEach` guard
- 404 handling via catch-all route: `/:pathMatch(.*)*`

## Common Pitfalls

1. **Don't use localStorage**—all persistence is IndexedDB for PWA best practices
2. **Don't modify `courseData` or `semesterCredits` at runtime**—these are static curriculum definitions
3. **Build before testing PWA**—service worker doesn't register in dev mode
4. **Tailwind v4 differences**: Uses `@tailwindcss/vite` plugin, no `tailwind.config.js` imports in PostCSS
5. **Dark mode**: Theme is controlled by Pinia store + localStorage, not Tailwind's built-in dark mode toggle

## File Structure Patterns

```
src/
  stores/          # Pinia stores (domain logic, IndexedDB integration)
  views/           # Route-level components (lazy-loaded)
  components/
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
- Grade points defined in `GRADES` constant—modify there for grading scale changes
