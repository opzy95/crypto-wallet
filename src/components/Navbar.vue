<template>
  <!-- Everything must be inside ONE root element (like this div) -->
  <div class="navbar-container">
    <nav class="navbar">
      <img style="width: 140px;" src="../asset/image/logo.svgfffff.svg" alt="Logo">
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
    <div class="rrr">
      <img style="width: 140px; display: flex; flex-direction: row; gap: 20px" src="../asset/image/logo.svgfffff.svg" alt="Logo">

    <div class="hamburger" @click="toggleMenu">
      <span v-if="!isOpen">☰</span>
      <span v-else>&times;</span>
       
    </div>
    
    </div>

    <div class="mobile-sidebar" :class="{ 'show': isOpen }">
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/exchange">Exchange</router-link></li>
        <li><router-link to="/Market">Market</router-link></li>
        <li><router-link to="/feature">Feature</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
      </ul>
      <div class="nav-buttons">
        <button class="signup-btn">Sign Up</button>
        <button class="signin-btn">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.rrr{
  display: flex;
  justify-content: space-around;
}
.navbar-container {
  background-color: rgb(77, 34, 130);
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
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

.hamburger {
  font-size: 30px;
  cursor: pointer;
  color: white;
  display: none; /* Hidden on desktop */
  padding: 10px;
  text-align: left;
  /* justify-content: space-around; */
}

.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #333;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 100;
}

.mobile-sidebar.show {
  transform: translateX(0);
}

.mobile-sidebar .nav-links, 
.mobile-sidebar .nav-buttons {
  flex-direction: column;
  margin-bottom: 20px;
}

@media screen and (max-width: 700px) {
  .navbar {
    display: none;
  }
  .hamburger {
    display: block;
    /* display: flex; */
  }
}
</style>
