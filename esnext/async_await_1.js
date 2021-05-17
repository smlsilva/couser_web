function esperar(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(),tempo)
    })
}

function retornandoValor(){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(10), 2000)
    })
}

async function executar(){

    const valor = await retornandoValor()

    await esperar()
    console.log(`Async/Await ${valor}...`)
    
    await esperar()
    console.log(`Async/Await ${valor + 1}...`)

    await esperar()
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

executar().then(console.log)