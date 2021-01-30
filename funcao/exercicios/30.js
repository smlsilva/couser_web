
let vetor = [3,6,3,10,45,34,80,23]

let maior;
let menor;

for(let i = 0; i < vetor.length; i++){
    if(maior === undefined && menor === undefined){
        maior = vetor[i]
        menor = vetor[i]
    }else {
        if(vetor[i] > maior){
            maior = vetor[i];
        }if(vetor[i] < menor){
            menor = vetor[i]
        }
    }
}
console.log([maior, menor])
