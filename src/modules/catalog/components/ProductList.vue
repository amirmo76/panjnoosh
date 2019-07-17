<template>
  <div class="product-list">
    <Product v-for="(product, i) in products" :key="i" :product="product"></Product>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "ProductList",
  components: {
    Product
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
