<!-- Developer Profile Page -->
<template>
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 relative overflow-hidden">
      <span class="relative z-10 inline-block transform transition-transform animate-float">Developer Profile</span>
      <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </h2>
    
    <div class="space-y-8 sm:space-y-10">
      <!-- Developer information with card layout -->
      <div class="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div class="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0 ring-4 ring-blue-100 dark:ring-blue-900 relative group">
          <img 
            src="https://avatars.githubusercontent.com/u/17971022?v=4" 
            alt="Developer Profile" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform-gpu"
            loading="lazy"
            width="160"
            height="160"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Tarik Manoar</h3>
          <p class="text-lg opacity-75 mb-4">Full Stack Developer</p>
          
          <div class="space-y-3 animate-slide-in">
            <p class="flex items-center gap-3 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Software Engineer at DeshiSmash</span>
            </p>
            <p class="flex items-center gap-3 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:tarikmanoar@duck.com" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors duration-200">tarikmanoar@duck.com</a>
            </p>
            <p class="flex items-center gap-3 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <a href="https://tarikmanoar.github.io" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors duration-200">tarikmanoar.github.io</a>
            </p>
          </div>
          
          <div class="mt-5 flex justify-center md:justify-start gap-4">
            <a 
              href="https://github.com/tarikmanoar" 
              target="_blank" 
              rel="noopener" 
              class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110" 
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/tarikmanoar" 
              target="_blank" 
              rel="noopener" 
              class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110" 
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/tarikmanoar" 
              target="_blank" 
              rel="noopener" 
              class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110" 
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- About section -->
      <div class="space-y-4 bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-inner transition-all duration-300 transform hover:shadow-md">
        <h3 class="text-xl font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          About
        </h3>
        <div class="space-y-3 text-base leading-relaxed">
          <p class="animate-fadeIn" style="animation-delay: 100ms;">
            I'm a passionate software developer with expertise in web technologies and a strong focus on creating 
            accessible, performant applications. With over 5 years of experience in the industry, I've worked on a 
            wide range of projects including e-commerce platforms, educational tools, and enterprise applications.
          </p>
          <p class="animate-fadeIn" style="animation-delay: 200ms;">
            My goal is to build software that not only meets functional requirements but also provides an excellent
            user experience for everyone, regardless of their abilities or devices used to access the application.
          </p>
        </div>
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
                <div class="h-full bg-blue-600 rounded-full skill-progress" style="width: 95%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Vue.js</span>
                <span class="text-sm">90%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full skill-progress" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">TypeScript</span>
                <span class="text-sm">85%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full skill-progress" style="width: 85%"></div>
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
                <div class="h-full bg-blue-600 rounded-full skill-progress" style="width: 80%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Web Accessibility</span>
                <span class="text-sm">90%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full skill-progress" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Performance Optimization</span>
                <span class="text-sm">85%</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div class="h-full bg-blue-600 rounded-full skill-progress" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact form with validation -->
      <div class="space-y-4 rounded-xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 class="text-xl font-semibold flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Get in Touch</span>
        </h3>
        
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Have questions or feedback? Feel free to contact me directly.
        </p>
        
        <form @submit.prevent="validateAndSubmit" class="space-y-4" novalidate>
          <!-- Name field with validation -->
          <div>
            <div class="flex justify-between">
              <label for="name" class="block mb-1 font-medium">Name</label>
              <span v-if="validation.name.dirty && !validation.name.valid" class="text-xs text-red-600 dark:text-red-400">
                {{ validation.name.message }}
              </span>
            </div>
            <input 
              type="text" 
              id="name" 
              v-model="contactForm.name"
              @blur="validateField('name')"
              @input="handleInput('name')"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none transition-shadow duration-200"
              :class="[{ 
                'bg-white border-gray-300': !store.darkMode, 
                'bg-gray-700 border-gray-600': store.darkMode
              }, {
                'border-red-500 focus:ring-red-500': validation.name.dirty && !validation.name.valid,
                'focus:ring-blue-500 border-gray-300 dark:border-gray-600': !validation.name.dirty || validation.name.valid
              }]"
              placeholder="Your name"
              aria-required="true"
              aria-invalid="false"
              aria-describedby="name-error"
            />
            <p id="name-error" class="mt-1 text-xs text-red-600 dark:text-red-400 min-h-[16px]" 
              v-if="validation.name.dirty && !validation.name.valid">
              {{ validation.name.message }}
            </p>
          </div>
          
          <!-- Email field with validation -->
          <div>
            <div class="flex justify-between">
              <label for="email" class="block mb-1 font-medium">Email</label>
              <span v-if="validation.email.dirty && !validation.email.valid" class="text-xs text-red-600 dark:text-red-400">
                {{ validation.email.message }}
              </span>
            </div>
            <input 
              type="email" 
              id="email" 
              v-model="contactForm.email"
              @blur="validateField('email')"
              @input="handleInput('email')"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none transition-shadow duration-200"
              :class="[{ 
                'bg-white border-gray-300': !store.darkMode, 
                'bg-gray-700 border-gray-600': store.darkMode
              }, {
                'border-red-500 focus:ring-red-500': validation.email.dirty && !validation.email.valid,
                'focus:ring-blue-500 border-gray-300 dark:border-gray-600': !validation.email.dirty || validation.email.valid
              }]"
              placeholder="your.email@example.com"
              aria-required="true"
              aria-invalid="false"
              aria-describedby="email-error"
            />
            <p id="email-error" class="mt-1 text-xs text-red-600 dark:text-red-400 min-h-[16px]" 
              v-if="validation.email.dirty && !validation.email.valid">
              {{ validation.email.message }}
            </p>
          </div>
          
          <!-- Message field with validation -->
          <div>
            <div class="flex justify-between">
              <label for="message" class="block mb-1 font-medium">Message</label>
              <span v-if="validation.message.dirty && !validation.message.valid" class="text-xs text-red-600 dark:text-red-400">
                {{ validation.message.message }}
              </span>
            </div>
            <textarea 
              id="message" 
              v-model="contactForm.message"
              @blur="validateField('message')"
              @input="handleInput('message')"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none transition-shadow duration-200"
              :class="[{ 
                'bg-white border-gray-300': !store.darkMode, 
                'bg-gray-700 border-gray-600': store.darkMode
              }, {
                'border-red-500 focus:ring-red-500': validation.message.dirty && !validation.message.valid,
                'focus:ring-blue-500 border-gray-300 dark:border-gray-600': !validation.message.dirty || validation.message.valid
              }]"
              placeholder="Your message"
              rows="4"
              aria-required="true"
              aria-invalid="false"
              aria-describedby="message-error"
            ></textarea>
            <p id="message-error" class="mt-1 text-xs text-red-600 dark:text-red-400 min-h-[16px]" 
              v-if="validation.message.dirty && !validation.message.valid">
              {{ validation.message.message }}
            </p>
            <div class="text-right text-xs text-gray-500 mt-1">
              {{ contactForm.message.length }}/500 characters
            </div>
          </div>
          
          <div class="pt-2">
            <button 
              type="submit"
              class="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg active:scale-98"
              :disabled="isSubmitting || !isFormValid"
              :aria-busy="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </div>
          
          <!-- Privacy policy notice -->
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
            By submitting this form, you agree to our privacy policy. Your data will not be shared with third parties.
          </p>
        </form>
      </div>
    </div>
    
    <!-- Enhanced Toast notification with animation and responsiveness -->
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
        class="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 max-w-[90%] sm:max-w-md"
        :class="[
          toastMessage.includes('error') || toastMessage.includes('fix') 
            ? 'bg-red-600 text-white' 
            : 'bg-green-600 text-white'
        ]"
        role="alert"
      >
        <!-- Success icon -->
        <svg v-if="!toastMessage.includes('error') && !toastMessage.includes('fix')" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        
        <!-- Error icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        
        <span>{{ toastMessage }}</span>
        
        <!-- Close button -->
        <button 
          @click="showToast = false"
          class="ml-auto p-1 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Close notification"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

