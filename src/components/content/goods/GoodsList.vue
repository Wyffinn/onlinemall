<template>
  <div class="goods">
    <GoodsItem v-for="item in goodsList" :goodsItem="item"/>
  </div>
</template>



<script>
import GoodsItem from './GoodsItem'
export default {
  name: 'Goods',
  components: {
    GoodsItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>



<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px
  }
</style>