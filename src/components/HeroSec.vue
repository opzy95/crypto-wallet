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
    <div class="img">
    <img class="logo" src="/src/asset/banner.png" alt="">
    </div>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.logo {
  width: 450px;
  height: 300px;
  margin-top: 90px;
  margin-right: 40px;
}
.img{
  width: 50%;
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
  margin-top: 90px;
  width: 50%;
}

.text h1{
  color: white;
  font-size: 50px;
  width: 28rem;

}
.text p{
  width: 20rem;
  font-size: 20px;
  color: white;
}
@media screen and (max-width: 700px) {
  .all{
    width: 100%;
    display: block;
  }
  .text{
    margin-top: 0;
  }
  .logo{
    width: 290px;
    height: 240px;
    margin-top: 20px;
  }
  .text p{
    width: 14rem;
  }
  .text h1{
    width: 17rem;
  }

}
  

</style>