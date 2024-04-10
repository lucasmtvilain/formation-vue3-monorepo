import './assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { icon } from './plugins/icon'

import App from './App.vue'
import router from './router'
import { isProd } from './stock/utils/misc'

// if (isProd()) {
//   console.log = () => {}
// }

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(icon)

app.mount('#app')
