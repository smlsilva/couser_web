// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Samuel'
const pessoa = {
    nome,
    ola() {
        return `Olá ${nome}`
    }
}
console.log(pessoa.ola())

// Class 
class Animal{
    constructor(nome, idade){
        this.nome = 'Jack',
        this.idade = 5
    }
}

class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())
console.log(new Cachorro().nome)