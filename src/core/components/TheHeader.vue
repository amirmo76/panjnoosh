<template>
  <div :class="{header: true, light: light}">
    <router-link class="logo-container" to="/">
      <Logo :class="{logo: true, dark: light}"/>
    </router-link>
    <HeaderNavigation class="nav"></HeaderNavigation>
    <HeaderAccount class="account" :isLoggedIn="isLoggedIn" :avatar="'/assets/images/profile.png'"></HeaderAccount>
  </div>
</template>

<script>
import HeaderNavigation from "./HeaderNavigation";
import HeaderAccount from "./HeaderAccount";
import Logo from "../../../public/assets/svg/logo.svg";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    Logo,
    HeaderNavigation,
    HeaderAccount
  },
  data() {
    return {
      light: false
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style scoped>
.header {
  font-size: 1.6rem;
  background-color: #1d1d1d;
  color: #ebebeb;
  display: flex;
  align-items: center;
  direction: rtl;
  min-height: 10rem;
  padding: 0 5rem;
}

.header.light {
  background-color: #f7f7f8;
  color: #4c5e70;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  margin-left: 5rem;
  fill: #e6b31e;
  height: 7.5rem;
}

.logo.dark {
  fill: #4c5e70;
}

.nav {
  margin-left: auto;
}
</style>


