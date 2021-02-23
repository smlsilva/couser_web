const filtrarNumeros = function(...elementos){
    let arrayDeNumeros = []
    let arrayDeOutrosTipos = []
    for(let i = 0; i < elementos.length; i++){
        if(typeof elementos[i] == "number"){arrayDeNumeros.push(elementos[i])}
        if(typeof elementos[i] != "number"){arrayDeOutrosTipos.push(elementos[i])}
    }
    return [arrayDeNumeros, arrayDeOutrosTipos]
}
console.log(filtrarNumeros("javaScript", 1, 3, "4"))