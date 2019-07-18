<template>
  <div class="page-container">
    <div class="container">
      <ShopToolbar></ShopToolbar>
      <div class="shop-view">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ShopToolbar from "../components/ShopToolbar";

export default {
  name: "ShopPage",
  components: {
    ShopToolbar
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

.shop-view {
  padding: 5rem;
  direction: rtl;
}
</style>


