import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Configuration du type MIME pour les fichiers JavaScript
    mimeTypes: {
      '.js': 'text/javascript'
    }
  }
});

