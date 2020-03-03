<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>



<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    // @load是vue内置的一个函数，能够监听图片的加载
    imgLoad() {
      // 这里做这个判断的原因：此组件在home、detail两个组件中复用，那么监听此组件图片的加载应该指明，不然加载detail的图片home组件中的betterscroll会刷新
      /*
      if (this.$route.path.indexOf('/home')) {
        this.$bus.$emit('homeItemImgLoad') // 此处用的是事件总线知识，vue对象可以充当事件总线，在main.js中定义
      }else if (this.$route.path.indexOf('/detail')) {
        this.$bus.$emit('detailItemImgLoad')
      } */
        this.$bus.$emit('ItemImgLoad') // 此处用的是事件总线知识，vue对象可以充当事件总线，在main.js中定义

     
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>



<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 47%;

  }
  .goods-item img {
    border-radius: 5px;
    width: 100%;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px 
  }
  .goods-info .collect {
    position: relative;
  }
  .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>