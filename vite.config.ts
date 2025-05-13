import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env files
  const env = loadEnv(mode, process.cwd(), '');
  // Load custom keys.env file
  const keysEnv = loadEnv(mode, process.cwd(), '', 'keys.env');

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // Make env variables available
    define: {
      'import.meta.env': { ...env, ...keysEnv }
    },
    // Resolve keys.env path
    envDir: resolve(__dirname, '.'),
    envPrefix: 'VITE_',
  };
});
