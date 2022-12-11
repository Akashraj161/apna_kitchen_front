<template>
  <div>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <adminNavbar/>
    <div v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </div>
    <router-link to="/addItem"><button class="btn btn-primary" >Add New Food Item</button></router-link><br><br><br>
  
    <div class="container2">
      <div class="flex-container">
       
           <div class="card" v-for="post in posts" :key="post._id" style="width: 18rem;">
              <img v-bind:src="`http://localhost:5000/${post.image}`" class="card-img-top" style="height:250px" alt="img">
                <div class="card-body">
                  <h5 class=" resName">{{post.restaurantName}}</h5>
                  <p class="resAddress">{{post.address}}</p>
                  <p class=" foodName">{{post.foodName}}</p>
                  <p class="foodDesc">{{post.description}}</p>
                  <router-link :to="{name: 'edit-items', params:{id : post._id }}" ><button class="btn btn-success" >Edit</button></router-link>
                  <button class="btn btn-danger" @click="removeItem(post._id)" >Delete</button>
                  
                  
              </div>
          </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import API from "../api";
import adminNavbar from './adminNavbar.vue'
export default {
    name: "adminHomePage",
    components: {
    adminNavbar,

  },
  data(){
    return{
      posts:[],
      deletePostConfirmation : false,
    };
  },
  async created(){
    this.posts = await API.getAllPost();
  },
  methods:{
    async removeItem(id){
       let text = "Do you want to Delete the item permanently";
     if (confirm(text) == true) {
       await API.deletePost(id);
       location.reload();
   
  } 
    }
  }
};
</script>

<style scoped>
.btn-primary{
  position:relative;
  margin: 100px;
  left: 20%;
  width: 40vw;

}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-container div {
  background-color: #f1f1f1;
  margin: 30px;
  padding: 5px;

}
.card{
  min-height: 550px;
  position: relative;
}
.foodName{
  color: #e14d2a;
  font-weight: 500;
  font-size: 18px;
}

.resName{
  color: #e14d2a;
}

.btn-success{
  position:absolute;
  bottom: 5%;
  left: 10%;
}
.btn-danger{
  position: absolute;
  bottom: 5%;
  right: 10%;
}

</style>