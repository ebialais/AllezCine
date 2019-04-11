
window.onload = function () {
    var el = document.getElementById('wordInput');
    if(el){
        el.addEventListener('click', keyPress, false);
        document.querySelector('#wordInput').addEventListener('keypress', keyPress)

        function keyPress() {
            setTimeout(function() {
                let input = document.querySelector('#wordInput').value;
                const lienTmdb = "https://api.themoviedb.org/3/search/multi?sort_by=popularity.desc&query=" + input + "&api_key=7ca673fff2a5fb82abd38a9a0d559c4e&";
                console.log(lienTmdb);
                const req = new XMLHttpRequest();
                req.open("GET", lienTmdb, false);
                req.send();
                if (req.status == 200) {
                    response = JSON.parse(req.response)
                    console.log(response) 
                    document.querySelector('#wordInput').addEventListener('keypress', keyPress)
                }
            }, 1000)
        };

        document.querySelector("form").addEventListener("submit", loadXMLDoc);



    }
}