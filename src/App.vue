<template>
  <div id="app">
     <!-- header -->
    <div class="header">
      <div class="header-top">
        <div class="container">
          <div class="head-left">
            
              <input type="text" placeholder="Username" name="Users[username]">
              <input type="password" placeholder="Password" name="Users[password]">
              <button name='login-btn'>Login</button>
              <a href="#">Sign Up</a>
            
          </div>
          <div class="head-right">
            <ul>
              <li>
                <a href="#"><i class="tw"> </i></a>
              </li>
              <li>
                <a href="#"><i class="fb"> </i></a>
              </li>
              <li>
                <a href="#"><i class="in"> </i></a>
              </li>
              <li>
                <a href="#"><i class="rss"> </i></a>
              </li>
              <div class="clearfix"> </div>
            </ul>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">

          <div class="head-nav">
            <span class="menu"> </span>
            <ul class="cl-effect-3">
              <li class="active">
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About us</router-link>
              </li>
              <li>
                <router-link to="/services">Services</router-link>
              </li>
              <li>
                <router-link to="/products">Products</router-link>
              </li>
              <li>
                <router-link to="/teams">Our Team</router-link>
              </li>
              <li>
                <router-link to="/partners">Partners</router-link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              
              <div class="clearfix"> </div>
            </ul>
            <!-- script-for-nav -->

            <!-- script-for-nav -->
          </div>

          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
    <!-- header -->
      <router-view></router-view>

          <!-- footer-top -->
    <div class="footer-top">
      <div class="container">
        <div class="col-md-4 foo-left">
          <i class="product1"></i>
          <i class="product2"></i>
          <i class="product3"></i>
          <i class="product4"></i>
        </div>
        <div class="col-md-4 foo-left">
          <i class="text-center"></i>
          <h3 class="text-center">Contact Details</h3>
          <ul class="text-center">
            <li>Abuja Office : - 1st Floor, Suite E20-27, Efab Shopping Mall Extension, Area 11, Garki, Abuja.</li>
            <li>Email : - homes@premiumhomes.com.ng</li>
            <li>Tel : - +234 706 2924 380</li>
          </ul>
        </div>
        <div class="col-md-4 foo-left">
          <h3>Our Partners</h3>
          <ul class="partners">
            <li>Panic Alert Security Systems (PASS) Limited</li>
            <li>Eaglemart International Company Limited</li>
            <li>Microtoch Nigeria</li>
            <li>Rehalitee Home Furnishing and Mfactory Nigeria Ltd</li>
            <li>Havenhill JSG Synergy Limited</li>
            <li>Pleasant Design Concepts Limited (PDCL)</li>
            <div class="clearfix"> </div>
          </ul>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
    <!-- footer-top -->
    <!-- footer-bottom -->
    <div class="footer-bottom">
      <div class="container">
        <p>Copyrights &copy; 2017 Premium Homes. All rights reserved | Developed by <a href="mailto:omokolataiwo@yandex.com">Taiwo Kolawole</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
