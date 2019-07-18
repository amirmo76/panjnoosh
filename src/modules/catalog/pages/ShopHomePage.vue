<template>
  <div class="all-product-page">
    <h2>همه محصولات</h2>
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
  data() {
    return {
      products: products
    };
  },
  filters: {
    searchStrategy
  }
};
</script>

<style scoped>
h2 {
  color: #ebebee;
  font-weight: 200;
  font-size: 3.5rem;
  margin-bottom: 5rem;
  margin-right: 1rem;
}
</style>

