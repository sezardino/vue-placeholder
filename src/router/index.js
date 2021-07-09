import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Vue Placeholder" },
  },
  {
    path: "/home",
    name: "Posts",
    component: () => import("../views/Posts.vue"),
    meta: { title: "Latest Posts" },
  },
  {
    path: "/persons",
    name: "Persons",
    component: () => import("../views/Persons.vue"),
    meta: { title: "Users" },
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
    meta: { title: "Post" },
  },
  {
    path: "/persons/:id",
    name: "Person",
    component: () => import("../views/Person.vue"),
    meta: { title: "User" },
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
