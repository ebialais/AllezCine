<template>
    <div id="card">
        <div>{{ title }}</div>
        <div>{{ year }}</div>
        <img :src="source" />
    </div>
</template>

<script>
export default {
    name: "card",
    props:["title", "year", "source"]
}
</script>

<style scoped>
    #card {
        display: flex;
        flex-flow: column nowrap;

    }
    img {
        width: 250px;
        height: auto;
    }

</style>
