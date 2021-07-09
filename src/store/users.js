import api from "@/api";

const post = {
  namespaced: true,
  state: {
    usersList: [],
    users: [],
  },
  getters: {
    usersList(state) {
      return state.users;
    },
    users(state) {
      return state.users;
    },
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload);
    },
    setUsersList(state, payload) {
      state.usersList = payload;
    },
  },
  actions: {
    async getUsers({ commit }) {
      const users = await api.getUsers();
      commit("setUsersList", users);
      return users;
    },

    // async getUser({ getters, commit }, id) {
    //   const users = getters.users;
    //   const neededUser = users.find((user) => (user.id = id));
    //   if (neededUser) {
    //     return neededUser;
    //   }
    //   const user = await api.getUser(id);
    //   commit("addUser", user);
    //   return user;
    // },

    async getFullUserInfo({ getters, dispatch, commit }, id) {
      const users = getters.users;
      let neededUser = users.find((user) => user.id === id);
      console.log(neededUser);
      if (neededUser?.albums) {
        return neededUser;
      }
      const albums = await dispatch("albums/getUsersAlbums", id, {
        root: true,
      });
      const user = await api.getUser(id);
      const todos = await api.getUserTodos(id);
      const posts = await api.getUserPosts(id);
      const data = { ...user, posts, todos, albums };
      commit("addUser", data);
      return data;
    },
  },
};

export default post;
