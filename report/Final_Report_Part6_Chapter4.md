Chapter 4

IMPLEMENTATION AND RESULTS

4.1 Implementation and Results

This chapter presents the detailed implementation of the FCUB CGPA Calculator, including code structure, key features implementation, user interface screenshots, and performance evaluation results. The implementation followed an agile development approach with iterative refinement based on testing and feedback.

4.2 System Implementation

The system was implemented following the modular architecture described in Chapter 3. Development occurred in phases, with each phase focusing on specific functionality:

**Phase 1: Core Infrastructure (Week 1-2)**
- Project setup with Vite, Vue 3, and TypeScript
- Pinia store configuration for state management
- Vue Router setup with lazy-loaded routes
- IndexedDB integration using `idb` library
- Basic UI layout with Tailwind CSS

**Phase 2: Department Management System (Week 3)**
- Created department data structure and interfaces
- Implemented eight department modules with curriculum data
- Built department selection component
- Added first-run onboarding flow
- Implemented department switching functionality

**Phase 3: GPA Calculation Features (Week 4-5)**
- Semester GPA calculator implementation
- Course grade input interface
- Real-time GPA calculation with computed properties
- Overall CGPA calculator across multiple semesters
- Bangladesh grading system classification

**Phase 4: Analytics and Statistics (Week 6)**
- Required GPA calculator with feasibility checking
- Grade distribution analysis
- Semester trend visualization
- Performance statistics dashboard

**Phase 5: PWA Implementation (Week 7-8)**
- Service worker configuration with Workbox
- Asset precaching strategy
- Runtime caching for optimal performance
- Offline functionality testing
- Web App Manifest configuration
- Icon generation for multiple sizes

**Phase 6: Data Management and Polish (Week 9-10)**
- Export/import functionality
- Data clearing with confirmation
- UI refinement and dark mode
- Accessibility improvements
- Cross-browser testing
- Performance optimization

4.2.1 Department Management System Implementation

The department system serves as the foundation of the application, providing curriculum data for all eight departments:

**Data Structure**:
```typescript
interface Department {
  id: DepartmentId;
  name: string;
  shortName: string;
  totalCredits: number;
  totalSemesters: number;
  courseData: Record<number, Course[]>;
  semesterCredits: Record<number, number>;
}

interface Course {
  code: string;
  name: string;
  credits: number;
}
```

**Key Implementation Details**:
- Each department has a dedicated TypeScript file (e.g., `cse.ts`, `eee.ts`)
- Department data is statically typed for type safety
- Curriculum data includes all courses with codes, names, and credit hours
- CSE department has complete data for all 12 semesters
- Other departments have sample data for semesters 1-2 (expandable)

**Department Selection Flow**:
1. First-run onboarding modal displays on initial visit
2. User selects department from 8 options with descriptions
3. Selection stored in IndexedDB `settings` store
4. `activeDepartmentId` reactive property updates
5. Computed properties dynamically load selected department's curriculum
6. All views update to show department-specific courses

```
[Figure 4.1: Department Selection Interface - To be inserted]
Shows the onboarding modal with 8 department cards, each displaying:
- Department name and short code
- Total semesters and credits
- Select button
```

**Dynamic Curriculum Loading**:
```typescript
// In cgpa.ts store
const activeDepartmentId = ref<DepartmentId>('cse');
const activeDepartment = computed(() => departments[activeDepartmentId.value]);
const courseData = computed(() => activeDepartment.value.courseData);
const semesterCredits = computed(() => activeDepartment.value.semesterCredits);
const totalCredits = computed(() => activeDepartment.value.totalCredits);
```

4.2.2 Semester GPA Calculator Implementation

The Semester GPA calculator provides course-level grade input for accurate GPA calculation:

**User Interface Components**:
- Semester dropdown selector (1 to totalSemesters based on department)
- Course list display with code, name, and credits
- Grade input using radio buttons or dropdown for each course
- Real-time GPA display with color-coded classification
- Grade distribution visualization

**Calculation Logic**:
```typescript
const calculateSemesterGPA = computed(() => {
  const semester = selectedSemester.value;
  const courses = courseData.value[semester] || [];
  
  let totalPoints = 0;
  let totalCredits = 0;
  
  courses.forEach(course => {
    const grade = courseGrades.value.get(course.code);
    if (grade) {
      const gradePoint = GRADES.find(g => g.letter === grade)?.point || 0;
      totalPoints += gradePoint * course.credits;
      totalCredits += course.credits;
    }
  });
  
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
});
```

