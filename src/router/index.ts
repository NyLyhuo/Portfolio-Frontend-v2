import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/admin/DashboardPage.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isLoggedIn = !!authStore.token;

  if (to.meta.requiresAuth && !isLoggedIn) {
    return next({ name: "Login" });
  }

  next();
});

export default router;
