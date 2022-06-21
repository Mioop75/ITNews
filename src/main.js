import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from "bootstrap"

const app = createApp(App)

app.use(bootstrap).use(store).use(router).mount('#app')
