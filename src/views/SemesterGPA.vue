<!-- Semester GPA Calculator Page -->
<template>
  <div>
    <h2 class="text-3xl font-bold text-center mb-6">Semester GPA Calculator</h2>
    
    <div class="space-y-6">
      <div class="flex flex-wrap gap-4 items-center">
        <label for="semester-select" class="font-medium">Select Semester:</label>
        <select 
          id="semester-select"
          v-model="selectedSemester" 
          class="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-200"
          :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
          aria-describedby="semester-select-help"
        >
          <option value="">Choose semester</option>
          <option v-for="sem in store.semesters" :key="sem" :value="sem">
            Semester {{ sem }}
          </option>
        </select>
        <p id="semester-select-help" class="text-sm opacity-75">Select a semester to view its courses</p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="py-8 flex justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>

      <!-- Semester courses and grades -->
      <div v-else-if="selectedSemester && store.semesterCourses.length > 0" class="border rounded-lg p-4"
        :class="{ 'border-gray-200': !store.darkMode, 'border-gray-700': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4">Semester {{ selectedSemester }} Courses</h3>
        
        <div class="space-y-4">
          <div v-for="course in store.semesterCourses" :key="course.code" 
            class="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4 last:border-0 last:pb-0"
            :class="{ 'border-gray-200': !store.darkMode, 'border-gray-700': store.darkMode }">
            <div class="col-span-2">
              <p class="font-medium">{{ course.name }}</p>
              <p class="text-sm opacity-75">{{ course.code }}</p>
            </div>
            <div class="text-sm">Credits: {{ course.credits }}</div>
            <div>
              <label :for="'grade-' + course.code" class="sr-only">Select grade for {{ course.name }}</label>
              <select 
                :id="'grade-' + course.code"
                v-model="course.grade" 
                @change="updateGrade(course.code, course.grade)"
                class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-200"
                :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
              >
                <option value="">Select Grade</option>
                <option v-for="grade in store.GRADES" :key="grade.letter" :value="grade.letter">
                  {{ grade.letter }} ({{ grade.point }})
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Results -->
        <div class="mt-6 p-4 rounded-lg"
          :class="{ 'bg-gray-50': !store.darkMode, 'bg-gray-700': store.darkMode }">
          <div class="text-center">
            <div class="flex justify-center items-center gap-2">
              <p class="text-lg font-medium">Semester GPA</p>
              <div class="relative flex items-center group">
                <button aria-describedby="gpa-tooltip" class="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div id="gpa-tooltip" role="tooltip" class="absolute bottom-full left-1/2 transform -translate-x-1/2 invisible group-hover:visible bg-gray-900 text-white text-xs rounded py-1 px-2 w-48">
                  GPA is calculated based on the course credits and grade points.
                </div>
              </div>
            </div>
            <p class="text-3xl font-bold text-blue-600">{{ displayGPA }}</p>
            <p class="text-sm opacity-75">Total Credits: {{ store.semesterTotalCredits }}</p>
          </div>
          
          <!-- Save to CGPA button -->
          <div class="mt-4 flex justify-center" v-if="displayGPA !== 'N/A'">
            <button 
              @click="saveSemesterGPA"
              class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
              :disabled="isGpaZero"
              :class="{ 'opacity-50 cursor-not-allowed': isGpaZero }"
            >
              Save to Overall CGPA
            </button>
          </div>
        </div>
      </div>

      <!-- No courses state -->
      <div v-else-if="selectedSemester" class="py-8 text-center">
        <p>No courses found for this semester.</p>
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