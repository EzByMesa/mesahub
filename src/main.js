import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Bulma from 'bulma'

const Vue = createApp(App)
Vue.use(Bulma, router, store)
Vue.mount('#app')
