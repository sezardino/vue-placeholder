<template>
  <section class="section">
    <h2 class="visually-hidden">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "my-section",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.section {
  padding: 40px 0;
}
</style>
