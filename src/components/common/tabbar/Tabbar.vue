<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0
}

#tab-bar {
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0 -3px 1px rgba(158, 154, 154, 0.1);

  display: flex;
  
}
</style>