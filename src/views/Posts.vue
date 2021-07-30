<template>
  <my-spinner v-if="loading"></my-spinner>
  <my-section class="posts" v-else title="Posts">
    <h3 class="posts__title">Latest Posts</h3>
    <my-row class="post__row">
      <my-col>
        <create-post-modal></create-post-modal>
      </my-col>
      <my-col>
        <my-filters
          @sortChange="sortChange"
          @searchChange="searchChange"
        ></my-filters>
      </my-col>
    </my-row>
    <my-post-list class="posts__list" :posts="filteredPosts"></my-post-list>
  </my-section>
</template>

<script>
import { mapGetters } from "vuex";

const sortArray = (array, field) => {
  if (!field) {
    return array;
  }
  return array.sort((a, b) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  });
};

export default {
  data() {
    return {
      loading: true,
      sort: "",
      search: "",
    };
  },
  computed: {
    ...mapGetters("posts", ["posts"]),
    filteredPosts() {
      const search = this.posts.filter(
        (item) =>
          item.title.includes(this.search) && item.body.includes(this.search)
      );
      sortArray(this.posts, this.sort);

      return search;
    },
  },

  methods: {
    sortChange(value) {
      this.sort = value;
    },
    searchChange(value) {
      this.search = value;
    },
  },

  async mounted() {
    await this.$store.dispatch("posts/getPosts");
    this.loading = false;
  },
};
</script>

<style lang="scss">
.posts {
  &__list {
    margin-top: 25px;
  }
  &__row {
    justify-content: space-between;
  }
}
</style>
