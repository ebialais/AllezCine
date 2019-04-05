<template>
    <div id="poster">
        <img :src="source" class="infoImg"/>
        <div class="infoTitle">{{ infoTitle }} ({{ year }}) </div>
        <div class="infoRate"> {{ rate }}</div>
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
    .infoTitle {
        text-transform: uppercase;
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
