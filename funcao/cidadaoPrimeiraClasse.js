/// Criar de Forma Literal
function fun1(/*parâmetro*/) {
    //corpo da funcao
}

// Funcao anônima
const fun2 = function (){}

// Funcao em array
const array = [function (x, y){ return x + y}, fun1, fun2]
console.log(array[0](2,4))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){return "Beleza"}
console.log(obj.falar())

// Passar funcao como parâmetro
function run(fun){
    // Chama a funcao
    fun()
}
run(function () { console.log("Executando...") } )

// Uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    } 
}
//soma(3, 5)(4)
const result = soma(3, 5)
result(4)

