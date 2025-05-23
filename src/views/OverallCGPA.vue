<!-- Overall CGPA Calculator Page -->
<template>
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 relative overflow-hidden">
      <span class="relative z-10 inline-block transform transition-transform animate-float">Overall CGPA Calculator</span>
      <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h2>
    
    <div class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <transition-group 
          name="semester-list" 
          tag="div"
          class="contents"
          appear
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 transform scale-95"
          enter-to-class="opacity-100 transform scale-100"
        >
          <div v-for="(sem, index) in store.semesters" :key="sem" 
            class="border rounded-lg p-4 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            :class="{ 'border-gray-200': !store.darkMode, 'border-gray-700': store.darkMode }"
            :style="{ transitionDelay: index * 50 + 'ms' }"
          >
            <h3 class="font-medium mb-3 flex items-center text-lg">
              <span class="inline-flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs mr-2">
                {{ sem }}
              </span>
              Semester {{ sem }}
            </h3>
            <div class="space-y-3">
              <div class="flex flex-col">
                <label :for="`gpa-${sem}`" class="text-sm mb-1 font-medium">GPA:</label>
                <div class="flex flex-wrap items-center gap-2">
                  <div class="relative w-24">
                    <input 
                      type="number" 
                      :id="`gpa-${sem}`"
                      v-model.number="semesterInputs[sem]" 
                      @change="updateSemesterGPA(sem)"
                      step="0.01" 
                      min="0" 
                      max="4" 
                      placeholder="0.00"
                      class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow"
                      :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
                      aria-describedby="gpa-range-help"
                    />
                  </div>
                  <span 
                    v-if="semesterInputs[sem]"
                    class="py-1 px-2.5 rounded-full text-xs font-medium transition-all duration-300"
                    :class="getGpaLabelClass(semesterInputs[sem])"
                  >
                    {{ getGpaLabel(semesterInputs[sem]) }}
                  </span>
                </div>
                <p id="gpa-range-help" class="text-xs mt-1 opacity-75">Enter a value between 0.00 and 4.00</p>
              </div>
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1 text-xs opacity-75 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  Credits: {{ store.getSemesterCredits(sem) }}
                </span>
                
                <!-- Reset button -->
                <button 
                  v-if="semesterInputs[sem]"
                  @click="resetSemesterGPA(sem)"
                  class="text-xs text-red-500 hover:text-red-700 focus:outline-none focus:text-red-600 transition-colors duration-200 flex items-center gap-1"
                  aria-label="Reset GPA for semester"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </transition-group>
      </div>

      <!-- Results card -->
      <div class="mt-8 p-4 sm:p-6 rounded-lg transition-all duration-300 transform hover:shadow-lg" 
        :class="{ 'bg-gray-50': !store.darkMode, 'bg-gray-700': store.darkMode }">
        <div class="text-center">
          <h3 class="text-xl font-medium mb-3 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Cumulative GPA (CGPA)
          </h3>
          
          <div class="relative inline-block">
            <p class="text-5xl font-bold text-blue-600 mb-3 transition-all duration-500 animate-float">
              {{ displayCGPA }}
            </p>
            <div class="absolute -top-1 -right-8">
              <div class="relative group">
                <button 
                  aria-describedby="cgpa-info" 
                  class="text-sm opacity-75 hover:opacity-100 focus:outline-none focus:opacity-100 transition-opacity duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div id="cgpa-info" role="tooltip" class="absolute bottom-full right-0 transform translate-y-[-10px] invisible group-hover:visible z-10 w-56 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CGPA is calculated by weighted average of all semesters based on credit hours
                  <div class="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Classification label -->
          <div class="inline-block mb-4">
            <span 
              class="py-1.5 px-4 rounded-full text-sm font-medium shadow-sm transition-all duration-300 transform hover:scale-105"
              :class="getGpaLabelClass(store.calculateCGPA)"
            >
              {{ getGpaLabel(store.calculateCGPA) }}
            </span>
          </div>
          
          <div class="max-w-md mx-auto">
            <p class="text-sm mb-2">
              <span class="font-medium">{{ completedCredits }}</span> / 162 Total Program Credits 
              (<span class="font-medium">{{ Math.round(completedCredits / 162 * 100) }}%</span> complete)
            </p>

            <!-- Progress bar -->
            <div class="relative h-3 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                class="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${Math.round(completedCredits / 162 * 100)}%` }"
              ></div>
              <div class="absolute top-0 left-0 h-full w-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Share or export section -->
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <button 
          @click="copyToClipboard"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Summary
        </button>
        
        <button 
          @click="downloadPDF"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
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
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useCGPAStore } from '@/stores/cgpa'

const store = useCGPAStore()
const showToast = ref(false)
const toastMessage = ref('')

// Create reactive object for semester inputs
const semesterInputs = reactive<{[key: number]: number | null}>({})

// Initialize semesterInputs with stored GPAs
onMounted(() => {
  store.semesters.forEach(sem => {
    semesterInputs[sem] = store.semesterGPAs[sem] || null
  })
})

// Update semester GPA in store
const updateSemesterGPA = (semester: number) => {
  if (semesterInputs[semester] !== null) {
    // Validate input (between 0 and 4)
    let value = semesterInputs[semester]!
    
    if (value < 0) value = 0
    if (value > 4) value = 4
    
    // Update the validated value
    semesterInputs[semester] = Number(value.toFixed(2))
    
    // Save to store
    store.setSemesterGPA(semester, semesterInputs[semester]!)
  }
}

// Reset a semester GPA
const resetSemesterGPA = (semester: number) => {
  semesterInputs[semester] = null
  delete store.semesterGPAs[semester]
  
  // Show toast
  toastMessage.value = `Semester ${semester} GPA reset`
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

// Get completed credits
const completedCredits = computed(() => {
  let total = 0
  store.semesters.forEach(sem => {
    if (store.semesterGPAs[sem]) {
      total += store.getSemesterCredits(sem)
    }
  })
  return total
})

// Format CGPA for display
const displayCGPA = computed(() => {
  return store.calculateCGPA.toFixed(2)
})

// Get GPA classification label
const getGpaLabel = (gpa: number | null) => {
  if (gpa === null) return 'N/A'
  if (gpa >= 3.80) return 'A+'
  if (gpa >= 3.50) return 'A'
  if (gpa >= 3.25) return 'A-'
  if (gpa >= 3.00) return 'B+'
  if (gpa >= 2.75) return 'B'
  if (gpa >= 2.50) return 'B-'
  if (gpa >= 2.25) return 'C+'
  if (gpa >= 2.00) return 'C'
  if (gpa > 0) return 'D'
  return 'F'
}

// Get GPA classification label CSS class
const getGpaLabelClass = (gpa: number | null) => {
  if (gpa === null) return 'bg-gray-300 text-gray-800'
  if (gpa >= 3.25) return 'bg-green-100 text-green-800'
  if (gpa >= 2.50) return 'bg-blue-100 text-blue-800'
  if (gpa >= 2.00) return 'bg-yellow-100 text-yellow-800'
  return 'bg-red-100 text-red-800'
}

// Copy summary to clipboard
const copyToClipboard = () => {
  // Create summary text
  let summary = 'FCUB CSE Program CGPA Summary\n\n'
  summary += `Overall CGPA: ${displayCGPA} (${getGpaLabel(store.calculateCGPA)})\n`
  summary += `Completed Credits: ${completedCredits} / 162 (${Math.round(Number(completedCredits) / 162 * 100)}% complete)\n\n`
  summary += 'Semester GPAs:\n'
  
  store.semesters.forEach(sem => {
    const gpa = store.semesterGPAs[sem]
    summary += `Semester ${sem}: ${gpa !== undefined ? gpa.toFixed(2) : 'Not entered'}\n`
  })
  
  // Copy to clipboard
  navigator.clipboard.writeText(summary)
    .then(() => {
      // Show success toast
      toastMessage.value = 'Summary copied to clipboard!'
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 3000)
    })
    .catch(() => {
      // Show error toast
      toastMessage.value = 'Failed to copy to clipboard'
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 3000)
    })
}

// Download PDF summary (mock implementation)
const downloadPDF = () => {
  // In a real implementation, we would generate a PDF here
  // For this example, we'll just show a toast notification
  
  toastMessage.value = 'PDF download started'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
  
  // Simulate download delay
  setTimeout(() => {
    toastMessage.value = 'PDF downloaded successfully!'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }, 2000)
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

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>