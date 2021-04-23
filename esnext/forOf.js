for(let letra of 'SAMUEL'){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
    console.log(assuntosEcma[i])
}

for(let assunto of assuntosEcma){
    console.log(assunto) 
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false }]
])

for(let assunto of assuntosMap.keys()) {
    console.log(assunto)
}

for(let [chav, val] of assuntosMap.entries()) {
    console.log(chav, val)
}

const s = new Set(['a','b','c'])
for(let letras of s) {
    console.log(letras)
}
