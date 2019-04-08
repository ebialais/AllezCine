<template>
    <div id="Comments">
        <p>les commentaires</p>
        {{ comment.titleCom }}
        {{ comment.userCom }}
        {{ comment.date }}
        {{ comment.like }}
    </div>
</template>

<script>
    export default {
        name: "Comments",
        props: ["getData", "comment"],
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
