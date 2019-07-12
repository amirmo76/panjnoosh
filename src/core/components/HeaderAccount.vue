<template>
  <div>
    <div v-if="isLoggedIn" class="flex">
      <router-link to="/dashboard">
        <div class="avatar" :style="{ backgroundImage: `url(${avatar})` }"></div>
      </router-link>
      <LogoutIcon class="logout" @click="logout"></LogoutIcon>
    </div>

    <div v-else class="flex">
      <SignIcon class="sign-icon"></SignIcon>
      <router-link to="/signup" class="link" v-ripple>ثبت نام</router-link>
      <router-link to="/login" class="link" v-ripple>ورود</router-link>
    </div>
  </div>
</template>

<script>
import LogoutIcon from "../../../public/assets/svg/logout.svg";
import SignIcon from "../../../public/assets/svg/account.svg";
import { mapActions } from "vuex";

export default {
  name: "HeaderAccount",
  components: {
    LogoutIcon,
    SignIcon
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true
    },
    avatar: {
      type: String
    }
  },
  methods: {
    ...mapActions(["logout"])
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
  margin-left: 1rem;
}

.link {
  padding: 1rem 1.5rem;
  transition: all 0.2s;
  display: block;
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
  transform: rotate(180deg);
}

.logout:hover {
  fill: #e6b31e;
  cursor: pointer;
}
</style>

