<template>
  <div class="d-flex flex-column flex-shrink-0 sidebar">
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <router-link
          to="/home"
          active-class="active"
          class="nav-link link-dark"
        >
          Posts
        </router-link>
      </li>
      <li>
        <router-link
          to="/persons"
          active-class="active"
          class="nav-link link-dark"
        >
          Persons
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-sidebar",
};
</script>

<style lang="scss" scoped></style>
