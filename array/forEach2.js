Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
        //       valorAtual, indiceAtual, Array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Samuel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
})

