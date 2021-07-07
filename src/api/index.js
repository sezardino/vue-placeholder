class API {
  async getPosts({ page, limit = 10 }) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const posts = await response.json();
    const totalCount = response.headers.get("x-total-count");
    return { posts, totalCount };
  }
}

export default new API();
