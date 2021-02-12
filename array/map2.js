const carro = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retorna um Array com apenas os preços
const paraObjeto = json => JSON.parse(json)
const preco      = produto => produto.preco

const resultado = carro.map(paraObjeto).map(preco)
console.log(resultado)