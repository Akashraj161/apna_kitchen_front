<template>
  <div id="app">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- <navBar/> -->
   <router-view></router-view>
  
  </div>
</template>

<script>
// import navBar from './components/navBar.vue'

export default {
  name: 'App',
  components: {
    

  }
}
</script>

<style>
/* router-link{
  text-decoration: none;
} */

</style>
