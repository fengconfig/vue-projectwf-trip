import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系： path -> component
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/view/home/home.vue'),
    },
    {
      path: '/favor',
      component: () => import('@/view/favor/favor.vue'),
    },
    {
      path: '/order',
      component: () => import('@/view/order/order.vue'),
    },
    {
      path: '/message',
      component: () => import('@/view/message/message.vue'),
    },
    {
      path: '/city',
      component: () => import('@/view/city/city.vue'),
    },
    {
      path: '/search',
      component: () => import('@/view/search/search.vue'),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: '/detail/:id',
      component: () => import('@/view/detail/detail.vue'),
      meta: {
        hideTabBar: true
      }
    },
  ]
})

export default router
