<template>
    <div id="header">
        <div id="nav" v-if="windowWidth > 500" class="navigator">
            <router-link to="/" class="link">HOME</router-link>
            <router-link to="/topFilms" class="link">Films populaires</router-link>
            <router-link to="/topSeries" class="link">Série TV</router-link>
            <form>
                <input id='wordInput' name="search" list='suggest' placeholder="Rechercher..." autocomplete="off" required type="text" value="" :getSuggest="getSuggest"/>
            </form>
        </div>
        <div id="nav"  v-else>
            <div v-if="icon" class="navigator">
                <i class="fas fa-bars" @click="menuClick"></i>
                <form>
                    <input id='wordInput' name="search" list='suggest' placeholder="Rechercher..." autocomplete="off" required type="text" value=""/>
                </form>
            </div>
            <div class="navigator" v-else>
                <i class="fas fa-times" @click="menuClick"></i>
                <router-link to="/" class="link"><i class="fas fa-home"></i></router-link>
                <router-link to="/topFilms" class="link"><i class="fas fa-film"></i></router-link>
                <router-link to="/topSeries" class="link"><i class="fas fa-tv"></i></router-link>
                <form>
                    <input id='wordInput' name="search" list='suggest' placeholder="Rechercher..." autocomplete="off" required type="text" value=""/>
                </form>
            </div>
        </div>
        <div id="Carou">
            <img alt="logo Allez Ciné" src="assets/logoAllezCine.png" id="logoCarousel">
            <Carousel :per-page="1" 
                    :navigate-to="someLocalProperty" 
                    :mouse-drag="false" 
                    :autoplay="true"
                    :loop="true"
                    :paginationPosition="top"
                    :centerMode="true">
                <slide v-for="(el, index) in datas" :key="index">
                    <img :src="getImage2(el.backdrop_path)" />
                    <div id="text-carousel">   
                        <div id="Carousel_titre">LASTEST <span>ON</span>LINE <span>MO</span>VIES</div>
                        <div id="Carousel_soustitre">IN SPACE NO ONE CAN HEAR YOU SCREAM</div>
                        <router-link :to="getId(el.id)"> 
                            <button id="go-film" >GO TO THE FILM</button>
                        </router-link>
                    </div>
                </slide>
            </Carousel>
        </div>
    </div>
</template>

<script>
import VueCarousel from 'vue-carousel'
import { Carousel, Slide } from 'vue-carousel'
import { axios } from './../../Plugins/Axios'
import { getImage2 } from '../../utils/getImage2'
import { getId } from '../../utils/getId'
import { getSuggest } from '../../utils/getSuggest.js'

export default {
    name: 'Tete',
    data () {
        return {
            icon : true,
            bigScreen : false,
            windowWidth: window.innerWidth,
            datas: [],
        }
    },
    components: {
        Carousel,
        Slide,
    },
    beforeMount(){
        axios
        .get(`https://api.themoviedb.org/3/trending/all/day?api_key=7ca673fff2a5fb82abd38a9a0d559c4e`)
        .then(response => {
            let random = []
            for (let i = 0; i<5 ; i++){
                let a = Math.floor(Math.random()*20);
                random[i] = a
                console.log(random)
            }
            for (let j = 0; j < random.length; j++){
                this.datas.push(response.data.results[random[j]])
            }
            console.log(this.datas)
        })
        .catch(error => {
            this.errored = true
        })
        .finally(() => {
            this.loading = false;
        }) 
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
        getImage2,
        getId,
        getSuggest,
    }
}
</script>


<style scoped>
    #logoCarousel {
        width: 100px;
        position: absolute;
        top: 50px;
        left: 0;
        z-index: 1;
    }
    .testSlide {
        color: black;
    }
    #header {
        width: 100vw;
        margin: 0;
        font-family: 'Alegreya Sans', sans-serif;
    }
    #nav {
        background-color: #262626;
        height: 50px;
        font-size: 1.3em;
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
    #wordInput {
        border-radius: 20px;
        border: none;
        width: 150px; 
        height: 20px;
        padding: 5px;
        float: right;
        margin: -2% 2%;
    }
    #Carou {
        height: 500px;
        overflow: hidden;
    }
    #text-carousel {
        position: relative;
        top: -511px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: center; 
        align-content: center;
        min-width: 200px;
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
        text-align: center;
        color: white;
        margin-top: 8px; 
        width: 300px;
    }

    #go-film {
        background: red;
        height: 3em;
        width: 10em;
        margin-left: 40px; 
        margin-top: 10px; 
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

    .fa-home {
        margin-top: 5px; 
        width: 20px;
        height: 20px; 
    }

    img {
        width: 100%;
    }
    span {
        color: red;
    }
    .navigator {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;
    }

    @media only screen and (max-width: 900px) {
        .VueCarousel-slide {
            width: 100vw;   
            margin-top: -20px;
        }
        #text-carousel {
        margin-top: 0;
        position: relative;
        top: -271px;
        }
        #Carousel_titre {
            font-size: 1.5em;
            margin-top: 30px; 
            margin-left: 0; 
        }

        #Carousel_soustitre{
            font-size: 0.7em;
        }
        #go-film {
            height: 3em;
            width: 8em;
            margin-left: 0; 
            margin-top: 10px;
            font-size: 0.8em;
        }
        #wordInput {
            width: 100px; 
        }
        #nav{
            font-size: 1em;
        }
    }
    @media only screen and (max-width: 500px) {
        .VueCarousel-slide {
            width: 100vw;
            margin-top: -20px;
        }
        #text-carousel {
        margin-top: 0;
        position: relative;
        top: -180px;
        font-size: 10px;
        }
        #Carousel_titre {
            font-size: 1.3em;
            color: white;
            text-align: center;
            width: 600px;
            margin-top: 30px; 
        }

        #Carousel_soustitre{
            display: none;
        }
        #go-film {
            height: 3em;
            width: 8em;
            margin-left: 0; 
            margin-top: 10px;
            font-size: 0.8em;
        }
        .navigator{
            padding-top: 5px;
        }
    
    }
</style>
