const checarAnoBissexto = function(ano){
    // Date contém na API do JavaScript
    return new Date(ano, 1, 29).getDate() === 29
}
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(2020))