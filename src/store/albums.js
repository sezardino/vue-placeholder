import api from "@/api";

const albums = {
  namespaced: true,
  state: {
    albums: [],
  },
  mutations: {
    addAlbums(state, payload) {
      state.albums = payload;
    },
  },
  getters: {
    albums(state) {
      return state.albums;
    },
  },
  actions: {
    async getUsersAlbums({ getters, commit }, id) {
      const albums = getters.albums;
      const neededAlbum = albums.find((user) => user.id === id);
      if (neededAlbum) {
        return neededAlbum;
      }
      const data = await api.getUserAlbums(id);
      commit("addAlbums", data);
      return data;
    },
  },
};

export default albums;
