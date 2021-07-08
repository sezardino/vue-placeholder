<template>
  <div class="about">
    <h1>This is an person page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>
