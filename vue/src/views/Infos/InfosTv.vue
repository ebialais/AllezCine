<template>
    <div id="info">
        <div id="poster">
            <mainTitle :mainTitle="infos.name" />
            <img :src="getImage(infos.backdrop_path)" />
            <p>{{ infos.overview }}</p>
            <div v-for="(genre, index) in infos.genres" :key="index">
                {{ genre.name }}
            </div>
        </div>
        <formu :getData="getData" />
        <Comments :getData="getData" />
    </div>
</template>

<script>
    import { axios } from './../../Plugins/Axios'
    import card from '../../components/card/card.vue'
    import mainTitle from '../../components/Title/title.vue'
    import { getImage } from '../../utils/getImage'
    import { getYear } from '../../utils/getYear'
    import formu from './formu.vue';
    import Comments from './Comments.vue';
    import router from '../../router';

    export default {
        name: 'InfosTv',
        components: {
            mainTitle,
            card,
            formu, 
            Comments,
        },
        data () {
            return {
                id: 0,
                infos: null,
                loading: true,
                errored: false,
                film: null,
            }
        },
        created() {
            this.id = this.$route.params.id
        },
        mounted () {
            axios
            .get(`https://api.themoviedb.org/3/tv/${this.id}?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&`)
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
                req.open('GET','http://127.0.0.1/Projet_allezcine/allezcine/php/getData.php', false);
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
