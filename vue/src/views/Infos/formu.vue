<template>
    <div id="formu" @submit="handleSubmit">
        <h3>Commentaires :</h3>
        <form>
            <input name="titleCom" type="text" id="titleCom" placeholder="Titre..." />
            <textarea name="userCom" type="text" id="userCom" placeholder="Ajouter un commentaire..." >
            </textarea>
            <input type="submit" name="submit" value="Ajouter le commentaire" id="formuSubmit"  />
        </form>
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
            },
            props:[
                "insertData",
            ],
        }
    }

</script>
<style scoped>
    #formu {
        clear: left;
        padding-top: 50px; /* pour que ce ne soit pas trop coller à l'image */
        font-family: 'Alegreya Sans', sans-serif;
        display: flex;
        flex-direction: column;
    }
    h3 {
        color: #797979;
        font-size: 2.5em;
        font-weight:400;
        padding: 30px
    }
    form {
        background-color: white;
        border-radius: 5px;
        box-shadow: 1px 3px 5px #797979;
        width: 70%;
        margin: auto;
        padding: 20px;
        margin-bottom: 100px;
    }
    #titleCom {
        width: 95%;
        height: 30px;
        margin: 20px 0;
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 1em;
        border-radius: 5px;
        padding: 2%;
        border: 2px solid #d4d4d4;
    }
    #userCom {
        width: 95%;
        height: 80px;
        margin: 20px 0;
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 1em;
        padding: 2%;
        border-radius: 5px;
        border: 2px solid #d4d4d4;
    }
    #formuSubmit {
        float: right;
        height: 45px; 
        width: 200px;
        padding: 10px;
        font-size: 1em;
        color: white;
        background-color: #ee120e;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 3px 10px #797979;
    }
</style>