<template>
<div id="detail">
  <DetailNavBar class="detail-navbar" 
                @changeTitle="changeTitle" 
                ref="nav"/>
  <Scroll class="content" 
          ref="scroll" 
          :probeType="3" 
          @contentScroll="contentScroll">
    <DetailSwiper :topImgs="topImgs"/>
    <DetailBaseInfo :goodsData="goodsData"/>
    <DetailShopInfo :shopInfo="shopInfo"/>
    <DetailGoodsInfo :detailInfo="detailInfo" @detailImgLoad="detailImgLoad"/>
    <DetailParamInfo :param-info="paramInfo" ref="param"/>
    <DetailComment :commentInfo="commentInfo" ref="comment"/>
    <GoodsList :goodsList="recommendInfo" ref="recommend"/>
  </Scroll>
  <BackTop @click.native="backTop" v-show="isBackTop"/>
  <DetailBottomBar @addShopCar="addShopCar"/>

</div>

</template>


<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailComment from './childComps/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'


import {getDetail, getRecommend, Goods, ShopInfo, GoodsParam} from 'network/detail.js'
import {debounce} from 'common/utils.js'
import {itemListenMixin, backTopMixin} from 'common/mixin.js'


export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodsList,
    Scroll,
    DetailBottomBar
    
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImgs: [],
      goodsData: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      itemImgListenr: null,
      titleScrollY: [],
      getTitleScrollTop: null,
      currentIndex: null,
      ItemImgLoad: null

    }
  },
  
  created() {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
    this.getRecommend(),
    this.getTitleScrollTop = debounce(()=> {
      this.titleScrollY[0] = 0,
      this.titleScrollY[1] = this.$refs.param.$el.offsetTop,
      this.titleScrollY[2] = this.$refs.comment.$el.offsetTop,
      this.titleScrollY[3] = this.$refs.recommend.$el.offsetTop - 45
      this.titleScrollY[4] = Number.MAX_VALUE  // 占位用的，为了让判断提升性能
    }, 100)
  },
  // mixins: [itemListenMixin],
 /*  mounted () {
    const newRefresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListenr = ()=> {
      newRefresh()
      console.log('detailrefresh')
    }
    this.$bus.$on('detailItemImgLoad', this.itemImgListenr)
  }, */
  /* destroyed() {
    this.$bus.$off('ItemImgLoad', this.itemImgListenr)
  }, */

 
  methods: {
    /**
     * 方法
    **/
   addShopCar() {
     const product = {}
     product.iid = this.iid
     product.img = this.topImgs[0]
     product.desc = this.goodsData.desc
     product.title = this.goodsData.title
     product.price = this.goodsData.realPrice
     this.$store.dispatch('clickAddCar', product).then(resolve => {
      const newShow = debounce(() => {
        this.$toast.show(resolve)
      }, 1000)
      newShow()
     })
   },
   changeTitle(index) {
     /* 
      为了获取组件正确的offsetTop值
      尝试1：在created(),压根不能获取元素
      尝试2：在mounted()中，这个时候数据还未获取到
      尝试3：获取数据的回调中也不行，DOM还未渲染
      尝试4：在$nextTick也不行，图片的高度没有计算在内
      最后一种：在加载商品的回调中，当图片加载完成后获取的offsetTop才是正确的
     */
     this.$refs.scroll.scrollTo(0, -this.titleScrollY[index], 0)
   },
    detailImgLoad() {
      this.$refs.scroll.refresh()
      this.getTitleScrollTop()
    },
    contentScroll(position) {
      const positionY = -position.y
      let length = this.titleScrollY.length
      for(let i = 0; i <= length - 1; i++) {
        // if ((this.currentIndex !== i) && ((i < length-1 && positionY > this.titleScrollY[i] && positionY < this.titleScrollY[i + 1]) || (this.currentIndex !== i && i === length-1 && positionY > this.titleScrollY[i] ))){}
        if ((this.currentIndex !== i) && (positionY > this.titleScrollY[i] && positionY < this.titleScrollY[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.listenShowBackTop(position)  //mixin中的方法
    },
    /**
     * 网络请求方法
    **/
    getDetail(iid) {
      return getDetail(iid)
      .then(res => {
        console.log(res);
        const data = res.data.result
        // 1.轮播图照片
        this.topImgs = data.itemInfo.topImages
        // 2.商品信息
        this.goodsData = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3.店铺信息
        this.shopInfo = new ShopInfo(data.shopInfo)
        // 4.商品详细信息
        this.detailInfo = data.detailInfo
        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 6.获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getRecommend() {
      return getRecommend()
      .then(res => {
        this.recommendInfo = res.data.data.list
      })
      .catch(err => {
        console.log(err)
      })
    } 
  }
}
</script>


<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 12;
  background-color: #fff

}
.content {
  height: calc(100% - 44px - 49px);
}
.detail-navbar {
  position: relative;
  background: #fff;
  z-index: 9
}
</style>