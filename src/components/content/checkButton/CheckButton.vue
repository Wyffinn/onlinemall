<template>
  <div class="check-button" :class="{checked: isChecked}">
    <img src="~assets/img/common/tick.svg" alt="">
  </div>
</template>


<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>


<style scoped>
.check-button {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: 2px solid #ccc
}
.checked {
  background-color: red;
  border-color: red;
}
</style>