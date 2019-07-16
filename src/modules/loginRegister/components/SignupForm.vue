<template>
  <form @submit="onSubmit">
    <div class="input-group">
      <BaseInput
        :type="'text'"
        :id="'name'"
        @value-change="onNameChange"
        :error="nameError"
      >نام و نام خانوادگی</BaseInput>
      <BaseInput
        :type="'email'"
        :id="'email'"
        @value-change="onEmailChange"
        :error="emailError"
      >ایمیل</BaseInput>
    </div>
    <BaseInput
      :type="'tel'"
      :id="'phone'"
      @value-change="onPhoneChange"
      :error="phoneError"
    >شماره همراه</BaseInput>
    <BaseInput
      :type="'text'"
      :id="'address'"
      @value-change="onAddressChange"
      :error="addressError"
    >آدرس کامل</BaseInput>
    <BaseInput
      :type="'tel'"
      :id="'postalCode'"
      @value-change="onPostalCodeChange"
      :error="postalCodeError"
    >کد پستی</BaseInput>
    <div class="input-group">
      <BaseInput
        :type="'password'"
        :id="'password'"
        @value-change="onPasswordChange"
        :error="passwordError"
      >رمز عبور</BaseInput>
      <BaseInput
        :type="'password'"
        :id="'password'"
        @value-change="onPasswordConfirmationChange"
        :error="passwordConfirmationError"
      >تایید رمز عبور</BaseInput>
    </div>
    <q-btn
      class="button"
      outline
      color="primary"
      text-color="primary"
      @click="onSubmit"
      label="ثبت نام"
    />
  </form>
</template>

<script>
import BaseInput from "../../../core/components/BaseInput";
import router from "../../../core/router";

export default {
  name: "SignupForm",
  components: {
    BaseInput
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      passwordConfirmation: "",
      nameError: "",
      emailError: "",
      phoneError: "",
      addressError: "",
      postalCode: "",
      postalCodeError: "",
      passwordError: "",
      passwordConfirmationError: "",
      waitingForResponse: false
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      if (this.canSendRegisterRequest) {
        this.waitingForResponse = true;
        this.$q.loadingBar.start();
        await this.$store
          .dispatch("register", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            zipcode: this.postalCode,
            password: this.password,
            password_confirmation: this.passwordConfirmation
          })
          .then(response => {
            this.$q.notify({
              message: response.message,
              icon: "thumb_up",
              color: "positive"
            });
            router.push({ name: "login" });
          })
          .catch(error => {
            this.$q.notify({
              message: error.message,
              icon: "error",
              color: "negative"
            });
          });
        this.waitingForResponse = false;
        this.$q.loadingBar.stop();
      } else {
        this.$q.notify({
          message: "ورودی ها خود را کنترل کنید!",
          icon: "warning",
          color: "warning"
        });
      }
    },
    onNameChange(val) {
      const regex = /^[آ-ی ء چ]+$/;
      if (regex.test(val)) {
        this.nameError = "";
        this.name = val;
      } else {
        this.nameError = "نام و نام خانوادگی باید به حروف فارسی باشد";
      }
    },
    onEmailChange(val) {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (regex.test(val)) {
        this.email = val;
        this.emailError = "";
      } else {
        this.emailError = "ایمیل وارد شده نامعتبر می باشد";
      }
    },
    onPhoneChange(val) {
      const regex = /^09(0[0-9]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}$/;
      if (regex.test(val)) {
        this.phone = val;
        this.phoneError = "";
      } else {
        this.phoneError = "شماره همراه وارد شده معتبر نمی باشد";
      }
    },
    onAddressChange(val) {
      if (val.length > 10) {
        this.address = val;
        this.addressError = "";
      } else {
        this.addressError = "لطفا آدرس کامل به همراه شهر و استان را وارد کنید";
      }
    },
    onPostalCodeChange(val) {
      const regex = /^\d{10}$/;
      if (regex.test(val)) {
        this.postalCodeError = "";
        this.postalCode = val;
      } else {
        this.postalCodeError = "کد پستی باید شامل ۱۰ رقم باشد";
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
    onPasswordConfirmationChange(val) {
      if (this.password === val) {
        this.passwordConfirmationError = "";
        this.passwordConfirmation = val;
      } else {
        this.passwordConfirmationError =
          "رمز عبور وارد شده با قبلی تطابق ندارد";
      }
    }
  },
  computed: {
    canSendRegisterRequest() {
      return !this.waitingForResponse &&
        this.areFormInputsValid &&
        this.isFormFilled
        ? true
        : false;
    },
    areFormInputsValid() {
      return this.emailError ||
        this.nameError ||
        this.phoneError ||
        this.addressError ||
        this.postalCodeError ||
        this.passwordError ||
        this.passwordConfirmationError
        ? false
        : true;
    },
    isFormFilled() {
      return this.email &&
        this.name &&
        this.phone &&
        this.address &&
        this.postalCode &&
        this.password &&
        this.passwordConfirmation
        ? true
        : false;
    }
  }
};
</script>

<style scoped>
form > *:not(:last-child) {
  margin-bottom: 5rem;
}

.button {
  margin-top: 2rem;
  width: 100%;
  padding: 1rem 0;
}

.input-group {
  display: flex;
  flex-direction: row-reverse;
}

.input-group > *:not(:last-child) {
  margin-left: 1.5rem;
}

.input-group > *:not(:first-child) {
  margin-right: 1.5rem;
}
</style>

