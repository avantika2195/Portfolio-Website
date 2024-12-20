import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ["@emailjs/browser", "react-hot-toast"],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      external: [], // Ensure only one 'external' option here
    },
  },
});
