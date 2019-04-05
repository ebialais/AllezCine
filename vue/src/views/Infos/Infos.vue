<template>
    <div id="info">
        <h2>Les infos</h2>
        <formu :getData="getData" />
        <Comments :getData="getData" />
    </div>
</template>

<script>
    import formu from './formu.vue';
    import Comments from './Comments.vue';

    export default {
        name: 'infos',
        components: {
            formu, 
            Comments,
        },
        methods:{
            getData(){
                const req = new XMLHttpRequest();
                req.open('GET','http://10.20.0.163:8888/Projet_allezcine/allezcine/php/getData.php?idFilm', false);
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
