import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// Vite configuration with React and dependency optimization
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@emailjs/browser", "react-hot-toast"], // Ensures Vite pre-bundles these dependencies
  },
  resolve: {
    alias: {
      // Optional: Define aliases if you want to use shorter paths in imports
      '@': '/src',

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@emailjs/browser', 'react-hot-toast'],
      origin/main
    },
  },
});

