const removerPropriedade = (objeto, nomePropriedade) => {
    delete objeto[nomePropriedade]
    return objeto
}

const pessoa = {
    id: 20,
    nome : "Samuel",
    descricao : "Não têm!"
}

console.log(removerPropriedade(pessoa, "descricao"))
console.log(Object.is(removerPropriedade(pessoa, "descricao"), pessoa))
