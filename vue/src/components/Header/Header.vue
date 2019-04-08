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
                    <img :src="caroussel.slide1.source" width="100%">
                </carousel-slide>
                <carousel-slide>
                    <img :src="caroussel.slide2.source" width="100%">
                </carousel-slide>
                <carousel-slide>
                    <img :src="caroussel.slide3.source" width="100%">
                </carousel-slide>
                <carousel-slide>
                    <img :src="caroussel.slide4.source" width="100%">
                </carousel-slide>
                <carousel-slide>
                    <img :src="caroussel.slide5.source" width="100%">
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
            caroussel: {
                slide1 : {
                    source: "https://image.tmdb.org/t/p/original/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
                    lien: "/InfosFilm/283995/"
                },
                slide2 : {
                    source: "https://image.tmdb.org/t/p/original/lvjscO8wmpEbIfOEZi92Je8Ktlg.jpg",
                    lien: "/InfosFilm/450465/"
                },
                slide3 : {
                    source: "https://image.tmdb.org/t/p/original/skauHPLA4so9PqOuu3jhWmiWnFd.jpg",
                    lien: "/InfosFilm/297802/"
                },
                slide4 : {
                    source: "https://image.tmdb.org/t/p/original/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg",
                    lien: "/InfosFilm/522681/"
                },
                slide5 : {
                    source: "https://image.tmdb.org/t/p/original/n2aX63BmW7zIKgKJ58e6rKlSsdi.jpg",
                    lien: "/InfosFilm/157433/"
                },
            }
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
        /* height: 200px; */
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
