<template>
  <div class="form-floating">
    <textarea
      class="form-control"
      :placeholder="placeholder"
      :id="placeholder"
    ></textarea>
    <label :for="placeholder">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: "my-textarea",
  props: { placeholder: { type: String, default: "Textarea" } },
};
</script>

<style lang="scss" scoped>
label {
  color: gray;
}
textarea {
  resize: none;
}
</style>
