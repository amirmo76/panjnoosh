<template>
  <q-toolbar class="toolbar">
    <div v-if="allowMultipleViewStyle" class="view-style-container">
      <q-btn
        v-if="isViewStyleGrid"
        round
        flat
        icon="view_list"
        @click="setViewStyleList"
        class="view-button"
      >
        <q-tooltip
          anchor="bottom middle"
          self="top middle"
          content-class="bg-dark"
          content-style="font-size: 12px"
          transition-show="fade"
          transition-hide="fade"
        >نمایش به صورت لیست</q-tooltip>
      </q-btn>
      <q-btn v-else round flat icon="view_module" @click="setViewStyleGrid" class="view-button">
        <q-tooltip
          anchor="bottom middle"
          self="top middle"
          content-class="bg-dark"
          content-style="font-size: 12px"
          transition-show="fade"
          transition-hide="fade"
        >نمایش به صورت جدول</q-tooltip>
      </q-btn>
    </div>
    <q-input
      dark
      dense
      v-model="search"
      input-class="text-right"
      class="search"
      placeholder="جست و جو"
    >
      <template v-slot:prepend>
        <q-icon v-if="!search" name="search" />
        <q-icon v-if="search" name="clear" class="clear" @click="clearSearchInput" />
      </template>
    </q-input>
    <q-btn flat icon-right="menu" label="دسته بندی ها" class="category-button">
      <q-menu
        :content-style="{backgroundColor: '#303030', width: '25rem', height: '50rem'}"
        anchor="bottom left"
        self="top right"
        max-height="50rem"
        :offset="[15,0]"
      >
        <CategoryList :dark="false"></CategoryList>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script>
import CategoryList from "../components/CategoryList";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ShopToolbar",
  components: {
    CategoryList
  },
  data() {
    return {
      allowMultipleViewStyle: true,
      search: this.$store.getters.getSearchValue,
      categories: []
    };
  },
  methods: {
    ...mapActions(["setSearchValue", "setViewStyleGrid", "setViewStyleList"]),
    clearSearchInput() {
      this.search = "";
    }
  },
  watch: {
    search() {
      this.setSearchValue(this.search);
    }
  },
  computed: {
    ...mapGetters(["getViewStyle", "getSearchValue"]),
    isViewStyleGrid() {
      return this.getViewStyle === "grid" ? true : false;
    }
  }
};
</script>

<style scoped>
.toolbar {
  color: #ebebeb;
  padding: 1.5rem 3rem;
  box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.3);
}

.category-button {
  margin-left: 5rem;
}

.search {
  margin-right: auto;
}

.clear:hover {
  cursor: pointer;
}

.view-style-container {
  margin-right: 3rem;
}

.view-button {
  transform: rotate(180deg);
}
</style>

