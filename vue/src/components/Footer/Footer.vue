<template>
    <div id="footer">
        <h2>Le Logo</h2>
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
        name: 'Pied',
    }
</script>

<style scoped>
    #footer {
        margin: 0;
        background-color: #262626;
        color: white;
        padding: 30px 0;
        font-size: 4vw;
        font-family: 'Alegreya Sans', sans-serif;
    }
    h2 {
        text-align: left;
        margin-left: 20px;
    }
    #liste {
        width: 80vw; 
        margin: auto;
    }
    ul {
        padding: 0;
        text-align: left;
    }
    li {
        list-style-type: none;
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
    }


</style>
