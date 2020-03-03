<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>


<script>
export default {
  name: 'Toast',
  /* props: {
    message: {
      type: String,
      default() {
        return ''
      }
    },
    show: {
      type: Boolean,
      default() {
        return false
      }
    }
  } */
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message, duration = 2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>


<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  color: #fff;
  padding: 10px 20px;
  transform: translate(-50%, -50%);
  background-color: rgba(100, 100, 100, 0.7);
}
</style>