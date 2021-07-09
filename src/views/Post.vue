<template>
  <my-spinner v-if="loading"></my-spinner>
  <my-section v-else title="Post" class="post">
    <header class="post__header">
      <h3 class="post__title">{{ post.title }}</h3>
    </header>
    <div class="post__body">
      <p class="post__text">{{ post.body }}</p>
      <p class="post__author" v-if="post.user">Author: {{ post.user.name }}</p>
    </div>
    <footer class="post__footer" v-if="post.comments">
      <h4 class="post__subtitle">Comments</h4>
      <my-comments-list class="post__comments" :comments="post.comments" />
    </footer>
  </my-section>
</template>

<script>
export default {
  data() {
    return { loading: true, post: null };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.post = await this.$store.dispatch("post/getPost", id);
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;

  &__body {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 24px;
    line-height: 30px;
    text-transform: capitalize;

    text-align: center;
  }

  &__text {
    font-size: 20px;
    line-height: 24px;
  }

  &__author {
    margin: 0;
    display: inline-block;
    margin-left: auto;
  }

  &__footer {
    margin-top: 20px;
  }

  &__comments {
    margin-top: 20px;
  }
}
</style>
