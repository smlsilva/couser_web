// Primeiro valor é maior que o segundo.
const maiorOuIgual = (valor1, valor2) => {
    if(valor1 > valor2){
        return true
    }else if(valor1 === valor2){
        return true
    }else{
        return false
    }
}
console.log(maiorOuIgual(1,0)) // true
console.log(maiorOuIgual(1,"1")) // False
console.log(maiorOuIgual(1,2)) // false