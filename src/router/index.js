import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

export const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: { title: "Vue Placeholder", inMenu: false },
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../views/Posts.vue"),
    meta: { title: "Latest Posts", inMenu: true },
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
    meta: { title: "Post", inMenu: false },
  },
  {
    path: "/persons",
    name: "Persons",
    component: () => import("../views/Persons.vue"),
    meta: { title: "Users", inMenu: true },
  },
  {
    path: "/persons/:id",
    name: "Person",
    component: () => import("../views/Person.vue"),
    meta: { title: "User", inMenu: false },
  },
  {
    path: "/album/:id",
    name: "Album",
    component: () => import("../views/Album.vue"),
    meta: { title: "Album", inMenu: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
