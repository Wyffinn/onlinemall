<template>
  <div id="home" class="wrapper">
    <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
    <TabControl class="tabControl2" 
                  :title="['流行', '新品', '精选']" 
                  @tabClick="tabClick" 
                  ref="tabControl2" 
                  v-show="isTabFixed"/>
    <!-- <h3 class="hfowfh">正在努力加载</h3> -->
    <Scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @contentScroll="contentScroll" 
            :pullUpLoad="true" 
             @loadMore="loadMore">
            
      <HomeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <Recommend :recommands="recommends"/>
      <FeatureView/>
      <TabControl class="tab-control" 
                  :title="['流行', '新品', '精选']" 
                  @tabClick="tabClick" 
                  ref="tabControl1" 
                  :class="{fixed: isTabFixed}"/>
      <GoodsList :goodsList="goodsList"/>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isBackTop"/>
    
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common//scroll/Scroll'

import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/RecommandView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils.js'
import {itemListenMixin, backTopMixin} from 'common/mixin.js'


export default {
  name: 'Home',
  components: {
    Navbar,
    TabControl,
    HomeSwiper,
    GoodsList,
    Scroll,

    Recommend,
    FeatureView,
   
  },
  // mixins: [itemListenMixin], 要写在一起的，但是这个混入有点问题
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY: 0,
      itemImgListenr: null
    }
  },
  // home组件被创建的时候取数据
  created() {
    // 1.请求轮播图和详情页数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')   
  },
  
  mounted() {
    const newRefresh = debounce(this.$refs.scroll.refresh) // debounce节流函数
    this.itemImgListenr = ()=> {
      newRefresh() //加载图片就刷新betterscroll，使之重新计算页面高度
    }
    this.$bus.$on('ItemImgLoad', this.itemImgListenr)
  },
  computed: {
    goodsList() {
      return this.goods[this.currentType].list
    }
  },

  //路由守卫，记录离开页面时的位置，下次返回上次浏览位置  
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    this.$refs.scroll.refresh()  //返回时最好刷新下betterscroll
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY()
    // 当home组件不活跃的时候不监听GoodsItem里图片的加载
    // 这条代码加了首页滑动就不顺畅this.$bus.$off('ItemImgLoad', this.itemImgListenr)
  },
 
    
  methods: {
    /** 
    *  方法代码
    */
    
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 点击切换的时候保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position) {  // 自定义事件接收来自Scroll.vue组件传来的参数
      this.isBackTop = -(position.y) > 1000

      this.listenShowBackTop(position)  //mixin中的方法
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh() 此处不用刷新，前面已经做了防抖函数的刷新了
    },
    //swiper图片加载完后再计算
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    },
    
    
    /** 
    * 请求数据相关代码
    */
   
    getHomeMultidata() {
      return getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
        .catch(err => {
          console.log(err)
        })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      return getHomeGoods(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.data.list)  // 这种语法可以把一个数组中的元素拆开一一的push到另一个数组中
        this.goods[type].page += 1   // 因为前面page加了1，这里要重新赋值
      
        this.$refs.scroll.finishPullUp() //better-scroll默认只上拉加载更过一次，完成一次上拉加载要先调用此方法才能进行下一次上拉加载
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  #home {
    /* margin-top: 44px; */
    height: 100vh;
    position: relative
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*使用浏览器进行原生滚动时为了不让顶部一起滚动
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10; */
  }
  /* 原生滚动下的吸顶效果
  .tab-control2 {
    position: sticky;
    top: 44px;
    z-index: 2
  } */
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
  } */
  
  /* .fixed {
    position: fixed;
    right: 0;
    left: 0;
    top: 49px;
  } */
  .tabControl2 {
    position: relative;
    z-index: 9
  }
</style>