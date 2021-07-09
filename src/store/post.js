import api from "@/api";

const post = {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    currentPost(state) {
      return state.currentPost;
    },
  },
  mutations: {
    addPost(state, payload) {
      state.posts.push(payload);
    },
    setCurrentPost(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async getPost({ getters, commit, dispatch }, id) {
      const posts = getters.posts;
      const neededPost = posts.find((post) => (post.id === id));
      if (neededPost) {
        return neededPost;
      }
      const post = await api.getPost(id);
      const comments = await api.getPostsComments(id);
      const user = await dispatch("users/getUser", post.userId, { root: true });
      const currentPost = { ...post, user, comments };
      commit("addPost", currentPost);
      return currentPost;
    },
  },
};

export default post;
