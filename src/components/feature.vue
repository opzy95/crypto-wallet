<template>
    <div class="feat" >
        <h4 style="display: flex; justify-content:center; color: blueviolet; padding-top: 20px;">
            Features
        </h4>
        <h1 style="color: white; display:flex; justify-content: center; align-content: center;">
            The Most Trusted Platform for Digital Currency
        </h1>
        <p class="payy" style="display: flex; align-content: center; justify-content: center; color: rgb(208, 205, 247); width: 30rem; text-align: center; margin: 10px auto;">
            Discover powerful tools designed to help you securely buy, sell, and manage your crypto assets — trusted by traders, investors, and businesses worldwide.
        </p>
        <div class="all">
        <div class="secure">
            <img class="asset-logo" src="/src/asset/image/moneyy.png" alt="">
            <h3>
                Secure storage

            </h3>
            <p>
                Your crypto is protected with advanced encryption and offline cold wallets, ensuring top-tier security and privacy.
            </p>

        </div>
        <div class="secure">
            <img class="asset-logo" src="/src/asset/image/money3.png" alt="">
            <h3>Free to Use</h3>
            <p>Enjoy powerful portfolio tracking, live analytics, and account management tools — all without any hidden fees.</p>

        </div>
        <div class="secure">
            <img class="asset-logo" src="/src/asset/image/money 2.png" alt="">
            <h3>Real-Time Price Data</h3>
            <p>Get live crypto prices, market updates, and real-time data from top global exchanges — all in one place, 24/7.</p>
        </div>
        </div>

    </div>
    <div class="pay-all">
    <div class="pay">
        <h1 class="pay-one">
            A Simple, Secure Way to Buy and Sell Cryptocurrency
        </h1>
        <p class="pay-two">Buy, sell, and manage digital assets with confidence on a platform built for speed, security, and simplicity — whether you're a beginner or a seasoned trader.</p>
        <button class="btn" style=" padding:10px; margin-bottom: 20px; background-color: rgb(120, 89, 222); ">Connect Wallet</button>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.feat{
    background-color: rgb(46, 38, 102);
}
.secure{
    width: 26%;
    /* border: 4px solid black; */
    padding: 20px;
    background-color: rgb(12, 27, 69);
}
.asset-logo{
    width: 60px;
    padding: 7px;
}
.all{
    display: flex;
    padding-bottom: 50px;
    gap: 40px;
    align-content: center;
    justify-content: center;
    margin-top: 50px;
    
}
.pay-all{
    background-color: rgb(15, 19, 56);
}
.pay{
    width: 43%;
    /* border: 2px solid red; */
    /* margin-top: 40px; */
    /* margin-left: 360px; */
    margin: 0px auto;
    text-align: center;
    color: white;
    /* background-color: rgb(11, 21, 56); */
}
.pay-one{
    /* width: 55rem; */
    color: white;
    padding-top: 30px;
    font-size: 50px;
    padding-bottom: 30px;
}
 .pay-two{
    /* width: 50rem; */
    color: rgb(208, 205, 247);
    font-size: 20px;
    padding-bottom: 10px;
}
.btn{
    padding-bottom: 10px;
}
.secure h3{
    color: white;
}
.secure p{
    color: rgb(208, 205, 247);
}
@media screen and (max-width: 700px){
    h1{
        width: 17rem;
        text-align: center;
        justify-content: center;
        align-content: center;
        margin: 10px auto;
    }
    .payy{
        width: 17rem !important;
    }
    .all{
        display: block;
    }
    .secure{
        width: 98%;
        margin-bottom: 10px;
    }
    .pay-one{
        width: 13rem;
        font-size: 30px;
        text-align: center;
    }
    .pay{
        margin: 2px auto;
    }
    .pay-two{
        width: 13rem;
    }
    .pay-all{
        justify-content: center;
        align-content: center;
        
    }
}
</style>