//src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../demo/Home.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/FollowMouseMove",
    name: "FollowMouseMove",
    component: () => import("../demo/FollowMouseMove/FollowMouseMove.vue"),
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
  {
    path: "/FollowTest",
    name: "FollowTest",
    component: () => import("../demo/FollowTest/FollowTest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
