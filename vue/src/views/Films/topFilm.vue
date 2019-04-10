<template>
    <div id="topFilm">
        <section v-if="errored">
            <Error />
        </section>
        <section v-else>
            <mainTitle :mainTitle="'Le top des Films'" />
            <div id="Content">
                <div v-for="(film, index) in films" :key="index">
                    <router-link :to="{ name: 'InfosFilm', params: { id: film.id } }" class="link">
                        <card :title="film.title" :year="getYear(film.release_date)" :source="getImage(film.poster_path)" /> 
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
                films: [],
                loading: true,
                errored: false,
                page: 1,
            }
        },
        components: {
            mainTitle,
            card,
            Error,
        },
        beforeMount () {
            axios
            .get(`https://api.themoviedb.org/3/discover/movie?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${this.page}`)
            .then(response => {
                console.log(response.data.results)
                for (var i=0; i < response.data.results.length; i++) {
                    this.films.push(response.data.results[i])
                }
            })
            .catch(error => {
                this.errored = true
            })
            .finally(() => {
                this.loading = false;
            }) 
        },
        mounted(){
            this.scroll(this.films)
        },
        methods : {
            getImage,
            getYear,
            scroll(films){
                window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    this.page++
                    axios
                    .get(`https://api.themoviedb.org/3/discover/movie?&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${this.page}`)
                    .then(response => {
                        console.log(response.data.results)
                        for (var i=0; i < response.data.results.length; i++) {
                            this.films.push(response.data.results[i])
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
    #topFilm{
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
