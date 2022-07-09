<template>
  <div class="form-section">
    <h1 class="form--title">Hi, Welcome Back!</h1>
    <form @submit.prevent class="form" ref="loginForm">
      <div class="form--field">
        <div class="field--input">
          <img src="@/assets/mail.svg" alt="" />
          <input
            type="email"
            placeholder="Your email"
            required
            v-model="email"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="form--field">
        <div class="field--input">
          <img src="@/assets/lock.svg" alt="" />
          <input
            :type="isShowPassword ? 'text' : 'password'"
            placeholder="Password"
            required
            v-model="password"
          />
          <button @click.prevent="onShowPassword">
            {{ isShowPassword ? "HIDE" : "SHOW" }}
          </button>
        </div>
      </div>
      <div class="form--field">
        <label class="field--checkbox">
          <input type="checkbox" />Remember me
        </label>
        <a class="field--link" href="#">Forgot password?</a>
      </div>
      <div class="form--field">
        <button class="btn--submit" @click="onLogin">Login</button>
      </div>
      <div class="form--field">
        <div class="field--text">
          <span></span>
          Or login with
          <span></span>
        </div>
        <span></span>
      </div>
      <div class="form--field">
        <button @click.prevent class="btn--login-google">
          <img src="@/assets/icon-google.svg" alt="" />
          Google Account
        </button>
        <button @click.prevent class="btn--login-facebook">
          <img src="@/assets/icon-fb.svg" alt="" />
          Facebook Account
        </button>
      </div>
      <div class="form--field">
        <div class="field--create-account">
          Don't have an account?
          <router-link class="field--link" :to="{ name: 'register' }"
            >Create a Free Account</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import store from "@/store";
import { mapActions } from "vuex";
export default {
  async beforeRouteEnter(to, from, next) {
    const user = store.state.auth.user;
    if (user) {
      next({ name: "home" });
      return false;
    } else {
      next();
    }
  },
  data() {
    return {
      isShowPassword: false,
      email: "",
      password: "",
    };
  },

  methods: {
    onShowPassword() {
      this.isShowPassword = !this.isShowPassword;
    },
    ...mapActions({
      login: "auth/login",
    }),

    async onLogin() {
      if (this.$refs.loginForm.checkValidity()) {
        const status = await this.login({
          email: this.email,
          password: this.password,
        });
        if (status === true) {
          this.$router.push({ name: "home" });
        } else {
          alert("Username or password incorrect!!");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
