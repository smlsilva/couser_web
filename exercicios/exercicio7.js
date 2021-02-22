function quatroNumeros(numero, minimo, maximo, inclusivo = false){
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(quatroNumeros(50, 10, 100))
console.log(quatroNumeros(160, 16, 100))
console.log(quatroNumeros(3, 3, 150))
console.log(quatroNumeros(3, 3, 150, true))