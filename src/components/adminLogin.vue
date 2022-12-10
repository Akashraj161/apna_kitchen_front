<template>
  <div>
    <navBar/>
    <div class="loginForm">
      <form @submit.prevent="logIn">
        <h1 class="loginTitle">Admin Login</h1>
        <div class="form-floating mb-3 col-md-4 offset-md-4">
          <input
            type="text"
            v-model="name"
            class="form-control"
            name="name"
           
          />
          <label for="floatingInput">Admin User Name</label>
        </div>
        <div class="form-floating mb-3 col-md-4 offset-md-4">
          <input
            type="password"
            v-model="password"
            class="form-control"
            name="password"
           
          />
          <label for="floatingPassword">Password</label>
        </div>
        <input type="submit" value="login" class="button" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navBar from './navBar.vue'
export default {
  name: "adminLogin",
components: {
    navBar,
  },
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      let result = await axios.post("http://localhost:5000/api/adminlogin", {
        name: this.name,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "adminHomePage" });
      } else {
        alert("login failed");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.loginTitle {
  text-align: center;
  padding: 20px 0px 40px 0px;
}
.button {
  display: block;
  width: 400px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(181, 181, 240);
  color: #fff;
}
</style>
