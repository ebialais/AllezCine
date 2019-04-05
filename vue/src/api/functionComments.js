export function getComment(idFilm){
    const req = new XMLHttpRequest();
    req.open('GET',`http://10.20.0.91:8888/Projet_allezcine/allezcine/php/getData.php?idFilm=${idFilm}`, false);
    req.send();
    if (req.status === 200 ){
        return JSON.parse(req.response);
    } else {
        console.log('error', req.statusText)
    }
}
