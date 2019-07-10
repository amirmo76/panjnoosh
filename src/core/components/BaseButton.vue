<template>
  <button :class="[theme, {outlined: outlined} , {stretched: stretched}, {ripple: ripple}]">
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
  padding: 1.2rem 1.5rem;
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
  background-color: #ffa000;
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

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }

  100% {
    width: 50rem;
    height: 50rem;
    opacity: 0;
  }
}

.ripple:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: currentColor;
  visibility: hidden;
  z-index: 2;
}

.ripple:not(:active):before {
  animation: ripple 0.5s cubic-bezier(0, 0, 0.2, 1);
  transition: visibility 0.4s step-end;
}

.ripple:active:before {
  visibility: visible;
}
</style>
