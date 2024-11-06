export default defineConfig({
  base: '/', // This will serve the app from the root of the domain
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
