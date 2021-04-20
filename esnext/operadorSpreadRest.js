// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Samuel', salario: 2000.00}
const clone = { ...funcionario } // Operador spread para espalhar
console.log(clone)

// usar spread com array
const grupoA = ['joão','Pedro']
const grupoB = [ ...grupoA ]
console.log(grupoB)