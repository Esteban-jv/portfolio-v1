import './assets/main.css'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { i18n } from './plugins/i18n'
import router from './router'

const i18nPlugin = {
    install(app) {
        app.config.globalProperties.$t = i18n.global.t
    }
}

createApp(App)
    .use(i18n)
    .use(i18nPlugin)
    .use(router)
    .mount('#app')
