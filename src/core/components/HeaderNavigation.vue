<template>
  <ul>
    <li>
      <router-link to="/shop" class="link" v-ripple:white>فروشگاه</router-link>
    </li>
    <li>
      <router-link to="/#special-offers" class="link" v-ripple:white>پیشنهادات ویژه</router-link>
    </li>
    <li>
      <router-link to="/blog" class="link" v-ripple:white>بلاگ</router-link>
    </li>
    <li>
      <router-link to="/about" class="link" v-ripple:white>درباره ما</router-link>
    </li>
    <li>
      <router-link to="/contact" class="link" v-ripple:white>ارتباط با ما</router-link>
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

.link {
  display: block;
  padding: 1rem 3rem;
  position: relative;
  transition: all 0.2s;
}

.link:hover {
  color: #e6b31e;
}
</style>
