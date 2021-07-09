<template>
  <div class="users-list">
    <ul class="users-list__list">
      <li class="users-list__item" v-for="user in users" :key="user.id">
        <my-user :user="user" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-users-list",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.users-list {
  &__list {
    margin-left: 0;
    padding-left: 0;
    list-style: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  &__item {
  }
}
</style>
