import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faFileLines } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faFileLines)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
