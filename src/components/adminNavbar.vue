<template>
  <div>
    <nav class="navbar fixed-top bg-light">
  <form class="container-fluid justify-content-start">
    <router-link to="/"><button class="btn btn-sm btn-outline-secondary" to="/"  @click="logout" type="button">Logout</button></router-link>
    
  </form>
</nav>
  </div>
</template>

<script>
export default {
name:"adminNavbar",
 methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "home" });
    },
  },
}
</script>

<style>

</style>