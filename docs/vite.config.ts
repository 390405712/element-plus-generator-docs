import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"

// const vitestConfig: VitestUserConfigInterface = {
//   test: {
//     globals: true,
//     environment: "jsdom",
//   },
// }


export default defineConfig({
  plugins: [
    // vue({ script: { refSugar: true } }),
    vueJsx()
  ],
  // test: vitestConfig.test,
})