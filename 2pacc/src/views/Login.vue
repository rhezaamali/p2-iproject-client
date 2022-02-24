<template>
  <div class="container">
    <div class="login-card">
      <form class="login-form" v-on:submit.prevent="login">
        <h1>Welcome</h1>
        <span class="welcome"> Welcome </span>

        <div class="login-logo">
          <h1>2 <span class="pac">Pac</span></h1>
        </div>

        <div class="login-input">
          <input
            class="input100"
            type="text"
            placeholder="Email"
            name="email"
            v-model="email"
          />
        </div>

        <div class="login-input">
          <input
            class="input100"
            type="password"
            placeholder="Password"
            name="pass"
            v-model="password"
          />
        </div>

        <div class="wrap-login100-form-btn">
          <button class="login100-form-btn bg-dark">Login</button>
        </div>
        <br />

        <div class="login-register">
          <span class="txt1"> Don’t have an account? </span>

          <a class="txt2" href="#" v-on:click.prevent="changePage('/register')">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

// css

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = { email: this.email, password: this.password };
      this.$store
        .dispatch("login", payload)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Log In successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err.error, "<<<<<<<");
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Please check your email or password",
            showConfirmButton: true,
          });
        });
    },
    changePage(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style scoped></style>
