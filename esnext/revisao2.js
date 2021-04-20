// Arrow Function
const soma = (a, b) => a + b
console.log(soma(3,4))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(text = 'Node'){
    console.log(text)
}
log()
log('KGB')

// operador REST
function total(...numeros){
    total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,5))

