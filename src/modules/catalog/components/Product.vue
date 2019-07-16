<template>
  <div class="product">
    <div class="thumbnail" :style="{ backgroundImage: `url(${product.thumbnail})` }">
      <p class="category">{{ product.category }}</p>
      <p class="short-desc">{{ product.shortDesc }}</p>
      <q-btn class="button" color="primary" text-color="accent" label="توضیحات بیشتر" />
    </div>
    <div class="info">
      <div class="header">
        <h3>{{ product.title }}</h3>
        <SaleIcon class="sale-icon" v-if="product.off">
          <q-tooltip
            anchor="center left"
            self="center right"
            content-class="bg-dark"
            :content-style="{fontSize: '12px', direction: 'rtl'}"
            transition-show="fade"
            transition-hide="fade"
          >٪{{product.off}} تخفیف</q-tooltip>
        </SaleIcon>
      </div>
      <div class="footer">
        <div class="price-container">
          <q-tooltip
            v-if="product.off"
            anchor="center left"
            self="center right"
            content-class="bg-dark"
            transition-show="fade"
            transition-hide="fade"
            :content-style="{textDecoration: 'line-through', fontSize: '12px', direction: 'rtl'}"
          >{{product.price | formatPrice}} تومان</q-tooltip>
          <p class="price">{{ getPrice | formatPrice }}</p>
          <p class="price-unit">تومان</p>
        </div>
        <q-btn flat round icon="shopping_cart" class="cart" />
        <q-tooltip
          anchor="center right"
          self="center left"
          content-class="bg-dark"
          content-style="font-size: 12px"
          transition-show="fade"
          transition-hide="fade"
          target=".cart"
        >افزودن به سبد</q-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import CartIcon from "../../../../public/assets/svg/cart.svg";
import SaleIcon from "../../../../public/assets/svg/sale.svg";
import numeral from "numeral";

export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    CartIcon,
    SaleIcon
  },
  filters: {
    formatPrice(val) {
      return numeral(val).format("0,0");
    }
  },
  computed: {
    getPrice() {
      return (this.product.price * (100 - this.product.off)) / 100;
    }
  }
};
</script>

<style scoped>
.product {
  width: 27.5rem;
  background-color: #343434;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #ebebeb;
}

.thumbnail {
  background-size: cover;
  background-position: center;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.thumbnail::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  content: "";
  background-color: #000;
  opacity: 0;
  transition: all 0.2s;
}

.product:hover .thumbnail::before {
  opacity: 0.6;
}

.product:hover .short-desc,
.product:hover .button {
  opacity: 1;
}

.category {
  align-self: end;
  margin-bottom: 2.5rem;
  padding: 0.5rem;
  color: #ebebeb;
  font-weight: 300;
  font-size: 1.2rem;
  background-color: rgba(29, 29, 29, 0.5);
  position: relative;
  z-index: 3;
}

.short-desc {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: all 0.2s;
  opacity: 0;
  position: relative;
  z-index: 3;
}

.button {
  transition: all 0.2s;
  opacity: 0;
  position: relative;
  z-index: 3;
  font-weight: 300;
}

.info {
  padding: 0 2rem;
  direction: rtl;
}

h3 {
  font-weight: 300;
  font-size: 1.8rem;
}

.header {
  padding: 2rem 0;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
}

.sale-icon {
  fill: #e6b31e;
  margin-right: 2rem;
  transition: all 0.2s;
}

.sale-icon:hover {
  opacity: 1;
}

.footer {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}

.price-container {
  display: flex;
  align-items: center;
}

.price {
  font-size: 1.4rem;
}

.price-unit {
  font-size: 1.4rem;
  margin-right: 0.5rem;
}

.cart {
  margin-right: auto;
}

p {
  margin: 0;
}
</style>

