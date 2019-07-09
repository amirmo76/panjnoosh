<template>
  <div>
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader
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
</style>
