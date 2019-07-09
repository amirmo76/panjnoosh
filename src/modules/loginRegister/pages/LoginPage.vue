<template>
  <div class="page-container">
    <div class="image"></div>
    <div class="left-box-container">
      <h1>ورود | پنج نوش</h1>
      <div class="form-and-text-container">
        <LoginForm></LoginForm>
        <LoginGreet></LoginGreet>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import LoginGreet from "../components/LoginGreet";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
    LoginGreet
  }
};
</script>

<style scoped>
.page-container {
  background: #1d1d1d;
  display: flex;
  padding: 6rem 10rem;
  flex-direction: row-reverse;
  align-items: center;
}

.image {
  background-image: linear-gradient(to right bottom, #99943d, #99943d),
    url("/assets/images/login.jpg");
  background-blend-mode: darken;
  box-shadow: 0.2rem 1rem 2rem rgba(0, 0, 0, 0.2);
  background-size: cover;
  height: 65rem;
  width: 30%;
}

.left-box-container {
  background-color: #151515;
  box-shadow: 0.2rem 1rem 2rem rgba(0, 0, 0, 0.2);
  transform: translateX(3rem);
  width: 70%;
  text-align: right;
  color: #ebebeb;
  padding: 4rem;
}

.form-and-text-container {
  display: flex;
  flex-direction: row-reverse;
}

h1 {
  font-size: 2rem;
}
</style>


