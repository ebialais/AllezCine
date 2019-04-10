<template>
    <div id="topSeries">
        <section v-if="errored">
            <Error />
        </section>
        <section v-else>
            <mainTitle :mainTitle="'Le top des Series TV'" />
            <div id="Content">
                <div v-for="(tv, index) in tvs" :key="index">
                    <router-link :to="{ name: 'InfosTv', params: { id: tv.id } }" class="link">
                        <card :title="tv.name" :year="getYear(tv.first_air_date)" :source="getImage(tv.poster_path)" /> 
                    </router-link> 
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
                tvs: [],
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
        beforeMount () {
            axios
            .get(`https://api.themoviedb.org/3/discover/tv?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${this.page}`)
            .then(response => {
                console.log(response.data.results)
                for (var i=0; i < response.data.results.length; i++) {
                    this.tvs.push(response.data.results[i])
                }
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false;
            })
        },
        mounted(){
            this.scroll(this.tvs)
        },
        methods : {
            getImage,
            getYear,
            scroll (tvs){
                window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.page++
                    axios
                    .get(`https://api.themoviedb.org/3/discover/tv?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${this.page}`)
                    .then(response => {
                        // console.log(this.tvs)
                        for (var i=0; i < response.data.results.length; i++) {
                            this.tvs.push(response.data.results[i])
                        }
                    })
                    .catch(error => {
                        this.errored = true
                    })
                    .finally(() => {
                        this.loading = false;
                    })
                    }
                }
            }
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
