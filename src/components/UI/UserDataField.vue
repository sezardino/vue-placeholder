<template>
  <p class="person__data">
    <span class="person__label">{{ label }}: </span>
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "my-user-data-field",
  props: { label: { type: String, default: "Label" } },
};
</script>
