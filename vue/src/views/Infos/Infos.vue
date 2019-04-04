<template>
    <div id="info">
        <h2>Les infos</h2>
        {{ id }}
        <formu :getData="getData" />
        <Comments :getData="getData" />
    </div>
</template>

<script>
    import formu from './formu.vue';
    import Comments from './Comments.vue';
    import router from '../../router';

    export default {
        name: 'infos',
        components: {
            formu, 
            Comments,
        },
        data () {
            return {
                id: 0,
            }
        },
        created() {
            this.id = this.$route.params.id
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
        },

    }
</script>

<style scoped>

</style>
