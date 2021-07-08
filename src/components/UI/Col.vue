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
        [`col-xxl-${this.xxl}`]: this.xxl,
        [`col-xl-${this.xl}`]: this.xl,
        [`col-lg-${this.lg}`]: this.lg,
        [`col-md-${this.md}`]: this.md,
        [`col-sm-${this.sm}`]: this.sm,
        [`col-xs-${this.xs}`]: this.xs,
        [`col-${this.col}`]: this.col,
      };
    },
  },
};
</script>
