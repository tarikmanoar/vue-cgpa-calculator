import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'

// Create the app instance
const app = createApp(App)

// Register Pinia for state management
app.use(createPinia())

// Register Vue Router
app.use(router)

// Mount the app
app.mount('#app')

// Register service worker for PWA
const updateSW = registerSW({
  onNeedRefresh() {
    // In a more comprehensive implementation, we would show a UI prompt
    // asking the user if they want to refresh for new content
    if (confirm('New content available. Reload?')) {
      updateSW()
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline')
  }
})

// Add error monitoring
app.config.errorHandler = (err, instance, info) => {
  // In a production app, you would log to an error monitoring service
  console.error('Vue Error:', err)
  console.info('Error Instance:', instance)
  console.info('Error Info:', info)
}
