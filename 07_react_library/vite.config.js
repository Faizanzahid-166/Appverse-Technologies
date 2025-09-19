import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  base: "/Appverse-Technologies/07_react_library/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
