<template>
    <div id="filmAccueil">
        <section v-if="errored">
            <Error />
        </section>
        <section v-else>
            <mainTitle :mainTitle="'Films'" />
                <div v-for="(film, index) in films" :key="index" :film='film'>
                <div v-if="index < 12">
                    <router-link :to="{ name: 'InfosFilm', params: { id: film.id } }" class="link">
                        <card :title="film.title" :year="getYear(film.release_date)" :source="getImage(film.poster_path)" /> 
                    </router-link>                
                </div>
                <div v-else></div>
            </div>
        </section>
    </div>
</template>

<script>
import router from '../../router.js'
import { axios } from './../../Plugins/Axios'
import { getImage } from '../../utils/getImage'
import { getYear } from '../../utils/getYear'
import card from '../../components/card/card'
import mainTitle from '../../components/Title/title'
import Error from '../../components/Error/Error'

export default {
    name: "filmAccueil",
    data (){
        return {
            films: null,
            page: 1,
            loading: true,
            errored: false,
            result: null, 
            // type: (this.film.title ? 'movie' : 'tv'), 
        }
    },
    // props: {
    //     film: {
    //         type: Object
    //     },
    // },
    components: {
        mainTitle,
        card,
        Error,
    },
    mounted () {
        axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${this.page}`)
        .then(response => {
            this.films = response.data && response.data.results ? response.data.results : [] 
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => {
            this.loading = false;
        })
    },
    methods : {
        getImage,
        getYear,
    }
}
</script>

<style scoped>
    #filmAccueil{
        width: 70%;
        margin: auto;
    }
    .link{
        display: flex;
        width: fit-content;
    }
</style>