**Key Features**:
- Auto-save: Each grade input immediately saves to IndexedDB
- Real-time calculation: GPA updates as user inputs grades
- Visual feedback: Color-coded GPA based on classification
- Course filtering: Shows only courses for selected semester
- Grade validation: Only valid letter grades accepted
- Reset functionality: Clear all grades for semester

```
[Figure 4.2: Semester GPA Calculator View - To be inserted]
Shows:
- Semester selector dropdown
- List of courses with grade input radio buttons
- Calculated GPA displayed prominently
- Classification badge (e.g., "First Class with Distinction")
- Grade distribution pie chart
```

**Data Persistence**:
When user inputs a grade:
1. Grade saved to Pinia store's `courseGrades` Map
2. Asynchronously saved to IndexedDB `courseGrades` store
3. Computed GPA automatically recalculates
4. UI updates with new GPA value
5. Error handling with `pendingSync` flag if save fails

4.2.3 Overall CGPA Calculator Implementation

The Overall CGPA calculator aggregates performance across multiple semesters:

**User Interface**:
- Input fields for each semester (1 to totalSemesters)
- Auto-populated fields if semester GPAs exist from Semester GPA view
- Manual input option for quick CGPA calculation
- Total credits display per semester
- Overall CGPA with classification
- Progress indicator showing completion percentage

**Calculation Methods**:

**Method 1: Using Semester GPAs**:
```typescript
const calculateCGPA = computed(() => {
  let totalPoints = 0;
  let totalCredits = 0;
  
  Object.entries(semesterGPAs.value).forEach(([sem, gpa]) => {
    const credits = semesterCredits.value[Number(sem)] || 0;
    totalPoints += gpa * credits;
    totalCredits += credits;
  });
  
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
});
```

**Method 2: Using All Course Grades**:
```typescript
const calculateCGPAFromCourses = computed(() => {
  let totalPoints = 0;
  let totalCredits = 0;
  
  courseGrades.value.forEach((grade, courseCode) => {
    const course = findCourse(courseCode);
    if (course) {
      const gradePoint = GRADES.find(g => g.letter === grade)?.point || 0;
      totalPoints += gradePoint * course.credits;
      totalCredits += course.credits;
    }
  });
  
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
});
```

**Classification Display**:
```typescript
const getClassification = (cgpa: number) => {
  if (cgpa >= 3.50) {
    return {
      class: 'First Class',
      honor: 'with Distinction',
      color: 'green',
      message: 'Outstanding Performance!'
    };
  } else if (cgpa >= 3.00) {
    return {
      class: 'First Class',
      honor: '',
      color: 'blue',
      message: 'Excellent Work!'
    };
  } else if (cgpa >= 2.50) {
    return {
      class: 'Second Class',
      honor: '',
      color: 'yellow',
      message: 'Good Performance'
    };
  } else if (cgpa >= 2.00) {
    return {
      class: 'Third Class',
      honor: '',
      color: 'orange',
      message: 'Satisfactory'
    };
  } else {
    return {
      class: 'Pass',
      honor: '',
      color: 'gray',
      message: 'Needs Improvement'
    };
  }
};
```

```
[Figure 4.3: Overall CGPA Tracking View - To be inserted]
Shows:
- Grid of semester GPA input fields
- Auto-populated values from Semester GPA calculator
- Overall CGPA displayed in large text
- Classification badge with color coding
- Progress bar showing completed semesters
- Total credits earned vs. total required
```

4.2.4 Statistics and Analytics Implementation

The Statistics view provides comprehensive performance insights:

**Required GPA Calculator**:
Calculates what GPA is needed in remaining semesters to achieve a target CGPA:

```typescript
const calculateRequiredGPA = (targetCGPA: number) => {
  const currentTotalPoints = /* sum of all earned points */;
  const currentTotalCredits = /* sum of all earned credits */;
  const remainingCredits = totalCredits.value - currentTotalCredits;
  
  if (remainingCredits <= 0) {
    return { 
      required: 0, 
      achievable: false,
      message: 'All semesters completed' 
    };
  }
  
  const requiredPoints = (targetCGPA * totalCredits.value) - currentTotalPoints;
  const requiredGPA = requiredPoints / remainingCredits;
  
  return {
    required: requiredGPA.toFixed(2),
    achievable: requiredGPA <= 4.00,
    message: requiredGPA > 4.00 
      ? 'Target CGPA is not mathematically achievable'
      : `You need to maintain ${requiredGPA.toFixed(2)} GPA in remaining semesters`
  };
};
```

