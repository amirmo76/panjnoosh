<template>
  <div class="category-page">
    <ProductList :products="products | searchStrategy($store.getters.getSearchValue)"></ProductList>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import { categoryOne, categoryTwo } from "../data/dummies";
import searchStrategy from "../services/search";

export default {
  name: "CategoryPage",
  components: {
    ProductList
  },
  computed: {
    products() {
      if (this.$route.params.id === "1") {
        return categoryOne;
      } else {
        return categoryTwo;
      }
    }
  },
  filters: {
    searchStrategy
  }
};
</script>

<style scoped>
.category-page {
  color: #ebebeb;
}
</style>

