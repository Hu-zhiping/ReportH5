<template>
  <div>
    <div class="header">
      <van-config-provider :theme-vars="themeVars">
        <van-nav-bar
          title="客户拜访"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          :border="false"
        />
      </van-config-provider>

      <OrgText :org-str="orgStr"></OrgText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import OrgText from '@/components/OrgText/index.vue'
import router from '@/router'
const orgStr = ref<string>('你好')

const themeVars = reactive({
  navBarHeight: '60px',
  navBarBackground: 'transparent',
  navBarTitleTextColor: 'white',
  navBarTextColor: 'white',
  navBarIconColor: 'white',
})

const onClickLeft = () => {
  router.push({ name: 'index' })
}

const onClickRight = () => {
  router.push({ name: 'index' })
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 250px;
  background: url('@/assets/TopBg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
