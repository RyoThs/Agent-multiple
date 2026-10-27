import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: the repository is expected to be named agents-ia-dashboard.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/agents-ia-dashboard/' : '/',
});
