const alunos = [
    { nome: 'João', nota: 7.4, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: "PEDRO", nota: 9.8, bolsista: true},
    { nome: 'Ana',   nota: 8.5, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    // console.log(acumulador.toFixed(2), atual)
    return acumulador + atual
}, 10) // Valor inicial
