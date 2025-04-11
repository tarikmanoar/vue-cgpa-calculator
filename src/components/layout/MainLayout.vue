<!-- Layout Component with Navigation, Theme Toggle and Skip Link for Accessibility -->
<template>
  <div class="min-h-screen transition-colors duration-200" :class="{ 'dark': store.darkMode, 'bg-gray-100 text-gray-900': !store.darkMode, 'bg-gray-900 text-gray-100': store.darkMode }">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-600 focus:text-white focus:z-50">
      Skip to main content
    </a>
    
    <!-- Offline indicator -->
    <div v-if="store.isOffline" class="fixed top-0 left-0 right-0 bg-yellow-500 text-black py-2 px-4 text-center z-50">
      <p class="flex items-center justify-center gap-2">
        <span class="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
        You're currently offline. Your changes will be saved when you reconnect.
      </p>
    </div>
    
    <header class="shadow-md sticky top-0 z-40" :class="{ 'bg-white': !store.darkMode, 'bg-gray-800': store.darkMode }">
      <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 class="text-xl font-bold">
            <router-link to="/" class="flex items-center gap-2">
              <span aria-hidden="true" class="text-blue-600">📊</span>
              <span>FCUB CGPA</span>
            </router-link>
          </h1>
        </div>
        
        <nav aria-label="Main Navigation">
          <ul class="flex items-center space-x-2 sm:space-x-4">
            <li>
              <router-link 
                to="/semester-gpa" 
                class="px-3 py-2 rounded-lg transition-colors duration-150"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/semester-gpa'
                }"
                active-class="bg-blue-600 text-white"
              >
                Semester GPA
              </router-link>
            </li>
            <li>
              <router-link 
                to="/overall-cgpa" 
                class="px-3 py-2 rounded-lg transition-colors duration-150"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/overall-cgpa'
                }"
                active-class="bg-blue-600 text-white"
              >
                Overall CGPA
              </router-link>
            </li>
            <li>
              <router-link 
                to="/developer" 
                class="px-3 py-2 rounded-lg transition-colors duration-150"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/developer'
                }"
                active-class="bg-blue-600 text-white"
              >
                Developer
              </router-link>
            </li>
            <li>
              <button 
                @click="store.toggleDarkMode"
                class="p-2 rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
                :class="{ 
                  'hover:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700': store.darkMode
                }"
                aria-label="Toggle dark mode"
              >
                <svg v-if="store.darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main id="main-content" class="py-6 px-4">
      <div class="max-w-6xl mx-auto">
        <div 
          class="rounded-xl shadow-lg p-6 transition-colors duration-200" 
          :class="{ 'bg-white': !store.darkMode, 'bg-gray-800': store.darkMode }"
        >
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </main>
    
    <footer class="py-6 mt-8 text-center border-t transition-colors duration-200" :class="{ 'bg-white border-gray-200': !store.darkMode, 'bg-gray-800 border-gray-700': store.darkMode }">
      <div class="max-w-6xl mx-auto px-4">
        <p class="text-sm opacity-75">
          © {{ new Date().getFullYear() }} FCUB CGPA Calculator | Developed with ❤️
        </p>
      </div>
    </footer>
    
    <!-- Pending Sync Indicator -->
    <div 
      v-if="store.pendingSync" 
      class="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
    >
      <span class="inline-block w-2 h-2 bg-white rounded-full animate-ping"></span>
      <span>Syncing data...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// We need vue-router for the $route in the template
// @ts-ignore
import { useRoute } from 'vue-router'
import { useCGPAStore } from '@/stores/cgpa'
import { onMounted, onUnmounted } from 'vue'

const store = useCGPAStore()

// Handle online/offline status
const updateOnlineStatus = () => {
  store.isOffline = !navigator.onLine
  
  // If we're back online, try to sync pending data
  if (navigator.onLine && store.pendingSync) {
    store.syncPendingData()
  }
}

onMounted(() => {
  // Load data from IndexedDB
  store.loadData()
  
  // Set initial online status
  updateOnlineStatus()
  
  // Add event listeners for online/offline events
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
})

onUnmounted(() => {
  // Remove event listeners
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>