import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import MessageTemplateCreator from 'message-template-creator'

import 'normalize.css'
import './styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MessageTemplateCreator)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
