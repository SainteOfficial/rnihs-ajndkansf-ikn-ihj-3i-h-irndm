import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env files
  const env = loadEnv(mode, process.cwd(), '');
  
  // Log environment loading for debugging
  console.log(`[Vite Config] Loading env variables in ${mode} mode`);
  console.log(`[Vite Config] OpenRouter API Key exists: ${!!process.env.VITE_OPENROUTER_API_KEY || !!env.VITE_OPENROUTER_API_KEY}`);
  console.log(`[Vite Config] ElevenLabs API Key exists: ${!!process.env.VITE_ELEVENLABS_API_KEY || !!env.VITE_ELEVENLABS_API_KEY}`);

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // Make env variables available - prioritize process.env for Netlify
    define: {
      'import.meta.env': { 
        ...env,
        VITE_OPENROUTER_API_KEY: process.env.VITE_OPENROUTER_API_KEY || env.VITE_OPENROUTER_API_KEY,
        VITE_ELEVENLABS_API_KEY: process.env.VITE_ELEVENLABS_API_KEY || env.VITE_ELEVENLABS_API_KEY,
        VITE_OPENROUTER_MODEL: process.env.VITE_OPENROUTER_MODEL || env.VITE_OPENROUTER_MODEL,
        VITE_ELEVENLABS_VOICE_ID: process.env.VITE_ELEVENLABS_VOICE_ID || env.VITE_ELEVENLABS_VOICE_ID,
      }
    },
    envPrefix: 'VITE_',
  };
});
