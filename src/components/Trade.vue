<template>
  <div class="all">
    <img class="comp" style="width: 500px" src="../asset/image/macbook.png" alt="" />
    <div class="trade">
      <h1 style="font-size: 60px; width: 30rem; color: white;">Trade Anytime, Anywhere</h1>
      <p style="width: 30rem; font-size: 20px; color: rgb(126, 141, 191);">
        Access your crypto portfolio on the go with our secure, mobile-friendly platform. Whether
        you're at home or on the move, you can buy, sell, and manage assets 24/7 — no limits, no
        downtime.
      </p>
      <div class="image">
        <img class="image-1" src="../asset/image/android.svg" alt="" />
        <img  class="image-1" src="../asset/image/appstore.svg" alt="" />
        <img class="image-1" src="../asset/image/windows.svg" alt="" />
        <img class="image-1" src="../asset/image/mac.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.all{
    display: flex;
    justify-content: center;
    gap: 30px;
    /* margin-top: 50px; */
    background-color: rgb(54, 37, 107);
    padding-top: 50px;
}
.trade{
    margin-top: 30px;
}
.image{
    gap: 30px;
    display: flex;
    margin-top: 10px;
    padding: 10px;
}

@media screen and (max-width: 700px){
    .all{
        display: block;
    }
    .comp{
        width: 300px !important;
        align-items: center;
        justify-content: center;
        justify-items: center;
        margin-left: 20px;
    }
    .trade h1{
        width: 20rem !important;
        font-size: 20px;
        text-align: center;
    }
    .trade p{
        width: 18rem !important;
        text-align: center;
        margin-left: 13px;
    }
    .image-1{
        width: 50px;
        gap: px;
    }
}

</style>
