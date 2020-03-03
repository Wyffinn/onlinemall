<template>
  <div id="shop-car">
    <Navbar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </Navbar>
    <ShopCarList/>    
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import ShopCarList from './childComps/ShopCarList'

import {mapGetters} from 'vuex'

export default {
  name: 'Shopcar',
  components: {
    Navbar,
    ShopCarList
  },
  computed: {
    /* getLength() {
      return this.$store.state.shopCarList.length
    } 
    */

    // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
    //  第一种数组方法：...mapGetters(['getCarLength'])
    
    //如果想将一个 getter 属性另取一个名字，使用对象形式：
    ...mapGetters({
      length: 'getCarLength'
    })
  }
}
</script>

<style scoped>
#shop-car {
  height: 100vh
}
.nav-bar {
  height: 44px;
  color: #fff;
  background-color: var(--color-tint)
}

</style>