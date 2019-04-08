<template>
    <div id="header">
        <div id="nav">
            <div v-if="icon" >
                <i class="fas fa-bars" @click="menuClick"></i>
            </div>
            <div v-else>
                <i class="fas fa-times" @click="menuClick"></i>
                <router-link to="/" class="link">Home</router-link>
                <router-link to="/topFilms" class="link">top Films</router-link>
                <router-link to="/topSeries" class="link">top Series</router-link>
            </div>
        </div>
        <div>
            <carousel>
                <carousel-slide>
                    <img src="https://static.hitek.fr/img/products/disney/disney-les-gardiens-de-la-galaxie-vol-2/disney-les-gardiens-de-la-galaxie-vol-2-10.jpg" width="100%">
                </carousel-slide>
                <carousel-slide>
                    <img src="https://image.tmdb.org/t/p/w1280/bUUUAnggVzsgkwO5dJgkgAcQPRc.jpg" width="100%">
                </carousel-slide>
                <carousel-slide>
                    <img src="https://image.tmdb.org/t/p/w1280/3v6dxV5l6Zs2OcrAnIcuE9POeGY.jpg" width="100%">
                </carousel-slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import carousel from './../carousel/carousel'
import carouselSlide from './../carousel/carouselSlide'

export default {
    name: 'Tete',
    data () {
        return {
            icon : true,
        }
    },
    components: {
        carousel,
        carouselSlide,
    },
    methods: {
        menuClick(){
            this.icon = !this.icon
        }
    }
}
</script>

<style scoped>
    #header {
        /* height: 200px; */
        background-color: red;
        width: 100vw;
        margin: 0;
    }
    #nav {
        background-color: #262626;
        height: 50px;
        width: 100%;
        margin: 0;
    }
    .fa-times, .fa-bars {
        color: white;
        font-size : 25px;
        float: right;
        padding: 5px;
    }
    .link {
        color: white;
        text-decoration: none;
        padding: 5px;
        border: 2px solid white;
    }
    .carousel {
        position: relative;
        overflow: hidden;
        height: 400px;
    }
    img{
        width: 100%;
    }
    
  
</style>
