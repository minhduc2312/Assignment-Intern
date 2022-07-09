<template>
  <div class="form-section">
    <h1 class="form--title">Register Account</h1>
    <form @submit.prevent class="form" ref="registerForm">
      <div class="form--field">
        <div class="field--input">
          <img src="@/assets/user.svg" alt="" />
          <input type="text" placeholder="Full Name" v-model="name" required />
        </div>
      </div>
      <div class="form--field">
        <div class="field--input">
          <img src="@/assets/mail.svg" alt="" />
          <input type="email" placeholder="Your email" v-model="email" required />
        </div>
      </div>
      <div class="form--field">
        <div class="field--input">
          <img src="@/assets/lock.svg" alt="" />
          <input
            :type="isShowPassword ? 'text' : 'password'"
            placeholder="Password"
            v-model="password"
            required
          />
          <button @click.prevent="onShowPassword">
            {{ isShowPassword ? "HIDE" : "SHOW" }}
          </button>
        </div>
      </div>
      <button @click="onRegister" class="btn--submit">
        Create Free Account
      </button>
      <div class="form--field field--term">
        <p>
          By providing your email, you are agreeing to
          <a class="field--link" href="#">our terms of service.</a>
        </p>
      </div>
      <div class="field--text">
        <span></span>
        Or register with
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
          Already have an account?
          <router-link class="field--link" :to="{ name: 'login' }"
            >Login Now</router-link
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
      name: "",
    };
  },
  methods: {
    onShowPassword() {
      this.isShowPassword = !this.isShowPassword;
    },
    ...mapActions({
      register: "auth/register",
    }),
    async onRegister() {
      if (this.$refs.registerForm.checkValidity()) {
        const { status, data } = await this.register({
          email: this.email,
          password: this.password,
          name: this.name,
        });
        if (status === true) {
          this.$router.push({ name: "home" });
        } else {
          alert(data.message);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.field--term {
  width: 350px;
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #4f4f4f;
  }
}
</style>
