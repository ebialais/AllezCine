<template>
    <div id="Comments">
        <h4>{{ comment.titleCom }}</h4>
        <p>{{ comment.userCom }}</p>
        <div id="CommentFooter">
            {{ comment.date }}
            <div id="like">
                <p>{{ comment.like }} <i class="fas fa-thumbs-up"></i> </p>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "Comments",
        props: [
            "comment"
        ],
    }
</script>

<style>
    #Comments {
        background-color: white;
        border-radius: 5px;
        box-shadow: 1px 3px 5px #797979;
        width: 70%;
        margin: auto;
        padding: 20px;
        margin-bottom: 100px;
        font-family: 'Alegreya Sans', sans-serif;
        color: #797979;
    }
    h4 {
        font-size: 1.5em;
        border-bottom: 2px solid #d4d4d4;
        width: 60%;
    }
    #CommentFooter{
        color: #616060;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .fa-thumbs-up:before{
        color: #03038e ! important ;
    }


</style>
