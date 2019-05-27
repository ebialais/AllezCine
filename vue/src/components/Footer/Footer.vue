<template>
    <div id="footer">
        <div class="logo"><img alt="logo Allez Ciné" src="/assets/logoAllezCine.png"></div>
        <div id="liste">
            <div id="left">
                <h3>FUNDAMENTALS</h3>
                <ul>
                    <li>About AllezCiné</li>
                    <li>Contact us</li>
                    <li>Forum</li>
                </ul>
            </div>
            <div id="center">
                <h3>COMMUNITY</h3>
                <ul>
                    <li>Rules</li>
                    <li>Ranking</li>
                    <li>Forum</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <div id="rigth">
                <h3>LEGAL</h3>
                <ul>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pied',
    }
</script>

<style scoped>
    #footer {
        margin: 0;
        background-color: black;
        height: 400px;
        color: white;
        width: 100vw;
        padding: 30px 0;
        font-size: 4vw;
        font-family: 'Alegreya Sans', sans-serif;
    }
    h3 {
        text-align: left;
        margin-left: 20px;
        margin-top: 20px;
    }
    #liste {
        width: 90%;
        width: 80vw; 
    }
    ul {
        padding: 0;
        text-align: left;
        margin: 20px;
    }
    li {
        list-style-type: none;
        
    }
    img {
        float: left;
        width: 150px;
        height: auto;
        margin: 0 20px 20px 20px;
    }
    @media only screen and (min-width: 400px) {
        #footer {
            font-size: 2vw;
            height: 300px;
        }
        #liste {
            display: flex;
            justify-content: space-between;
            width: 90%;
        }
    }
    @media only screen and (min-width: 800px) {
        #footer {
            font-size: 14px;
            line-height : 25px;
            height: 350px;
            width: 100vw;
        }
        #liste {
            display: flex;
            justify-content: space-between;
            width: 90%;
        }
        img {
        width: 200px;
        }
    }

</style>
