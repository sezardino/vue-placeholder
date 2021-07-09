import { createStore } from "vuex";
import posts from "./posts";
import post from "./post";
import users from "./users";
import albums from "./albums";

export default createStore({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: { posts, post, users, albums },
});
