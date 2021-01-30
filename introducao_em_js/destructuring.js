const caracteristica = {
    nome : "Samuel",
    idade : 20,
    endereco : {
        rua : "Paulina Monteiro Cavaleiro"
    }
}

// Operador de destruturação
const { nome, idade } = caracteristica; // Fazendo a extração de Nome e Idade do Objeto {}
console.log(nome, idade)

const { nome: n, idade: i} = caracteristica;
console.log(n, i);

const { sobrenome, feliz = true} = caracteristica;
console.log(sobrenome, feliz)

const { endereco : { rua } } = caracteristica;
console.log(rua);


// ---------------Destruturação com Array ----------...
const [a] = [10] // Operador Destructuring
console.log(a)

const [n1,, n2, n3,, n4 , n5 = 0] = [1, 3, 6, 4 ,0];
console.log(n1, n2, n3, n4, n5);

const [ , [ , nota]] = [[1,4,3],[5,3,8]];
console.log(nota);


// --------------------------------------------------

function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

const obj = { max : 50, min : 40}
console.log(rand(obj))

console.log(rand({min : 990}))

// --------------------------------------------------

function rand([min = 0, max = 100]){
    if (min > max ) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]))
console.log(rand([2, 30]))
