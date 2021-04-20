// let e const 
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'celular'
console.log(`${produto} lskdlro`)

// Destructuring
const [l, e, ...tras] = "Coder"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome)