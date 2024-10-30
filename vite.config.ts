import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/your-repo-name/',
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
      external: ['@emailjs/browser', 'react-hot-toast'],
    },
  },
});

