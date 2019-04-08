<template>
    <div id="info">
        <section v-if="errored">
            <Error />
        </section>
        <section v-else>
            <poster :infoTitle="infos.name" 
                :source="getImage(infos.poster_path)" 
                :year="getYear(infos.first_air_date)" 
                :rate="infos.vote_average"
                :genres="infos.genres"
                :synopsis="infos.overview" />
            <formu :getData="getData" />
            <Comments :getData="getData" />
            <div id="SerieSupp">
                <div id="SerieInfoSupp">
                    <div v-for="(el, index) in infosSupp" :key="index">
                        <div v-if="index < 5">
                            <router-link :to="{ name: 'InfosTv', params: { id: el.id } }" class="link">
                                <card :title="el.name" :year="getYear(el.first_air_date)" :source="getImage(el.poster_path)" /> 
                            </router-link> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { axios } from './../../Plugins/Axios'
    import poster from '../../components/card/poster'
    import card from '../../components/card/card'
    import { getImage } from '../../utils/getImage'
    import { getYear } from '../../utils/getYear'
    import formu from './formu';
    import Comments from './Comments';
    import router from '../../router';
    import Error from '../../components/Error/Error'

    export default {
        name: 'InfosTv',
        components: {
            poster,
            card,
            formu, 
            Comments,
            Error,
        },
        data () {
            return {
                idFilm: 0,
                infos: null,
                infosSupp: null,
                loading: true,
                errored: false,
                film: null,
            }
        },
        created() {
            this.idFilm = this.$route.params.id
        },
        mounted () {
            axios
            .get(`https://api.themoviedb.org/3/tv/${this.idFilm}?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&`)
            .then(response => {
                console.log(response)
                this.infos = response.data ? response.data : [] 
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false;
            }),
            axios
            .get(`https://api.themoviedb.org/3/tv/${this.idFilm}/similar?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&`)
            .then(response => {
                console.log(response)
                this.infosSupp = response.data.results ? response.data.results : [] 
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false;
            })
        },
        methods:{
            getData(){
                const req = new XMLHttpRequest();
                req.open('GET',`http://127.0.0.1/Projet_allezcine/allezcine/php/getData.php?idFilm=${id}`, false);
                req.send(null);
                if (req.status === 200 ){
                    this.lists = JSON.parse(req.response)
                } else {
                }
            },
            getYear, 
            getImage,
        },

    }
</script>

<style scoped>
    #info {
        width: 80%;
        margin: auto;
    }
    .link{
        display: flex;
        width: fit-content;
    }
    #SerieInfoSupp {
        display: flex;
        flex-wrap: wrap;
    }
</style>
