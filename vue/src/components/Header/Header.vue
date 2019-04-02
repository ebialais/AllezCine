<template>
    <div id="header">
        <h2>Le header</h2>
        <router-link to="/">Home</router-link> |
        <router-link to="/topFilms">top Films</router-link>
        <router-link to="/topSeries">top Series</router-link>
        <router-link to="/Infos">Infos</router-link>
    </div>
</template>

<script>
export default {
    name: 'header',
}
</script>

<style scoped>

</style>
