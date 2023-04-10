// .vitepress/theme/index.js


import DefaultTheme from "vitepress/theme"
import "element-plus/dist/index.css";
import elementplus from "element-plus"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css'

// import * as elementPlusGenerator from "element-plus-generator"
// import { FormGenerator, TableGenerator } from "element-plus-generator"
import './style/var.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(elementplus, {
      locale: zhCn,
    });
    // app.component('FormGenerator', FormGenerator)
    // app.component('TableGenerator', TableGenerator)
    // addImportMap("element-plus-generator", elementPlusGenerator);
  },
};
