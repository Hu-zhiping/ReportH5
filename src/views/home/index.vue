<template>
  <div class="container">
    <!-- 头部 -->
    <div class="nav">
      <div class="nav-content">
        <div class="back">
          <img src="../../assets/home/back.png" width="100%" />
        </div>
        <div class="title">管理工具箱</div>
        <div class="setting">
          <img src="../../assets/home/setting.png" width="100%" />
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="menu-container">
      <van-grid square :border="false" :icon-size="90">
        <van-grid-item
          v-for="menu in menuList"
          :key="menu"
          @click="toPage(menu.routeName)"
        >
          <img :src="menu.imgSrc" class="menu-img" />
          <div class="menu-text">{{ menu.name }}</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getImg } from '@/utils/utils.ts'
import router from '@/router'

const menuList = ref([
  {
    imgSrc: getImg('home/cusVisit'), //getImg('home/cusVisit.png'),
    name: '客户拜访',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/unusualVisit'),
    name: '异常拜访',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/productivityKanban'),
    name: '生产力看板',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/distribution'),
    name: '铺货率',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/inspection'),
    name: '检核辅导',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/perfectStore'),
    name: '完美门店',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/paid'),
    name: '付费管理',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/customerKanban'),
    name: '客户看板',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/payment'),
    name: '缴款/排单',
    routeName: 'cusVisit',
  },
  {
    imgSrc: getImg('home/assets'),
    name: '设备资产',
    routeName: 'cusVisit',
  },
])

const toPage = (routeName: string) => {
  router.push({ name: routeName })
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  position: relative;
}
.nav {
  background: url('../../assets/home/image.png@2x.png');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 530px;
  width: 100%;

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10x;

    .title {
      color: white;
      font-size: 36px;
    }

    .back,
    .setting {
      width: 40px;
      height: 40px;
      vertical-align: middle;
      font-size: 0;
      margin: 20px;
    }
  }
}

.menu-container {
  width: 100%;
  border-radius: 40px 40px 0 0;
  position: relative;
  top: -50px;
  z-index: 9999;
  background-color: white;
  box-sizing: border-box;
  padding: 50px 20px;

  .menu-img {
    width: 90px;
  }
  .menu-text {
    font-size: 28px;
    margin-top: 11px;
    color: #111111;
  }
}
</style>
