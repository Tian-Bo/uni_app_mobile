import Vue from 'vue'
import App from './App'
import { $uniRequest, $uniRoute } from 'static/js/unlis.js'

Vue.config.productionTip = false
 
App.mpType = 'app'

Vue.prototype.$uniRequest = $uniRequest
Vue.prototype.$uniRoute = $uniRoute

const app = new Vue({
    ...App
})
app.$mount()
