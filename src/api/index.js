const QUERY = {
  POST: "posts",
  USERS: "users",
  COMMENTS: "comments",
  ALBUMS: "albums",
  PHOTOS: "photos",
  TODOS: "todos",
};

const PARAMS = {
  LIMIT: "_limit",
  PAGE: "_page",
  ID: "id",
  POST_ID: "postId",
  ALBUM_ID: "albumId",
};

class API {
  constructor() {
    this.url = new URL("https://jsonplaceholder.typicode.com/");
  }

  async getData(query, params = {}) {
    const url = new URL(query, this.url);
    this._appendParams(url, params);
    const response = await fetch(url);
    const data = await response.json();
    const totalCount = response.headers.get("x-total-count");
    return { data, totalCount };
  }

  async getPosts({ page, limit = 10 }) {
    const params = [
      this._createParam(PARAMS.PAGE, page),
      this._createParam(PARAMS.LIMIT, limit),
    ];
    return await this.getData(QUERY.POST, params);
  }

  async getPost(id) {
    const query = this._createQuery(QUERY.POST, id);
    const { data } = await this.getData(query);
    return data;
  }

  async getUsers() {
    const { data } = await this.getData(QUERY.USERS);
    return this._addAvatarForUser(data);
  }

  async getUser(id) {
    const query = this._createQuery(QUERY.USERS, id);
    const { data } = await this.getData(query);
    return this._addAvatarForUser(data);
  }

  async getComments(postId) {
    const params = this._createParam(PARAMS.POST_ID, postId);
    return await this.getData(QUERY.COMMENTS, params);
  }

  // nested routes

  async getNestedData(query) {
    const response = await this.getData(query);
    return response;
  }

  async getUserTodos(id) {
    const query = this._createQuery(QUERY.USERS, id, QUERY.TODOS);
    const { data } = await this.getNestedData(query);
    return data;
  }
  async getUserPosts(id) {
    const query = this._createQuery(QUERY.USERS, id, QUERY.POST);
    const { data } = await this.getNestedData(query);
    return data;
  }

  async getUserAlbums(id) {
    const query = this._createQuery(QUERY.USERS, id, QUERY.ALBUMS);
    const { data } = await this.getNestedData(query);
    return data;
  }

  async getAlbumPhotos(id) {
    const query = this._createQuery(QUERY.ALBUMS, QUERY.PHOTOS, id);
    return await this.getNestedData(query);
  }

  async getPostsComments(id) {
    const query = this._createQuery(QUERY.POST, id, QUERY.COMMENTS);
    const { data } = await this.getNestedData(query);
    return data;
  }

  _createQuery = (first = "", id = "", second = "") =>
    `${first}/${id}/${second}`;

  _createParam = (name, value) => ({ name, value });

  _addAvatarForUser(data) {
    if (data.length) {
      return data.map((user) => ({
        ...user,
        avatarUrl: require(`@/assets/avatars/${user.id}.svg`),
      }));
    } else {
      data.avatarUrl = require(`@/assets/avatars/${data.id}.svg`);
      return data;
    }
  }

  _appendParams(url, params) {
    if (params.length) {
      params.forEach((param) =>
        url.searchParams.append(param.name, param.value)
      );
    } else if (params?.name) {
      const { name, value } = params;
      url.searchParams.append(name, value);
    }
  }
}

export default new API();
