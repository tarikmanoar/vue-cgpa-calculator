<!-- Layout Component with Navigation, Theme Toggle and Skip Link for Accessibility -->
<template>
  <div class="min-h-screen transition-colors duration-200" :class="{ 'dark': store.darkMode, 'bg-gray-100 text-gray-900': !store.darkMode, 'bg-gray-900 text-gray-100': store.darkMode }">
    <!-- Department Onboarding Modal -->
    <DepartmentOnboarding />
    
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
        <div class="flex-shrink-0">
          <h1 class="text-xl font-bold">
            <router-link to="/" class="flex items-center gap-2" aria-label="FCUB CGPA Homepage">
              <span aria-hidden="true" class="text-blue-600 animate-pulse">📊</span>
              <span class="hidden sm:inline">FCUB CGPA</span>
              <span class="sm:hidden">CGPA</span>
            </router-link>
          </h1>
        </div>
        
        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden p-2 rounded-md transition-colors"
          :class="{ 
            'hover:bg-gray-200': !store.darkMode, 
            'hover:bg-gray-700': store.darkMode 
          }"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop Navigation Menu -->
        <nav aria-label="Main Navigation" class="hidden md:block">
          <ul class="flex items-center space-x-2 sm:space-x-4">
            <li>
              <router-link 
                to="/" 
                class="px-3 py-2 rounded-lg transition-colors duration-150 relative"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/'
                }"
                active-class="bg-blue-600 text-white"
              >
                <span>Semester GPA</span>
                <span 
                  v-if="$route.path === '/'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transition-transform origin-left transform"
                  :class="{'scale-x-100': $route.path === '/', 'scale-x-0': $route.path !== '/'}"
                ></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/overall-cgpa" 
                class="px-3 py-2 rounded-lg transition-colors duration-150 relative"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/overall-cgpa'
                }"
                active-class="bg-blue-600 text-white"
              >
                <span>Overall CGPA</span>
                <span 
                  v-if="$route.path === '/overall-cgpa'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transition-transform origin-left transform"
                  :class="{'scale-x-100': $route.path === '/overall-cgpa', 'scale-x-0': $route.path !== '/overall-cgpa'}"
                ></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/statistics" 
                class="px-3 py-2 rounded-lg transition-colors duration-150 relative"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/statistics'
                }"
                active-class="bg-blue-600 text-white"
              >
                <span>Statistics</span>
                <span 
                  v-if="$route.path === '/statistics'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transition-transform origin-left transform"
                  :class="{'scale-x-100': $route.path === '/statistics', 'scale-x-0': $route.path !== '/statistics'}"
                ></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/data-management" 
                class="px-3 py-2 rounded-lg transition-colors duration-150 relative"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/data-management'
                }"
                active-class="bg-blue-600 text-white"
              >
                <span>Data</span>
                <span 
                  v-if="$route.path === '/data-management'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transition-transform origin-left transform"
                  :class="{'scale-x-100': $route.path === '/data-management', 'scale-x-0': $route.path !== '/data-management'}"
                ></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/settings" 
                class="px-3 py-2 rounded-lg transition-colors duration-150 relative"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/settings'
                }"
                active-class="bg-blue-600 text-white"
              >
                <span>Settings</span>
                <span 
                  v-if="$route.path === '/settings'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transition-transform origin-left transform"
                  :class="{'scale-x-100': $route.path === '/settings', 'scale-x-0': $route.path !== '/settings'}"
                ></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/developer" 
                class="px-3 py-2 rounded-lg transition-colors duration-150 relative"
                :class="{ 
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode,
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode,
                  'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700': $route.path === '/developer'
                }"
                active-class="bg-blue-600 text-white"
              >
                <span>Developer</span>
                <span 
                  v-if="$route.path === '/developer'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transition-transform origin-left transform"
                  :class="{'scale-x-100': $route.path === '/developer', 'scale-x-0': $route.path !== '/developer'}"
                ></span>
              </router-link>
            </li>
            <li>
              <button 
                @click="store.toggleDarkMode"
                class="p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:rotate-12"
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
      
      <!-- Mobile Navigation Menu -->
      <transition 
        enter-active-class="transition-all duration-200 ease-out" 
        enter-from-class="transform -translate-y-10 opacity-0" 
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition-all duration-200 ease-in" 
        leave-from-class="transform translate-y-0 opacity-100" 
        leave-to-class="transform -translate-y-10 opacity-0"
      >
        <nav 
          v-if="mobileMenuOpen" 
          class="md:hidden"
          :class="{ 'bg-white border-gray-100': !store.darkMode, 'bg-gray-800 border-gray-700': store.darkMode }"
        >
          <ul class="px-2 pb-3 space-y-1">
            <li>
              <router-link 
                to="/" 
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-lg transition-colors duration-150 font-medium"
                :class="{ 
                  'bg-blue-600 text-white': $route.path === '/',
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode && $route.path !== '/',
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode && $route.path !== '/',
                }"
                active-class="bg-blue-600 text-white"
              >
                Semester GPA
              </router-link>
            </li>
            <li>
              <router-link 
                to="/overall-cgpa" 
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-lg transition-colors duration-150 font-medium"
                :class="{ 
                  'bg-blue-600 text-white': $route.path === '/overall-cgpa',
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode && $route.path !== '/overall-cgpa',
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode && $route.path !== '/overall-cgpa',
                }"
                active-class="bg-blue-600 text-white"
              >
                Overall CGPA
              </router-link>
            </li>
            <li>
              <router-link 
                to="/statistics" 
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-lg transition-colors duration-150 font-medium"
                :class="{ 
                  'bg-blue-600 text-white': $route.path === '/statistics',
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode && $route.path !== '/statistics',
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode && $route.path !== '/statistics',
                }"
                active-class="bg-blue-600 text-white"
              >
                Statistics
              </router-link>
            </li>
            <li>
              <router-link 
                to="/data-management" 
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-lg transition-colors duration-150 font-medium"
                :class="{ 
                  'bg-blue-600 text-white': $route.path === '/data-management',
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode && $route.path !== '/data-management',
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode && $route.path !== '/data-management',
                }"
                active-class="bg-blue-600 text-white"
              >
                Data Management
              </router-link>
            </li>
            <li>
              <router-link 
                to="/settings" 
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-lg transition-colors duration-150 font-medium"
                :class="{ 
                  'bg-blue-600 text-white': $route.path === '/settings',
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode && $route.path !== '/settings',
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode && $route.path !== '/settings',
                }"
                active-class="bg-blue-600 text-white"
              >
                Settings
              </router-link>
            </li>
            <li>
              <router-link 
                to="/developer" 
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-lg transition-colors duration-150 font-medium"
                :class="{ 
                  'bg-blue-600 text-white': $route.path === '/developer',
                  'hover:bg-gray-200 focus:bg-gray-200': !store.darkMode && $route.path !== '/developer',
                  'hover:bg-gray-700 focus:bg-gray-700': store.darkMode && $route.path !== '/developer',
                }"
                active-class="bg-blue-600 text-white"
              >
                Developer
              </router-link>
            </li>
            <li class="flex justify-between items-center px-3 py-2">
              <span class="font-medium">Dark Mode</span>
              <button 
                @click="store.toggleDarkMode"
                class="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 animate-pulse"
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
      </transition>
    </header>
    
    <main id="main-content" class="py-4 sm:py-6 px-3 sm:px-4 flex-grow">
      <div class="max-w-6xl mx-auto">
        <div 
          class="rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-200 transform hover:shadow-xl" 
          :class="{ 'bg-white': !store.darkMode, 'bg-gray-800': store.darkMode }"
        >
          <router-view v-slot="{ Component }">
            <transition 
              name="route-change" 
              mode="out-in"
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 transform translate-y-4"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform -translate-y-4"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </main>
    
    <footer class="py-4 sm:py-6 mt-6 sm:mt-8 text-center border-t transition-colors duration-200" :class="{ 'bg-white border-gray-200': !store.darkMode, 'bg-gray-800 border-gray-700': store.darkMode }">
      <div class="max-w-6xl mx-auto px-4">
        <p class="text-sm opacity-75">
          © {{ new Date().getFullYear() }} FCUB CGPA Calculator | Developed with <span class="text-red-500 inline-block animate-pulse">❤️</span>
        </p>
        <div class="mt-2 text-xs opacity-60">
          <a href="#" class="hover:underline focus:outline-none focus:underline">Privacy Policy</a> | 
          <a href="#" class="hover:underline focus:outline-none focus:underline">Terms of Service</a>
        </div>
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
import { onMounted, onUnmounted, ref, watch } from 'vue'
import DepartmentOnboarding from '@/components/DepartmentOnboarding.vue'

const store = useCGPAStore()
const route = useRoute()
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

// Close mobile menu when escape key is pressed
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }
}

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
  
  // Add event listener for escape key
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  // Remove event listeners
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
  window.removeEventListener('keydown', handleEscape)
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

/* Enhanced animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes slide-in {
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out forwards;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>