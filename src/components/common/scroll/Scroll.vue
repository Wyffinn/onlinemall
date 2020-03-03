<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>



<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time) //加入判断
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
     return this.scroll ? this.scroll.y : 0
    }
  },
  mounted() {
    // 创建BSxroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,  // 滚动区域滚动的类型，3：监听滑动以及惯性，2：智能监听手指滑动，1、0：不监听
      pullUpLoad: this.pullUpLoad
    })
    // 监听页面的滚动
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('contentScroll', position) // 自定义事件，传递实时位置到父组件
    })
    //上拉加载更多
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
      this.$emit('loadMore')
    })
  }
    }
 }
    
    
}
</script>


<style scoped>
  
</style>