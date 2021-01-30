const imprimirFunction = function(nota){
    if(nota >= 7){
        console.log("Aprovado " + nota);
    }
    else{
        console.log("Reprovado" + nota);
    }
}

//imprimirFunction(8);
//imprimirFunction(4);

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResult = function(nota){
    if (nota.entre(9, 10)){
        console.log("Quadro de Honra!");
    } else if (nota.entre(7, 8.99)){
        console.log("Aprovado!");
    } else if (nota.entre(4, 6.99)){
        console.log("Recuperacao!");
    } else if (nota.entre(0, 3.99)){
        console.log("Reprovado!");
    }else{
        console.log("Nota Inválida!");
    }
}

imprimirResult(9.5);
imprimirResult(8.5);
imprimirResult(4.6);
imprimirResult(2.5);
imprimirResult(-1);
