function somarNumeros(...numeros){
    return numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
}
console.log(somarNumeros(1,23,4,5,6,9,11))