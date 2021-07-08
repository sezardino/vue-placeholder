<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">
        {{ data.body }}
      </p>
      <div class="card-wrapper">
        <my-button color="teal" @click="$router.push(`/posts/${data.id}`)">
          Read More...
        </my-button>
        <my-button color="danger"> Delete </my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-post",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-color: teal;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
