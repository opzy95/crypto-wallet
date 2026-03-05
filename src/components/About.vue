<template>
    <div class="all">
    <div class="works">
        <h1>How It Works</h1>
        <p class="started">Getting statrted with crpto is very simple.Create and account,verify your identity and start buying and selling or accepting Digital currencies in just A few clicks .</p>
        <p class="started-one">All on a secure an intuitive platform.</p>
    </div>
        
        <div class="how">
        <div class="part-one">
          <div class="part-onee">
            
          <!-- <Icon icon="mdi:home" /> -->
          <font-awesome-icon :icon="['fas', 'user']" class="user" />
          </div>
          <!-- <Icon icon="mdi:key" /> -->
        <h4 class="create">Create Account</h4>
                <p class="sign-up">
                    Sign up with your email,set up a secure password and verify your identity to unlock full access to the platform.Getting started...
                </p>
            </div>
            <div class="part-one"><div class="part-onee">
            
          <font-awesome-icon :icon="['fas', 'user']" class="user" />
          </div>
                <h4 class="create">Add Fundst</h4>
                <p class="sign-up">
                    Deposit money using your preferred payment method — bank transfer, debit card, or crypto wallet — and get ready to explore the world of digital assets.
                </p>
            </div>
            <div class="part-one">
                <div class="part-onee">
            
          
          <font-awesome-icon :icon="['fas', 'user']" class="user" />
          </div>
                <h4 class="create">Buy, Sell & Exchange</h4>
                <p class="sign-up">
                    Easily buy or sell cryptocurrencies like Bitcoin and Ethereum, or convert between coins — all with real-time rates and low transaction fees.
                </p>
            </div>

</div>
</div>
</template>

<script>
    export default {
        // components: { 'font-awesome-icon': FontAwesomeIcon },
    }
    // import { library } from '@fortawesome/fontawesome-svg-core'
    // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.all{
background-color: rgb(13, 23, 64);
align-items: center;
}
.how{
    display: flex;
    gap: 30px;
    padding: 20px;
    margin-left: 70px;
    padding-bottom: 50px;
}

.works{
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.works h1{
    color: rgb(208, 205, 247);
    margin-top: 20px;
   
}
.started{
    width: 37rem;
    align-items: center;
    color: rgb(208, 205, 247);
}
.started-one{
    width: 37rem;
    align-items: center;
    color: rgb(208, 205, 247);
    margin-left: 250px;
}
.part-one{
    width: 30%;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.user{
    font-size: 60px;
    
}
.part-onee{
    border-radius: 50%;
    background-color: rgb(46, 25, 65);
    color: rgb(208, 205, 247);
    width: 100px;
    height: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 20px;
    align-content: center;
    
}
.sign-up{
    width: 15rem;
    color: rgb(208, 205, 247);
    font-size: 20px;
    align-content: center;
    margin-left: 5px;
    text-align: center;
}
.create{
    color: rgb(208, 205, 247);
    margin-left: 110px;
}
@media screen and (max-width: 800px){
    .how{
        display: block;
        width: 100%;
        margin: 0;
    }
    .started{
        width: 20rem;
        text-align: center;
    }
    .part-one{
        width: 100%;
        margin-bottom: 20px;
        justify-content: center;
        align-content: center;
        margin-left: 2px;

    }
    .started-one{
        width: 35rem;
        /* margin-left: 1px; */
    }
    .part-onee{
        /* width: 98%; */
    }
}



</style>