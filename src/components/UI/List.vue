<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in items" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "my-list",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
