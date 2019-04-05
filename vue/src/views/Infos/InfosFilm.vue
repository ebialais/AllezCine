<template>
    <div id="info">
        <poster :infoTitle="infos.title" 
                :source="getImage(infos.poster_path)" 
                :year="getYear(infos.release_date)" 
                :rate="infos.vote_average"
                :genres="infos.genres"
                :synopsis="infos.overview" />
        <formu :getData="getData" />
        <Comments :getData="getData" />
    </div>
</template>

<script>
    import { axios } from './../../Plugins/Axios'
    import poster from '../../components/card/poster'
    import mainTitle from '../../components/Title/title'
    import { getImage } from '../../utils/getImage'
    import { getYear } from '../../utils/getYear'
    import formu from './formu.vue';
    import Comments from './Comments.vue';
    import router from '../../router';  

    export default {
        name: 'InfosFilm',
        components: {
            mainTitle,
            poster,
            formu, 
            Comments,
        },
        data () {
            return {
                idFilm: 0,
                infos: null,
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
            .get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&`)
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
            })
        },
        methods:{
            getData(){
                const req = new XMLHttpRequest();
                req.open('GET',`http://10.20.0.91/Projet_allezcine/allezcine/php/getData.php?idFilm=${id}`, false);
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
</style>
