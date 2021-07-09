<template>
  <ul class="comments-list">
    <li
      class="comments-list__item"
      v-for="comment in comments"
      :key="comment.id"
    >
      <my-comment :comment="comment"></my-comment>
    </li>
  </ul>
</template>

<script>
export default {
  name: "my-comments-list",
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.comments-list {
  margin-left: 0;
  padding-left: 0;
  list-style: none;
  &__item:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
