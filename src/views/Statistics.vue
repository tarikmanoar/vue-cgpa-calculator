<!-- Statistics and Required GPA Calculator Page -->
<template>
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 relative overflow-hidden">
      <span class="relative z-10 inline-block transform transition-transform animate-float">GPA Statistics & Tools</span>
      <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h2>
    
    <div class="space-y-6">
      <!-- Required GPA Calculator -->
      <div class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200 bg-white': !store.darkMode, 'border-gray-700 bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Required GPA Calculator
        </h3>
        
        <p class="text-sm mb-4 opacity-75">
          Find out what GPA you need in remaining semesters to achieve your target CGPA
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="target-cgpa" class="block mb-2 font-medium">Target CGPA:</label>
            <input 
              type="number" 
              id="target-cgpa"
              v-model.number="targetCGPA"
              step="0.01" 
              min="0" 
              max="4" 
              placeholder="e.g., 3.50"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
              :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
            />
          </div>
          
          <div class="flex items-end">
            <button 
              @click="calculateRequired"
              class="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              :disabled="!targetCGPA || targetCGPA <= 0 || targetCGPA > 4"
            >
              Calculate Required GPA
            </button>
          </div>
        </div>
        
        <!-- Results -->
        <div v-if="requiredGPAResult" class="p-4 rounded-lg transition-all duration-300"
          :class="{ 
            'bg-green-50 dark:bg-green-900/20': requiredGPAResult.achievable,
            'bg-red-50 dark:bg-red-900/20': !requiredGPAResult.achievable
          }">
          <div class="flex items-start gap-3">
            <svg v-if="requiredGPAResult.achievable" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            <div class="flex-1">
              <p class="font-semibold mb-2" :class="{ 'text-green-800 dark:text-green-200': requiredGPAResult.achievable, 'text-red-800 dark:text-red-200': !requiredGPAResult.achievable }">
                {{ requiredGPAResult.message }}
              </p>
              
              <div v-if="requiredGPAResult.achievable && requiredGPAResult.requiredGPA > 0" class="space-y-2 text-sm">
                <p>Required GPA: <span class="font-bold text-lg">{{ requiredGPAResult.requiredGPA }}</span></p>
                <p>Completed Credits: {{ requiredGPAResult.completedCredits }} / 162</p>
                <p>Remaining Credits: {{ requiredGPAResult.remainingCredits }}</p>
              </div>
              
              <div v-if="!requiredGPAResult.achievable && requiredGPAResult.requiredGPA > 4" class="text-sm mt-2">
                <p>You would need a GPA of <span class="font-bold">{{ requiredGPAResult.requiredGPA }}</span> which exceeds the maximum of 4.00</p>
                <p class="mt-2 opacity-75">Consider a more realistic target or focus on improving your current performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Classification Info -->
      <div class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200 bg-white': !store.darkMode, 'border-gray-700 bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Your Current Classification
        </h3>
        
        <div v-if="store.calculateCGPA > 0" class="text-center p-6 rounded-lg"
          :class="{
            'bg-green-50 dark:bg-green-900/20': currentClassification.color === 'green',
            'bg-blue-50 dark:bg-blue-900/20': currentClassification.color === 'blue',
            'bg-yellow-50 dark:bg-yellow-900/20': currentClassification.color === 'yellow',
            'bg-orange-50 dark:bg-orange-900/20': currentClassification.color === 'orange'
          }">
          <p class="text-4xl font-bold mb-2"
            :class="{
              'text-green-700 dark:text-green-300': currentClassification.color === 'green',
              'text-blue-700 dark:text-blue-300': currentClassification.color === 'blue',
              'text-yellow-700 dark:text-yellow-300': currentClassification.color === 'yellow',
              'text-orange-700 dark:text-orange-300': currentClassification.color === 'orange'
            }">
            {{ currentClassification.class }}
          </p>
          <p v-if="currentClassification.honor" class="text-lg font-medium mb-3"
            :class="{
              'text-green-600 dark:text-green-400': currentClassification.color === 'green'
            }">
            {{ currentClassification.honor }}
          </p>
          <p class="text-2xl font-bold">CGPA: {{ store.calculateCGPA.toFixed(2) }}</p>
        </div>
        <div v-else class="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p class="text-gray-500 dark:text-gray-400">Complete at least one semester to see your classification</p>
        </div>
        
        <!-- Classification Guide -->
        <div class="mt-6 space-y-2 text-sm">
          <p class="font-semibold mb-3">Bangladesh University Grading System:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div class="flex justify-between p-2 rounded bg-green-50 dark:bg-green-900/20">
              <span class="font-medium">First Class (Distinction)</span>
              <span>≥ 3.50</span>
            </div>
            <div class="flex justify-between p-2 rounded bg-green-50 dark:bg-green-900/20">
              <span class="font-medium">First Class</span>
              <span>3.00 - 3.49</span>
            </div>
            <div class="flex justify-between p-2 rounded bg-blue-50 dark:bg-blue-900/20">
              <span class="font-medium">Second Class</span>
              <span>2.50 - 2.99</span>
            </div>
            <div class="flex justify-between p-2 rounded bg-yellow-50 dark:bg-yellow-900/20">
              <span class="font-medium">Third Class</span>
              <span>2.00 - 2.49</span>
            </div>
          </div>
        </div>
      </div>

      <!-- GPA Statistics -->
      <div class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200 bg-white': !store.darkMode, 'border-gray-700 bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Performance Statistics
        </h3>
        
        <div v-if="gpaStats.completedSemesters > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-center">
            <p class="text-sm opacity-75 mb-1">Highest GPA</p>
            <p class="text-2xl font-bold text-blue-600">{{ gpaStats.highest }}</p>
          </div>
          
          <div class="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-center">
            <p class="text-sm opacity-75 mb-1">Average GPA</p>
            <p class="text-2xl font-bold text-green-600">{{ gpaStats.average }}</p>
          </div>
          
          <div class="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-center">
            <p class="text-sm opacity-75 mb-1">Lowest GPA</p>
            <p class="text-2xl font-bold text-yellow-600">{{ gpaStats.lowest }}</p>
          </div>
          
          <div class="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-center">
            <p class="text-sm opacity-75 mb-1">Trend</p>
            <div class="flex items-center justify-center gap-2">
              <p class="text-2xl font-bold text-purple-600">{{ gpaStats.trend }}</p>
              <svg v-if="gpaStats.trend === 'Improving'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <svg v-else-if="gpaStats.trend === 'Declining'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
          </div>
        </div>
        <div v-else class="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p class="text-gray-500 dark:text-gray-400">Complete at least one semester to see statistics</p>
        </div>
      </div>

      <!-- Semester Performance Trend -->
      <div v-if="semesterTrend.length > 0" class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200 bg-white': !store.darkMode, 'border-gray-700 bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          Semester Performance Trend
        </h3>
        
        <div class="space-y-3">
          <div v-for="semester in semesterTrend" :key="semester.semester" 
            class="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:shadow"
            :class="{ 'bg-gray-50 dark:bg-gray-700': !store.darkMode, 'bg-gray-700': store.darkMode }">
            <div class="flex-shrink-0 w-20">
              <span class="font-semibold">Sem {{ semester.semester }}</span>
            </div>
            
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <div class="h-4 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden flex-1">
                  <div class="h-full rounded-full transition-all duration-500"
                    :style="{ width: `${(semester.gpa / 4) * 100}%` }"
                    :class="{
                      'bg-green-500': semester.gpa >= 3.50,
                      'bg-blue-500': semester.gpa >= 3.00 && semester.gpa < 3.50,
                      'bg-yellow-500': semester.gpa >= 2.50 && semester.gpa < 3.00,
                      'bg-orange-500': semester.gpa >= 2.00 && semester.gpa < 2.50,
                      'bg-red-500': semester.gpa < 2.00
                    }">
                  </div>
                </div>
                <span class="font-bold text-lg w-12 text-right">{{ semester.gpa.toFixed(2) }}</span>
              </div>
            </div>
            
            <div class="flex-shrink-0 text-sm opacity-75 w-16 text-right">
              {{ semester.credits }} cr
            </div>
          </div>
        </div>
      </div>

      <!-- Grade Distribution -->
      <div v-if="Object.values(gradeDistribution).some(count => count > 0)" 
        class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200 bg-white': !store.darkMode, 'border-gray-700 bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
          Grade Distribution
        </h3>
        
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div v-for="(count, grade) in gradeDistribution" :key="grade" 
            class="p-3 rounded-lg text-center transition-all duration-200 hover:scale-105"
            :class="getGradeColorClass(String(grade))">
            <p class="text-2xl font-bold">{{ count }}</p>
            <p class="text-sm opacity-75">{{ grade }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCGPAStore } from '@/stores/cgpa'

const store = useCGPAStore()
const targetCGPA = ref<number | null>(null)
const requiredGPAResult = ref<any>(null)

const currentClassification = computed(() => {
  return store.getClassification(store.calculateCGPA)
})

const gpaStats = computed(() => store.getGPAStats)
const semesterTrend = computed(() => store.getSemesterTrend)
const gradeDistribution = computed(() => store.getGradeDistribution)

const calculateRequired = () => {
  if (targetCGPA.value && targetCGPA.value > 0 && targetCGPA.value <= 4) {
    requiredGPAResult.value = store.calculateRequiredGPA(targetCGPA.value)
  }
}

const getGradeColorClass = (grade: string) => {
  if (['A+', 'A', 'A-'].includes(grade)) {
    return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
  } else if (['B+', 'B', 'B-'].includes(grade)) {
    return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
  } else if (['C+', 'C'].includes(grade)) {
    return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
  } else if (grade === 'D') {
    return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200'
  }
  return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
}
</script>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
