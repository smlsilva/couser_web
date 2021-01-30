const soma = function(x, r){return x + r}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
// Passando uma função dentro de uma função
imprimirResultado(5,5, function(x, y){
    return x - y
})

imprimirResultado(4,5, (x, y) => x * y)


const pessoa = {
    falar(){
        console.log('Opa')
    }
}
pessoa.falar()