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

export default {
    name: 'Tete',
    data () {
        return {
            icon : true,
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
        carouselSlide
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
        width: 100vw;
        margin: 0;
    }
    #nav {
        background-color: #262626;
        height: 50px;
        width: 100%;
        margin: 0;
        font-size: 1em;
        display: block;
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
        /* height: 150px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        /* border: 1px solid black; */
    
    }
    #Carousel_titre {
        display: inline-block;
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 2.3em;
        color: white;
        text-align: center;
        margin: 10px;
        width: 600px;
    }
    #Carousel_soustitre{
        /* position: absolute;
        top: 70%; */
        /* margin-top: -150px;
        padding-left: 10px; */
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 1em;
        color: white;
        margin: 10px;
        width: 300px;
    }
    #go-film {
        background: red;
        /* position: absolute;
        top: 80%; */
        /* margin-top: -150px;
        padding-left: 10px; */
        height: 4em;
        width: 10em;
        margin: 10px;
    }
    span {
        color: red;
    }
    @media only screen and (min-width: 500px) {
        font-size: 1.2em;
    }
</style>
