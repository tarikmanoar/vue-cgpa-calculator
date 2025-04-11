import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// IDB Database functions
import { openDB } from 'idb'

interface Course {
  code: string
  name: string
  credits: number
  grade?: string
}

interface CourseData {
  [key: number]: Course[]
}

interface SemesterGPAs {
  [key: number]: number
}

interface SemesterCredits {
  [key: string]: number
}

// Define grade points
const GRADES = [
  { letter: 'A+', point: 4.00 },
  { letter: 'A', point: 3.75 },
  { letter: 'A-', point: 3.50 },
  { letter: 'B+', point: 3.25 },
  { letter: 'B', point: 3.00 },
  { letter: 'B-', point: 2.75 },
  { letter: 'C+', point: 2.50 },
  { letter: 'C', point: 2.25 },
  { letter: 'D', point: 2.00 },
  { letter: 'F', point: 0.00 },
]

// Setup IndexedDB
const DB_NAME = 'fcub-cgpa-calculator'
const DB_VERSION = 1

const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Course grades store
      if (!db.objectStoreNames.contains('courseGrades')) {
        db.createObjectStore('courseGrades', { keyPath: 'id' })
      }
      
      // Semester GPAs store
      if (!db.objectStoreNames.contains('semesterGPAs')) {
        db.createObjectStore('semesterGPAs', { keyPath: 'semester' })
      }
    }
  })
}

