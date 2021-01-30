/*
console.log(typeof Object);

class Produto {}
console.log(typeof Produto);
*/
// Exempĺo 01
function imprimirSoma(valor1, valor2){
    console.log(valor1 + valor2);
}

imprimirSoma(3, 4);
imprimirSoma(2);

// Exemplo 02
function soma(a, b = 0){
    return a + b;
}

console.log(soma(3));

// Exemplo 03
// Função em Váriavel
const imprimir = function(x, y){
    return x + y;
}

console.log(imprimir(3, 4));

// Exemplo 04
// Função elo Function
const somaa = (x, y) => {
    return x + y;
}

console.log(somaa(1, 2));

// Exemplo 05
// Exemplo elo Function | mais implícito
const subtracao = (a,b) => a - b;

console.log(subtracao(3,6));
