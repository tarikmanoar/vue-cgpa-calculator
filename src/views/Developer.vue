<!-- Developer Profile Page -->
<template>
  <div>
    <h2 class="text-3xl font-bold text-center mb-6">Developer Profile</h2>
    
    <div class="space-y-10">
      <!-- Developer information with card layout -->
      <div class="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div class="w-40 h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img 
            src="https://avatars.githubusercontent.com/u/17971022?v=4" 
            alt="Developer Profile" 
            class="w-full h-full object-cover"
            loading="lazy"
            width="160"
            height="160"
          />
        </div>
        
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-2xl font-bold">Tarik Manoar</h3>
          <p class="text-lg opacity-75 mb-3">Full Stack Developer</p>
          
          <div class="space-y-2">
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Software Engineer at DeshiSmash</span>
            </p>
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:tarikmanoar@duck.com" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">tarikmanoar@duck.com</a>
            </p>
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <a href="https://tarikmanoar.github.io" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">tarikmanoar.github.io</a>
            </p>
          </div>
          
          <div class="mt-4 flex justify-center md:justify-start gap-3">
            <a href="https://github.com/tarikmanoar" target="_blank" rel="noopener" class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/tarikmanoar" target="_blank" rel="noopener" class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://x.com/tarikmanoar" target="_blank" rel="noopener" class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- About section -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">About</h3>
        <p>
          I'm a passionate software developer with expertise in web technologies and a strong focus on creating 
          accessible, performant applications. With over 5 years of experience in the industry, I've worked on a 
          wide range of projects including e-commerce platforms, educational tools, and enterprise applications.
        </p>
        <p>
          My goal is to build software that not only meets functional requirements but also provides an excellent
          user experience for everyone, regardless of their abilities or devices used to access the application.
        </p>
      </div>

      <!-- Skills section -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Technical Skills</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Frontend Development</span>
                <span class="text-sm">95%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Vue.js</span>
                <span class="text-sm">90%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">TypeScript</span>
                <span class="text-sm">85%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
          
          <div class="space-y-3">
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Backend Development</span>
                <span class="text-sm">80%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full" style="width: 80%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Web Accessibility</span>
                <span class="text-sm">90%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Performance Optimization</span>
                <span class="text-sm">85%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact form -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Get in Touch</h3>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block mb-1 font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="contactForm.name"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-200"
              :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label for="email" class="block mb-1 font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="contactForm.email"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-200"
              :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label for="message" class="block mb-1 font-medium">Message</label>
            <textarea 
              id="message" 
              v-model="contactForm.message"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-200"
              :class="{ 'bg-white border-gray-300': !store.darkMode, 'bg-gray-700 border-gray-600': store.darkMode }"
              placeholder="Your message"
              rows="4"
              required
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit"
              class="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center gap-2">
                <svg class="animate-spin -ml-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </div>
        </form>
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
import { ref, reactive } from 'vue'
import { useCGPAStore } from '@/stores/cgpa'

const store = useCGPAStore()
const showToast = ref(false)
const toastMessage = ref('')
const isSubmitting = ref(false)

// Contact form state
const contactForm = reactive({
  name: '',
  email: '',
  message: ''
})

// Handle form submission
const handleSubmit = () => {
  isSubmitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    // Reset form
    contactForm.name = ''
    contactForm.email = ''
    contactForm.message = ''
    
    // Show success message
    toastMessage.value = 'Your message has been sent successfully!'
    showToast.value = true
    isSubmitting.value = false
    
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }, 1500)
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