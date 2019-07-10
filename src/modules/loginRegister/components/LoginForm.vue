<template>
  <form @submit="onSubmit">
    <BaseInput :type="'email'" @valueChange="onEmailChange" :error="emailError" :id="'email'">ایمیل</BaseInput>
    <BaseInput
      :type="'password'"
      @valueChange="onPasswordChange"
      :error="passwordError"
      :id="'password'"
    >رمز عبور</BaseInput>
    <BaseButton :stretched="true" class="button">ورود</BaseButton>
  </form>
</template>

<script>
import BaseInput from "../../../core/components/BaseInput";
import BaseButton from "../../../core/components/BaseButton";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    onEmailChange(val) {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (regex.test(val)) {
        this.email = val;
        this.emailError = "";
      } else {
        this.emailError = "ایمیل وارد شده نامعتبر می باشد";
      }
    },
    onPasswordChange(val) {
      if (val.length > 5) {
        this.passwordError = "";
        this.password = val;
      } else {
        this.passwordError = "رمز عبور باید بیش از ۵ کاراکتر باشد";
      }
    },
    onSubmit(e) {
      e.preventDefault();
      this.login({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
}

form > *:not(:last-child) {
  margin-bottom: 5rem;
}

.button {
  margin-top: 2rem;
}
</style>


