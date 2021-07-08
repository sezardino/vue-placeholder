<template>
  <button :class="['btn', `btn-${color}`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    color: {
      type: String,
      default: "primary",
      validator(value) {
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "link",
          "teal",
          "close",
        ].includes(value);
      },
    },
  },
};
</script>

<style lang="scss">
.btn-teal {
  background-color: teal;
  color: white;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: #016767;
    border-color: #016767;
  }
}
</style>
