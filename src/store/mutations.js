import {
  ADD_CAR_LIST, ADD_COUNT
} from './mutation.config'

export default {
  // 加入购物车
  [ADD_CAR_LIST](state, payload) {
    payload.count = 1
    state.shopCarList.push(payload)
  },
  // 商品数量加1
  [ADD_COUNT](state, payload) {
    payload.count += 1
  }
}