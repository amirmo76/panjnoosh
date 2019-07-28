<template>
  <div class="product-page">Product Page {{$route.params.id}}</div>
</template>

<script>
import { product } from "../data/dummies";

export default {
  name: "ProductPage",
  data() {
    return {
      product: {}
    };
  },
  methods: {
    getProduct() {
      this.product = product;
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style scoped>
.product-page {
  color: #ebebeb;
}
</style>


