<template>
  <div class="detail-comment">
    <div class="comment-title">
      <span>用户评论</span><span v-if="Object.keys(commentInfo).length !== 0">更多</span>
    </div>
    <div class="comment-content" v-if="Object.keys(commentInfo).length !== 0">
      <div class="userInfo" v-if="commentInfo.user">
        <div><img :src="commentInfo.user.avatar" alt=""></div>
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="main-content">
        <p>{{commentInfo.content}}</p>
        <div class="other-info">
          <span v-if="commentInfo.created">{{commentInfo.created | showDate}}</span>
          <span v-if="commentInfo.style">{{commentInfo.style}}</span>
        </div>
      </div>
      <div class="img-info" v-if="commentInfo.images"><img :src="item" alt="" v-for="item in commentInfo.images"></div>
    </div>
    <div class="no-comment" v-else>他们都太懒了，还没有留下评论</div>
    <div class="recommend">为您推荐</div>
  </div>
</template>


<script>
import {formatDate} from 'common/utils.js'

export default {
  name: 'DetailComment',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      // 1.将时间戳转换为Date对象
      const date = new Date(value * 1000)
     // 2.将date进行格式化
     return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>


<style scoped>
.comment-title {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin: 0 20px 0;
}
.userInfo {
  display: flex;
  justify-content: flex-start;
  margin: 20px 0 15px 20px;
}
.userInfo > div {
  height: 50px;
  width: 50px;
  overflow: hidden;
  border-radius: 25px; 
  margin-right: 10px;
}
.userInfo > div > img {
  height: 100%;
}
.userInfo span {
  margin-top: 18px;
  font-size: 14px;
  font-weight: 600;  
}
.main-content {
  margin: 0 10px
}
.main-content .other-info {
  margin-top: 15px;
  font-size: 14px;
  color: rgb(209, 207, 207);
}
.other-info > span {
  margin-right: 10px
}
.img-info {
  height: 80px;
  display: flex;
  margin: 10px 10px 20px 10px;
  justify-content: flex-star;
}
.img-info img {
  height: 80px;
  width: 80px;
  margin-right: 10px
}
.no-comment {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: rgb(209, 207, 207)
}
.recommend {
  margin: 30px 0 10px 10px 
}
</style>