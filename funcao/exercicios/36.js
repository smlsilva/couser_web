function func1(vetorNum, numInt){
    let novoVetor = []
    for(let i = 0; i < vetorNum.length; i++){
        novoVetor.push(vetorNum[i] * numInt)
    }
    return `Valores o vetor multiplicado ` + novoVetor
}

function func2(vetorNum, numInt){
    let novoVetor = []
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] > 5){
        novoVetor.push(vetorNum[i] * numInt)
        }
    }
    return `Valores o vetor multiplicado ` + novoVetor
}

let numeros = [1,3,4,5,7,9,0,29,456]
console.log(func1(numeros, 3))
console.log(func2(numeros, 3))