// Define field validation type
type ValidationField = 'name' | 'email' | 'message'
import { useCGPAStore } from '@/stores/cgpa'

const store = useCGPAStore()
const showToast = ref(false)
const toastMessage = ref('')
const isSubmitting = ref(false)

// Contact form state with validation
const contactForm = reactive({
  name: '',
  email: '',
  message: ''
})

// Validation state
const validation = reactive({
  name: {
    valid: false,
    dirty: false,
    message: ''
  },
  email: {
    valid: false,
    dirty: false,
    message: ''
  },
  message: {
    valid: false,
    dirty: false,
    message: ''
  }
})

// Compute if form is valid
const isFormValid = computed(() => {
  return validation.name.valid && validation.email.valid && validation.message.valid
})

// Validate a single field
const validateField = (field: ValidationField): boolean => {
  validation[field].dirty = true

  switch(field) {
    case 'name':
      if (!contactForm.name.trim()) {
        validation.name.valid = false
        validation.name.message = 'Name is required'
      } else if (contactForm.name.trim().length < 2) {
        validation.name.valid = false
        validation.name.message = 'Name must be at least 2 characters'
      } else {
        validation.name.valid = true
        validation.name.message = ''
      }
      break
    
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!contactForm.email.trim()) {
        validation.email.valid = false
        validation.email.message = 'Email is required'
      } else if (!emailRegex.test(contactForm.email)) {
        validation.email.valid = false
        validation.email.message = 'Please enter a valid email address'
      } else {
        validation.email.valid = true
        validation.email.message = ''
      }
      break
    
    case 'message':
      if (!contactForm.message.trim()) {
        validation.message.valid = false
        validation.message.message = 'Message is required'
      } else if (contactForm.message.trim().length < 10) {
        validation.message.valid = false
        validation.message.message = 'Message must be at least 10 characters'
      } else if (contactForm.message.length > 500) {
        validation.message.valid = false
        validation.message.message = 'Message cannot exceed 500 characters'
      } else {
        validation.message.valid = true
        validation.message.message = ''
      }
      break
  }
  
  return validation[field].valid
}

// Mark field as changed on input
const handleInput = (field: ValidationField): void => {
  if (validation[field].dirty) {
    validateField(field)
  }
}

// Validate all fields and submit if valid
const validateAndSubmit = () => {
  // Validate all fields
  const nameValid = validateField('name')
  const emailValid = validateField('email')
  const messageValid = validateField('message')

  if (nameValid && emailValid && messageValid) {
    submitForm()
  } else {
    // Show error toast if form is invalid
    toastMessage.value = 'Please fix the errors in the form'
    showToast.value = true
    
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }
}

// Handle form submission
const submitForm = () => {
  isSubmitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    // Reset form and validation
    contactForm.name = ''
    contactForm.email = ''
    contactForm.message = ''
    
    validation.name.dirty = false
    validation.email.dirty = false
    validation.message.dirty = false
    
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
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

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
  animation: slide-in 0.5s ease-out forwards;
}

.skill-shimmer {
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.skill-progress {
  animation: progress 1s ease-out forwards;
  animation-delay: 0.5s;
  width: 0%;
}

@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}
</style>