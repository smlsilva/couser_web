const sequencia = {
    _valor: 1, // Convenção de Atributo Privado
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }        
    },
    get valor(){ return this._valor++ }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 2000
console.log(sequencia.valor, sequencia.valor)
