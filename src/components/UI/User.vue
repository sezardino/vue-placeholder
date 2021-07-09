<template>
  <div class="user">
    <div class="user__awatar">
      <router-link :to="'/persons/' + user.id">
        <img :src="user.avatarUrl" :alt="user.name + `'s avatar`" />
      </router-link>
    </div>
    <div class="user__wrapper">
      <h3 class="user__name">
        <router-link :to="'/persons/' + user.id">
          {{ user.name }}
        </router-link>
      </h3>
      <address class="user__city">
        leave in:
        <span class="user__span">
          {{ user.address?.city }}
        </span>
      </address>
      <p class="user__company">
        work in:
        <span class="user__span">
          {{ user.company?.name }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-user",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return require(`@/assets/avatars/${this.user.id}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  &__awatar {
    max-width: 100px;
    width: 100%;
    border-radius: 50%;
    background-color: yellowgreen;
    overflow: hidden;
  }

  &__city,
  &__company {
    display: block;
    margin: 0;
    margin-top: 5px;
    font-size: 15px;
    line-height: 19px;
    font-weight: 500;
  }

  &__span {
    font-weight: 700;
    font-size: 19px;
    line-height: 21px;
  }

  &__name {
    margin: 0;
    a {
      color: inherit;
      text-decoration: none;
      font-weight: 700;
      &:hover,
      &:active,
      &:focus {
        text-decoration: underline;
      }
    }
  }
}
</style>
