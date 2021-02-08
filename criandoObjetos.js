// Usando a Notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc){
    this.nome = nome; // This identifica o Atributo como público
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc) //preco e desc não está público, então não pode ser alterado fora da function
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("Samuel", 7900, 3)
console.log(f1.getSalario())


// Object.create
const filho = Object.create(null)
filho.nome = "Samuel";
console.log(filho)

// Uma função famosa que retorna Objeto...
const JSon = JSON.parse(`{"info":"Sou um Json"}`)
console.log(JSon.info)
