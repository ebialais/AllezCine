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

.face {
    top:470px;
    left: -135px;
    position: fixed;
    height: 40px;
    width: 180px;
    background: #4d71a8;
    border-radius: 22px;
    background-image: url("assets/face.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 20%;
    transition: 1s;
}

.face:hover {
    left: -100px;
    position: fixed;
}

.twit {
    top:520px;
    left: -135px;
    position: fixed;
    height: 40px;
    width: 180px;
    background: #1eb7eb;;
    border-radius: 22px;
    background-image: url("assets/twitter.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 20%;
    transition: 1s;
}

.twit:hover {
    top:520px;
    left: -100px;
}

</style>