**Grade Distribution Analysis**:
```typescript
const getGradeDistribution = computed(() => {
  const distribution = {
    'A+': 0, 'A': 0, 'A-': 0, 'B+': 0, 'B': 0,
    'B-': 0, 'C+': 0, 'C': 0, 'D': 0, 'F': 0
  };
  
  courseGrades.value.forEach(grade => {
    if (grade in distribution) {
      distribution[grade]++;
    }
  });
  
  return distribution;
});
```

**Semester Trend Analysis**:
```typescript
const getSemesterTrend = computed(() => {
  return Object.entries(semesterGPAs.value)
    .map(([sem, gpa]) => ({ semester: Number(sem), gpa }))
    .sort((a, b) => a.semester - b.semester);
});
```

**Performance Statistics**:
- Highest GPA semester
- Lowest GPA semester
- Average GPA across all semesters
- Total credits completed
- Completion percentage
- Grade point trend (improving, declining, stable)

```
[Figure 4.4: Statistics and Analytics Dashboard - To be inserted]
Shows:
- Required GPA calculator with input field and results
- Grade distribution pie chart or bar graph
- Semester trend line graph
- Performance statistics cards
- Completion progress ring
```

4.2.5 PWA Features Implementation

**Service Worker Configuration**:
```typescript
// src/sw.ts
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Precache all build assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

// Cache CSS and JS with stale-while-revalidate
registerRoute(
  ({ request }) => 
    request.destination === 'style' || request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Background sync for offline data changes
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-pending-data') {
    event.waitUntil(syncPendingData());
  }
});
```

**Manifest Configuration** (vite.config.ts):
```typescript
VitePWA({
  registerType: 'prompt',
  manifest: {
    name: 'FCUB CGPA Calculator - Multi-Department GPA Calculator',
    short_name: 'FCUB CGPA',
    description: 'Offline-first CGPA calculator for Bangladesh students',
    theme_color: '#3b82f6',
    background_color: '#ffffff',
    display: 'standalone',
    icons: [/* 8 icons: 48, 72, 96, 144, 192, 512px */],
    shortcuts: [/* 4 app shortcuts */],
    screenshots: [/* 2 wide, 2 narrow */]
  }
})
```

**Offline Functionality**:
- All application code precached during installation
- User data stored in IndexedDB (works offline)
- Service worker intercepts network requests
- Cached responses served when offline
- Background sync queues changes for later upload (future feature)

```
[Figure 4.5: PWA Install Prompt - To be inserted]
Shows:
- Browser install prompt with app icon
- "Install FCUB CGPA Calculator" button
- App description and screenshots
```

4.3 Source Code Implementation

**Key Files Structure**:
```
src/
├── stores/
│   └── cgpa.ts              # Pinia store (500+ lines)
├── data/
│   └── departments/
│       ├── index.ts         # Export all departments
│       ├── types.ts         # TypeScript interfaces
│       ├── cse.ts           # CSE curriculum (complete)
│       ├── eee.ts           # EEE curriculum (sample)
│       └── ...              # Other departments
├── views/
│   ├── SemesterGPA.vue      # Semester calculator (300+ lines)
│   ├── OverallCGPA.vue      # CGPA tracker (250+ lines)
│   ├── Statistics.vue       # Analytics dashboard (400+ lines)
│   ├── Settings.vue         # Department & preferences
│   ├── DataManagement.vue   # Export/import (200+ lines)
│   └── Developer.vue        # About page
├── components/
│   ├── DepartmentOnboarding.vue  # First-run modal
│   └── layout/
│       └── MainLayout.vue        # App shell (250+ lines)
├── router/
│   └── index.ts             # Vue Router config
├── sw.ts                    # Service worker (200+ lines)
└── main.ts                  # App entry point
```

**Core Store Implementation Excerpt** (cgpa.ts):
```typescript
export const useCgpaStore = defineStore('cgpa', () => {
  // State
  const courseGrades = ref<Map<string, string>>(new Map());
  const semesterGPAs = ref<Record<number, number>>({});
  const activeDepartmentId = ref<DepartmentId>('cse');
  const isFirstRun = ref(true);
  
  // Computed
  const activeDepartment = computed(() => 
    departments[activeDepartmentId.value]
  );
  
  const calculateSemesterGPA = computed(() => {
    // GPA calculation logic
  });
  
  const calculateCGPA = computed(() => {
    // CGPA calculation logic
  });
  
  // Methods
  const saveGrade = async (courseCode: string, grade: string) => {
    courseGrades.value.set(courseCode, grade);
    await saveToIndexedDB('courseGrades', { id: courseCode, grade });
  };
  
  const exportData = () => {
    return JSON.stringify({
      version: 2,
      timestamp: new Date().toISOString(),
      courseGrades: Array.from(courseGrades.value.entries()),
      semesterGPAs: semesterGPAs.value,
      activeDepartmentId: activeDepartmentId.value
    });
  };
  
  return {
    courseGrades,
    semesterGPAs,
    activeDepartmentId,
    calculateSemesterGPA,
    calculateCGPA,
    saveGrade,
    exportData
    // ... other methods
  };
});
```

