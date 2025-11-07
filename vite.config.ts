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
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'FCUB CGPA Calculator',
        short_name: 'CGPA Calc',
        description: 'FCUB CSE Program CGPA Calculator',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
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