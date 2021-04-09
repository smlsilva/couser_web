const moduloA = require('./moduloA') // importando com caminho relativo
const moduloB = require('./moduloB') // pois está na mesma página

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
