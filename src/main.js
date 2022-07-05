import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import installIcons from './icons/index.js'
import './style/index.css'

const app = createApp(App)
installIcons(app)

app.use(store).use(router).use(ElementPlus).mount('#app')
