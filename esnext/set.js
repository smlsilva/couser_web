// não aceita repetição/ não indexada

const times = new Set()

times.add('Corinthians').add('São Paulo').add('Internacional')
times.add('Internacional')

console.log(times)
console.log(times.size)
console.log(times.forEach((val1) => {
        if(val1 != 'undefined'){console.log(val1)}
}))
console.log(times.has('Corinthians'))
times.delete('Corinthians')
console.log(times)

const nomes = ['Samuel', 'Matheus', 'Marcela']
const nomesSet = new Set(nomes)
console.log(nomesSet)