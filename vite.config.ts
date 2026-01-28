
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Injeta a variável de ambiente do Netlify no processo do navegador
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    historyApiFallback: true
  }
});
