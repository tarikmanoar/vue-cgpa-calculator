import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      includeAssets: ['icons/favicon.ico', 'icons/favicon.png', 'icons/favicon.svg'],
      manifest: {
        name: 'FCUB CGPA Calculator',
        short_name: 'CGPA Calc',
        description: 'FCUB CGPA Calculator - Multi-department GPA calculator for Bangladesh university students',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'icons/android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
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