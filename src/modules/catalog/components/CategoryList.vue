<template>
  <q-list :dark="dark" separator class="category-list">
    <router-link
      :to="`/shop/category/${cat.id}`"
      class="link"
      v-for="(cat,i) in categories"
      :key="i"
    >
      <q-item clickable v-ripple class="item" v-close-popup>
        <q-item-section>{{cat.title}}</q-item-section>
      </q-item>
    </router-link>
  </q-list>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    dark: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      categories: [
        {
          title: "دمنوش گیاهی",
          id: 1
        },
        {
          title: "داروی گیاهی",
          id: 2
        }
      ]
    };
  }
};
</script>

<style scoped>
.link {
  text-align: right;
}
</style>

