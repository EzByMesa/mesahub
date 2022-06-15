import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Bulma from 'bulma'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

const Vue = createApp(App)
Vue.use(router, Bulma, store)
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('fa', FontAwesomeIcon)
Vue.mount('#app')