```
[Figure 4.6: Data Management Interface - To be inserted]
Shows:
- Export button to download JSON
- Import file upload area
- Clear all data button with warning
- Data size information
```

4.4 Performance Evaluation

The application was tested on multiple devices and browsers to evaluate performance, usability, and reliability.

**Testing Environment**:
- **Desktop**: AMD Ryzen 5 Pro 7540U, 32GB RAM, Windows 11
- **Mobile**: Various Android devices (mid-range)
- **Browsers**: Chrome, Firefox, Edge, Safari (iOS)
- **Network**: Tested both online and offline scenarios

**Build Performance Metrics**:
- Production build time: ~4 seconds
- Total bundle size: ~285 KB (precached)
- Lighthouse Performance Score: 95+
- Lighthouse Accessibility Score: 95+
- Lighthouse Best Practices Score: 95+
- Lighthouse PWA Score: 90+

**Runtime Performance**:
- Initial load time: <2 seconds on 4G
- Time to Interactive: <1 second on cached visit
- Service worker installation: <1 second
- IndexedDB operations: <50ms average
- GPA calculation: <10ms (real-time)
- Offline mode activation: Instant

4.4.1 Testing Results

**Table 4.1: Feature Testing Results**

| Feature | Status | Notes |
|---------|--------|-------|
| Department Selection | ✅ Pass | All 8 departments load correctly |
| First-run Onboarding | ✅ Pass | Shows once per device |
| Semester GPA Calculation | ✅ Pass | Accurate to 2 decimal places |
| Overall CGPA Calculation | ✅ Pass | Matches manual calculations |
| Grade Input | ✅ Pass | All grade letters accepted |
| Data Persistence | ✅ Pass | Data survives page refresh |
| Export Functionality | ✅ Pass | Valid JSON generated |
| Import Functionality | ✅ Pass | Previous data restored |
| Clear Data | ✅ Pass | All data removed correctly |
| Offline Mode | ✅ Pass | Full functionality offline |
| Required GPA Calculator | ✅ Pass | Accurate predictions |
| Grade Distribution | ✅ Pass | Correct percentages |
| Dark Mode | ✅ Pass | Proper theme switching |
| Responsive Design | ✅ Pass | Works 320px to 1920px+ |
| Department Switching | ✅ Pass | Curriculum updates correctly |
| Service Worker Caching | ✅ Pass | 30 assets precached |
| PWA Installation | ✅ Pass | Installs on desktop & mobile |

**Table 4.2: Browser Compatibility Testing**

| Browser | Version | Desktop | Mobile | Offline | Notes |
|---------|---------|---------|--------|---------|-------|
| Chrome | 120+ | ✅ | ✅ | ✅ | Full support |
| Edge | 120+ | ✅ | ✅ | ✅ | Full support |
| Firefox | 121+ | ✅ | ✅ | ✅ | Full support |
| Safari | 17+ | ✅ | ✅ | ✅ | Full support |
| Opera | 106+ | ✅ | ✅ | ✅ | Full support |

**User Acceptance Testing**:
- 10+ students tested the application
- Feedback: Positive responses on ease of use and offline capability
- No critical bugs reported
- Minor UI suggestions implemented

4.4.2 PWA Performance Metrics

**Service Worker Statistics**:
- Assets precached: 30 files (HTML, CSS, JS, icons)
- Total precache size: 283.52 KiB
- Cache hit rate: >95% on repeat visits
- Offline navigation: 100% success rate

**Installation Metrics**:
- Install prompt shown: After 2+ visits or user action
- Desktop installation: Supported on Chrome, Edge
- Mobile installation: Supported on Chrome Android, Safari iOS
- Icon sizes: 8 variations (48px to 512px)
- Splash screen: Auto-generated from manifest

**Accessibility Features**:
- WCAG 2.1 AA compliant
- Keyboard navigation: Full support
- Screen reader: Proper ARIA labels
- Color contrast: Passes AA standards
- Focus indicators: Visible on all interactive elements

---
