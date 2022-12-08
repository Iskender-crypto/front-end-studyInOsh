import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: () => import("../pages/home.vue"),
  },
  {
    name: "news",
    path: "/news",
    component: () => import("../pages/news.vue"),
  },
  {
    name: "allList",
    path: "/allList",
    component: () => import("../pages/allList.vue"),
  },
  {
    name: "univer",
    path: "/univer",
    component: () => import("../pages/univer.vue"),
  },
  {
    name: "we",
    path: "/we",
    component: () => import("../pages/we.vue"),
  },
  {
    name: "residence",
    path: "/residence",
    component: () => import("../pages/residence.vue"),
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../pages/home.vue"),
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
