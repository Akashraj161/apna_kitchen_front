<template>
<div>
 <navBar/>
<div class="container text-center">
  <div class="row">
    <div class="col-sm-8">
      <img v-bind:src="`http://localhost:5000/${post.image}`" class="card-img-top" style="width: 45rem" alt="">
    </div>
    <div class="col-sm-4">
      <h1>{{post.foodName}}</h1>
      <h4>{{post.description}}</h4>
      <p>{{post.address}}</p>
      
       <button class="btn btn-primary" type="button">Subscribe Meal Plan</button>
    </div>
   
  </div>
  </div>
</div>
</template>

<script>
import API from '../api'
import navBar from './navBar.vue'
export default {
name:"detailsPage",
components: {
    navBar,
  },
data(){
  return{
    post:{},
  };
},
async created(){
  const response = await API.getPostByID(this.$route.params.id);
  console.log("hello");
  this.post = response;
}
};
</script>

<style scoped>
.container{
  margin-top: 5rem;
}
.btn{
  width: 70%;
}
</style>
