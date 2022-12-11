<template>
<div>
      <div class="itemForm">
      <form ref="post" @submit.prevent="updateForm" enctype="multipart/form-data">
        <h1 class="title">Edit This Item</h1><hr><br>
        <h3 class="heading">Basic food details</h3><hr>
        <div class="form-floating mb-3 col-md-8 offset-md-2">
          <input
            type="text"
            v-model="post.foodName"
            class="form-control"
            name="foodname"
            placeholder="Food Name"
            :rules = "rules"
          />
          <label for="floatingInput">Food Name</label>
        </div>
        <div class="form-floating mb-3 col-md-8 offset-md-2">
          <input
            type="text"
            v-model="post.description"
            class="form-control"
            name="description"
            maxlength = "50"
            placeholder="Description"
          />
          <label for="floatingPassword">Food Description</label>
        </div><br>
        
        <h3 class="heading">Pricing</h3><hr>
           <div class="row">
                <div class="form-floating col col-md-4 offset-md-2">
                    <input type="number" v-model="post.priceWeekly" class="form-control" placeholder="Weekly">
                    <label for="floatingInput"> Weekly Price</label>
                </div>
                <div class="form-floating col col-md-4 ">
                    <input type="number" v-model="post.priceMonthly" class="form-control" placeholder="Monthly">
                    <label for="floatingInput"> Monthly Price</label>
                </div>
            </div><br><br>

         <div>
             <h3 class="heading">Upload-Image</h3><hr>
            <input type="file" class="offset-md-2" @change="selectImage"  id="image" name="image " />
              <img v-bind:src="`https://apnakitchen-api-zk6n.onrender.com/${post.image}`" width="150px" alt="">
          </div> 
          <br>
        <h3 class="heading">Seller Details</h3><hr>
         <div class="form-floating mb-3 col-md-8 offset-md-2">
          <input
            type="text"
            v-model="post.restaurantName"
            class="form-control"
            name="password"
            placeholder="Password"
          />
          <label for="floatingPassword">Seller/Restaurant Name</label>
        </div>
        <div class="form-floating mb-3 col-md-8 offset-md-2">
          <input
            type="text"
            v-model="post.address"
            class="form-control"
            name="password"
            placeholder="Password"
          />
          <label for="floatingPassword">Address</label>
        </div>
         <div class="form-floating mb-3 col-md-8 offset-md-2">
          <input
            type="Number"
            v-model="post.phoneNo"
            class="form-control"
            name="password"
            placeholder="Password"
            :rules = "rules"
          />
          <label :rules = "rules" for="floatingPassword">Contact No.</label>
        </div>
        <input type="submit" value="Update Item" class="button" />
      </form>
    </div>

</div>
</template>

<script>
import API from '../api'
export default {
name: "editItems",
data(){
    return{
        rules: [(value)=>!!value ||"this field is required!"],
        post:{
            foodName: "",
            description: "",
            priceWeekly: "",
            priceMonthly: "",
            address:"",
            restaurantName:"",
            phoneNo:"",
            image:"",

        },
        image:"",
    };
},
async created(){
     const response = await API.getPostByID(this.$route.params.id);
    this.post = response;
},
 methods:{
    selectImage(event){
     
        this.image = event.target.files[0];
           console.log("inside file changes")
    },
    async updateForm(){
        const formData = new FormData();
        formData.append('foodName', this.post.foodName);
        formData.append('description', this.post.description);
        formData.append('priceWeekly', this.post.priceWeekly);
        formData.append('priceMonthly', this.post.priceMonthly);
        formData.append('address', this.post.address);
        formData.append('restaurantName', this.post.restaurantName);
        formData.append('phoneNo', this.post.phoneNo);
        formData.append('image',this.image);
        formData.append('previous_image',this.post.image);
        console.log("inside update")
        console.log(formData);

       const response = await API.updatePost(this.$route.params.id ,formData);
       this.$router.push({name:'adminHomePage',params: {message:response.message}});
    }
 }
};
</script>

<style scoped>
.title{
    text-align: center;
    margin-top: 10px;
    font-weight: 700;
}
.heading{
    margin-left: 15%;
}
.itemForm{
    background-color: beige;
    margin:0px 20px;
    padding-bottom:30px;
    box-shadow: 2px 3px solid black;
}
.button{
    width: 20%;
    background-color: rgb(110, 110, 223);
    color: white;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
}
.button:hover{
    background-color: blue;
}

</style>
