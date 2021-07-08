<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-col",
  props: {
    col: String,
    xs: String,
    sm: String,
    md: String,
    lg: String,
    xl: String,
    xxl: String,
  },
  computed: {
    classes() {
      return {
        col: true,
        [`cols-xxl-${this.xxl}`]: this.xxl,
        [`cols-xl-${this.xl}`]: this.xl,
        [`cols-lg-${this.lg}`]: this.lg,
        [`cols-md-${this.md}`]: this.md,
        [`cols-sm-${this.sm}`]: this.sm,
        [`cols-xs-${this.xs}`]: this.xs,
        [`cols-${this.col}`]: this.col,
      };
    },
  },
};
</script>
