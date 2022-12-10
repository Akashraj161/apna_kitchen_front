<template>
<div>
      <div class="itemForm">
      <form ref="post" @submit.prevent="submitForm" enctype="multipart/form-data">
        <h1 class="title">Add New Item</h1><hr><br>
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
            placeholder="Description"
            maxlength = "50"
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
            <input type="file" class="offset-md-2" @change="selectImage"  id="image" name="image " required />
            <!-- <input class="offset-md-2" type="file" id="file" name="file" /> -->
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
        <input type="submit" value="Submit" class="button" />
      </form>
    </div>

</div>
</template>

<script>
import API from '../api'
export default {
name: "addItem",
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
            image:null,

        },
        image:"",
        
    };
},
 methods:{
    selectImage(event){
     
        this.image = event.target.files[0];
           console.log("inside file changes")
    },
    async submitForm(){
        const formData = new FormData();
        formData.append('foodName', this.post.foodName);
        formData.append('description', this.post.description);
        formData.append('priceWeekly', this.post.priceWeekly);
        formData.append('priceMonthly', this.post.priceMonthly);
        formData.append('address', this.post.address);
        formData.append('restaurantName', this.post.restaurantName);
        formData.append('phoneNo', this.post.phoneNo);
        formData.append('image',this.image);
        console.log(formData);
       const response = await API.createPost(formData);
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
    /* border: 1px solid black; */
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

p{
  width: 100%;
  text-align: right;
  margin-top: 10px;
}

</style>
