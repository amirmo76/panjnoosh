<template>
  <div>
    <div v-if="isLoggedIn" class="flex">
      <router-link to="/dashboard">
        <q-avatar rounded v-ripple color="primary" size="50px" class="avatar">
          <img :src="avatar" />
        </q-avatar>
      </router-link>
      <q-btn flat round icon="shopping_cart" class="cart" />
      <q-btn flat round icon="logout" class="logout" @click="logout" />
    </div>

    <div v-else class="flex">
      <SignIcon class="sign-icon"></SignIcon>
      <router-link to="/signup" class="link" v-ripple:white>ثبت نام</router-link>
      <router-link to="/login" class="link" v-ripple:white>ورود</router-link>
    </div>
  </div>
</template>

<script>
import LogoutIcon from "../../../public/assets/svg/logout.svg";
import SignIcon from "../../../public/assets/svg/account.svg";

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
    async logout() {
      this.$q.loadingBar.start();
      await this.$store.dispatch("logout");
      this.$q.loadingBar.stop();
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
  margin-left: 1rem;
}

.link {
  padding: 1rem 1.5rem;
  transition: all 0.2s;
  display: block;
  position: relative;
}

.link:hover {
  color: #e6b31e;
}

/* logged in */
.avatar {
  margin-left: 2.5rem;
}

.avatar:hover {
  cursor: pointer;
}

.cart {
  margin-left: 1.5rem;
}

.logout {
  transform: rotate(180deg);
}

.logout:hover {
  fill: #e6b31e;
  cursor: pointer;
}
</style>

