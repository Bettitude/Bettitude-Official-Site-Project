import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Increase chunk size warning limit (default is 500kB)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime
          'react-vendor': ['react', 'react-dom'],
          // Router in its own chunk
          'router': ['react-router-dom'],
          // Framer Motion is large - isolate it
          'framer-motion': ['framer-motion'],
          // React Icons - isolate so tree-shaking works on the rest
          'react-icons': ['react-icons'],
        },
      },
    },

    // Use esbuild minification (fast, built into Vite)
    minify: 'esbuild',

    // Enable source maps for debugging in production (optional, remove if not needed)
    sourcemap: false,

    // Target modern browsers for smaller output
    target: 'es2020',
  },
})
