<template>
  <form @submit="onSubmit">
    <BaseInput
      :type="'text'"
      :id="'name'"
      @value-change="onNameChange"
      :error="nameError"
    >نام و نام خانوادگی</BaseInput>
    <BaseInput :type="'email'" :id="'email'" @value-change="onEmailChange" :error="emailError">ایمیل</BaseInput>
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
    <BaseButton class="button" :stretched="true">ثبت نام</BaseButton>
  </form>
</template>

<script>
import BaseInput from "../../../core/components/BaseInput";
import BaseButton from "../../../core/components/BaseButton";

export default {
  name: "SignupForm",
  components: {
    BaseInput,
    BaseButton
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
      passwordConfirmationError: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      // signup
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
  }
};
</script>

<style scoped>
form > *:not(:last-child) {
  margin-bottom: 5rem;
}

.button {
  margin-top: 2rem;
}
</style>

