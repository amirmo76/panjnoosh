<template>
  <div class="page-container">
    <div class="container">
      <ShopToolbar></ShopToolbar>
      <div class="product-container">
        <Product v-for="(product, i) in products" :key="i" :product="product"></Product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";
import ShopToolbar from "../components/ShopToolbar";

export default {
  name: "ShopPage",
  components: {
    Product,
    ShopToolbar
  },
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
  }
};
</script>

<style scoped>
.page-container {
  background-color: #1d1d1d;
  padding: 5rem;
}

.container {
  background-color: #151515;
  box-shadow: 0.2rem 1rem 2rem rgba(0, 0, 0, 0.2);
}

.product-container {
  padding: 5rem;
  direction: rtl;
}
</style>


