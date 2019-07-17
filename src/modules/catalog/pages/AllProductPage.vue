<template>
  <div class="all-product-page">
    <ProductList :products="products | searchStrategy($store.getters.getSearchValue)"></ProductList>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import { products } from "../data/dummies";
import searchStrategy from "../services/search";

export default {
  name: "AllProductPage",
  components: {
    ProductList
  },
  computed: {
    products() {
      return products;
    }
  },
  filters: {
    searchStrategy
  }
};
</script>

<style scoped>
</style>

