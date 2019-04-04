<template>
    <div id="title">
        <h3>{{ mainTitle }}</h3>
    </div>
</template>

<script>
export default {
    name: "mainTitle",
    props: ["mainTitle"],
}
</script>

<style>
    #title {
        font-family: 'Alegreya Sans', sans-serif;
        color: black;
        border-left: 3px solid red;
        padding: 0.1em 1.5em;
        margin-top: 50px;
        margin-left: 3px;
        font-size: 1.2em;
    }

</style>
