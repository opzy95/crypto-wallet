<template>
    <div>
<div class="all">
    <div class="text">
    <h1>
      Buy,Sell and Accept Crypto currency with ease
    </h1>
    <p>
      A fast secure and friendly platform to trade bitcoin,etherum and other digital asset.Join millions of people embracing the future of finance.
    </p>
    <button>Get Started</button>
    </div>
    <img class="logo" src="/src/asset/banner.png" alt="">
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.logo {
  width: 700px;
  height: 500px;
  margin-top: 130px;
}
.all{
  display: flex;
  width: 100%;
  background-color:#231e5b;
}
button{
    color: white;
    font-size: 20px;
    padding: 8px;
    border-radius: 7px;
    background-color:rgb(170, 58, 222);
}

.text{
  /* width: 0%; */
  margin-left: 50px;
  margin-top: 150px;
}

.text h1{
  color: white;
  font-size: 75px;
  width: 43rem;

}
.text p{
  width: 30rem;
  font-size: 25px;
  color: white;
}

</style>