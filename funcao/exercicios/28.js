function paresImpares(vetorNumeros){
            
    let qtdadePares = 0;
    let qtdadeImpares = 0;

    for(let x = 0; x < vetorNumeros.length; x++){
        if(vetorNumeros[x] % 2 == 0){
            qtdadePares++
        }else{
            qtdadeImpares++
        }
    }
    console.log(`${qtdadePares} Números Pares e ${qtdadeImpares} Números Ímpares`)
}

let numeros = [1, 4, 5, 3, 30, 22, 34, 21, 14]
paresImpares(numeros)
