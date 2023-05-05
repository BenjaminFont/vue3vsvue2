import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Vue2Component from "../views/Vue2Component.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/vue2",
    name: "vue2",
    component: Vue2Component,
  },
  {
    path: "/vue3",
    name: "vue3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vue3Component.vue"),
  },
  {
    path: "/",
    name: "hello",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
