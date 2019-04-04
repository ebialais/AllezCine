<template>
    <div id="Accueil">
        <filmAccueil />
        <serieAccueil />
    </div>
</template>

<script>
    import filmAccueil from './filmAccueil'
    import serieAccueil from './serieAccueil.vue'
    

    export default {
        name: 'Accueil',
        components: {
            filmAccueil,
            serieAccueil,
        },
    }
</script>

<style scoped>
    #Accueil {
        width: 100vw;
        margin:0;
        overflow-x:hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
    }
</style>