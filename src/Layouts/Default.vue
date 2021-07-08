<template>
  <my-container>
    <my-row>
      <my-col col="2">
        <my-sidebar></my-sidebar>
      </my-col>
      <my-col col="10">
        <slot></slot>
      </my-col>
    </my-row>
  </my-container>
</template>

<script>
export default {};
</script>
