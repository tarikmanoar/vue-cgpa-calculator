<!-- Not Found Page -->
<template>
  <div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="mb-6 text-6xl font-bold text-blue-600">404</div>
    
    <h1 class="mb-4 text-2xl font-bold">Page Not Found</h1>
    
    <p class="mb-8 max-w-md text-gray-600 dark:text-gray-400">
      The page you are looking for doesn't exist or has been moved.
    </p>
    
    <router-link 
      to="/" 
      class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Return to Home
    </router-link>
  </div>
</template>