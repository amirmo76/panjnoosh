<template>
  <ul>
    <li>
      <router-link to="/shop">فروشگاه</router-link>
    </li>
    <li>
      <router-link to="/#special-offers">پیشنهادات ویژه</router-link>
    </li>
    <li>
      <router-link to="/blog">بلاگ</router-link>
    </li>
    <li>
      <router-link to="/about">درباره ما</router-link>
    </li>
    <li>
      <router-link to="/contact">ارتباط با ما</router-link>
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
  margin-left: 5rem;
}

li:hover {
  color: #e6b31e;
}
</style>
