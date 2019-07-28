<template>
  <q-scroll-area
    :thumb-style="{ right: '3px', borderRadius: '2px', backgroundColor: '#e6b31e', width: '6px', opacity: 1 }"
    :content-style="{ backgroundColor: '#C0C0C0' }"
    class="xxx"
    style="height: 100%; width: 100%;"
  >
    <q-list :dark="dark" separator class="category-list">
      <q-item class="spinner-container" v-if="isWaitingForCategories">
        <q-spinner-facebook class="spinner" color="primary" size="2.5em" />
      </q-item>
      <router-link
        :to="`/shop/category/${cat.id}`"
        class="link"
        v-for="(cat,i) in categories"
        :key="i"
      >
        <q-item dark clickable v-ripple class="item" v-close-popup>
          <q-item-section>{{cat.title}}</q-item-section>
        </q-item>
      </router-link>
    </q-list>
  </q-scroll-area>
</template>

<script>
import api from "../services/api";

export default {
  name: "CategoryList",
  props: {
    dark: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      categories: [],
      isWaitingForCategories: true
    };
  },
  methods: {
    async getCategories() {
      this.isWaitingForCategories = true;
      let categories = [];
      await new Promise(resolve => setTimeout(resolve, 250));
      await api
        .getCategories()
        .then(response => {
          categories = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
      this.categories = categories;
      this.isWaitingForCategories = false;
    }
  },
  created() {
    this.getCategories();
  }
};
</script>

<style scoped>
.link {
  text-align: right;
}

.spinner-container {
  justify-content: center;
}
</style>

