import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['catering-website-ec7m.onrender.com']
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@tamagui/core': path.resolve('./node_modules/@tamagui/core'),      
    }
  }
})
