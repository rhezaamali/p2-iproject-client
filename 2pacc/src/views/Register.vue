<template>
  <div class="main mh-100">
    <section class="signup">
      <!-- <img src="images/signup-bg.jpg" alt=""> -->
      <div class="container">
        <div class="signup-content" v-on:submit.prevent="register">
          <form id="signup-form" class="signup-form">
            <h2 class="form-title">Create account</h2>
            <div class="form-group">
              <input
                type="text"
                class="form-input"
                name="name"
                id="name"
                placeholder="Username"
                v-model="username"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-input"
                name="email"
                id="email"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-input"
                name="yearOfBirth"
                id="yearOfBirth"
                placeholder="Year of Birth | example: 1998"
                v-model="yearOfBirth"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-input"
                name="password"
                id="password"
                placeholder="Password"
                v-model="password"
              />
              <span
                toggle="#password"
                class="zmdi zmdi-eye field-icon toggle-password"
              ></span>
            </div>
            <div class="form-group">
              <input
                type="submit"
                name="submit"
                id="submit"
                class="form-submit"
                value="Sign up"
              />
            </div>
          </form>
          <p class="loginhere">
            Have already an account ?
            <a
              href="#"
              class="loginhere-link"
              v-on:click.prevent="changePage('/login')"
              >Login here</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "../assets/colorlib-regform-8/fonts/material-icon/css/material-design-iconic-font.min.css";
import "../assets/colorlib-regform-8/css/style.css";

import Swal from "sweetalert2";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      yearOfBirth: "",
    };
  },
  methods: {
    changePage(to) {
      this.$router.push(to);
    },
    register() {
      this.$store
        .dispatch("register")
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Log In successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/login");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Please check your email or password",
            showConfirmButton: true,
          });
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
