import {
  ADD_CAR_LIST, ADD_COUNT
} from './mutation.config'

export default  {
  clickAddCar(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.判断购物车数组中有没有这个商品
    let oldProduct = context.state.shopCarList.find(item => item.iid === payload.iid)
    // 2.有则数量加1，无则添加商品对象到购物车数组
    if (oldProduct) {
      context.commit(ADD_COUNT, oldProduct)
      resolve('此商品数量+1')
    }else {
      payload.checked = true
      context.commit(ADD_CAR_LIST, payload)
      resolve('加入购物车成功')
    }
    }) 
  }
}