<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vue Placeholder</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/posts" active-class="active" class="nav-link">
            Posts
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "my-header",
};
</script>

<style lang="scss" scoped>
.nav-link {
  position: relative;
  &:before {
    content: "";
    width: 0;
    height: 2px;
    background-color: teal;

    transition: 1s width ease;

    position: absolute;
    bottom: 0;
    left: 0;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
}
</style>
