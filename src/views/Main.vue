<template>
  <div class="main">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Vue Placeholder App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Main",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
}
img {
  margin-top: 40px;
}
</style>
