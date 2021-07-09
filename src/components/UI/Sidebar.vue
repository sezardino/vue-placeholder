<template>
  <div class="d-flex flex-column flex-shrink-0 sidebar">
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="page in pages" :key="page.path">
        <router-link
          :to="page.path"
          active-class="active"
          class="nav-link link-dark"
        >
          {{ page.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "@/router";
export default {
  name: "my-sidebar",
  computed: {
    pages() {
      return routes.filter((route) => route.meta.inMenu);
    },
  },
};
</script>

<style lang="scss" scoped></style>
