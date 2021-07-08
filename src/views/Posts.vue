<template>
  <my-spinner v-if="loading"></my-spinner>
  <my-section class="posts" v-else title="Posts">
    <h3 class="posts__title">Latest Posts</h3>
    <my-row class="post__row">
      <my-col>
        <create-post-modal></create-post-modal>
      </my-col>
      <my-col>
        <my-filters></my-filters>
      </my-col>
    </my-row>
    <my-post-list class="posts__list" :posts="posts"></my-post-list>
  </my-section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  async mounted() {
    await this.$store.dispatch("getPosts");
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
