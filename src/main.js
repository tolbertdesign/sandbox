import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { store } from './store'
import App from './App.vue'
import Index from './views/index.vue'

import './index.css'
// createApp(App).mount('#app')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:name?',
      component: Index,
    }
  ]
})

const app = createApp(App)
app.use(router)
// app.use(store)
app.mount('#app')
