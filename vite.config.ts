import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure this is imported

export default defineConfig({
  base: '/Portfolio-Website/', // Update with your actual repo name if needed
  plugins: [react()],
  optimizeDeps: {
    include: ["@emailjs/browser", "react-hot-toast"], // Pre-bundle dependencies
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for '/src' directory
    },
  },
  build: {
    rollupOptions: {
      external: ['@emailjs/browser', 'react-hot-toast'], // Exclude these from the bundle
    },
  },
});
