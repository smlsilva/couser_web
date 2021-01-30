// Factory retorna objetos
// Exemplo 1
function criarPessoa(){
    return{
        nome : "Samuel",
        idade : 20
    };
}

//console.log(criarPessoa())

// Exemplo 2
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto : 0.1
    };
};

console.log(criarProduto("Notebook", 1000.90))


