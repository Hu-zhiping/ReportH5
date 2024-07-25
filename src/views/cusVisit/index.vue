<template>
  <div>
    <div class="header">
      <van-config-provider :theme-vars="themeVars">
        <van-nav-bar title="客户拜访" left-arrow @click-left="onClickLeft" @click-right="onClickRight" :border="false" />
      </van-config-provider>
      <OrgText :org-str="orgStr"></OrgText>
      <van-dropdown-menu swipe-threshold="4">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="content">
      <van-circle v-model:current-rate="currentRate" :rate="30" :speed="100" :text="text" :stroke-width="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import OrgText from '@/components/OrgText/index.vue'
import router from '@/router'
const orgStr = ref<string>('百饮事业')
const currentRate = ref<number>(30)
const text = ref<string>('30%')

const value1 = ref<number>(0)
const value2 = ref<number>(0)

const themeVars = reactive({
  navBarHeight: '60px',
  navBarBackground: 'transparent',
  navBarTitleTextColor: 'white',
  navBarTextColor: 'white',
  navBarIconColor: 'white',
})
const option1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    const option2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ];

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
.content{
  margin-top: 30px;
}
</style>
