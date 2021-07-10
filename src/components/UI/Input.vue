<template>
  <input
    :type="type"
    :placeholder="label"
    class="form-control"
    :value="value"
    @input="$emit('update:value', $event.target.value)"
  />
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
    value: {
      type: String,
    },
  },
  methods: {
    updateInput(evt) {
      this.$emit("update:value", evt.target.value);
    },
  },
};
</script>
