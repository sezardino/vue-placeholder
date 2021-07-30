<template>
  <select
    class="form-select"
    aria-label="Default select example"
    :value="value"
    @change="$emit('update:value', $event.target.value)"
  >
    <option disabled selected :value="label">{{ label }}</option>
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "Open menu",
    },
    value: { type: String },
  },
};
</script>
