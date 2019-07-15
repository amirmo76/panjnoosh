<template>
  <form @submit="onSubmit">
    <BaseInput :type="'email'" @value-change="onEmailChange" :error="emailError" :id="'email'">ایمیل</BaseInput>
    <BaseInput
      :type="'password'"
      @value-change="onPasswordChange"
      :error="passwordError"
      :id="'password'"
    >رمز عبور</BaseInput>
    <q-btn outline size="16px" color="primary" text-color="primary" label="ورود" @click="onSubmit" />
  </form>
</template>

<script>
import BaseInput from "../../../core/components/BaseInput";
import BaseButton from "../../../core/components/BaseButton";
import router from "../../../core/router";

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
      passwordError: "",
      waitingForResponse: false
    };
  },
  methods: {
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
    async onSubmit(e) {
      e.preventDefault();
      if (this.canSendLoginRequest) {
        this.waitingForResponse = true;
        this.$q.loadingBar.start();
        await this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            this.$q.notify({
              message: response.message,
              icon: "thumb_up",
              color: "positive"
            });
          })
          .catch(error => {
            this.$q.notify({
              message: error.message,
              icon: "error",
              color: "negative"
            });
          });
        this.$q.loadingBar.stop();
        this.waitingForResponse = false;
        router.push({ name: "home" });
      } else {
        this.$q.notify({
          message: "ورودی ها خود را کنترل کنید!",
          icon: "warning",
          color: "warning"
        });
      }
    }
  },
  computed: {
    canSendLoginRequest() {
      return this.isFormFilled &&
        this.areFormInputsValid &&
        !this.waitingForResponse
        ? true
        : false;
    },
    areFormInputsValid() {
      return this.emailError || this.passwordError ? false : true;
    },
    isFormFilled() {
      return this.email && this.password ? true : false;
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
  padding: 5rem 0;
}

form > *:not(:last-child) {
  margin-bottom: 5rem;
}
</style>


