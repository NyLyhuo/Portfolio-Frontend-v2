import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/admin/DashboardPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;