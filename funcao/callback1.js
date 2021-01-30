const fabricantes = ['Mercedes', 'audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

// Chama quando o evento acontece
fabricantes.forEach(imprimir)
