import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    vue(), 
    tailwindcss(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'prompt',
      injectRegister: 'auto',
      includeAssets: ['icons/favicon.ico', 'icons/favicon.png', 'icons/favicon.svg', 'icons/android/*.png'],
      manifest: {
        id: '/',
        name: 'FCUB CGPA Calculator - Multi-Department GPA Calculator',
        short_name: 'FCUB CGPA',
        description: 'Offline-first CGPA calculator for Bangladesh university students. Supports 8 departments with semester GPA calculation, overall CGPA tracking, and performance analytics.',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        lang: 'en-US',
        dir: 'ltr',
        categories: ['education', 'productivity', 'utilities'],
        prefer_related_applications: false,
        icons: [
          {
            src: 'icons/android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icons/android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Calculate Semester GPA',
            short_name: 'Semester GPA',
            description: 'Calculate GPA for a specific semester',
            url: '/',
            icons: [{ src: 'icons/android/android-launchericon-96-96.png', sizes: '96x96', type: 'image/png' }]
          },
          {
            name: 'Calculate Overall CGPA',
            short_name: 'Overall CGPA',
            description: 'Calculate cumulative GPA across all semesters',
            url: '/overall-cgpa',
            icons: [{ src: 'icons/android/android-launchericon-96-96.png', sizes: '96x96', type: 'image/png' }]
          },
          {
            name: 'View Statistics',
            short_name: 'Statistics',
            description: 'View performance analytics and trends',
            url: '/statistics',
            icons: [{ src: 'icons/android/android-launchericon-96-96.png', sizes: '96x96', type: 'image/png' }]
          },
          {
            name: 'Settings',
            short_name: 'Settings',
            description: 'Change department and preferences',
            url: '/settings',
            icons: [{ src: 'icons/android/android-launchericon-96-96.png', sizes: '96x96', type: 'image/png' }]
          }
        ],
        screenshots: [
          {
            src: 'screenshots/screenshot-1.webp',
            sizes: '1280x720',
            type: 'image/webp',
            form_factor: 'wide',
            label: 'FCUB CGPA Calculator - Semester GPA Calculation View showing course grades and GPA calculation'
          },
          {
            src: 'screenshots/screenshot-2.webp',
            sizes: '1280x720',
            type: 'image/webp',
            form_factor: 'wide',
            label: 'FCUB CGPA Calculator - Overall CGPA View with multi-semester tracking and analytics'
          },
          {
            src: 'screenshots/screenshot-mobile.webp',
            sizes: '750x1334',
            type: 'image/webp',
            form_factor: 'narrow',
            label: 'FCUB CGPA Calculator - Mobile View with responsive design and dark mode support'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize build for production
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Chunk files to improve caching
        manualChunks: {
          'vue-core': ['vue', 'vue-router', 'pinia'],
          'pwa-utils': ['workbox-window'],
          'db-utils': ['idb'],
        },
      },
    },
    // Improve source maps for debugging
    sourcemap: 'hidden',
  },
  server: {
    // Enable HMR
    hmr: true,
  },
  preview: {
    // Set preview port
    port: 5000,
  }
})