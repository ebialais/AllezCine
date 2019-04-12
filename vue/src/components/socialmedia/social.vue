<template>
    <div class="social">  
        <a href="https://www.facebook.com" target="_blank" class="face"></a>     
        <a href="https://twitter.com/" target="_blank" class="twit"></a>     
    </div>    
</template>

<script>
export default {
    name : 'social'
}
</script>

<style scoped>
    .social {
        position: sticky;
        top: 0;
    }

    .face {
        bottom: 80px;
        right: 25px;
        position: fixed;
        height: 40px;
        width: 40px;
        background: #4d71a8;
        border-radius: 22px;
        background-image: url(/assets/face.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 80%;
        transition: 0.5s;
    }

    .twit {
        bottom: 35px;
        right: 25px;
        position: fixed;
        height: 40px;
        width: 40px;
        background: #1eb7eb;;
        border-radius: 22px;
        background-image: url(/assets/twitter.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 80%;
        transition: 0.5s;
    }
    @media only screen and (min-width: 400px) {
        .face {
            top:500px;
            left: -135px;
            position: fixed;
            height: 40px;
            width: 180px;
            background-position: right;
            background-size: 20%;
        }
        .face:hover {
            left: -100px;
            position: fixed;
        }
        .twit {
            top:543px;
            left: -135px;
            position: fixed;
            height: 40px;
            width: 180px;
            background-position: right;
            background-size: 20%;
        }
        .twit:hover {
            top:520px;
            left: -100px;
        }
    }
    @media only screen and (min-width: 700px) {
        .face {
            top: 600px;
            left: -135px;
            position: fixed;
            height: 40px;
            width: 180px;
            background-position: right;
            background-size: 20%;
        }
        .twit {
            top: 650px;
            left: -135px;
            position: fixed;
            height: 40px;
            width: 180px;
            background-position: right;
            background-size: 20%;
        }
    }

</style>
