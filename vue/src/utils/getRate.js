export function getRate(rate){
    if (rate > 0 && rate < 2) {
        document.getElementById('Star1').style.color = #ffb935;
    } else if (rate > 2 && rate < 4) {
        document.getElementById('Star1').style.color = #ffb935;
        document.getElementById('Star2').style.color = #ffb935;
    } else if (rate > 4 && rate < 6) {
        document.getElementById('Star1').style.color = #ffb935;
        document.getElementById('Star2').style.color = #ffb935;
        document.getElementById('Star3').style.color = #ffb935;
    } else if (rate > 6 && rate < 8) {
        document.getElementById('Star1').style.color = #ffb935;
        document.getElementById('Star2').style.color = #ffb935;
        document.getElementById('Star3').style.color = #ffb935;
        document.getElementById('Star4').style.color = #ffb935;
    } else if (rate > 8 ) {
        document.getElementById('Star1').style.color = #ffb935;
        document.getElementById('Star2').style.color = #ffb935;
        document.getElementById('Star3').style.color = #ffb935;
        document.getElementById('Star4').style.color = #ffb935;
        document.getElementById('Star5').style.color = #ffb935;
}