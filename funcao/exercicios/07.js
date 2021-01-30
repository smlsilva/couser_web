// Fórmula Bhaskara
function Bhaskara(ax2, bx, c){
    let delta = bx**2 - 4 * ax2 * c;
    let resutl = [-119, delta]

    if (delta < 0){
        return "Delta é Negativo " + delta;
    }

    return "Delta é " + resutl[1];
}

console.log(Bhaskara(-2,2,12))
