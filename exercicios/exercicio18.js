function despesasTotais(produtos){
    const preco = p => p.preco
    const soma  = (acumulador, valor) => acumulador + valor

    return produtos.map(preco).reduce(soma)

    /*
    return produtos
    .map(produtos => produtos.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)*/
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))