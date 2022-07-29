<template>
  <HeaderBar/>
  <router-view/>
  <FooterBar/>
</template>

<script>
import HeaderBar from "../src/components/Header.vue";
import FooterBar from "../src/components/Footer.vue";

export default {
  
    name: 'App',
    components: {
      HeaderBar,
      FooterBar
    }
}

</script>

<style>

</style>
