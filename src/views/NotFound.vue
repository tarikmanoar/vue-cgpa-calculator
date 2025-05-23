<!-- Not Found Page with Enhanced Responsive Design -->
<template>
  <div class="flex min-h-[70vh] flex-col items-center justify-center py-12 px-4 text-center">
    <!-- Visual illustration for 404 error -->
    <div class="mb-8 motion-safe:animate-float">
      <!-- SVG Illustration with gradient effect -->
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="120" viewBox="0 0 200 140" class="mx-auto" aria-hidden="true">
        <defs>
          <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#1e40af" />
          </linearGradient>
        </defs>
        <!-- Stylized 404 text -->
        <g fill="url(#errorGradient)">
          <path d="M40,40 L55,40 L55,70 L65,70 L65,85 L55,85 L55,100 L40,100 L40,85 L20,85 L20,70 L40,70 L40,40 Z M40,55 L35,55 L35,70 L40,70 L40,55 Z" class="motion-safe:animate-pulse" />
          <circle cx="100" cy="70" r="30" class="motion-safe:animate-bounce opacity-90" />
          <path d="M140,40 L155,40 L155,70 L165,70 L165,85 L155,85 L155,100 L140,100 L140,85 L120,85 L120,70 L140,70 L140,40 Z M140,55 L135,55 L135,70 L140,70 L140,55 Z" class="motion-safe:animate-pulse" />
        </g>
        <!-- Decorative elements -->
        <circle cx="35" cy="30" r="3" fill="#3b82f6" class="motion-safe:animate-pulse" />
        <circle cx="165" cy="110" r="3" fill="#3b82f6" class="motion-safe:animate-pulse" />
        <circle cx="190" cy="40" r="2" fill="#3b82f6" class="motion-safe:animate-pulse" />
        <circle cx="10" cy="100" r="2" fill="#3b82f6" class="motion-safe:animate-pulse" />
      </svg>
    </div>
    
    <!-- Page Title with Entrance Animation -->
    <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold motion-safe:animate-fadeIn">
      Page Not Found
    </h1>
    
    <!-- Error Message with Responsive Width -->
    <p class="mb-8 max-w-md mx-auto text-gray-600 dark:text-gray-400 motion-safe:animate-fadeIn motion-safe:animation-delay-200">
      The page you are looking for doesn't exist or has been moved to another location.
    </p>
    
    <!-- Interactive Home Button with Enhanced Transitions -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center motion-safe:animate-fadeIn motion-safe:animation-delay-400">
      <router-link 
        to="/" 
        class="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 motion-safe:hover:-translate-y-1 motion-safe:transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 motion-safe:transition-transform duration-300 motion-safe:group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Return to Home
      </router-link>
      
      <button 
        @click="goBack" 
        class="group inline-flex items-center gap-2 rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 motion-safe:hover:-translate-y-1 motion-safe:transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-180 motion-safe:transition-transform duration-300 motion-safe:group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Navigation functionality
const goBack = () => {
  window.history.length > 1 ? window.history.back() : window.location.href = "/"
}
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* Utility classes for animations that respect prefers-reduced-motion */
.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

/* Ensure animations are disabled for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .motion-safe\:animate-fadeIn,
  .motion-safe\:animate-float,
  .motion-safe\:animate-pulse,
  .motion-safe\:animate-bounce {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  
  .motion-safe\:animation-delay-200,
  .motion-safe\:animation-delay-400 {
    opacity: 1 !important;
    animation-delay: 0s !important;
  }
}
</style>