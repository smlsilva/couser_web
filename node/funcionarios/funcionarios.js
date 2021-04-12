const url  = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

console.log(axios)

const pais = f => f.pais === 'Brazil'
const genero = f => f.genero === 'M'
const salario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios
        .filter(genero)
        .filter(salario)
        .filter(pais)
        .reduce(salario))
})
