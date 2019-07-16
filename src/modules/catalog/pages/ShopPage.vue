<template>
  <div>
    <Product v-for="(product, i) in products" :key="i" :product="product"></Product>
  </div>
</template>

<script>
import Product from "../components/Product";

export default {
  name: "ShopPage",
  data() {
    return {
      products: [
        {
          title: "دمنوش آرتیشو",
          category: "دمنوش گیاهی",
          shortDesc: "توضیحاتی کوتاه از دمنوش آرتیشو در اینجا قرار می گیرد",
          thumbnail: "./assets/images/artisho.jpg",
          price: 12000,
          off: 10
        }
      ]
    };
  },
  components: {
    Product
  }
};
</script>

<style scoped>
</style>


