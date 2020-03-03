import {debounce} from 'common/utils.js'

import BackTop from 'components/common/backTop/BackTop'

export const itemListenMixin = {
  mounted() {
    const newRefresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListenr = ()=> {
      newRefresh()
      console.log('我是混入中的刷新')
    }
    this.$bus.$on('ItemImgLoad', this.itemImgListenr)
  },
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTop: false
    } 
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500) // 通过$refs.scroll拿到scroll组件对象调用组件中定义的方法
    },
    //要在contentScroll方法中调用
    listenShowBackTop(position) {
      this.isBackTop = -(position.y) > 1000
    }
  }
}