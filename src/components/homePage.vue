<template>
  <div>
    <navBar/>
    <div class="container1">
      <div class="leftside">
        <img class="homeMainImg .img-fluid" src="../assets/mainPic.jpg" alt="" />
      </div>
      <div class="rightside">
        <h1 class="branding">EaTHealthY</h1>
        <br />
        <h3 class="moto">Now eat the best home made food away from home</h3>

        <div class="input-group flex-nowrap">
          <input
            type="text"
            class="form-control"
            placeholder="Search for Dishes"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <button class="btn btn-danger">search</button>
        </div>
      </div>
    </div>

    <div class="container2">
      <div class="flex-container">
        <div class="g-col-6" v-for="post in posts" :key="post._id">
           <div class="card"  style="width: 18rem;">
              <img v-bind:src="`http://localhost:5000/${post.image}`" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title">{{post.foodName}}</h5>
                  <p class="card-text">{{post.description}}</p>
                  <router-link :to="{name: 'detailsPage', params:{id : post._id }}" class="btn btn-primary">Buy Now</router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
    
     <footerComp/> 
  </div>
</template>
<script>
import API from "../api";
import navBar from './navBar.vue'
import footerComp from './footerComp.vue'
export default {
  name: "homePage",
  components: {
    footerComp,
    navBar,
  }, 
  data(){
    return{
      posts:[],
    };
  },
  async created(){
    this.posts = await API.getAllPost();
     localStorage.clear();
  },
};
</script>

<style scoped>
.container1 {
  display: flex;
}
.homeMainImg {
  height: 500px;
  width: 50vw;
  padding: 0 20px;
}
.branding {
  text-align: center;
  padding-top: 100px;
  color: #e14d2a;
  font-weight: 900;
}

.moto {
  text-align: center;
  color: #e14d2a;
  font-weight: 700;
}

.input-group {
  margin-top: 40px;
  padding: 10px 10px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.card{
  
  padding: 20px;
  margin: 30px;
}

</style>
