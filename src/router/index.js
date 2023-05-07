import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useUserStore } from '../stores/user'
import { isEmptyObject } from '../utils/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/welcom',
      name: 'welcom',
      component: () => import('../views/WelcomView.vue')
    },
    {
      path: '/user-info',
      name: 'userinfo',
      component: () => import('../views/UserInfoView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const user = useUserStore()

  if (to.name !== 'login' && isEmptyObject(user?.details)) {
    return { name: 'login' }
  }
})

export default router
