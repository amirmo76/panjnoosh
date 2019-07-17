<template>
  <div class="all-product-page">
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";

export default {
  name: "AllProductPage",
  components: {
    ProductList
  },
  data() {
    return {
      products: [
        {
          title: "دمنوش آرتیشو",
          category: "دمنوش گیاهی",
          shortDesc: "توضیحاتی کوتاه از دمنوش آرتیشو در اینجا قرار می گیرد",
          thumbnail: "/assets/images/artisho.jpg",
          price: 12000,
          off: 10
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>

