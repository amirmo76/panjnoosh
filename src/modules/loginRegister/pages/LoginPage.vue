<template>
  <div class="container">
    <form>
      <BaseInput :type="'email'" @valueChange="onEmailChange">ایمیل</BaseInput>
      <BaseInput :type="'password'" @valueChange="onPasswordChange">رمز عبور</BaseInput>
      <BaseButton :stretched="true">ورود</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseInput from "../../../core/components/BaseInput";
import BaseButton from "../../../core/components/BaseButton";

export default {
  name: "LoginPage",
  data: {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
  },
  components: {
    BaseInput,
    BaseButton
  },
  methods: {
    onEmailChange: () => {},
    onPasswordChange: () => {}
  }
};
</script>

<style scoped>
.container {
  background: #1d1d1d;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form > *:not(:last-child) {
  margin-bottom: 4rem;
}
</style>


