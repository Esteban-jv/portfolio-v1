import { createApp } from 'vue'
import { createPinia } from 'pinia'
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
    .use(createPinia())
    .use(router)
    .mount('#app')
