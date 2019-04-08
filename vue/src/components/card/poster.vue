<template>
    <div id="poster">
        <img :src="source" class="infoImg"/>
        <div id="InfoHeader">
            <div class="infoTitle">{{ infoTitle }} ({{ year }}) </div>
            <div class="infoRate"> 
                <span id="rate" v-if="rateDisplay">
                    {{ rate }}
                </span>
                <span @mouseover="displayRate">
                    <i class="fas fa-star active" v-if="(Math.round(rate) > 0)"></i>
                    <i class="fas fa-star inactive" v-else></i>
                    <i class="fas fa-star active" v-if="(Math.round(rate) >= 4)"></i>
                    <i class="fas fa-star inactive" v-else></i>
                    <i class="fas fa-star active" v-if="(Math.round(rate) >= 6)"></i>
                    <i class="fas fa-star inactive" v-else></i>
                    <i class="fas fa-star active" v-if="(Math.round(rate) >= 8)"></i>
                    <i class="fas fa-star inactive" v-else></i>
                    <i class="fas fa-star active" v-if="(Math.round(rate) >= 10)"></i>
                    <i class="fas fa-star inactive" v-else></i>
                </span>
            </div>
        </div>
        <h4 class="infoTitre Synopsis">Synopsis</h4>
        <p class="infoSynopsis">{{ synopsis }}</p>
        <span v-for="(genre, index) in genres" :key="index" class="infoGenre">
            {{ genre.name }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "poster",
        props:["infoTitle", "year", "source", "rate", "genres", "synopsis"],
        data (){
            return {
                rateDisplay: false
            }
        },
        methods: {
            displayRate (){
                this.rateDisplay = !this.rateDisplay
            }
        }
    }
</script>

<style>
    #poster {
        width: 70vw;
        margin: 30px auto 50px;
        font-family: 'Alegreya Sans', sans-serif;
    }
    img {
        width: 100%;
        margin: 20px auto;
    }
    #InfoHeader {
        display: flex;
        justify-content: space-between;
    }
    .infoTitle {
        text-transform: uppercase;
        font-size: 2em;
        font-weight: bold;
    }
    .infoSynopsis {
        color: #797979;
    }
    .infoGenre {
        display: inline-block;
        color: #797979;
        box-shadow:  5px 5px 10px #919090;
        background-color: white;
        padding: 5px; 
        margin: 5px;
        border-radius: 4px;
        
    }
    .inactive  {
        color: #919090;
    }
    .active  {
        color: #ffb935;
    }
    #rate {
        background-color: #ffb935;
        padding: 3px;
        border-radius: 3px;
    }

    @media only screen and (min-width: 700px) {
        img {
            width: 50%;
            float: left;
            margin: 0 20px 20px 0;
        }
    }
    @media only screen and (min-width: 900px) {
        img {
            width: 40%;
            float: left;
            margin: 0 20px 20px 0;
        }
    }
    @media only screen and (min-width: 1500px) {
        img {
            width: 30%;
            float: left;
            margin: 0 20px 20px 0;
        }
    }
</style>
