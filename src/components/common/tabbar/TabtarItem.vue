<template>
  <div class="tabbar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
      <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: String,
    activeColor : {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive() {

      // 判断当前活跃的路由跟当前的path是否一致, indexOf:如果要检索的字符串值没有出现，则该方法返回 -1。
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>
 
<style scoped>
  .tabbar-item {
    height: 49px;
    font-size: 14px;
    flex: 1;
    text-align: center
  }

  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px
  }
  .active{ 
    color: red
  }
</style>