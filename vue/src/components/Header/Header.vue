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
        <!-- <carousel /> -->
    </div>
</template>

<script>
import carousel from './../carousel/carousel'

export default {
    name: 'Tete',
    data () {
        return {
            icon : true,
        }
    },
    components: {
        carousel,
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
        height: 200px;
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
</style>
