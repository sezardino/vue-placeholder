<template>
  <my-row>
    <my-col>
      <my-input label="Search" v-model:value="search"></my-input>
    </my-col>
    <my-col>
      <my-select
        label="Sort"
        :options="options"
        v-model:value="sort"
      ></my-select>
    </my-col>
  </my-row>
</template>

<script>
export default {
  name: "my-filters",
  data() {
    return { search: "", sort: "Sort" };
  },
  computed: {
    options() {
      const options = [
        { label: "Body", value: "body" },
        { label: "Title", value: "title" },
      ];

      return options;
    },
  },
  watch: {
    search(newValue) {
      this.$emit("searchChange", newValue);
    },
    sort(newValue) {
      this.$emit("sortChange", newValue);
    },
  },
};
</script>
