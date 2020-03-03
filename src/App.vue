<template>
  <div id="app" @mousewheel.prevent>
    <MainTabbar class="main-tabbar"/>
    <keep-alive exclude="Detail"><router-view/></keep-alive>
  </div>
</template>

<script>
import MainTabbar from 'components/content/maintabbar/MainTabbar'
  export default {
    name: 'App',
    components: {
      MainTabbar
    },
    
  } 
</script>


<style scoped>
 @import "assets/css/base.css";
  .main-tabbar {
    z-index: 10;
  }
</style>
