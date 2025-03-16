import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html'
      }
    }
  },
  server: {
    port: 3000
  }
})