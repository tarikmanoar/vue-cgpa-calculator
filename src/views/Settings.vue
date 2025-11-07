<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2">Customize your GPA calculator experience</p>
    </div>

    <!-- Department Selection -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Department</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Select your department to view the correct curriculum and credits
          </p>
        </div>

        <div class="space-y-4">
          <!-- Current Department Display -->
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-medium text-blue-900 dark:text-blue-100">Current Department</h3>
                <div class="mt-2">
                  <p class="text-lg font-semibold text-blue-700 dark:text-blue-300">
                    {{ store.activeDepartment.name }}
                  </p>
                  <p class="text-sm text-blue-600 dark:text-blue-400 mt-1">
                    {{ store.activeDepartment.totalSemesters }} Semesters • {{ store.activeDepartment.totalCredits }} Total Credits
                  </p>
                  <p v-if="store.activeDepartment.description" class="text-sm text-blue-600 dark:text-blue-400 mt-1">
                    {{ store.activeDepartment.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Department Selector -->
          <div>
            <label for="department" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Change Department
            </label>
            <select
              id="department"
              v-model="selectedDepartmentId"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              @change="handleDepartmentChange"
            >
              <option v-for="dept in store.departmentList" :key="dept.id" :value="dept.id">
                {{ dept.name }} ({{ dept.shortName }})
              </option>
            </select>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              ⚠️ Changing department will not delete your saved data, but course codes may differ between departments
            </p>
          </div>

          <!-- Change Button -->
          <button
            v-if="selectedDepartmentId !== store.activeDepartmentId"
            @click="confirmDepartmentChange"
            class="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Apply Department Change
          </button>
        </div>
      </div>
    </div>

    <!-- Theme Settings -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Appearance</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Customize the visual appearance of the app
          </p>
        </div>

        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium text-gray-900 dark:text-gray-100">Dark Mode</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Toggle between light and dark theme</p>
          </div>
          <button
            @click="store.toggleDarkMode()"
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :class="store.darkMode ? 'bg-blue-600' : 'bg-gray-200'"
            role="switch"
            :aria-checked="store.darkMode"
          >
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
              :class="store.darkMode ? 'translate-x-6' : 'translate-x-1'"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div
      v-if="showSuccess"
      class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
    >
      <div class="flex items-start space-x-3">
        <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="text-sm font-medium text-green-900 dark:text-green-100">Settings Updated</h3>
          <p class="text-sm text-green-700 dark:text-green-300 mt-1">Your preferences have been saved successfully.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCGPAStore } from '@/stores/cgpa'
import type { DepartmentId } from '@/data/departments'

const store = useCGPAStore()
const selectedDepartmentId = ref<DepartmentId>(store.activeDepartmentId)
const showSuccess = ref(false)

onMounted(() => {
  selectedDepartmentId.value = store.activeDepartmentId
})

const handleDepartmentChange = () => {
  // Just update the select value, actual change happens on button click
}

const confirmDepartmentChange = async () => {
  if (selectedDepartmentId.value !== store.activeDepartmentId) {
    await store.setDepartment(selectedDepartmentId.value)
    
    // Show success message
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }
}
</script>
