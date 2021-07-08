<template>
  <my-modal title="Create Post">
    <template v-slot:trigger> Create Post </template>
    <div class="create-post">
      <form class="create-post__form" @submit.prevent>
        <my-input label="Title" class="create-post__input"></my-input>
        <my-textarea label="Title" class="create-post__textarea"></my-textarea>
        <my-button color="teal" class="create-post__button">Create</my-button>
      </form>
    </div>
  </my-modal>
</template>

<script>
export default {
  name: "create-post-modal",
};
</script>

<style lang="scss" scoped>
.create-post {
  min-width: 300px;
  &__form {
    display: flex;
    flex-direction: column;
  }

  &__textarea {
    margin-top: 15px;
  }

  &__button {
    margin-top: 15px;
    margin-left: auto;
  }
}
</style>
