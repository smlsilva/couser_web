const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // Array literal

pilotos.pop() // Exclui o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona o elemento na última posiçãos
console.log(pilotos)

pilotos.shift() // REMOVE O PRIMEIRO ELEMENTO DA LISTA
console.log(pilotos)

pilotos.unshift('Hamilton') // ADICIONA O ELEMENTO NA PRIMEIRA POSIÇÃO
console.log(pilotos)

pilotos.splice(2, 0,'Botas','Massa') // A parti do 2º elemento irá ser íncluido os Dois nomes
console.log(pilotos)

pilotos.splice(3, 1) // No índice 3 irá remover o elemento
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Um novo Array a partir do Indíce 2
console.log(algunsPilotos)
