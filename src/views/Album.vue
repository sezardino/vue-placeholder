<template>
  <my-section title="Album" class="album">
    <ul class="album__list">
      <li class="album__item" v-for="photo in photos" :key="photo.id">
        <button class="btn" @click="modal = photo">
          <img :src="photo.thumbnailUrl" alt="" class="album__img" />
        </button>
      </li>
    </ul>
    <div
      class="modal fade"
      :class="{ show: modal }"
      tabindex="-1"
      aria-hidden="true"
      @click="modal = null"
      v-if="modal"
    >
      <div class="modal-dialog" @click.stop>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ modal.title }}
            </h5>
            <my-button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="modal = null"
            ></my-button>
          </div>
          <div class="modal-body">
            <img :src="modal.url" :alt="modal.title" />
          </div>
        </div>
      </div>
    </div>
  </my-section>
</template>

<script>
export default {
  data() {
    return { loading: true, photos: [], modal: null };
  },
  methods: {
    async fetchData() {
      this.photos = await this.$store.dispatch(
        "albums/getAlbum",
        this.$route.params.id
      );
      this.loading = false;
    },
  },

  async mounted() {
    await this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.album {
  &__list {
    margin-left: 0;
    padding-left: 0;
    list-style: none;

    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
