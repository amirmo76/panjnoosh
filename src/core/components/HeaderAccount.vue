<template>
  <div>
    <div v-if="isLoggedIn" class="flex">
      <router-link to="/dashboard">
        <div class="avatar" :style="{ backgroundImage: `url(${avatar})` }"></div>
      </router-link>
      <svg class="logout" viewBox="-15 -35 493.33522 493" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m412.902344-1.105469h-167.617188c-27.550781 0-50.074218 22.824219-50.074218 50.371094v44.515625c0 6.898438 5.59375 12.488281 12.492187 12.488281s12.488281-5.589843 12.488281-12.488281v-44.515625c.035156-13.890625 11.203125-25.191406 25.09375-25.390625h167.617188c13.777344 0 24.617187 11.617188 24.617187 25.390625v322.980469c.164063 13.691406-10.800781 24.921875-24.492187 25.082031h-167.738282c-13.835937-.050781-25.039062-11.25-25.097656-25.082031v-43.585938c0-6.902344-5.589844-12.492187-12.488281-12.492187s-12.492187 5.589843-12.492187 12.492187v43.585938c.074218 27.625 22.449218 49.996094 50.074218 50.0625h167.617188c27.496094-.101563 49.707031-22.484375 49.597656-49.984375v-323.058594c0-27.546875-22.046875-50.371094-49.597656-50.371094zm0 0"
        ></path>
        <path
          d="m42.871094 223.71875h295.601562c6.898438 0 12.492188-5.59375 12.492188-12.492188 0-6.894531-5.59375-12.488281-12.492188-12.488281h-298.375l64.082032-74.074219c4.519531-5.253906 3.957031-13.167968-1.246094-17.734374-5.191406-4.539063-13.078125-4.011719-17.613282 1.175781v.007812l-80.773437 93.035157c-2.976563 2.449218-4.652344 6.136718-4.54296875 9.984374.11718775 3.855469 2.00781275 7.441407 5.12890575 9.707032l80.78125 80.78125c4.878907 4.878906 12.789063 4.878906 17.660157 0 4.816406-4.726563 4.890625-12.453125.167969-17.269532-.054688-.050781-.109376-.105468-.167969-.160156zm0 0"
        ></path>
      </svg>
    </div>

    <div v-else class="flex">
      <svg class="sign-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258.75 258.75">
        <circle cx="129.375" cy="60" r="60"></circle>
        <path
          d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z"
        ></path>
      </svg>
      <router-link to="/signup" class="link">ثبت نام</router-link>
      <span class="dash">-</span>
      <router-link to="/login" class="link">ورود</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderAccount",
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true
    },
    avatar: {
      type: String
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}

.sign-icon {
  fill: #ebebeb;
  height: 1.8rem;
  width: 1.8rem;
  margin-left: 1.5rem;
}

.dash {
  margin: 0 1rem;
}

.link {
  transition: all 0.2s;
}

.link:hover {
  color: #e6b31e;
}

/* logged in */
.avatar {
  width: 5rem;
  height: 5rem;
  margin-left: 3rem;
  border-radius: 50%;
  background-color: #ebebeb;
  background-size: cover;
  background-position: center;
}

.logout {
  fill: currentColor;
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.2s;
}

.logout:hover {
  fill: #e6b31e;
  cursor: pointer;
}
</style>

