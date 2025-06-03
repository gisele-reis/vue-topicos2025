import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://humble-parakeet-wpxqqw47px4cv674-8080.app.github.dev/'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
