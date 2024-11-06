<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure this is imported

export default defineConfig({
  base: '/Portfolio-Website/', // Update with your actual repo name if needed
=======
export default defineConfig({
  base: '/', // This will serve the app from the root of the domain
>>>>>>> 001cd66ed95b99094814f8c1771cfe28f60dc439
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
