function calculadora(valorA, operacao, valorB){
    switch(operacao){
        case "+":
            return valorA + valorB
        case "-":
            return valorA - valorB
        case "*":
            return valorA * valorB
        case "/":
            return valorA / valorB
        default:
            return "OPERADOR INVÁLIDO!"                 
    }
}

console.log(calculadora(3,"*",3))