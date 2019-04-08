<template>
    
    <div class="formu" @submit="handleSubmit">
        <div v-if="idFilm">
            <form>
                <p>Title: </p>
                <input name="titleCom" type="text">
                <p>Comments : </p>
                <input name="userCom" type="text">
                <br>
                <input type="submit" name="submit" value="Submit">
            </form>
        </div>
        <div v-else>Loading...</div>
    </div>
    
</template>

<script>
// import { getComment } from '../../api/functionComments.js'
    import { axios } from './../../Plugins/Axios'

export default {    
    name:"formu",

    data(){
        return{
            comments: null,
            idFilm: null,
        }
    },

    created() {
        this.idFilm = this.$route.params.id
    },

    // mounted(){
    //     this.comments = getComment(this.$router.params.id);
    // },

    methods: {
        handleSubmit(e){
            e.preventDefault() 
            let titleCom = e.target.titleCom.value;
            let userCom = e.target.userCom.value;
            this.sendData(titleCom, userCom, this.idFilm); 
        },
        sendData(titre, description, idFilm){
            const req = new XMLHttpRequest();
            let query = `titleCom=${titre}&userCom=${description}&idFilm=${idFilm}`;
            console.log(query)
            req.open('GET',`http://10.20.0.91:8888/Projet_allezcine/allezcine/php/insertData.php?${query}`, false);
            req.send(null);
            if (req.status === 200 ){
                this.insertData()
            } else {
                console.log('error', req.statusText)
            }
        }
        // insertData(){

        // }
    },
    props:{
        getData : Function,
        insertData : Function
    }
}
</script>
<style>
    .formu {
        clear: left;
        padding-top: 50px; /* pour que ce ne soit pas trop coller à l'image */
    }
</style>
