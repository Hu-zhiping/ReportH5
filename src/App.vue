<script setup lang="ts">
import { RouterView } from 'vue-router'
// 防止页面移动
document.body.addEventListener(
  'touchmove',
  function (evt) {
    // 禁止微信浏览器拖动
    evt.preventDefault()
  },
  { passive: false }
)
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
