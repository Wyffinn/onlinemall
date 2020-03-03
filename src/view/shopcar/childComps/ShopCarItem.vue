<template>
  <div class="car-item">
    <div class="item-check" >
      <CheckButton ref="checkButton" 
                   :isChecked="itemInfo.checked" 
                   @click.native="checkClick"/>
    </div>
    <div class="item-left">
      <img :src="itemInfo.img" alt="">
    </div>
    <div class="item-right">
      <div class="title">{{itemInfo.title}}</div>
      <div class="desc">{{itemInfo.desc}}</div>
      <div class="other">
        <span>￥{{itemInfo.price}}</span>
        <span>x{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'ShopCarItem',
  components: {
    CheckButton
  },
  
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }

}
</script>



<style scoped>
.car-item {
  width: 100%;
  height: 120px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.item-check {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  position: relative;
  left: 5px;
}
.item-left {
  margin-right: 15px;
}
.item-left > img {
  height: 100px;
  margin-top: 10px
}
.item-right {
 width: 70%
}
.item-right div {
  height: 35px;
  line-height: 35px;
}
.title,
.desc {
  width: 100%;
  font-size: 14px;
  overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis
}
.title {
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
}
.other {
  margin-right: 15px;
  display: flex;
  justify-content: space-between
}
.other span:first-child {
  color: var(--color-tint);
}
</style>