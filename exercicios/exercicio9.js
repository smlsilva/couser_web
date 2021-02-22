function repetir(elemento, contador){
    let novoArray = []
    for(let x = 0; x < contador; x++){
        novoArray.push(elemento)
    }
    return novoArray
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))