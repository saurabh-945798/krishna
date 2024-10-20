import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/testing/', // Change this to your desired base path
  plugins: [react()],
});
