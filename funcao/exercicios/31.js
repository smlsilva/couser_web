let vetor = [-1, -40, 30, -2, -3, 40]

let negativo;
let qtdadeNegativa = 0;

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] < 0){
        negativo = vetor[i];
        console.log(`${negativo} É NEGATIVO`)
        qtdadeNegativa++;
    }
}
console.log(`\nObtém ${qtdadeNegativa} números negativos dentro do vetor.`)
