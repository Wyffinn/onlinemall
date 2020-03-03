<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div><img src="~assets/img/detail/service.svg" alt=""><span>客服</span></div>
      <div><img src="~assets/img/detail/shop.svg" alt=""><span>店铺</span></div>
      <div><img src="~assets/img/detail/collect.svg" alt=""><span>收藏</span></div>
    </div>
    <div class="bar-right">
      <div @click="addShopCar">加入购物车</div> <div>购买</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addShopCar() {
      this.$emit('addShopCar')
    }
  }
}
</script>


<style scoped>
.bottom-bar {
  height: 49px;
  width: 100%;
  background-color: red;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between
}
.bar-left,
.bar-right {
  width: 50%
}
.bar-left {
  line-height: 49px;
  text-align: center;
  display: flex;
  background-color: #fff;
}
.bar-left > div {
  flex: 1
}
.bar-left > div > img {
  height: 20px;
  width: 20px;
  position: relative;
  left: 14px;
  top: -3px
}
.bar-left > div > span {
  position: relative;
  top: 13px;
  left: -11px;
  font-size: 14px;
}
.bar-right {
  display: flex;
}
.bar-right > div {
  flex: 1;
  width: 50%;
  color: #fff;
  line-height: 49px;
  text-align: center;
}
.bar-right > div:first-child {
  background-color: rgb(235, 235, 12)
}
.bar-right > div:last-child {
  background-color: #ff5777
}
</style>