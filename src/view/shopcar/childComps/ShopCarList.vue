<template>
  <div class="car-list">
    <Scroll class="content" ref="scroll">
      <ShopCarItem v-for="(item, index) in getCarList" 
                   :key="index" 
                   :itemInfo="item"/>
    </Scroll>
    <ShopBottomBar/>
  </div>
</template>


<script>
import ShopCarItem from './ShopCarItem'
import ShopBottomBar from './ShopBottomBar'
import Scroll from 'components/common/scroll/Scroll'

import {mapGetters} from 'vuex'

export default {
  name: 'ShopCarList',
  components: {
    Scroll,
    ShopCarItem,
    ShopBottomBar
  },
  computed: {
    ...mapGetters(['getCarList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>



<style scoped>
.car-list {
  height: calc(100% - 44px - 49px - 40px)
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>