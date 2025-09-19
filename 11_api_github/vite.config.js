import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
         base: "/Appverse-Technologies/11_api_github/",
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
})
