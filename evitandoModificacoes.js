// Object.preventExtensions --> Não deixa adicionar mais atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'SPRAYTE', preco: 1.99, tag: 'promoção'
})
console.log(Object.isExtensible(produto))

produto.nome = 'Borracha' // Modifica
produto.descricao = 'Borracha escolar branca' // Não incluí
delete produto.tag; // Pode Deletar
console.log(produto)

// Object.seal
const pessoa = {nome: 'Julia', idade: 20}
Object.seal(pessoa)

console.log(Object.isSealed(pessoa))
pessoa.endereco = 'msms' // Não Adiciona
delete pessoa.nome // Não deleta
pessoa.idade = 23 // Pode alterar
console.log(pessoa)

// Object.freeze = seal + constantes
const valores = {}
valores.valor1 = 390
valores.valor2 = 405
console.log(valores)

Object.freeze(valores)

valores.valor1 = 32
console.log(valores)
