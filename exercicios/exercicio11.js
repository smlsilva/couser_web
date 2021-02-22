function receberPrimeiroEUltimoElemento(primeiroElemento, ...elementos){
    return [`${primeiroElemento}, ${elementos.pop()}`] 
            // [ elementos.shift(), elementos.pop() ]
}
console.log(receberPrimeiroEUltimoElemento(4,5, 6, 7))