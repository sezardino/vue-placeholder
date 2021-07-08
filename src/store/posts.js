import api from "../api";

const posts = {
  state: {
    page: 1,
    totalPages: null,
    limit: 10,
    posts: [],
  },
  getters: {
    page(state) {
      return state.page;
    },
    limit(state) {
      return state.limit;
    },
    totalPages(state) {
      return state.totalPages;
    },
    posts(state) {
      return state.posts;
    },
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setTotalPages(state, payload) {
      state.totalPages = Math.ceil(payload / state.limit);
    },
  },
  actions: {
    async getPosts({ getters, commit }) {
      const { limit, page, totalPages } = getters;
      const { data, totalCount } = await api.getPosts({ limit, page });
      commit("setPosts", data);
      if (!totalPages) {
        commit("setTotalPages", totalCount);
      }
    },
  },
};

export default posts;
