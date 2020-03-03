<template>
  <Swiper>
    <SwiperItem v-for="item in banners" >  
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js' // 将关于轮播图的组件先在index.js文件中引用，再引用index.js文件，这样比较简洁

export default {
  name: 'HomeSwiper',
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isEmit: false
    }
  },
  methods: {
    imgLoad() {
      // 只用发送一次
      if(!this.isEmit) this.$emit('swiperImgLoad')
      this.isEmit = true
      
    }
  }
}
</script>

<style scoped>
</style>