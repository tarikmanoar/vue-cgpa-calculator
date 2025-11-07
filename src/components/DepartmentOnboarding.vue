<template>
  <div v-if="showOnboarding" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="text-center mb-6">
        <div class="text-6xl mb-4">🎓</div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Welcome to FCUB CGPA Calculator
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Your offline-first GPA calculator for Bangladesh university students
        </p>
      </div>

      <!-- Department Selection -->
      <div class="space-y-4 mb-6">
        <div>
          <label for="onboarding-department" class="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Select Your Department
          </label>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Choose your department to get started with the correct curriculum and credit structure
          </p>
        </div>

        <div class="space-y-2">
          <button
            v-for="dept in departmentList"
            :key="dept.id"
            @click="selectedDept = dept.id as DepartmentId"
            class="w-full text-left px-4 py-4 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="selectedDept === dept.id 
              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold text-gray-900 dark:text-gray-100">
                  {{ dept.name }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {{ dept.totalSemesters }} Semesters • {{ dept.totalCredits }} Credits
                </p>
              </div>
              <div v-if="selectedDept === dept.id" class="text-blue-600 dark:text-blue-400">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Features List -->
      <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6">
        <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">✨ Features</h3>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start">
            <span class="text-green-600 dark:text-green-400 mr-2">✓</span>
            <span>Calculate semester GPA and overall CGPA</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 dark:text-green-400 mr-2">✓</span>
            <span>Bangladesh grading classification (First Class with Distinction, etc.)</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 dark:text-green-400 mr-2">✓</span>
            <span>Required GPA calculator for target planning</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 dark:text-green-400 mr-2">✓</span>
            <span>Performance analytics and statistics</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 dark:text-green-400 mr-2">✓</span>
            <span>Export/import data for backup</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 dark:text-green-400 mr-2">✓</span>
            <span>Works completely offline - all data stored on your device</span>
          </li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          @click="completeOnboarding"
          :disabled="!selectedDept"
          class="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Get Started
        </button>
      </div>

      <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
        You can change your department anytime from Settings
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCGPAStore } from '@/stores/cgpa'
import { departmentList } from '@/data/departments'
import type { DepartmentId } from '@/data/departments'

const store = useCGPAStore()
const selectedDept = ref<DepartmentId | null>(null)
const showOnboarding = ref(false)

onMounted(() => {
  // Show onboarding only on first run
  if (store.isFirstRun) {
    showOnboarding.value = true
    // Set default department selection to CSE
    selectedDept.value = 'cse'
  }
})

const completeOnboarding = async () => {
  if (selectedDept.value) {
    await store.setDepartment(selectedDept.value)
    showOnboarding.value = false
  }
}
</script>
