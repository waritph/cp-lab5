//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import { Analytics } from "@vercel/analytics/next"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Analytics)

app.mount('#app')
