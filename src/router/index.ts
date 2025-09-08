import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/LoginPage.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
      {
        path: 'project',
        name: 'Project',
        component: () => import('../views/admin/ProjectPage.vue'),
      },
      {
        path: 'experience',
        name: 'Experience',
        component: () => import('../views/admin/ExperiencePage.vue'),
      },
    ],
    component: () => import('../views/admin/DashboardPage.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const { token } = storeToRefs(authStore)

  if (to.meta.requiresAuth && !token.value) {
    return next({ name: 'Login' })
  }

  if (to.name === 'Login' && token.value) {
    return next({ name: 'Dashboard' })
  }

  next()
})

export default router
