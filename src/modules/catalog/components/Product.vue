<template>
  <div class="product" v-if="gridViewStyle">
    <div class="thumbnail" :style="{ backgroundImage: `url(${product.thumbnail})` }">
      <p class="category">{{ product.category }}</p>
      <p class="short-desc">{{ product.shortDesc }}</p>
      <router-link :to="{name: 'product', params: {id: product.id}}">
        <q-btn class="button" color="primary" text-color="accent" label="توضیحات بیشتر" />
      </router-link>
    </div>
    <div class="info">
      <div class="header">
        <router-link :to="{name: 'product', params: {id: product.id}}">
          <h3 v-ripple:white class="title">{{ product.title }}</h3>
        </router-link>
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
        <q-btn flat round icon="shopping_cart" class="cart">
          <q-tooltip
            anchor="center right"
            self="center left"
            content-class="bg-dark"
            content-style="font-size: 12px"
            transition-show="fade"
            transition-hide="fade"
          >افزودن به سبد</q-tooltip>
        </q-btn>
      </div>
    </div>
  </div>
  <!-- LIST VIEW STYLE -->
  <q-item v-else class="product--list">
    <router-link :to="{name: 'product', params: {id: product.id}}">
      <div
        class="thumbnail--list"
        v-ripple
        :style="{ backgroundImage: `url(${product.thumbnail})` }"
      ></div>
    </router-link>
    <div class="info--list">
      <router-link :to="{name: 'product', params: {id: product.id}}">
        <h3 class="title--list">{{product.title}}</h3>
      </router-link>
      <p class="short-desc--list">{{product.shortDesc}}</p>
      <div class="price-container--list price-container--off" v-if="product.off">
        <p class="price--list price-off--list">{{product.price | formatPrice}}</p>
        <p class="price-unit--list">تومان</p>
      </div>
      <div class="price-container--list">
        <p class="price--list">{{getPrice | formatPrice}}</p>
        <p class="price-unit--list">تومان</p>
      </div>
    </div>
    <div class="actions--list">
      <q-btn rounded flat label="افزودن به سبد خرید" icon-right="shopping_cart" class="cart--list" />
      <SaleIcon class="sale-icon--list" v-if="product.off">
        <q-tooltip
          anchor="center right"
          self="center left"
          content-class="bg-dark"
          :content-style="{fontSize: '12px', direction: 'rtl'}"
          transition-show="fade"
          transition-hide="fade"
        >٪{{product.off}} تخفیف</q-tooltip>
      </SaleIcon>
    </div>
  </q-item>
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
    },
    gridViewStyle: {
      type: Boolean,
      default: true
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

.title {
  font-weight: 300;
  font-size: 1.8rem;
  transition: all 0.2s;
  position: relative;
  padding: 0.5rem 0;
}

.title:hover {
  color: #e6b31e;
  cursor: pointer;
}

.header {
  padding: 1.5rem 0;
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

/* List */

.product--list {
  color: #ebebeb;
  align-items: center;
  direction: rtl;
  transition: all 0.2s;
}

.product--list:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.thumbnail--list {
  width: 20rem;
  height: 20rem;
  position: relative;
  border-radius: 0.5rem;
  background-size: cover;
  background-position: center;
}

.info--list {
  padding: 0 5rem;
  margin-left: auto;
}

.actions--list {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.sale-icon--list {
  margin-left: 2rem;
  fill: #e6b31e;
}

.title--list {
  font-size: 2.6rem;
  font-weight: 300;
  transition: all 0.2s;
}

.title--list:hover {
  color: #e6b31e;
  cursor: pointer;
}

.short-desc--list {
  font-size: 1.6rem;
  margin-top: 1rem;
  opacity: 0.5;
}

.cart--list {
  direction: ltr;
}

.price-container--list {
  display: flex;
  align-items: center;
}

.price-container--off {
  color: #e6b31e;
  opacity: 0.5;
}

.price-container--list:first-of-type {
  margin-top: 1.5rem;
}

.price-container--list:not(:first-of-type) {
  margin-top: 0.2rem;
}

.price-off--list {
  text-decoration: line-through;
}

.price-unit--list {
  margin-right: 1rem;
}
</style>

