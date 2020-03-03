<template>
<<<<<<< HEAD
  <div id="app" @mousewheel.prevent>
    <MainTabbar class="main-tabbar"/>
    <keep-alive exclude="Detail"><router-view/></keep-alive>
=======
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> ad1ef3509e21a0d6678422230261eb57e550e854
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
>>>>>>> ad1ef3509e21a0d6678422230261eb57e550e854
</style>
