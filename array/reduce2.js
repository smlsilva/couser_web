const alunos = [
    { nome: 'João', nota: 7.4, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: "PEDRO", nota: 9.8, bolsista: true},
    { nome: 'Ana',   nota: 8.5, bolsista: false}
]

// Todos são Bolsistas ?
const todosSaoBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosSaoBolsistas))

// Algum aluno é Bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
 