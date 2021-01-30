function vet(vetorA, vetorB){
    if(vetorA.length == vetorB.length){
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i] 
            vetorA[i] = vetorA[i] - vetorB[i] 
        }
    }else{
        return "Tamanhos diferentes!"
    }
    console.log(`Vetor A ${vetorA}`)
    console.log(`Vetor B ${vetorB}`)
}

let vetA = [1,2,3,4,5]
let vetB = [6,7,8,9,10]
vet(vetA, vetB)
