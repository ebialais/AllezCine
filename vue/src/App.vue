<template>
  <div id="app">
    <Header />
    <formu :getData="getData"/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue';
  import Footer  from './components/Footer/Footer.vue';
  import formu from './components/Infos/formu.vue';
  export default {
    components: {
      Header, 
      Footer,
      formu, 
    },

    beforeMount: function() {
    this.getData()
    },

    methods:{

    getData(){
      const req = new XMLHttpRequest();
      req.open('GET','http://localhost:8888/Projet_allezcine/allezcine/php/getData.php', false);
      req.send(null);
      if (req.status === 200 ){
          this.lists = JSON.parse(req.response)
      } else {
      }
    },
  },

  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
