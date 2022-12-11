<template>
<div>
 <navBar/>
<div class="container text-center">
  <div class="row">
    <div class="col-sm-8">
      <img v-bind:src="`https://apnakitchen-api-zk6n.onrender.com/${post.image}`" class="card-img-top" style="height: 400px" alt="">
      <h1 class="foodname">{{post.foodName}}</h1>
      <h4 class="fooddesc">{{post.description}}</h4>
    </div>
    <div class="col-sm-4">
      <h2 class="resname">{{post.restaurantName}}</h2>
      <p class="resadderss">{{post.address}}</p>
      <p>{{post.phoneNo}}</p>

      
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Weekly Rs.{{post.priceWeekly}}/-
  </label>

 <br>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Monthly Rs.{{post.priceMonthly}}/-
  </label>
  <br>

      
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
.foodname , .resname{
  margin-top: 40px;
  color: #e14d2a;
}

.resadderss{
  font-size: 18px;
  font-weight: 400;
}
</style>
