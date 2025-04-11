<!-- Overall CGPA Calculator Page -->
<template>
  <div>
    <h2 class="text-3xl font-bold text-center mb-6">Overall CGPA Calculator</h2>
    
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="sem in store.semesters" :key="sem" 
          class="border rounded-lg p-4 transition-all duration-200 hover:shadow-md"
          :class="{ 'border-gray-200': !store.darkMode, 'border-gray-700': store.darkMode }">
          <h3 class="font-medium mb-3">Semester {{ sem }}</h3>
          <div class="space-y-3">
            <div class="flex flex-col">
              <label :for="`gpa-${sem}`" class="text-sm mb-1">GPA:</label>
              <div class="flex items-center gap-2">
                <input 
                  type="number" 
                  :id="`gpa-${sem}`"
                  v-model.number="semesterInputs[sem]" 
                  @change="updateSemesterGPA(sem)"
                  step="0.01" 
                  min="0" 
                  max="4" 
                  placeholder="0.00"
                  class="border rounded px-3 py-2 w-24 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                  :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
                  aria-describedby="gpa-range-help"
                />
                <span 
                  class="py-1 px-2 rounded-full text-xs"
                  :class="getGpaLabelClass(semesterInputs[sem])"
                >
                  {{ getGpaLabel(semesterInputs[sem]) }}
                </span>
              </div>
              <p id="gpa-range-help" class="text-xs mt-1 opacity-75">Enter a value between 0.00 and 4.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm opacity-75">Credits: {{ store.getSemesterCredits(sem) }}</p>
              
              <!-- Reset button -->
              <button 
                v-if="semesterInputs[sem]"
                @click="resetSemesterGPA(sem)"
                class="text-xs text-red-500 hover:text-red-700 focus:outline-none"
                aria-label="Reset GPA for semester"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Results card -->
      <div class="mt-8 p-6 rounded-lg transition-all duration-200" 
        :class="{ 'bg-gray-50': !store.darkMode, 'bg-gray-700': store.darkMode }">
        <div class="text-center">
          <h3 class="text-xl font-medium mb-2">Cumulative GPA (CGPA)</h3>
          
          <div class="relative inline-block">
            <p class="text-5xl font-bold text-blue-600 mb-2">{{ displayCGPA }}</p>
            <div class="absolute -top-1 -right-8">
              <div class="relative group">
                <button 
                  aria-describedby="cgpa-info" 
                  class="text-sm opacity-75 hover:opacity-100 focus:outline-none focus:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div id="cgpa-info" role="tooltip" class="absolute bottom-full right-0 transform translate-y-[-10px] invisible group-hover:visible z-10 w-48 p-2 bg-gray-900 text-white text-xs rounded">
                  CGPA is calculated by weighted average of all semesters based on credit hours
                </div>
              </div>
            </div>
          </div>
          
          <!-- Classification label -->
          <div class="inline-block mt-1 mb-3">
            <span 
              class="py-1 px-3 rounded-full text-sm"
              :class="getGpaLabelClass(store.calculateCGPA)"
            >
              {{ getGpaLabel(store.calculateCGPA) }}
            </span>
          </div>
          
          <p class="text-sm opacity-75">
            {{ completedCredits }} / 162 Total Program Credits ({{ Math.round(completedCredits / 162 * 100) }}% complete)
          </p>

          <!-- Progress bar -->
          <div class="mt-3 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div class="h-full bg-blue-600 rounded-full" :style="{ width: `${Math.round(completedCredits / 162 * 100)}%` }"></div>
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
</style>