<template>
  <ul>
    <li>
      <router-link to="/shop" v-ripple class="link">فروشگاه</router-link>
    </li>
    <li>
      <router-link to="/#special-offers" v-ripple class="link">پیشنهادات ویژه</router-link>
    </li>
    <li>
      <router-link to="/blog" v-ripple class="link">بلاگ</router-link>
    </li>
    <li>
      <router-link to="/about" v-ripple class="link">درباره ما</router-link>
    </li>
    <li>
      <router-link to="/contact" v-ripple class="link">ارتباط با ما</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeaderNavigation"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
}

li {
  transition: all 0.2s;
}

li:not(:last-of-type) {
  /* margin-left: 3rem; */
}

.link {
  display: block;
  padding: 1rem 3rem;
}
</style>
