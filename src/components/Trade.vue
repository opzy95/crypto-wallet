<template>
  <div class="all">
    <img style="width: 620px" src="../asset/image/macbook.png" alt="" />
    <div class="trade">
      <h1 style="font-size: 60px; width: 30rem; color: white;">Trade Anytime, Anywhere</h1>
      <p style="width: 38rem; font-size: 20px; color: rgb(126, 141, 191);">
        Access your crypto portfolio on the go with our secure, mobile-friendly platform. Whether
        you're at home or on the move, you can buy, sell, and manage assets 24/7 — no limits, no
        downtime.
      </p>
      <div class="image">
        <img src="../asset/image/android.svg" alt="" />
        <img src="../asset/image/appstore.svg" alt="" />
        <img src="../asset/image/windows.svg" alt="" />
        <img src="../asset/image/mac.svg" alt="" />
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
    gap: 90px;
    display: flex;
    margin-top: 10px;
}

</style>
