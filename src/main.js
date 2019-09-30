import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui,并全局注册
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入element-UI样式
// 映入项目初始样式
import './styles/index.less'
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
