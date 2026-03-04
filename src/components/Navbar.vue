<template>
  <nav class="navbar">
     <img style="width: 140px;" src="../asset/image/logo.svgfffff.svg" alt="">
    <ul class="nav-links">
     
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/exchange">Exchange</router-link></li>
      <li><router-link to="/feature">Feature</router-link></li>
      <li><router-link to="/faq">FAQ</router-link></li>
      <li><router-link to="/Market">Market</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
    <div class="nav-buttons">
      <button class="signup-btn">Sign Up</button>
      <button class="signin-btn">Sign In</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: rgb(77, 34, 130);
  color: #fff;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.signup-btn, .signin-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.signup-btn {
  background-color: rgb(183, 42, 222);
  color: #fff;
}

.signin-btn {
  background-color: rgb(183, 42, 222);
  color: white;
}
</style>