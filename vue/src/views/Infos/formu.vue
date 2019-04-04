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
export default {
    name:"formu",
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
            req.open('POST',`http://10.20.0.163:8888/Projet_allezcine/allezcine/php/getData.php?idFilm=1&${query}`, false);
            req.send();
            if (req.status === 200 ){
                this.getData()
            } else {
                console.log('error', req.statusText)
            }
        }
    },
    props:[
        "getData",
    ]
}
</script>
<style>
</style>
