const primeiroElemento = array => array[0]
const primeiraLetra = palavra => palavra[0]
const minuscula = letra => letra.toLowerCase()

new Promise(resolve => {
    resolve(['Samuel','Marcela','Ivanilton'])
})
 .then(primeiroElemento)
 .then(primeiraLetra)
 .then(minuscula)
 .then(console.log)