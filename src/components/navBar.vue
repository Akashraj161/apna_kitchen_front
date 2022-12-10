<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg bg-light bg-gradient">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">ApnaKitchen</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link style="text-decoration: none" to="/"
                ><a class="nav-link active" aria-current="page"
                  >Home</a
                ></router-link
              >
            </li>
           
              <li class="nav-item">
              <router-link style="text-decoration: none" to="/adminLogin"
                ><a class="nav-link">Admin Login</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navBar",
};
</script>
