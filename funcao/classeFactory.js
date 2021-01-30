class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Samuel')
//p1.falar()


// Função
const pessoa = nome =>{
    return{
        falar: () => console.log(`Meu Nome é ${nome}`)
    }
}

const p2 = pessoa('Samuel')
p2.falar()