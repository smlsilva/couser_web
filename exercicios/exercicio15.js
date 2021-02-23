function receberSomenteOsParesDeIndicesPares(...array){

    // IMPERATIVA
    /*let arrayDePares = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            arrayDePares.push(array[i])
        }
    } 
    return arrayDePares*/

    // DECLARATIVA
    return array.filter((numero) => {
        const numerosPares = numero % 2 === 0
        return numerosPares 
    })
}
console.log(receberSomenteOsParesDeIndicesPares(1,2,3,4,5,6,7,8,9,10))