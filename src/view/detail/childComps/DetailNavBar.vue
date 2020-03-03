<template>
<div class="nav-bar">
  <NavBar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in title" 
           :class="{active: index === currentIndex}"
           @click="changeTitle(index)">{{item}}</div>
    </div>
  </NavBar>
</div>
</template>


<script>
import NavBar from 'components/common/navbar/Navbar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
       title: ['商品', '参数', '评论', '推荐'],
       currentIndex: 0
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    changeTitle(index) {
      this.currentIndex = index,
      this.$emit('changeTitle', index)
    }
  }
}
</script>


<style scoped>
.title {
  display: flex;
  justify-content: space-around
}
.back {
  position: absolute;
  left: 18px;
  top: 5px;
  }
  .back img {
    height: 18px
  }
  .active { 
    color: var(--color-high-text)
  }
</style>