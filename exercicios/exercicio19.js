function calcularMedia(numeros){
    let somaTotal = 0;

    for(let i = 0; i < numeros.length; i++){
        somaTotal += numeros[i]
    }
    
    let media = somaTotal / numeros.length
    return media.toFixed(2).replace('.',',')
}
console.log(calcularMedia([0,10]))