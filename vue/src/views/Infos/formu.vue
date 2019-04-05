<template>
    <div class="formu" @submit="handleSubmit">
        <form>
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
            let userCom = e.target.userCom.value;
            // console.log(userCom);
            this.sendData(userCom); 
        },
        sendData(title){ 
            const req = new XMLHttpRequest();
            let query = `userCom=${title}` 
            // console.log(query)
            req.open('POST',`http://127.0.0.1/Projet_allezcine/allezcine/php/getData.php?${query}`, false);
            req.send();
            if (req.status === 200 ){
                // console.log(req.response)
                this.getData()
            } else {
                // console.log('error', req.status, req.statusText)
            }
        }
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
