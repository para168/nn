import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel will automatically detect and deploy from this directory
    target: 'esnext',
  },
  server: {
    port: 3000,  // Ensure you are running on the correct port locally
  },
});
