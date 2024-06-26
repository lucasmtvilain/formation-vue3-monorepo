import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger']
  },
  plugins: [
    vue(),
    vueJsx()
    // VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        //changeOrigin: true,
        secure: false
        //rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
