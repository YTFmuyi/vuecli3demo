import Vue from 'vue'
import App from './App.vue'

//路由设置
import router from './router'

//加载插件
import './plugins/index.js'
import './plugins/element.js'
// flex 布局库
import 'flex.css'

// store
import store from './store/index'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
