<template>
  <div class="homeRecommand">
    <div class="recommand-item" v-for="item in recommands">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Recommand',
  props: {
    recommands: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>


<style scoped>
.homeRecommand {
  display: flex;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommand-item {
  flex: 1;
  text-align: center;
  width: 100%;
 
}
.item-img {
  height: 60px;
  width: 60px;
  margin-bottom: 5px
}
</style>