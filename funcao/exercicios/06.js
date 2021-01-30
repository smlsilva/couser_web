const fun1 = function(capitalI, txaJuros, tempoAplica){
    let juros = capitalI * txaJuros * tempoAplica;
    let valorComJuros = capitalI + juros;
    return valorComJuros;
}

const fun2 = function(capitalI, txaJuros, tempoAplica){
    let montante = capitalI * (1 + txaJuros)**tempoAplica
    return montante.toFixed(2)
}

console.log(fun1(1000, 0.2, 3));
console.log(fun2(1000, 0.2, 3));