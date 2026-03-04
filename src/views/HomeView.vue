<template>
    <div>
  <!-- <Navbar/> -->

  <HeroSec/>
  <About/>
  <feature/>
  <Trade/>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HeroSec from '@/components/HeroSec.vue';
import About from '@/components/About.vue';
import Feature from '@/components/feature.vue';
import Trade from '@/components/Trade.vue';
    export default {
        components:{
            HeroSec,Navbar,About,
                Feature,Trade 
        }
    }
</script>

<style scoped>

</style>