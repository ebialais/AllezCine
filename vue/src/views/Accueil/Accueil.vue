<template>
    <div id="Accueil">
        <h2>Accueil</h2>
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

</style>