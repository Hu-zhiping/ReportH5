<template>
  <div class="container">{{ props.orgStr }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{ orgStr: string }>()
console.log(props.orgStr)
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 40px;
  font-size: 28px;
  color: white;
  background: transparent;
}
</style>
