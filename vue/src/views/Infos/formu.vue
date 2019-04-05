<template>
    <div class="formu" @submit="handleSubmit">
        <form>
            <p>Title: </p>
            <input name="titleCom" type="text">
            <p>Comments : </p>
            <input name="userCom" type="text">
            <br>
            <input type="submit" name="submit" value="Submit">
        </form>
    </div>
</template>

<script>
    
import { getComment } from '../../api/functionComments.js'

export default {    
    name:"formu",

    data(){
        return{
            comments: null,
        }
    },

    mounted(){
        this.comments = getComment(this.$router.params.id);
    },

    methods: {
        handleSubmit(e){
            e.preventDefault() 
            let titleCom = e.target.titleCom.value;
            let userCom = e.target.userCom.value;
            this.sendData(titleCom, userCom); 
        },
        sendData(titre, description){
            const req = new XMLHttpRequest();
            let query = `titleCom=${titre}&userCom=${description}`;
            console.log(query)
            req.open('POST',`http://10.20.0.91:8888/Projet_allezcine/allezcine/php/getData.php?idFilm=1&${query}`, false);
            req.send();
            if (req.status === 200 ){
                this.getData()
            } else {
                console.log('error', req.statusText)
            }
        },
    },
    props:[
        "getData",
    ]
}
</script>
<style>
    .formu {
        clear: left;
        padding-top: 50px; /* pour que ce ne soit pas trop coller à l'image */
    }
</style>
