<template>
  <input :type="type" :placeholder="label" class="form-control" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    label: {
      type: String,
      default: "Input",
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>
