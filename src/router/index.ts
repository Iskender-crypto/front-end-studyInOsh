import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: () => import("../pages/home.vue"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../pages/about.vue"),
  },
  {
    name: "news",
    path: "/news",
    component: () => import("../pages/news.vue"),
  },

  {
    name: "register",
    path: "/login/register",
    component: () => import("../pages/login/register.vue"),
    meta: {
      layout: "login",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
