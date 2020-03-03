<template>
<Swiper class="detail-swiper">
    <SwiperItem v-for="item in topImgs.slice(0,6)"><img :src="item" alt=""></SwiperItem>
</Swiper>
  
</template>


<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImgs: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>


<style scoped>
.detail-swiper {
  height: 280px;
  overflow: hidden;
}
</style>