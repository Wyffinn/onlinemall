import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store/vuex'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() //定义事件总线

Vue.use(toast)
// 用法一：Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')