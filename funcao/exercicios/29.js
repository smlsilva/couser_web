function observaNumero(vetor){
    let qtdade = 0;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdade++;
        }
    }
    return `${qtdade} Números no intervalo`
}
let vetor = [2, 3, 9, 13, 15, 16, 19]
console.log(observaNumero(vetor))
