import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/assets/style/variables.sass" `
      }
    }
  }
})
