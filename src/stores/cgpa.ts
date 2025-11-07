import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// IDB Database functions
import { openDB } from 'idb'

// Import department data
import { departments, departmentList, type Department, type DepartmentId } from '@/data/departments'

interface SemesterGPAs {
  [key: number]: number
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
const DB_VERSION = 2 // Increment version for new schema

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
      
      // Department selection store (new in v2)
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'key' })
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
  const activeDepartmentId = ref<DepartmentId>('cse') // Default to CSE
  const isFirstRun = ref(true) // Track if this is first run - will be set to false after loadData if department is saved
  
  // Computed: Get active department
  const activeDepartment = computed<Department>(() => {
    return departments[activeDepartmentId.value]
  })
  
  // Computed: Get course data from active department
  const courseData = computed(() => activeDepartment.value.courseData)
  
  // Computed: Get semester credits from active department
  const semesterCredits = computed(() => activeDepartment.value.semesterCredits)
  
  // Computed: Get total credits from active department
  const totalCredits = computed(() => activeDepartment.value.totalCredits)
  
  // Computed: Get available semesters from active department
  const semesters = computed(() => {
    return Array.from({ length: activeDepartment.value.totalSemesters }, (_, i) => i + 1)
  })

  // Computed
  const semesterCourses = computed(() => {
    if (!selectedSemester.value) return []
    
    return courseData.value[selectedSemester.value]?.map(course => ({
      ...course,
      grade: courseGrades.value[course.code] || ''
    })) || []
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
    return semesterCredits.value[selectedSemester.value.toString()] || 0
  })

  const calculateCGPA = computed(() => {
    let totalPoints = 0
    let totalCreditsCount = 0
    
    semesters.value.forEach((sem: number) => {
      if (semesterGPAs.value[sem]) {
        const semCredits = semesterCredits.value[sem.toString()]
        totalPoints += semesterGPAs.value[sem] * semCredits
        totalCreditsCount += semCredits
      }
    })
    
    return totalCreditsCount ? totalPoints / totalCreditsCount : 0
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
      
      // Load department selection
      const savedDepartment = await db.get('settings', 'activeDepartment')
      if (savedDepartment?.value) {
        activeDepartmentId.value = savedDepartment.value as DepartmentId
        // If we have a saved department, it's not the first run
        isFirstRun.value = false
      } else {
        // No saved department means this is the first run
        isFirstRun.value = true
      }
      
      // Also check the explicit isFirstRun flag (for backwards compatibility)
      const savedFirstRun = await db.get('settings', 'isFirstRun')
      if (savedFirstRun?.value === false) {
        isFirstRun.value = false
      }
      
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
    return semesterCredits.value[semester.toString()] || 0
  }

  // Set active department
  const setDepartment = async (departmentId: DepartmentId) => {
    activeDepartmentId.value = departmentId
    isFirstRun.value = false
    
    // Save to IndexedDB
    try {
      const db = await initDB()
      await db.put('settings', { key: 'activeDepartment', value: departmentId })
      await db.put('settings', { key: 'isFirstRun', value: false })
    } catch (error) {
      console.error('Failed to save department selection:', error)
      pendingSync.value = true
    }
  }

  // Export all data as JSON
  const exportData = () => {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      courseGrades: courseGrades.value,
      semesterGPAs: semesterGPAs.value,
      darkMode: darkMode.value
    }
    return JSON.stringify(data, null, 2)
  }

  // Import data from JSON
  const importData = async (jsonData: string) => {
    try {
      const data = JSON.parse(jsonData)
      
      // Validate data structure
      if (!data.version || !data.courseGrades || !data.semesterGPAs) {
        throw new Error('Invalid data format')
      }
      
      // Import course grades
      courseGrades.value = data.courseGrades
      
      // Import semester GPAs
      semesterGPAs.value = data.semesterGPAs
      
      // Import dark mode preference
      if (data.darkMode !== undefined) {
        darkMode.value = data.darkMode
        localStorage.setItem('darkMode', JSON.stringify(darkMode.value))
        
        if (darkMode.value) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
      
      // Save to IndexedDB
      const db = await initDB()
      
      // Save course grades
      Object.entries(courseGrades.value).forEach(async ([code, grade]) => {
        await db.put('courseGrades', { id: code, grade })
      })
      
      // Save semester GPAs
      Object.entries(semesterGPAs.value).forEach(async ([sem, gpa]) => {
        await db.put('semesterGPAs', { semester: parseInt(sem), gpa })
      })
      
      return { success: true, message: 'Data imported successfully' }
    } catch (error) {
      console.error('Failed to import data:', error)
      return { success: false, message: 'Failed to import data. Please check the file format.' }
    }
  }

  // Clear all data
  const clearAllData = async () => {
    try {
      // Clear in-memory data
      courseGrades.value = {}
      semesterGPAs.value = {}
      
      // Clear IndexedDB
      const db = await initDB()
      await db.clear('courseGrades')
      await db.clear('semesterGPAs')
      
      return { success: true, message: 'All data cleared successfully' }
    } catch (error) {
      console.error('Failed to clear data:', error)
      return { success: false, message: 'Failed to clear data' }
    }
  }

  // Get Bangladesh university classification based on CGPA
  const getClassification = (cgpa: number) => {
    if (cgpa >= 3.50) return { class: 'First Class', honor: 'with Distinction', color: 'green' }
    if (cgpa >= 3.00) return { class: 'First Class', honor: '', color: 'green' }
    if (cgpa >= 2.50) return { class: 'Second Class', honor: '', color: 'blue' }
    if (cgpa >= 2.00) return { class: 'Third Class', honor: '', color: 'yellow' }
    if (cgpa > 0) return { class: 'Pass', honor: '', color: 'orange' }
    return { class: 'N/A', honor: '', color: 'gray' }
  }

  // Calculate required GPA for remaining semesters to achieve target CGPA
  const calculateRequiredGPA = (targetCGPA: number) => {
    let completedCredits = 0
    let earnedPoints = 0
    
    // Calculate completed credits and earned grade points
    semesters.value.forEach((sem: number) => {
      if (semesterGPAs.value[sem]) {
        const credits = getSemesterCredits(sem)
        completedCredits += credits
        earnedPoints += semesterGPAs.value[sem] * credits
      }
    })
    
    const totalProgramCredits = totalCredits.value // Use dynamic total credits
    const remainingCredits = totalProgramCredits - completedCredits
    
    if (remainingCredits <= 0) {
      return { 
        requiredGPA: 0, 
        achievable: false, 
        message: 'All semesters completed' 
      }
    }
    
    const totalRequiredPoints = targetCGPA * totalProgramCredits
    const requiredPoints = totalRequiredPoints - earnedPoints
    const requiredGPA = requiredPoints / remainingCredits
    
    if (requiredGPA > 4.00) {
      return { 
        requiredGPA: requiredGPA.toFixed(2), 
        achievable: false, 
        message: 'Target CGPA not achievable with remaining credits' 
      }
    }
    
    if (requiredGPA < 0) {
      return { 
        requiredGPA: 0, 
        achievable: true, 
        message: 'Target CGPA already achieved or will be exceeded' 
      }
    }
    
    return { 
      requiredGPA: requiredGPA.toFixed(2), 
      achievable: true, 
      message: `You need an average of ${requiredGPA.toFixed(2)} GPA in remaining semesters`,
      remainingCredits,
      completedCredits
    }
  }

  // Get grade distribution statistics
  const getGradeDistribution = computed(() => {
    const distribution: { [key: string]: number } = {
      'A+': 0, 'A': 0, 'A-': 0, 'B+': 0, 'B': 0, 'B-': 0, 
      'C+': 0, 'C': 0, 'D': 0, 'F': 0
    }
    
    Object.values(courseGrades.value).forEach(grade => {
      if (grade && distribution.hasOwnProperty(grade)) {
        distribution[grade]++
      }
    })
    
    return distribution
  })

  // Get semester performance trend
  const getSemesterTrend = computed(() => {
    return semesters.value
      .filter((sem: number) => semesterGPAs.value[sem])
      .map((sem: number) => ({
        semester: sem,
        gpa: semesterGPAs.value[sem],
        credits: getSemesterCredits(sem)
      }))
  })

  // Calculate GPA statistics
  const getGPAStats = computed(() => {
    const completedSemesters = semesters.value.filter((sem: number) => semesterGPAs.value[sem])
    
    if (completedSemesters.length === 0) {
      return {
        highest: 0,
        lowest: 0,
        average: 0,
        trend: 'N/A',
        completedSemesters: 0
      }
    }
    
    const gpas = completedSemesters.map((sem: number) => semesterGPAs.value[sem])
    const highest = Math.max(...gpas)
    const lowest = Math.min(...gpas)
    const average = gpas.reduce((a: number, b: number) => a + b, 0) / gpas.length
    
    // Calculate trend (improving, declining, stable)
    let trend = 'Stable'
    if (completedSemesters.length >= 2) {
      const lastTwo = completedSemesters.slice(-2)
      const diff = semesterGPAs.value[lastTwo[1]] - semesterGPAs.value[lastTwo[0]]
      if (diff > 0.1) trend = 'Improving'
      else if (diff < -0.1) trend = 'Declining'
    }
    
    return {
      highest: highest.toFixed(2),
      lowest: lowest.toFixed(2),
      average: average.toFixed(2),
      trend,
      completedSemesters: completedSemesters.length
    }
  })

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
    activeDepartmentId,
    isFirstRun,
    
    // Department data
    activeDepartment,
    departmentList: computed(() => departmentList),
    departments: computed(() => departments),
    
    // Constants
    courseData,
    semesterCredits,
    semesters,
    totalCredits,
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
    setDepartment,
    toggleDarkMode,
    loadData,
    syncPendingData,
    getSemesterCredits,
    getClassification,
    calculateRequiredGPA,
    getGradeDistribution,
    getSemesterTrend,
    getGPAStats,
    exportData,
    importData,
    clearAllData
  }
})