import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { BootstrapVue, BootstrapVueIcons, CardPlugin, ModalPlugin, FormDatepickerPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(CardPlugin)
Vue.use(ModalPlugin)
Vue.use(FormDatepickerPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
