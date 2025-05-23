<!-- Semester GPA Calculator Page -->
<template>
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 relative overflow-hidden">
      <span class="relative z-10 inline-block transform transition-transform animate-float">Semester GPA Calculator</span>
      <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h2>
    
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 sm:items-center">
        <label for="semester-select" class="font-medium text-lg">Select Semester:</label>
        <div class="relative flex-grow max-w-xs">
          <select 
            id="semester-select"
            v-model="selectedSemester" 
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
            :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
            aria-describedby="semester-select-help"
          >
            <option value="">Choose semester</option>
            <option v-for="sem in store.semesters" :key="sem" :value="sem">
              Semester {{ sem }}
            </option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <p id="semester-select-help" class="text-sm opacity-75 w-full sm:w-auto">Select a semester to view its courses</p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="py-8 flex justify-center items-center flex-col">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p class="text-sm opacity-75">Loading semester data...</p>
      </div>

      <!-- Semester courses and grades -->
      <div v-else-if="selectedSemester && store.semesterCourses.length > 0" 
        class="border rounded-lg p-3 sm:p-5 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200': !store.darkMode, 'border-gray-700': store.darkMode }"
      >
        <h3 class="text-lg sm:text-xl font-semibold mb-4 flex items-center">
          <span class="inline-block mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </span>
          Semester {{ selectedSemester }} Courses
        </h3>
        
        <div class="space-y-4">
          <transition-group 
            tag="div" 
            name="course-list"
            appear
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 transform -translate-y-4"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform -translate-y-4"
          >
            <div v-for="(course, index) in store.semesterCourses" :key="course.code" 
              class="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-start sm:items-center border-b pb-4 last:border-0 last:pb-0"
              :class="{ 
                'border-gray-200': !store.darkMode, 
                'border-gray-700': store.darkMode 
              }"
              :style="{ transitionDelay: index * 50 + 'ms' }"
            >
              <div class="sm:col-span-2">
                <p class="font-medium text-base sm:text-lg">{{ course.name }}</p>
                <p class="text-xs sm:text-sm opacity-75">{{ course.code }}</p>
              </div>
              
              <div class="flex items-center">
                <span class="inline-flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full px-2.5 py-0.5">
                  Credits: {{ course.credits }}
                </span>
              </div>
              
              <div>
                <label :for="'grade-' + course.code" class="sr-only">Select grade for {{ course.name }}</label>
                <select 
                  :id="'grade-' + course.code"
                  v-model="course.grade" 
                  @change="updateGrade(course.code, course.grade)"
                  class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 hover:shadow"
                  :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
                >
                  <option value="">Select Grade</option>
                  <option v-for="grade in store.GRADES" :key="grade.letter" :value="grade.letter">
                    {{ grade.letter }} ({{ grade.point }})
                  </option>
                </select>
              </div>
            </div>
          </transition-group>
        </div>

        <!-- Results -->
        <div class="mt-6 p-4 rounded-lg shadow-inner transition-all duration-300 transform hover:-translate-y-1"
          :class="{ 'bg-gray-50': !store.darkMode, 'bg-gray-700': store.darkMode }">
          <div class="text-center">
            <div class="flex justify-center items-center gap-2">
              <p class="text-lg font-medium">Semester GPA</p>
              <div class="relative flex items-center group">
                <button aria-describedby="gpa-tooltip" class="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-blue-500 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div id="gpa-tooltip" role="tooltip" class="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 invisible group-hover:visible bg-gray-900 text-white text-xs rounded-lg py-2 px-3 w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  GPA is calculated based on the course credits and grade points.
                  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                </div>
              </div>
            </div>
            
            <p class="text-4xl font-bold text-blue-600 mb-2 transition-all duration-500 animate-float">
              {{ displayGPA }}
            </p>
            
            <p class="text-sm opacity-75">
              Total Credits: <span class="font-medium">{{ store.semesterTotalCredits }}</span>
            </p>
          </div>
          
          <!-- Save to CGPA button -->
          <div class="mt-5 flex justify-center" v-if="displayGPA !== 'N/A'">
            <button 
              @click="saveSemesterGPA"
              class="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              :disabled="isGpaZero"
              :class="{ 'opacity-50 cursor-not-allowed': isGpaZero }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Save to Overall CGPA
            </button>
          </div>
        </div>
      </div>

      <!-- No courses state -->
      <div v-else-if="selectedSemester" class="py-8 text-center">
        <div class="inline-block rounded-full bg-yellow-100 p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p class="text-lg">No courses found for this semester.</p>
        <p class="text-sm opacity-75 mt-2">Please try selecting a different semester.</p>
      </div>

      <!-- Empty state -->
      <div v-else class="py-8 text-center">
        <p>Please select a semester to view courses.</p>
      </div>
    </div>
    
    <!-- Toast notification -->
    <div 
      v-if="showToast" 
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fadeIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      <span>Semester GPA saved successfully!</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useCGPAStore } from '@/stores/cgpa'

const store = useCGPAStore()
const selectedSemester = ref<number | null>(null)
const loading = ref(false)
const showToast = ref(false)

// Update the store when semester is selected
watch(selectedSemester, (newValue) => {
  loading.value = true
  
  // Simulate loading for perceived performance
  setTimeout(() => {
    store.setSemester(newValue)
    loading.value = false
  }, 300)
})

// Computed property for formatted GPA
const displayGPA = computed(() => {
  if (store.calculateSemesterGPA === 0) {
    // Check if any grades are actually selected
    const hasSelectedGrades = store.semesterCourses.some(course => course.grade !== '')
    return hasSelectedGrades ? '0.00' : 'N/A'
  }
  return store.calculateSemesterGPA.toFixed(2)
})

const isGpaZero = computed(() => {
  return store.calculateSemesterGPA === 0
})

// Update grade in store
const updateGrade = (courseCode: string, grade: string) => {
  store.setGrade(courseCode, grade)
}

// Save semester GPA to overall CGPA
const saveSemesterGPA = () => {
  if (selectedSemester.value && !isGpaZero.value) {
    store.setSemesterGPA(selectedSemester.value, store.calculateSemesterGPA)
    
    // Show toast notification
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }
}
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, 20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
</style>