function gerarNumeros(min, max){
    if(min > max){
        [max, min] = [min, max]
    }
    
    return new Promise(function(resolve){
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)    
        }, 2000)
    })
}
gerarNumeros(90, 1)
     .then(valor => valor * 10)
     .then(mesage => `O valor total ${mesage}`)
     .then(console.log)
     .then(() => gerarNumeros(20, 50))
     .then(console.log)