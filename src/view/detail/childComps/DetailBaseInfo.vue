<template>
  <div class="base-info">
    <div class="info-title"><p>{{goodsData.title}}</p></div>
    <div class="info-price">
      <span class="new-price">{{goodsData.newPrice}}</span>
      <span class="old-price">{{goodsData.oldPrice}}</span>
      <span class="discount-desc" 
            v-if="goodsData.discountDesc">
            <span>{{goodsData.discountDesc}}</span></span>
    </div>
    <div class="info-other" v-if="goodsData.columns">
      <span>{{goodsData.columns[0]}}</span>
      <span>{{goodsData.columns[1]}}</span>
      <span v-if="goodsData.services">{{goodsData.services[goodsData.services.length - 1].name}}</span>
    </div>
    <div class="info-services" v-if="goodsData.services">
      <span class="info-services-item" 
            v-for="index in goodsData.services.slice(0, 4).length - 1" 
            :key="index">
        <img :src="goodsData.services[index - 1].icon" alt="">
        <span>{{goodsData.services[index - 1].name}}</span>
      </span>
    </div>
    <!-- <div>{{goodsData}}</div> -->
  </div>
</template>

<script>

export default {
  name: 'DetailBaseInfo',
  props: {
    goodsData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  
}
</script>

<style scoped>
.info-title {
  margin: 10px 10px;
  font-size: 18px;
  font-weight: 600;
}
.info-price {
  margin: 10px ;
}
.new-price {
  font-size: 24px;
  color: var(--color-high-text);
  margin-right: 8px;
  font-weight: 600
}
.old-price {
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 100;
  margin-right: 6px
}
.discount-desc {
  position: absolute;
  background-color: var(--color-high-text);
  color: #fff;
  border-radius: 10px;
  font-size: 14px
}
.discount-desc span {
  display: inline-block;
  padding: 1px 5px 0 ;
}
.info-other {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid rgb(218, 215, 215);
  font-weight: initial;
  font-size: 14px;
  color: rgb(196, 193, 193)
}
.info-services {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 2px solid rgb(218, 215, 215);
}
.info-services-item img {
  height: 16px; 
  position: relative;
  top: 1px
}
</style>