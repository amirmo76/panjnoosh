<template>
  <vue-custom-scrollbar class="scroll-area">
    <TheHeader></TheHeader>
    <router-view></router-view>
  </vue-custom-scrollbar>
</template>

<script>
import TheHeader from "./components/TheHeader";
import vueCustomScrollbar from "vue-custom-scrollbar";

export default {
  name: "App",
  components: {
    TheHeader,
    vueCustomScrollbar
  }
};
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 62.5%;
  overflow-x: hidden;
  font-family: "IRANSans", sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

a:link,
a:visited {
  text-decoration: none;
  color: inherit;
}

.scroll-area {
  position: relative;
  margin: auto;
  width: 100vw;
  height: 100vh;
}
</style>
