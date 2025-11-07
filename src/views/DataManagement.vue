<!-- Data Management Page - Export/Import/Clear Data -->
<template>
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 relative overflow-hidden">
      <span class="relative z-10 inline-block transform transition-transform animate-float">Data Management</span>
      <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h2>
    
    <div class="space-y-6">
      <!-- Export Data Section -->
      <div class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200 bg-white': !store.darkMode, 'border-gray-700 bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export Your Data
        </h3>
        
        <p class="text-sm mb-4 opacity-75">
          Download your GPA data as a JSON file. You can use this to backup your data or transfer it to another device.
        </p>
        
        <button 
          @click="handleExport"
          class="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          Export Data
        </button>
        
        <div v-if="exportInfo" class="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-sm">
          <p class="font-medium mb-1">Export Information:</p>
          <ul class="list-disc list-inside space-y-1 opacity-75">
            <li>{{ exportInfo.courseCount }} course grades saved</li>
            <li>{{ exportInfo.semesterCount }} semester GPAs recorded</li>
            <li>Last export: {{ exportInfo.lastExport }}</li>
          </ul>
        </div>
      </div>

      <!-- Import Data Section -->
      <div class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
        :class="{ 'border-gray-200 bg-white': !store.darkMode, 'border-gray-700 bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Import Data
        </h3>
        
        <p class="text-sm mb-4 opacity-75">
          Import previously exported data. This will replace your current data.
        </p>
        
        <div class="space-y-4">
          <div class="border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200"
            :class="{ 
              'border-gray-300 hover:border-blue-400': !store.darkMode,
              'border-gray-600 hover:border-blue-500': store.darkMode,
              'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging
            }"
            @dragover.prevent="isDragging = true"
            @dragleave="isDragging = false"
            @drop.prevent="handleDrop">
            <input 
              type="file" 
              ref="fileInput"
              accept=".json"
              @change="handleFileSelect"
              class="hidden"
              id="file-upload"
            />
            
            <label for="file-upload" class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              
              <p class="font-medium mb-1">Drop your JSON file here</p>
              <p class="text-sm opacity-75">or click to browse</p>
            </label>
          </div>
          
          <button 
            v-if="selectedFile"
            @click="handleImport"
            :disabled="isImporting"
            class="w-full px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg v-if="!isImporting" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <svg v-else class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isImporting ? 'Importing...' : `Import ${selectedFile.name}` }}</span>
          </button>
        </div>
      </div>

      <!-- Clear Data Section -->
      <div class="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg border-red-200 dark:border-red-800"
        :class="{ 'bg-white': !store.darkMode, 'bg-gray-800': store.darkMode }">
        <h3 class="text-xl font-semibold mb-4 flex items-center text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear All Data
        </h3>
        
        <p class="text-sm mb-4 opacity-75">
          Permanently delete all your GPA data. This action cannot be undone.
        </p>
        
        <div v-if="!showClearConfirm">
          <button 
            @click="showClearConfirm = true"
            class="w-full sm:w-auto px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Clear All Data
          </button>
        </div>
        
        <div v-else class="space-y-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p class="font-medium text-red-800 dark:text-red-200">Are you sure you want to delete all your data?</p>
          <p class="text-sm opacity-75">This will remove all course grades and semester GPAs. Make sure to export your data first if you want to keep a backup.</p>
          
          <div class="flex flex-col sm:flex-row gap-3">
            <button 
              @click="handleClearData"
              class="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
            >
              Yes, Delete Everything
            </button>
            <button 
              @click="showClearConfirm = false"
              class="flex-1 px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <!-- Privacy Notice -->
      <div class="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-sm">
        <h4 class="font-semibold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Privacy & Security
        </h4>
        <ul class="space-y-1 opacity-75 list-disc list-inside">
          <li>All your data is stored locally on your device using IndexedDB</li>
          <li>No data is sent to any server or third party</li>
          <li>Export files contain only your GPA data in JSON format</li>
          <li>Keep your export files secure as they contain your academic information</li>
        </ul>
      </div>
    </div>
    
    <!-- Toast notification -->
    <transition
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-y-10 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transform transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-10 opacity-0"
    >
      <div 
        v-if="showToast" 
        class="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 max-w-[90%] sm:max-w-md"
        :class="[
          toastType === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        ]"
        role="alert"
      >
        <svg v-if="toastType === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        
        <span>{{ toastMessage }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCGPAStore } from '@/stores/cgpa'

const store = useCGPAStore()
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref<'success' | 'error'>('success')
const showClearConfirm = ref(false)
const selectedFile = ref<File | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const isImporting = ref(false)

const exportInfo = computed(() => {
  const courseCount = Object.keys(store.courseGrades).length
  const semesterCount = Object.keys(store.semesterGPAs).length
  
  if (courseCount === 0 && semesterCount === 0) return null
  
  return {
    courseCount,
    semesterCount,
    lastExport: new Date().toLocaleDateString()
  }
})

const handleExport = () => {
  try {
    const data = store.exportData()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `fcub-cgpa-backup-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    showToastMessage('Data exported successfully!', 'success')
  } catch (error) {
    showToastMessage('Failed to export data', 'error')
  }
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0]
  }
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  
  if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
    selectedFile.value = event.dataTransfer.files[0]
  }
}

const handleImport = async () => {
  if (!selectedFile.value) return
  
  isImporting.value = true
  
  try {
    const text = await selectedFile.value.text()
    const result = await store.importData(text)
    
    if (result.success) {
      showToastMessage(result.message, 'success')
      selectedFile.value = null
      if (fileInput.value) {
        fileInput.value.value = ''
      }
    } else {
      showToastMessage(result.message, 'error')
    }
  } catch (error) {
    showToastMessage('Failed to read file', 'error')
  } finally {
    isImporting.value = false
  }
}

const handleClearData = async () => {
  const result = await store.clearAllData()
  
  if (result.success) {
    showToastMessage(result.message, 'success')
    showClearConfirm.value = false
  } else {
    showToastMessage(result.message, 'error')
  }
}

const showToastMessage = (message: string, type: 'success' | 'error') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
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
