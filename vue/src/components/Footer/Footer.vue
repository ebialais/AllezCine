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
        name: 'footer',
    }
</script>

<style scoped>
    #footer {
        background-color: black;
        height: 350px;
        color: white;
        width: 100vw;
        padding: 50px;
    }
    #liste {
        display: flex;
        justify-content: space-between;
        width: 90%;
    }
    ul {
        padding: 0;
    }
    li {
        list-style-type: none;
    }


</style>
