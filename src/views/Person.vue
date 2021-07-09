<template>
  <my-spinner v-if="loading" />
  <my-section v-else title="Person" class="person" :key="data.id">
    <my-row class="person__data">
      <my-col col="4">
        <h2 class="person__name">{{ data.name }}</h2>
        <div class="person__avatar">
          <img :src="data.avatarUrl" :alt="data.name + `'s photo`" />
        </div>
      </my-col>
      <my-col col="8" class="person__info">
        <div class="person__field">
          <h3 class="person__subtitle">Contact Data</h3>
          <p
            class="person__data-field"
            v-for="field in contactData"
            :key="field.label"
          >
            <span class="person__label">{{ field.label }}: </span>
            {{ field.value }}
          </p>
        </div>
        <div class="person__field">
          <h3 class="person__subtitle">Career</h3>
          <p
            class="person__data-field"
            v-for="field in careerData"
            :key="field.label"
          >
            <span class="person__label">{{ field.label }}: </span>
            {{ field.value }}
          </p>
        </div>
      </my-col>
    </my-row>
    <my-row class="person__albums">
      <my-col col="4">
        <h3 class="person__subtitle">Albums</h3>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="album in data.albums"
            :key="album.id"
          >
            <router-link :to="'/album/' + album.id">
              {{ album.title }}
            </router-link>
          </li>
        </ul>
      </my-col>
      <my-col col="8">
        <h3 class="person__subtitle">Latests Posts</h3>
        <my-post-list :posts="data.posts"></my-post-list>
      </my-col>
    </my-row>
  </my-section>
</template>

<script>
export default {
  name: "Person",
  data() {
    return { loading: true, data: {} };
  },

  methods: {
    async fetchData() {
      this.loading = true;
      this.data = await this.$store.dispatch(
        "users/getFullUserInfo",
        this.$route.params.id
      );
      console.log(this.data);
      this.loading = false;
    },
  },

  computed: {
    contactData() {
      const { address, phone, email, website } = this.data;
      const { city, street, suite, zipcode } = address;
      const fields = [
        {
          label: "City",
          value: city,
        },
        {
          label: "Streen",
          value: street,
        },
        {
          label: "Apartment",
          value: suite,
        },
        {
          label: "Zipcode",
          value: zipcode,
        },
        {
          label: "Phone",
          value: phone,
        },
        {
          label: "Email",
          value: email,
        },
        {
          label: "Website",
          value: website,
        },
      ];
      return fields;
    },
    careerData() {
      const { name, bs, catchPhrase } = this.data.company;
      const fields = [
        {
          label: "Company name",
          value: name,
        },
        {
          label: "Company bs",
          value: bs,
        },
        {
          label: "Company slogan",
          value: catchPhrase,
        },
      ];
      return fields;
    },
  },

  async mounted() {
    await this.fetchData();
  },
};
</script>

<style lang="scss">
.person {
  &__name {
    text-align: center;
    margin: 0;
  }

  &__avatar {
    margin-top: 20px;
    background-color: chocolate;
    border-radius: 50%;
  }
  &__subtitle {
    margin: 0;
    margin-bottom: 5px;
  }

  &__info {
    text-align: left;
    p {
      margin: 0;
    }
  }

  &__field {
    border-radius: 5px;
    box-shadow: 2px 1px 10px 1px teal;
    padding: 5px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__data-field {
    padding: 0 5px;
    &:not(:last-child) {
      border-bottom: 1px solid gray;
    }
  }

  &__label {
    font-weight: 700;
  }
}
.list-group-item a {
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
