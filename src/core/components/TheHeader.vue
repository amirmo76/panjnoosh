<template>
  <div :class="{header: true, light: light}">
    <Logo :class="{logo: true, dark: light}"/>
    <HeaderNavigation class="nav"></HeaderNavigation>
    <HeaderAccount class="account" :isLoggedIn="loggedIn" :avatar="'/assets/images/profile.png'"></HeaderAccount>
  </div>
</template>

<script>
import HeaderNavigation from "./HeaderNavigation";
import HeaderAccount from "./HeaderAccount";
import Logo from "../../../public/assets/svg/logo.svg";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    Logo,
    HeaderNavigation,
    HeaderAccount
  },
  data() {
    return {
      loggedIn: false,
      light: false
    };
  },
  methods: {
    ...mapGetters(["isLoggedIn"])
  },
  created() {
    this.loggedIn = this.isLoggedIn();
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


