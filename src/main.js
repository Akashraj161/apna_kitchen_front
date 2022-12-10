import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";


import homePage from "./components/homePage";
import addItem from "./components/addItem";
import pagenotFound from "./components/pagenotFound";
import detailsPage from "./components/detailsPage";
import adminLogin from "./components/adminLogin";
import adminHomePage from "./components/adminHomePage";
import editItems from "./components/editItems";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/addItem",
    component: addItem,
    name:"addItem"
  },
 
  {
    path: "/adminLogin",
    name: "adminLogin",
    component: adminLogin,
  },
 
  {
    path: "/adminHomePage",
    name: "adminHomePage",
    component: adminHomePage,
    meta:{
      needAuth:true
    }
  },

  {
    path: "/details/:id",
    name: "detailsPage",
    component: detailsPage,
  },
  {
    path: "/edit-items/:id",
    name: "edit-items",
    component: editItems,
  },
  {
    path: "*",
    component: pagenotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to , from , next)=>{
  let localStorageUserData = localStorage.getItem("user-info");
    if(to.meta.needAuth && !localStorageUserData ){
      next('/')
    }
    else {
     return next()
    }
})

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount("#app");
