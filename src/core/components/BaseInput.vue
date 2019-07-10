<template>
  <div>
    <input :type="type" @input="onInput" :class="{invalid: error}" :id="id">
    <label :class="{ top: value.length }" :for="id">
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
      default: ""
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
div {
  position: relative;
  display: flex;
  width: 100%;
}

input {
  font-family: "IRANSans";
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ebebeb;
  font-size: 1.4rem;
  color: #ebebeb;
  direction: rtl;
  padding: 1.4rem 2rem;
  outline: none;
  transition: all 0.2s;
  width: 100%;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

input:-webkit-autofill {
  -webkit-text-fill-color: #ebebeb;
}

.invalid {
  border-bottom: 1px solid #d81b60;
}

input:focus + label {
  top: -0.5rem;
  right: 0;
  font-size: 1.2rem;
  opacity: 0.85;
}

.top {
  top: -0.5rem;
  right: 0;
  font-size: 1.2rem;
}

label {
  font-size: 1.4rem;
  color: #ebebeb;
  opacity: 0.6;
  position: absolute;
  right: 0;
  top: 35%;
  transform: translateY(-50%);
  transition: all 0.2s;
}

label:hover {
  cursor: auto;
}

.error {
  color: #d81b60;
  font-size: 1.3rem;
  position: absolute;
  right: 0.2rem;
  bottom: -2.7rem;
}
</style>