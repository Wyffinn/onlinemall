import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shopCarList: []
  },
  // mutations中的方法尽可能的只做一件事情，为了分的清楚是数量加一还是新商品，放在actions中判断
  mutations ,
  actions,
  getters
})

export default store