function simboloMais(numero){
    let simbolo = '+';
    for(let i = 1; i < numero; i++){
        simbolo += '+'
    }
    if(numero <= 0){
        return 'Número Negativo ou Zero'
    }
    return simbolo
}
console.log(simboloMais(0))
console.log(simboloMais(1))
console.log(simboloMais(2))