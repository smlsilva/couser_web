console.log(typeof Object);  // Function
console.log(typeof new Object); //Estanciando uma funcção | Object

const Cliente = function(){}
console.log(typeof Cliente); //Function
console.log(typeof new Cliente()); // Object

class Client{}
console.log(typeof Client);
console.log(typeof new Client());

Client.nome = "Samuel";
console.log(Client.nome)

class Produto{}
Produto.nome = "Avon";
console.log(Produto.nome)
