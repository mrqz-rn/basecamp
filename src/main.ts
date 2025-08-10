import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Vuetify imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Mount app
createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
