const calcularAreaDoTriangulo = function(base, altura){
    let area = base * altura / 2
    return area.toFixed(2)
}
console.log(calcularAreaDoTriangulo(10,15))