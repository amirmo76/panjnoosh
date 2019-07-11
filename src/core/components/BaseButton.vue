<template>
  <button
    v-ripple
    :class="[theme, {outlined: outlined} , {stretched: stretched}, {ripple: ripple}]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    theme: {
      type: String,
      default: "primary"
    },
    outlined: {
      type: Boolean,
      default: false
    },
    stretched: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
  min-width: 12.5rem;
  padding: 1.1rem 2rem;
  border-radius: 0.5rem;
  font-family: "IRANSans";
  font-size: 1.4rem;
  transition: all 0.2s;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

button:hover {
  cursor: pointer;
  background-color: #ffca28;
}

.primary {
  background: #e6b31e;
  color: #1d1d1d;
}

.secondary {
}

.tertiary {
}

.outlined {
}

.stretched {
  width: 100%;
}
</style>
