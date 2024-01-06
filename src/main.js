import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import PhosphorIcons from "@phosphor-icons/vue"
const app = createApp(App)
app.use(store)
app.use(PhosphorIcons)
app.mount('#app')
