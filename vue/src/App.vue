<template>
  <div id="app">
    <Tete />
    <social />
    <router-view/>
    <Pied />
  </div>
</template>

<script>
  import Tete from './components/Header/Header.vue';
  import social from './components/socialmedia/social';
  import Pied  from './components/Footer/Footer.vue';
  
  export default {
    components: {
      Tete,
      social, 
      Pied,
    },
  }
</script>


<style>
  body {
    margin: 0;
    width: 100vw;
    overflow-x: none;
    background-color: #f9f9f9;
  }
  #app {
    margin: 0;
    width: 100vw;
    overflow-x: none;
  }
</style>
