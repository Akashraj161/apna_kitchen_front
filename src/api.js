import axios from "axios";
// const url = "http://localhost:5000/api/post";
const url = "https://apnakitchen-api-zk6n.onrender.com/api/post";


export default class API {

    // to get all post from server
  static async getAllPost() {
    console.log("inside all post")
    const res = await axios.get(url);
    return res.data;
  }

  // to get single post by ID
  static async getPostByID(id) {
    // console.log("Inside api", id);
    const res = await axios.get(`${url}/${id}`);
    // console.log("data", res.data);

    return res.data;
  }

 // to insert post into Database
  static async createPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }

  // to update post into database
  static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }
 // to delete a post
  static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }

  //New User login details
  static async createSignUp(post) {
    const res = await axios.post(`${url}/signup`, post);
    return res.data;
  }
  
}