<template>
  <div id="app">
    <Tete />
    <router-view/>
    <Pied />
  </div>
</template>

<script>
  import Tete from './components/Header/Header.vue';
  import Pied  from './components/Footer/Footer.vue';
  
  export default {
    components: {
      Tete, 
      Pied,
    },
  }
</script>


<style>
  body {
    margin: 0;
    width: 100vw;
    overflow-x: none;
  }
  #app {
    margin: 0;
    width: 100vw;
    overflow-x: none;
  }
</style>
