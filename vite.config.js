import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Frontend-Mentor-time-tracking-dashboard-main/",
  plugins: [react()],
})
