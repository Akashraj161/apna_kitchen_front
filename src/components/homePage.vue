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
<hr>
<h1 class="productHeading" >Your Meals</h1>
    <div class="container2">
      <div class="flex-container">
        <div class="g-col-6" v-for="post in posts" :key="post._id">
           <div class="card"  style="width: 18rem;">
            <div class="img-hover img-hover-zoom">
              <img v-bind:src="`https://apnakitchen-api-zk6n.onrender.com/${post.image}`" style="height:250px" class="card-img-top" alt="">
            </div>
              
                <div class="card-body">
                  <h5 class="card-title resName">{{post.restaurantName}}</h5>
                  <h5 class="card-title foodName">{{post.foodName}}</h5>
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
  padding: 15px;
  margin: 30px 80px;
  min-height: 500px;
}

.card-body{
  width: 100%;
  position:absolute;
  top: 55%;
  left: 5%;
}
.foodName{
  margin-top: 30px;
}
.resName{
  color: #e14d2a;
}
.btn-primary{
  position:relative;
  left: 27%;
  transition: transform .6s;
}

.btn-primary:hover{
  transform: scale(1.2);
}

.productHeading{
    color: #e14d2a;
    position: relative;
    text-align: center;
    padding-top: 20px;
}
.productHeading::after{
    content: "";
    position: absolute;
    transform: scale(0);
    left: 42%;
    top: 80px;
    height: 3px;
    width: 15%;
    background-color: red;
    transition: transform 0.3s ease-out;
}

.productHeading:hover::after{
    transform: scale(1);
}

/* .card-img-top{
   transition: transform .2s;
}
.card-img-top:hover{
  transform: scale(1.1);
} */

.img-hover {
  height: 250px; 
  overflow: hidden; 
}

.img-hover-zoom img {
  transition: transform 1s, filter 0.8s ease-in-out;
  transform-origin: center center;
  filter: brightness(80%);
}

/* The Transformation */
.img-hover-zoom:hover img {
  filter: brightness(100%);
  transform: scale(1.3);
}

</style>
