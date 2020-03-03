<template>
  <div class="shop-info">
    <div class="info-top">
      <div><img :src="shopInfo.logo" alt=""></div>
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="info-midle">
      <div class="info-midle-left">
        <table>
          <tr>
            <td>{{shopInfo.sells | counteFilter(shopInfo.sells)}}</td><td>{{shopInfo.goods | counteFilter}}</td>
          </tr>
          <tr>
            <td>总销量</td><td>全部宝贝</td>
          </tr>
        </table>
      </div>
      <div class="info-midle-right">
        <table>
          <tr v-for="item in shopInfo.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'text-better': item.isBetter}"><span>{{item.isBetter? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="info-bottom"><span>进店逛逛</span></div>
  </div>
</template>


<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  // 过滤器
  filters: {
    counteFilter(count) {
      let result = count
      if (count > 10000) {
        result = (count / 10000).toFixed(1) + '万'
      }
      return result
    }
  }
 
}
</script>


<style scoped>
.info-top {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 10px
}
.info-top > div {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
  overflow: hidden;
  margin-right: 10px
}
.info-top div img {
  width: 100%;
}
.info-top > span {
  margin-top: 20px
}


.info-midle {
  display: flex;
  justify-content: space-between
}

.info-midle-left {
  margin: 20px 0 20px 30px;
}

.info-midle-left table td {
  padding-right: 20px
}
.info-midle-left table,
.info-midle-right table {
  line-height: 30px;
  height: 30px;
  text-align: center;
  border-right: 1px solid #ccc
}
.info-midle-right table {
  border: 0;
  position: relative;
  top: 3px;
  text-align: left;
}
.info-midle-right {
  margin-right: 20px
}
.info-midle-right table td {
  padding-right: 10px;
}

.info-midle-right table .score {
  color: green
}
.info-midle-right table .score-better {
  color: red
}
.info-midle-right .better span{
  background-color: green;
  color: #fff;
}
.info-midle-right .text-better span{
  background-color: red;
}
.info-bottom {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.info-bottom span {
  height: 30px;
  width: 60%;
  line-height: 30px;
  border-radius: 10px;
  text-align: center;
  background-color: rgb(218, 218, 218)
}
</style>