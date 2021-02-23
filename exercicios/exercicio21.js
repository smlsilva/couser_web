const menorNumero = function(numeros){
    let numeroMenor = numeros[0]
    for(let i = 0; i < numeros.length; i++){
        numeroMenor > numeros[i] ? numeroMenor = numeros[i] : false
    }
    return numeroMenor
}
console.log(menorNumero([-1, 2,3,4,5,5,6,1, -2]))