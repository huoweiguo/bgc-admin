import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(store).use(router).mount('#app')
