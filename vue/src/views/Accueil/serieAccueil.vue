<template>
    <div id="serieAccueil">
        <section v-if="errored">
            <Error />
        </section>

        <section v-else>
            <mainTitle :mainTitle="'Series TV'" />
            <div id="SerieContent">
                <div v-for="(tv, index) in tvs" :key="index">
                    <div v-if="index < 12">
                        <router-link :to="{ name: 'InfosTv', params: { id: tv.id } }" class="link">
                            <card :title="tv.name" :year="getYear(tv.first_air_date)" :source="getImage(tv.poster_path)" /> 
                        </router-link> 
                    </div>
                </div> 
            </div>
        </section>
    </div>
</template>

<script>
import router from '../../router.js'
import { axios } from './../../Plugins/Axios.js'
import { getImage } from '../../utils/getImage'
import { getYear } from '../../utils/getYear'
import card from '../../components/card/card'
import mainTitle from '../../components/Title/title'
import Error from '../../components/Error/Error'

export default {
    name: "serieAccueil",
    data (){
        return {
            tvs: null,
            page: 1,
            loading: true,
            errored: false,
        }
    },
    components: {
        mainTitle,
        card,
        Error,
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
        getYear,
    }
}
</script>

<style scoped>
    #serieAccueil{
        width: 85%;
        margin: auto;
    }
    #SerieContent {
        display: flex;
        flex-wrap: wrap;
    }
    .link{
        display: flex;
        width: fit-content;
    }
</style>
