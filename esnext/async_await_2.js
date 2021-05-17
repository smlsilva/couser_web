function gerarNumeros(min, max, numerosProibidos){
    if(min > max){[max, min] = [min, max]}
    return new Promise(function(resolve, reject){
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)){
            reject("Número Proibido : " + aleatorio)
        }else{
            resolve(aleatorio)
        }    
    })
}

async function gerarMegaSena(qtdadeNumeros, tentativas = 0){
    try{
        const numeros = []
        for(let _ of Array(qtdadeNumeros).fill()){
            numeros.push(await gerarNumeros(1, 60, numeros))
        }
        return numeros
    }catch(e){
        if(tentativas > 100){
            throw "Erro!"
        }else{
            return gerarMegaSena(qtdadeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(10)
.then(console.log)
.catch(console.log)