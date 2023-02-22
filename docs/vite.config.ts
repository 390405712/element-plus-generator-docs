import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  build: {
  },
  plugins: [
    // vue({ script: { refSugar: true } }),
    vueJsx()
  ]
})