// Par nome/valor
// Senteça ou Const global
const nome = "Samuel" // Contexto léxico 1

function test() { //Bloco de Função
    const nome = "Matheus" // Contexto Léxico
    return nome
}

// Bloco de Objeto 
const nomes = {};
nomes.um = "Samuel";
nomes.dois = "Matheus";
nomes.tres = "Marcela";
nomes.endereco = {
    rua : "Paulina Monteiro Cavaleiro",
    numero : 97
};

console.log(nome);
console.log(test());
console.log(nomes);
