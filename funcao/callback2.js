const notas = [5.6, 3.4, 9.9, 2.4, 10]

// Sem usar o Callback
let notasBaixas = []
for (i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}

//console.log(notasBaixas);


// Com callBack
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)


// CallBack c/ arrow Function
const notasBaixas3 = notas.filter( nota => nota < 7)
console.log(notasBaixas3)
