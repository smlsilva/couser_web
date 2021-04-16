const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {} // NOTAÇÃO LITERAL DE OBJETOS

function salvarProduto(produto){
    if(!produto.id){ produto.id = sequence.id }
    produtos[produto.id] = produto
    return produto
}

function getProdutoId(id){
    return produtos[id] || "Valor ERROR!"
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProdutoId, getProdutos, excluirProduto}