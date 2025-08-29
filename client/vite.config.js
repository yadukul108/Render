import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
    server: {
    proxy: {
      '/api': {
        target: 'https://allegro-backend.onrender.com/api',
        secure: false,
      },
    },
  },
  plugins: [react(),tailwindcss()],
})
