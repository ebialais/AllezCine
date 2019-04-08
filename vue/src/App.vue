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
<<<<<<< HEAD
  import social from './components/socialmedia/social.vue';
=======
  import social from './components/socialmedia/social';
>>>>>>> a802b737c0bd35855c3fafd878676e9dc53d03d7
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
