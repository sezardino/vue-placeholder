<template>
  <div class="comment">
    <header class="comment__header">
      <h4 class="comment__author">{{ comment.name }}</h4>
      <a :href="`mailto:${comment.email}`" class="comment__email">{{
        comment.email
      }}</a>
    </header>
    <div class="comment__body">
      <p class="comment__text">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.comment {
  padding: 8px;
  background-color: rgba(teal, 0.7);
  border-radius: 5px;

  p {
    margin: 0;
  }

  &__header {
  }

  &__author {
    margin: 0;
    font-size: 21px;
    line-height: 24px;
    font-weight: 700;
    color: whitesmoke;
  }

  &__email {
    margin-top: 5px;
    display: inline-block;
    color: teal;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: teal;
      text-decoration: underline;
    }
  }

  &__body {
    margin-top: 5px;
  }

  &__text {
    color: wheat;
  }
}
</style>
