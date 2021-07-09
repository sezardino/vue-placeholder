<template>
  <my-spinner v-if="loading" />
  <my-section v-else title="Persons" class="persons">
    <h1>Users</h1>
    <my-row>
      <my-col col="4" class="persons__filters">
        <my-filters></my-filters>
      </my-col>
    </my-row>
    <my-users-list :users="users" class="persons__list"></my-users-list>
  </my-section>
</template>

<script>
export default {
  data() {
    return { loading: true, users: [] };
  },
  async mounted() {
    this.users = await this.$store.dispatch("users/getUsers");
    this.loading = false;
  },
};
</script>

<style lang="scss">
.persons {
  &__filters {
    margin-left: auto;
  }

  &__list {
    margin-top: 40px;
  }
}
</style>
