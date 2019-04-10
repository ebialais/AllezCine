const url = 'http://10.20.0.65:8888/Projet_allezcine/allezcine/php/';

export function addComment (idFilm, titleCom, userCom) {
    const req = new XMLHttpRequest()
    req.open('GET', `${url}insertData.php?filmId=${idFilm}&title=${titleCom}&comment=${userCom}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}