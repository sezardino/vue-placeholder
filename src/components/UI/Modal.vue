<template>
  <my-button
    color="teal"
    type="button"
    class="btn btn-primary"
    @click="isOpen = true"
  >
    <slot name="trigger"></slot>
  </my-button>
  <div
    class="modal fade"
    :class="{ show: isOpen }"
    tabindex="-1"
    aria-hidden="true"
    @click="isOpen = false"
  >
    <div class="modal-dialog" @click.stop>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <my-button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="isOpen = false"
          ></my-button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-modal",
  props: { title: { type: String, default: "Modal" } },
  data() {
    return { isOpen: false };
  },
};
</script>

<style lang="scss" scoped>
.modal.show {
  display: flex;
  background-color: rgba(black, 0.8);
}

.modal-dialog {
  margin: auto;
}
</style>
