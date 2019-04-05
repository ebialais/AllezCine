<template>
    <div id="Comments">
        <p>les commentaires</p>
    </div>
</template>

<script>
    export default {
        name: "Comments",
        props: ["getData"],
        beforeMount: function() {
            this.getData()
        },
    }
</script>

<style>
    #comments {
        clear: left;
    }
</style>
