<template>
    <div>
        <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
        </section>

        <section v-else>
            <div v-for="(tv, index) in tvs" :key="index">
                <div v-if="index < 12">
                    <card :title="tv.name" :year="tv.first_air_date" :source="getImage(tv.poster_path)" /> 
                </div>
            </div>
    
            

        </section>
    </div>
</template>

<script>
import { axios } from './../../Plugins/Axios.js'
import { getImage } from '../../utils/getImage'
import card from '../../components/card/card'

export default {
    name: "serieAccueil",
    data (){
        return {
            tvs: null,
            page: 1,
            loading: true,
            errored: false,
            srcImg: [],
        }
    },
    components: {
        card,
    },
    mounted () {
        axios
        .get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${this.page}`)
        .then(response => {
            this.tvs = response.data && response.data.results ? response.data.results : [] 
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
    }
}
</script>

<style>

</style>
