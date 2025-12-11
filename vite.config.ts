import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // We cast process to any to avoid TypeScript errors in the browser/vite context
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // This ensures 'process.env.API_KEY' in your code is replaced by the actual key from Netlify during build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})