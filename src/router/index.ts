import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'index',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/cusVisit',
    name: 'cusVisit',
    component: () => import('@/views/cusVisit/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
