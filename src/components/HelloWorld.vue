<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This project created with vue js and json-placeholder</p>

    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Vue Docs</a>
      </li>
      <li>
        <a
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noopener"
          >Json Placeholder</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
