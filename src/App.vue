<template>
  <my-header />
  <router-view v-if="$route.path === '/'" />
  <default-layout v-else>
    <router-view />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/Layouts/Default";

export default {
  components: { DefaultLayout },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
