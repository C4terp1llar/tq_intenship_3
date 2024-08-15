import Home from '@/views/home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/task1',
      name: 'task1',
      component: () => import('../views/task1.vue')
    }
  ]
})

export default router
