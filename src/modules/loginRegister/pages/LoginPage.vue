<template>
  <div class="page-container">
    <div class="image"></div>
    <div class="left-box-container">
      <h1>ورود | پنج نوش</h1>
      <div class="form-and-text-container">
        <LoginForm></LoginForm>
        <div class="text">
          <h3>خوش آمدید</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>

          <h3>توضیحاتی کوتاه</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: "LoginPage",
  components: {
    LoginForm
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

.text {
  max-width: 50%;
  padding: 5rem 3.5rem;
  margin-right: 1.5rem;
}

h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.4rem;
}

p:not(:last-of-type) {
  margin-bottom: 3rem;
}
</style>


