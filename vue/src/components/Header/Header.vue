<template>
    <div id="header">
        <div id="nav" v-if="windowWidth > 500">
            <div class="navigator">
                <router-link to="/" class="link">HOME</router-link>
                <router-link to="/topFilms" class="link">Films populaires</router-link>
                <router-link to="/topSeries" class="link">Série TV</router-link>
            </div>
            <form>
                <input id='wordInput' name="search"  list='suggest' autocomplete="off" required type="text" value="Recherche..." :getSuggest="getSuggest"/>
            </form>
        </div>
        <div id="nav" v-else>
            <div v-if="icon" >
                <i class="fas fa-bars" @click="menuClick"></i>
            </div>
            <div class="navigator" v-else>
                <i class="fas fa-times" @click="menuClick"></i>
                <router-link to="/" class="link">HOME</router-link>
                <router-link to="/topFilms" class="link">Films populaires</router-link>
                <router-link to="/topSeries" class="link">Série Tv</router-link>
            </div>
            <form>
                <input id='wordInput' name="search"  list='suggest' autocomplete="off" required type="text" value="Recherche..." :getSuggest="getSuggest"/>
            </form>
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
import { getSuggest } from '../../utils/getSuggest.js'


export default {
    name: 'Tete',
    data () {
        return {
            icon : true,
            bigScreen : false,
            windowWidth: window.innerWidth,
        }
    },
    components: {
        carousel,
        carouselSlide,
    },

    mounted () {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
            console.log(this.windowWidth);
        }
    },

    methods: {
        menuClick(){
            this.icon = !this.icon
        },
        getSuggest: Function,
    }
}
</script>


<style scoped>
    #header {
        /* height: 200px; */
        background-color: red;
        width: 100vw;
        margin: 0;
        font-family: 'Alegreya Sans', sans-serif;

    }
    #nav {
        background-color: #262626;
        height: 50px;
        width: 100%;
        margin: 0;
        padding-top: 2%;
    }
    .fa-times, .fa-bars {
        color: white;
        font-size : 25px;
        padding: 5px;
        float: left;
    }

    .link {
        color: white;
        text-decoration: none;
        padding: 5px;
        margin-left: 5%;
    }

    .link:hover{
        color: red;
    }

    .carousel {
        position: relative;
        overflow: hidden;
        height: 400px;
    }

    #wordInput {
        border-radius: 20px;
        border: none;
        width: 25%; 
        padding: 0.5%;
        float: right;
        margin-right: 1%;
    }

    img {
        width: 100%;
    }

    .navigator {
        width: 60%;
        float: left;
    }
    
  
</style>
