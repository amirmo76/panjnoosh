<template>
  <div class="container">
    <input :type="type" @input="onInput" :class="{invalid: error}" />
    <label :class="{ top: value.length }">
      <slot></slot>
    </label>
    <span class="error" v-if="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  data: () => {
    return {
      value: ""
    };
  },
  methods: {
    onInput(e) {
      this.value = e.target.value;
      this.$emit("valueChange", this.value);
    }
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    error: {
      type: String,
      // default: "حروف فارسی وارد نکنید"
      default: ""
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
}

input {
  font-family: "IRANSans";
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ebebeb;
  font-size: 1.4rem;
  color: #ebebeb;
  direction: rtl;
  padding: 1.5rem 2rem;
  outline: none;
  transition: all 0.2s;
}

.invalid {
  border-bottom: 1px solid #d81b60;
}

input:focus + label {
  top: 0;
  right: 0;
  font-size: 1.2rem;
  opacity: 0.85;
}

.top {
  top: 0;
  right: 0;
  font-size: 1.2rem;
}

label {
  font-size: 1.4rem;
  color: #ebebeb;
  opacity: 0.6;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s;
}

.error {
  color: #d81b60;
  font-size: 1.3rem;
  position: absolute;
  right: 0.2rem;
  bottom: -2.7rem;
}
</style>

