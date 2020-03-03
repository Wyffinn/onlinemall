<template>
  <div class="detail-info" v-if="detailInfo.detailImage">
    <div><span>{{detailInfo.desc}}</span></div>
    <div><span>{{detailInfo.detailImage[0].key}}</span></div>
    <div class="detail-image" v-for="item in detailInfo.detailImage[0].list.slice(0, 6)">
      <img :src="item" alt="" @load="detailImgLoad">
    </div>
   
  </div>
</template>


<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo :{
      type: Object
    } 
  },
  data() {
    return {
      imgCount: 0,
      imgNums: 0
    }
  },
  methods: {
    detailImgLoad() {
       
      this.$emit('detailImgLoad') //直接发送比较浪费性能，但是效果比较好  
     
      /* 判断，等所有图片都加载完了就发送自定义事件
      this.imgCount++
      if (this.imgCount === this.imgNums) {
        this.$emit('detailImgLoad')    
      }      */
    },
  },
  // 监测detailInfo数据的变化
   watch: {
     detailInfo() {
       this.imgNums = this.detailInfo.detailImage[0].list.length
     }
   }
}
</script>



<style scoped>
.detail-info div:first-child {
  width: 100%;
  padding: 20px 10px 10px 10px;
  text-indent: 1rem
}
.detail-info div:nth-child(2) {
  height: 20px;
  margin: 20px 0 20px 10px
}
.detail-image img {
  width: 100%
}
</style>