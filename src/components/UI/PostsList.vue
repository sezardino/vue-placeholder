<template>
  <div class="post-list">
    <ul class="post-list__list">
      <li class="post-list__item" v-for="post in posts" :key="post.id">
        <my-post :data="post"></my-post>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-post-list",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.post-list {
  &__list {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
  }

  &__item:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
