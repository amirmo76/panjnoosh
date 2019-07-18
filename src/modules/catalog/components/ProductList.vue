<template>
  <div v-if="isViewStyleGrid" class="grid">
    <Product v-for="(product, i) in products" :key="i" :product="product"></Product>
  </div>
  <q-list v-else class="list">
    <div v-for="(product, i) in products" :key="i">
      <Product :product="product" :gridViewStyle="false"></Product>
      <div class="seperator"></div>
    </div>
  </q-list>
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
  },
  computed: {
    isViewStyleGrid() {
      return this.$store.getters.getViewStyle === "grid";
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  justify-content: center;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(27rem, max-content));
}

.list {
  width: 100%;
}

.seperator {
  margin: 2.5rem 0;
  margin-right: 20rem;
  opacity: 0.2;
  width: (100% - 20rem);
  height: 1px;
  background-color: #ebebeb;
  /* transform: rotate(180deg); */
}
</style>
