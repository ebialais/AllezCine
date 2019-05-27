<template>
    <div id="info">
        <section v-if="errored">
            <Error />
        </section>
        <section v-else>
            <poster :infoTitle="infos.title" 
                :source="getImage(infos.poster_path)" 
                :year="getYear(infos.release_date)" 
                :rate="infos.vote_average"
                :genres="infos.genres"
                :synopsis="infos.overview" />
            <formu />
            <div v-if="comments">
                <Comments v-for="(comment, index) in comments" :key="index" :comment="comment" />
            </div>
            <div id="FilmsSupp">
                <div id="FilmInfoSupp">
                    <div v-for="(el, index) in infosSupp" :key="index">
                        <div v-if="index < 5">
                            <router-link :to="{ name: 'InfosFilm', params: { id: el.id } }" class="link">
                                <card :title="el.title" :year="getYear(el.release_date)" :source="getImage(el.poster_path)" /> 
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
    import mainTitle from '../../components/Title/title'
    import { getImage } from '../../utils/getImage'
    import { getYear } from '../../utils/getYear'
    import formu from './formu.vue';
    import Comments from './Comments.vue';
    import router from '../../router';  
    import Error from '../../components/Error/Error'

    export default {
        name: 'InfosFilm',
        components: {
            mainTitle,
            poster,
            card,
            formu, 
            Comments,
            Error,
        },
        data () {
            return {
                idFilm: null,
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
            .get(`https://api.themoviedb.org/3/movie/${this.idFilm}?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&language=fr`)
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
            .get(`https://api.themoviedb.org/3/movie/${this.idFilm}/similar?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&language=fr`)
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
            const req = new XMLHttpRequest();
            req.open('GET',`http://10.20.0.65:8888/Projet_allezcine/allezcine/php/getData.php?idFilm=${this.idFilm}`, false);
            req.send(null);
            if (req.status === 200 ){
                this.comments = JSON.parse(req.response)
            } else {
            }
        },
        methods:{
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
        text-decoration: none;
        color:rgb(114, 113, 113);
    }
    #FilmInfoSupp {
        width : 90%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }
</style>
