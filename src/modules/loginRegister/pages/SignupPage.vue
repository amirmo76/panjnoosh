<template>
  <div class="page-container">
    <div class="image"></div>
    <div class="signup-container">
      <h1>ثبت نام | پنج نوش</h1>
      <SignupForm></SignupForm>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm";

export default {
  name: "SignupPage",
  components: {
    SignupForm
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

.signup-container {
  background-color: #151515;
  box-shadow: 0.2rem 1rem 2rem rgba(0, 0, 0, 0.2);
  transform: translateX(3rem);
  width: 70%;
  text-align: right;
  color: #ebebeb;
  padding: 4rem;
}

.image {
  background-image: linear-gradient(to right bottom, #99943d, #99943d),
    url("/assets/images/login.jpg");
  background-blend-mode: darken;
  box-shadow: 0.2rem 1rem 2rem rgba(0, 0, 0, 0.2);
  background-size: cover;
  height: 75rem;
  width: 30%;
}

h1 {
  font-size: 2rem;
  margin-bottom: 3.5rem;
}
</style>

