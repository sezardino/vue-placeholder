<template>
  <div class="d-flex flex-column flex-shrink-0 sidebar">
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <router-link
          to="/posts"
          active-class="active"
          class="nav-link link-dark"
        >
          Posts
        </router-link>
      </li>
      <li>
        <router-link
          to="/persons"
          active-class="active"
          class="nav-link link-dark"
        >
          Persons
        </router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page"> Home </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">Dashboard</a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">Orders</a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark">Products</a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark"> Customers</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-sidebar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 10px;
}
</style>
