function Aula(nome, video){
    this.nome = nome;
    this.video = video;
}

const aula1 = new Aula('Bem Vindo', 123); // Função Contrututora
const aula2 = new Aula(`Até Breve`, 456);

console.log(aula1, aula2)

// Simulando o New
function Novo(f, ...params){
    const obj = {} // Notação Literal de Objeto
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = Novo(Aula, 'Bem vindo', 123);
const aula4 = Novo(Aula, 'Até Breve', 456);

console.log(aula3, aula4);