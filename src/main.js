import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://backend.madaniymeros.uz/v1"
    // Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Toasted from 'vue-toasted';
Vue.use(Toasted)
    // Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import './assets/css/volt.css'
Vue.config.productionTip = false
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)
Vue.use(VueQuillEditor, {})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
