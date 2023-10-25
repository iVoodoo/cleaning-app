import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@reduxStore': path.resolve(__dirname, './src/reduxStore'),
      '@services': path.resolve(__dirname, './src/services'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils/api': path.resolve(__dirname, './src/utils/api'),
      '@utils/constants': path.resolve(__dirname, './src/utils/constants'),
      '@utils/helpers': path.resolve(__dirname, './src/utils/helpers')
    }
  }
})
