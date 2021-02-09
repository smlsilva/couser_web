// pessoa -> enderecoMemoria(123) -> {objeto}
const pessoa = {nome: 'João'}
pessoa.nome = 'Samuel';
console.log(pessoa.nome)

Object.freeze(pessoa) // CONGELA O OBJETO ENTÃO ELE NÃO PODE SER ALTERADO

// Não mudará nada no atributo NOME de PESSOA.
pessoa.nome = 'GABRIEL'
console.log(pessoa.nome)
