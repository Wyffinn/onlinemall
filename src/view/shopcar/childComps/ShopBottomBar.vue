<template>
  <div class="bottom-bar">
    <div class="check-button">
      <div><CheckButton :isChecked="isCheckedAll" @click.native="checkedAll"/></div>
      <span>全选</span>      
    </div>
    <div class="calc-price">合计:￥{{totalPrice}}</div>
    <div class="go-calc" @click="goCalc">去结算</div>
  </div>
</template>


<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'


export default {
  name: 'ShopBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['getCarList']),
    totalPrice() {
      return this.$store.state.shopCarList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    isCheckedAll() {
      // 若购物车没有商品，返回false
      if (this.getCarList.length === 0) return false

      // 存在 没有处于选中状态下的元素，则返回false
      // return !(this.getCarList.filter(item => !item.checked).length)
      return !this.getCarList.find(item => !item.checked)
    }
  },
  methods: {
    checkedAll() {
      if (this.isCheckedAll) {
        //全选按钮选中时，点击全选按钮，所有商品不选中
        return this.getCarList.forEach(item => item.checked = false)
      }else {
        // 全选按钮不选中时，点击全选按钮，所有商品选中
        return this.getCarList.forEach(item => item.checked = true)
      }
    },
    goCalc() {
      // 没有商品选中时，提示用户选择商品
      if(!this.getCarList.find(item => item.checked)) {
        this.$toast.show('请选择要购买的商品')
      }
    }
  }
 
}
</script>


<style scoped>
.bottom-bar {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ddd;
}
.check-button > div {
  position: relative;
  top: 10px;
  left: 8px;
  margin-right: 20px
}
.check-button > span {
  position: relative;
  top: -8px;
  left: 30px;
}
.calc-price,
.go-calc {
  height: 100%;
  line-height: 40px;
  text-align: center;
}
.go-calc {
  width: 85px;
  padding: 0 10px;
  color: #fff;
  background-color: red;
}
</style>