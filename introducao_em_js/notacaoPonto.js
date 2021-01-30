console.log(Math.ceil(6.4));

const obj = {}
obj.valor = 90;
obj["valor2"] = 93;

console.log(obj);

function Obj(nome){
    // this deixa o atributo publico
    this.nome = nome;
    this.exe = function(){
        console.log("Exec")
    }
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");

console.log(obj2);
console.log(obj3);
obj3.exe();
