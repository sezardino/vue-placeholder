<template>
  <my-row>
    <my-col>
      <my-input label="Search"></my-input>
    </my-col>
    <my-col>
      <my-select label="Filter" :options="options"></my-select>
    </my-col>
  </my-row>
</template>

<script>
export default {
  name: "my-filters",
  computed: {
    options() {
      const options = [
        { label: "Body", value: "body" },
        { label: "Title", value: "title" },
      ];

      return options;
    },
  },
};
</script>
