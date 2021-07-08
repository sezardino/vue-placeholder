<template>
  <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  name: "my-spinner",
};
</script>

<style lang="scss" scoped>
.spinner-border {
  margin: 20px auto;
  display: block;
}
</style>
