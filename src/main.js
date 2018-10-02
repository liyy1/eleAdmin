import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'
import Icon from './components/Icon'

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-theme.scss'
import '@/styles/index.scss'
import '@/icon/iconfont.js'
import '@/permission'
import '@/utils/mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('icon', Icon)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
