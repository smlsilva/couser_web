function objetoParaArray(objeto){

    const chave = Object.keys(objeto)
    const resultado = chave.map(chave => [chave, objeto[chave]])
  
    return resultado
}
console.log(objetoParaArray({
    nome : "Samuel",
    idade : 20,
}))