function gerarNumeros(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(function(resolve){
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)    
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeros(1, 60, 4000),
        gerarNumeros(1, 60, 9000),
        gerarNumeros(1, 60, 1000),
        gerarNumeros(1, 60, 500),
        gerarNumeros(1, 60, 1500),
        gerarNumeros(1, 60, 2000),
        gerarNumeros(1, 60, 6000),
    ])
}

console.time('tempo de execução da Promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('tempo de execução da Promise')
    })