export const useCGPAStore = defineStore('cgpa', () => {
  // State
  const mode = ref<'semester' | 'cgpa'>('semester')
  const selectedSemester = ref<number | null>(null)
  const darkMode = ref(false)
  const semesterGPAs = ref<SemesterGPAs>({})
  const courseGrades = ref<{[key: string]: string}>({})
  const isOffline = ref(false)
  const pendingSync = ref(false)
  
  // Course data
  const courseData: CourseData = {
    1: [
      { code: 'CSE-111', name: 'Introduction to Computer Systems', credits: 3.00 },
      { code: 'EEE-111', name: 'Introduction to Digital Electronics', credits: 3.00 },
      { code: 'EEE-112', name: 'Introduction to Digital Electronics Lab', credits: 1.50 },
      { code: 'PHY-111', name: 'Physics-I', credits: 3.00 },
      { code: 'MATH-111', name: 'Linear Algebra & Co-ordinate Geometry', credits: 3.00 },
      { code: 'GED-111', name: 'Principles of Accounting', credits: 2.00 },
      { code: 'GED-112', name: 'Bangladesh Studies', credits: 2.00 },
      { code: 'BANG-111', name: 'Functional Bengali language', credits: 2.00 }
    ],
    2: [
      { code: 'CSE-121', name: 'Structured Programming Using C', credits: 3.00 },
      { code: 'CSE-122', name: 'Structured Programming Using C Lab', credits: 1.00 },
      { code: 'CSE-123', name: 'Digital Logic Design', credits: 3.00 },
      { code: 'CSE-124', name: 'Digital Logic Design Lab', credits: 1.00 },
      { code: 'EEE-121', name: 'Electronic Device & Circuits', credits: 3.00 },
      { code: 'EEE-122', name: 'Electronic Device & Circuits lab', credits: 1.50 },
      { code: 'PHY-121', name: 'Physics-II', credits: 3.00 },
      { code: 'PHY-122', name: 'Physics-II Lab', credits: 1.00 },
      { code: 'MATH-121', name: 'Differential and Integral Calculus', credits: 3.00 },
      { code: 'ENG-121', name: 'Basic English', credits: 3.00 },
      { code: 'CSE-125', name: 'Viva Voce', credits: 1.00 }
    ],
    3: [
      { code: 'CSE-211', name: 'Data Structures', credits: 3.00 },
      { code: 'CSE-212', name: 'Data Structures Lab', credits: 1.00 },
      { code: 'CSE-213', name: 'Discrete Mathematics', credits: 3.00 },
      { code: 'ED-211', name: 'Engineering Drawing', credits: 1.00 },
      { code: 'ED-212', name: 'Engineering Drawing Lab', credits: 1.00 },
      { code: 'CHEM-211', name: 'Chemistry', credits: 3.00 },
      { code: 'CHEM-212', name: 'Chemistry Lab', credits: 1.00 },
      { code: 'MATH-211', name: 'Statistical Methods & Probability', credits: 3.00 },
      { code: 'ENG-211', name: 'Communicative English', credits: 2.00 },
      { code: 'GED-211', name: 'Principles of Economics', credits: 3.00 }
    ],
    4: [
      { code: 'CSE-221', name: 'Object Oriented Programming', credits: 3.00 },
      { code: 'CSE-222', name: 'Object Oriented Programming Lab', credits: 1.00 },
      { code: 'CSE-223', name: 'Algorithm Design and Analysis', credits: 3.00 },
      { code: 'CSE-224', name: 'Algorithm Design and Analysis Lab', credits: 1.00 },
      { code: 'CSE-225', name: 'Numerical Methods', credits: 2.00 },
      { code: 'MATH-221', name: 'Equations & Vector Analysis', credits: 3.00 },
      { code: 'GED-221', name: 'Law & Ethics in Engineering Practice', credits: 2.00 },
      { code: 'GED-222', name: 'Social History and World Civilization', credits: 3.00 },
      { code: 'CSE-226', name: 'Viva Voce', credits: 1.00 }
    ],
    5: [
      { code: 'CSE-311', name: 'Computer Organization & Architecture', credits: 3.00 },
      { code: 'CSE-312', name: 'Data and Telecommunication', credits: 3.00 },
      { code: 'CSE-313', name: 'Microprocessor, Microcontroller and Assembly Language', credits: 3.00 },
      { code: 'CSE-314', name: 'Microprocessor, Microcontroller and Assembly Language Lab', credits: 1.00 },
      { code: 'CSE-315', name: 'Database Management Systems', credits: 3.00 },
      { code: 'CSE-316', name: 'Database Management Systems Lab', credits: 1.00 },
      { code: 'GED-311', name: 'Principles of Management', credits: 2.00 },
      { code: 'CSE-317', name: 'Elective Course (Section II Minor group)', credits: 3.00 },
      { code: 'CSE-318', name: 'Elective Course (Section II Minor group)', credits: 3.00 }
    ],
    6: [
      { code: 'CSE-321', name: 'Operating Systems', credits: 3.00 },
      { code: 'CSE-322', name: 'Operating Systems Lab', credits: 1.00 },
      { code: 'CSE-323', name: 'Computer Networks', credits: 3.00 },
      { code: 'CSE-324', name: 'Computer Networks Lab', credits: 1.00 },
      { code: 'CSE-325', name: 'Software Engineering', credits: 3.00 },
      { code: 'CSE-326', name: 'Software Engineering Lab', credits: 1.00 },
      { code: 'CSE-327', name: 'Compiler Design', credits: 3.00 },
      { code: 'CSE-328', name: 'Compiler Design Lab', credits: 1.00 },
      { code: 'CSE-329', name: 'Elective Course (Section I Major group)', credits: 3.00 },
      { code: 'CSE-330', name: 'Viva Voce', credits: 1.00 }
    ],
    7: [
      { code: 'CSE-411', name: 'Simulation and Modeling', credits: 3.00 },
      { code: 'CSE-412', name: 'Simulation and Modeling Lab', credits: 1.00 },
      { code: 'CSE-413', name: 'Computer Graphics', credits: 3.00 },
      { code: 'CSE-414', name: 'Computer Graphics Lab', credits: 1.00 },
      { code: 'CSE-415', name: 'Artificial Intelligence and Neural Networking', credits: 3.00 },
      { code: 'CSE-416', name: 'Artificial Intelligence and Neural Networking Lab', credits: 1.00 },
      { code: 'CSE-417', name: 'E-Commerce and Web Engineering', credits: 3.00 },
      { code: 'CSE-418', name: 'E-Commerce and Web Engineering Lab', credits: 1.00 },
      { code: 'CSE-419', name: 'Elective Course (Section I Major group)', credits: 3.00 }
    ],
    8: [
      { code: 'CSE-421', name: 'Digital Signal Processing', credits: 3.00 },
      { code: 'CSE-422', name: 'Digital Signal Processing Lab', credits: 1.00 },
      { code: 'CSE-423', name: 'Mobile Application development', credits: 3.00 },
      { code: 'CSE-424', name: 'Mobile Application development Lab', credits: 1.00 },
      { code: 'CSE-425', name: 'Elective Course (Section I Major group)', credits: 3.00 },
      { code: 'CSE-428', name: 'Project Work', credits: 3.00 },
      { code: 'CSE-429', name: 'Field work and Industrial Tour', credits: 1.00 },
      { code: 'CSE-430', name: 'Viva Voce', credits: 2.00 }
    ]
  }

  // Semester credits
  const semesterCredits: SemesterCredits = {
    '1': 20.50,
    '2': 23.50,
    '3': 21.00,
    '4': 19.00,
    '5': 22.00,
    '6': 20.00,
    '7': 19.00,
    '8': 17.00
  }

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

  // Computed
  const semesterCourses = computed(() => {
    if (!selectedSemester.value) return []
    
    return courseData[selectedSemester.value].map(course => ({
      ...course,
      grade: courseGrades.value[course.code] || ''
    }))
  })

  const calculateSemesterGPA = computed(() => {
    if (!selectedSemester.value) return 0
    
    let totalPoints = 0
    let totalCredits = 0
    
    semesterCourses.value.forEach(course => {
      if (course.grade) {
        const gradePoint = GRADES.find(g => g.letter === course.grade)?.point || 0
        totalPoints += gradePoint * course.credits
        totalCredits += course.credits
      }
    })
    
    return totalCredits ? totalPoints / totalCredits : 0
  })

  const semesterTotalCredits = computed(() => {
    if (!selectedSemester.value) return 0
    return semesterCredits[selectedSemester.value.toString()] || 0
  })

  const calculateCGPA = computed(() => {
    let totalPoints = 0
    let totalCredits = 0
    
    semesters.forEach(sem => {
      if (semesterGPAs.value[sem]) {
        const semCredits = semesterCredits[sem.toString()]
        totalPoints += semesterGPAs.value[sem] * semCredits
        totalCredits += semCredits
      }
    })
    
    return totalCredits ? totalPoints / totalCredits : 0
  })

  // Actions
  const setMode = (newMode: 'semester' | 'cgpa') => {
    mode.value = newMode
  }

  const setSemester = (semester: number | null) => {
    selectedSemester.value = semester
  }

  const setGrade = async (courseCode: string, grade: string) => {
    courseGrades.value[courseCode] = grade
    
    // Save to IndexedDB
    try {
      const db = await initDB()
      await db.put('courseGrades', { id: courseCode, grade })
    } catch (error) {
      console.error('Failed to save grade, will retry later:', error)
      pendingSync.value = true
    }
  }

  const setSemesterGPA = async (semester: number, gpa: number) => {
    semesterGPAs.value[semester] = gpa
    
    // Save to IndexedDB
    try {
      const db = await initDB()
      await db.put('semesterGPAs', { semester, gpa })
    } catch (error) {
      console.error('Failed to save semester GPA, will retry later:', error)
      pendingSync.value = true
    }
  }

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    
    // Save preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode.value))
    
    // Apply theme
    if (darkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const loadData = async () => {
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      darkMode.value = JSON.parse(savedDarkMode)
      if (darkMode.value) {
        document.documentElement.classList.add('dark')
      }
    } else {
      // Check user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      darkMode.value = prefersDark
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
    
    try {
      const db = await initDB()
      
      // Load course grades
      const savedGrades = await db.getAll('courseGrades')
      if (savedGrades.length > 0) {
        const gradesObj: {[key: string]: string} = {}
        savedGrades.forEach((item: {id: string, grade: string}) => {
          gradesObj[item.id] = item.grade
        })
        courseGrades.value = gradesObj
      }
      
      // Load semester GPAs
      const savedGPAs = await db.getAll('semesterGPAs')
      if (savedGPAs.length > 0) {
        const gpasObj: SemesterGPAs = {}
        savedGPAs.forEach((item: {semester: number, gpa: number}) => {
          gpasObj[item.semester] = item.gpa
        })
        semesterGPAs.value = gpasObj
      }
    } catch (error) {
      console.error('Failed to load data from IndexedDB:', error)
    }
  }

  const syncPendingData = async () => {
    if (!pendingSync.value) return
    
    try {
      const db = await initDB()
      
      // Sync course grades
      Object.entries(courseGrades.value).forEach(async ([code, grade]) => {
        await db.put('courseGrades', { id: code, grade })
      })
      
      // Sync semester GPAs
      Object.entries(semesterGPAs.value).forEach(async ([sem, gpa]) => {
        await db.put('semesterGPAs', { semester: parseInt(sem), gpa })
      })
      
      pendingSync.value = false
    } catch (error) {
      console.error('Failed to sync data:', error)
    }
  }

  const getSemesterCredits = (semester: number) => {
    return semesterCredits[semester.toString()] || 0
  }

  // Return store properties and methods
  return {
    // State
    mode,
    selectedSemester,
    darkMode,
    semesterGPAs,
    courseGrades,
    isOffline,
    pendingSync,
    
    // Constants
    courseData,
    semesterCredits,
    semesters,
    GRADES,
    
    // Computed
    semesterCourses,
    calculateSemesterGPA,
    semesterTotalCredits,
    calculateCGPA,
    
    // Actions
    setMode,
    setSemester,
    setGrade,
    setSemesterGPA,
    toggleDarkMode,
    loadData,
    syncPendingData,
    getSemesterCredits
  }
})