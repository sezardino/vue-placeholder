import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../views/Posts.vue"),
  },
  {
    path: "/persons",
    name: "Persons",
    component: () => import("../views/Persons.vue"),
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: "/persons/:id",
    name: "Person",
    component: () => import("../views/Person.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
