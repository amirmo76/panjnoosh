<template>
  <button :class="[theme, {outlined: outlined} , {stretched: stretched}]">
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
    title: {
      type: String,
      default: ""
    },
    outlined: {
      type: Boolean,
      default: false
    },
    stretched: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
  min-width: 12.5rem;
  padding: 1.2rem 1.5rem;
  border-radius: 0.5rem;
  font-family: "IRANSans";
  font-size: 1.4rem;
  transition: all 0.2s;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
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
