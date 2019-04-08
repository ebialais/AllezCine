<template>
    <div id="topFilm">
        <section v-if="errored">
            <Error />
        </section>
        <section v-else>
            <mainTitle :mainTitle="'Le top des Films'" />
            <div id="Content">
                <div v-for="(film, index) in films1" :key="index">
                    <div v-if="index < 40">
                        <router-link :to="{ name: 'InfosFilm', params: { id: film.id } }" class="link">
                            <card :title="film.title" :year="getYear(film.release_date)" :source="getImage(film.poster_path)" /> 
                        </router-link> 
                    </div>
                </div> 
                <div v-for="(film, index) in films2" :key="index">
                    <div v-if="index < 40">
                        <router-link :to="{ name: 'InfosFilm', params: { id: film.id } }" class="link">
                            <card :title="film.title" :year="getYear(film.release_date)" :source="getImage(film.poster_path)" /> 
                        </router-link> 
                    </div>
                </div> 
            </div>
        </section>
    </div>
</template>

<script>
    import router from '../../router.js'
    import mainTitle from '../../components/Title/title'
    import card from '../../components/card/card'
    import { axios } from './../../Plugins/Axios'
    import { getImage } from '../../utils/getImage'
    import { getYear } from '../../utils/getYear'
    import Error from '../../components/Error/Error'

    export default {
        name: 'TopSeries',
        data (){
            return {
                films1: null,
                films2:null,
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
            .get(`https://api.themoviedb.org/3/discover/movie?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
            .then(response => {
                this.films1 = response.data && response.data.results ? response.data.results : [] 
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false;
            })
            axios
            .get(`https://api.themoviedb.org/3/discover/movie?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=2`)
            .then(response => {
                this.films2 = response.data && response.data.results ? response.data.results : [] 
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
    #topFilm{
        width: 80%;
        margin: auto;
    }
    #Content {
        display: flex;
        flex-wrap: wrap;
    }
    .link{
        display: flex;
        width: fit-content;
        text-decoration: none;
        color:rgb(114, 113, 113);
    }
</style>
