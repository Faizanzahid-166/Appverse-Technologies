import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Appverse-Technologies/06_todo_list/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
