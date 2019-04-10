<template>
    <div id="header">
        <div id="nav" v-if="windowWidth > 500">
            <div class="navigator">
                <router-link to="/" class="link">HOME</router-link>
                <router-link to="/topFilms" class="link">Films populaires</router-link>
                <router-link to="/topSeries" class="link">Série TV</router-link>
            </div>
            <form>
                <input id='wordInput' name="search" list='suggest' placeholder="Rechercher..." autocomplete="off" required type="text" value="" :getSuggest="getSuggest"/>
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
                <input id='wordInput' name="search" list='suggest' placeholder="Rechercher..." autocomplete="off" required type="text" value="" :getSuggest="getSuggest"/>
            </form>
        </div>
        <div>
            <carousel >
                <div v-for="(slide, index) in slides" :key="index" id="carouselContent">
                    <carousel-slide>
                        <img :src="slide.source" width="100%">
                        <div id="text-carousel">   
                            <div id="Carousel_titre">LASTEST <span>ON</span>LINE <span>MO</span>VIES</div>
                            <div id="Carousel_soustitre">IN SPACE NO ONE CAN HEAR YOU SCREAM</div>
                            <router-link :to="slide.lien"> 
                                <button id="go-film" >GO TO THE FILM</button>
                            </router-link>
                        </div>
                    </carousel-slide>
                </div>
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
            slides : [
                    {
                    source: "https://image.tmdb.org/t/p/original/6k3NNLq6HOZMniTb3etKxzITdP9.jpg",
                    lien: "/InfosFilm/283995/"
                },
                {
                    source: "https://image.tmdb.org/t/p/original/lvjscO8wmpEbIfOEZi92Je8Ktlg.jpg",
                    lien: "/InfosFilm/450465/"
                },
                {
                    source: "https://image.tmdb.org/t/p/original/skauHPLA4so9PqOuu3jhWmiWnFd.jpg",
                    lien: "/InfosFilm/297802/"
                },
                {
                    source: "https://image.tmdb.org/t/p/original/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg",
                    lien: "/InfosFilm/522681/"
                },
                {
                    source: "https://image.tmdb.org/t/p/original/n2aX63BmW7zIKgKJ58e6rKlSsdi.jpg",
                    lien: "/InfosFilm/157433/"
                }
                ] ,
        }
    },
    components: {
        carousel,
        carouselSlide,
    },

    mounted () {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
            // console.log(this.windowWidth);
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
        font-size: 1em;
        display: block;
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
        width: 20%; 
        padding: 0.5%;
        float: right;
        margin-right: 2%;
    }

    img {
        width: 100%;
    }

    .navigator {
        width: 60%;
        float: left;
    }

    #carouselContent{
        display: flex;
    }

    img{
        width: 100%;
    }

    #text-carousel {
        margin-top: 122px;
        position: relative;
        right: 54vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: center; 
        align-content: center;
    
    }
    #Carousel_titre {
        display: inline-block;
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 2.3em;
        color: white;
        text-align: center;
        width: 600px;
        margin-left: 40px; 

    }
    #Carousel_soustitre{
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 1em;
        color: white;
        /* margin: 10px; */
        margin-left: 70px; 
        margin-top: 8px; 
        width: 300px;
    }
    #go-film {
        background: red;
        height: 3em;
        width: 10em;
        margin-left: 40px; 
        margin-top: 10px; 

        /* margin: 10px; */
        border-radius: 5px;
        border: none;
        transition: 0.300s; 
    }

    #go-film:hover {
        transition: 0.300s; 
        height: 3.1em;
        width: 10.1em; 
        font-size: 0.8rem;
    }

    .carousel__pagination {
        display: flex;
        justify-content: center;
    }


    span {
        color: red;
    }
    @media only screen and (min-width: 500px) {
        font-size: 1.2em;
    }
</style>
