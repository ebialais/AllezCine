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
  }
  #app {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
