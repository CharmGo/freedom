import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(ElementUI)
const app = new Vue({
  ...App
})
app.$mount()
