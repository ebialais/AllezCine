<template>
    <div id="topSeries">
        <section v-if="errored">
            <Error />
        </section>
        <section v-else>
            <mainTitle :mainTitle="'Le top des Series TV'" />
            <div id="Content">
                <div v-for="(tv, index) in tvs1" :key="index">
                    <div v-if="index < 40">
                        <router-link :to="{ name: 'InfosTv', params: { id: tv.id } }" class="link">
                            <card :title="tv.name" :year="getYear(tv.first_air_date)" :source="getImage(tv.poster_path)" /> 
                        </router-link> 
                    </div>
                </div> 
                <div v-for="(tv, index) in tvs2" :key="index">
                    <div v-if="index < 40">
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
                tvs1: null,
                tvs2:null,
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
            .get(`https://api.themoviedb.org/3/discover/tv?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
            .then(response => {
                this.tvs1 = response.data && response.data.results ? response.data.results : [] 
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false;
            })
            axios
            .get(`https://api.themoviedb.org/3/discover/tv?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=2`)
            .then(response => {
                this.tvs2 = response.data && response.data.results ? response.data.results : [] 
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
    #topSeries{
        width: 80%;
        margin: auto;
    }
    #Content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .link{
        display: flex;
        width: fit-content;
        text-decoration: none;
        color:rgb(114, 113, 113);
    }
</style>
