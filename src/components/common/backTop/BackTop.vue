<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>


<script>
export default {
  name: 'BackTop',
}
</script>


<style scoped>
  .backTop {
    position: fixed;
    right: 15px;
    bottom: 60px
  }
  .backTop img {
    height: 50px;
    width: 50px;
  }
</style>