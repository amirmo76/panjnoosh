<template>
  <div class="all-product-page">
    <ProductList :products="filteredProducts"></ProductList>
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
  data() {
    return {
      products: searchStrategy(products, this.$store.getters.getSearchValue)
    };
  },
  computed: {
    filteredProducts() {
      return searchStrategy(products, this.$store.getters.getSearchValue);
    }
  }
};
</script>

<style scoped>
</style>

