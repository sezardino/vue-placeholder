import api from "../api";

const posts = {
  state: {
    page: 1,
    totalPages: null,
    limit: 10,
  },
  getters: {
    page(state) {
      return state.page;
    },
    limit(state) {
      return state.page;
    },
    totalPages(state) {
      return state.page;
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
      const { posts, totalCount } = await api.getPosts({ limit, page });

      commit("setTotalPages", totalCount);
      if (!totalPages) {
        commit("setPosts", posts);
      }
    },
  },
};

export default posts;
