function esperar(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        },tempo)
    })
}

esperar(3000)
     .then(() => esperar())
     .then(() => esperar())