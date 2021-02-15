Array.prototype.filte2 = function(callback){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            // Valor Atual[i], indice, array
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 6.99, fragil: false}
]

console.log(produtos.filte2(function(p){
    return p.preco >= 500
}))