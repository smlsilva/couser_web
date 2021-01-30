function notas(vetNotas){
    for(let i = 0; i < vetNotas.length; i++){
        if((vetNotas[i] >= 0) && (vetNotas[i] <= 4.9)){
            console.log(`Conceito D : ${vetNotas[i]}`)
        }if((vetNotas[i] >= 5.0) && (vetNotas[i] <= 6.9)){
            console.log(`Conceito C : ${vetNotas[i]}`)
        }if((vetNotas[i] >= 7.0) && (vetNotas[i] <= 8.9)){
            console.log(`Conceito B : ${vetNotas[i]}`)
        }if((vetNotas[i] >= 9.0) && (vetNotas[i] <= 10.0)){
            console.log(`Conceito A : ${vetNotas[i]}`)
        }
    }
}

let notass = [3.4,5.4,2,7,9]
notas(notass)
