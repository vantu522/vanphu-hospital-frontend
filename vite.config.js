import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // chạy web thì để '/' thay vì './'
  build: {
    outDir: 'dist',   // Vercel sẽ nhận "dist" làm thư mục publish
    emptyOutDir: true
  }
})
