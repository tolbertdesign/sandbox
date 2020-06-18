import {createApp} from 'vue'

import App from './App.vue'
import store from './vuex/store'
import router from './router'
import AtSign from './directives/at-sign'
import DefaultLayout from './layouts/default.vue'

import 'tailwindcss/tailwind.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('DefaultLayout', DefaultLayout)
app.directive('AtSign', AtSign)
app.mount('#app')
