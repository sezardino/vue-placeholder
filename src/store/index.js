import { createStore } from "vuex";
import posts from "./posts";
import post from "./post";

export default createStore({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: { posts, post },
});
