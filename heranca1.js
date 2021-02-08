const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// O Objeto tem apenas o atributo __proto__

console.log(ferrari.__proto__) // (Atributo) Protótipo de ferrari
console.log(ferrari.__proto__ === Object.prototype) // Object é uma função
console.log(volvo.__proto__ === Object.prototype) // Toda Função tem protótipo
console.log(Object.prototype.__proto__)

function meuObjeto(){}
console.log(typeof meuObjeto, typeof Object)
console.log(Object.prototype, meuObjeto.prototype)
