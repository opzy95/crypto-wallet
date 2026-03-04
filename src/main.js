import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Icon } from '@iconify/vue' 

import App from './App.vue'
import router from './router'

const app = createApp(App)


library.add(faUser)


app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Icon', Icon) 

app.use(createPinia())
app.use(router)

app.mount('#app')
