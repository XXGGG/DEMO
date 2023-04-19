//src/router/index.ts
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "../demo/Home.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/FollowMouseMove",
    name: "FollowMouseMove",
    component: () => import("../demo/FollowMouseMove/FollowMouseMove.vue"),
  },
  {
    path: "/FollowMouseMove2",
    name: "FollowMouseMove2",
    component: () => import("../demo/FollowMouseMove2/FollowMouseMove2.vue"),
  },
  {
    path: "/DragAndDropChangeList",
    name: "DragAndDropChangeList",
    component: () =>
      import("../demo/DragAndDropChangeList/DragAndDropChangeList.vue"),
  },
  {
    path: "/DragAndDropChangeList2",
    name: "DragAndDropChangeList2",
    component: () =>
      import("../demo/DragAndDropChangeList2/DragAndDropChangeList2.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
