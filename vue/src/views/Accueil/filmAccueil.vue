<template>
    <div id="filmAccueil">
        <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
        </section>

        <section v-else>
            <mainTitle :mainTitle="'Films'" />
                <div v-for="(film, index) in films" :key="index">
                <div v-if="index < 12">
                    <card :title="film.title" :year="getYear(film.release_date)" :source="getImage(film.poster_path)" @click="goInfo(film.id)"/> 
                </div>
                <div v-else></div>
            </div>
        </section>
    </div>
</template>

<script>
import { axios } from './../../Plugins/Axios'
import { getImage } from '../../utils/getImage'
import { getYear } from '../../utils/getYear'
import card from '../../components/card/card'
import mainTitle from '../../components/Title/title'

export default {
    name: "filmAccueil",
    data (){
        return {
            films: null,
            page: 1,
            loading: true,
            errored: false,
        }
    },
    components: {
        mainTitle,
        card,
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
        goInfo(id){
            

        }
    }
}
</script>

<style scoped>
    #filmAccueil{
        width: 70%;
        margin: auto;
    }
</style>
