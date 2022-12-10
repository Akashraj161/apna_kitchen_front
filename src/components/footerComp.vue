<template>
 <div>
      <footer id="contact">
          <div class="contact-container">
              <div class="contact-items">
                  <ul style="list-style:none;">
                      <li><a class="foottitle" href="">About</a></li>
                      <br/>
                      <li><a href="#">Contact Us</a></li>
                      <br/>
                      <li><a href="#">About Us</a></li>
                      <br/>
                      <li><a href="#">Register your restaurant</a></li>
                      <br/>
                  </ul>
              </div>

              <div class="contact-items">
                <ul style="list-style:none;">
                    <li><a class="foottitle" href="">Help</a></li>
                    <br/>
                    <li><a href="">Payment</a></li>
                    <br/>
                    <li><a href="">Cancellation & Return</a></li>
                    <br/>
                </ul>
            </div>
              <div>
              <h4 class="foottitle">Contact Details</h4>
              <br/>
              <a href="mailto:support@Electro.com" style="color: #fff;"> Email <br> support@Apnakitchen.com</a>
              <br/>
              <br/>
              <a href="tel:2278401410">Phone: <br> +91-2278401410</a>
              </div>
          </div>
         
          <hr/>
          <center>
              <h3>&copy;2022 ApnaKitchen | All rights reserved.</h3>
          </center>
      </footer>
        
</div>
</template>

<script>
export default {
name: "footerComp",
}
</script>

<style>
footer{
    background: rgb(19,25,33);
    color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    position: relative; 
    padding: 40px 10vw; 
    padding-bottom: 40px; 
    
}

.contact-container{
    display: flex; 
    width: 80%; 
    justify-content: space-between;
}

.contact-items{
    width: 55%; 
    display: flex; 
    /* justify-content: space-between; */
    float:right;
}

footer a{
    color: #fff;
    text-decoration: none;
}

.foottitle{
    color: #576F72;
    font-weight: bolder;
}

</style>