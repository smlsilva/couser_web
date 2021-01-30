let dobro = function (a){
    return 2 * a;
}

// Função arrow é anonima
dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // Return está implícito

//---------------------------------------------------------
let ola = function (){
    return "Olá"
}

ola = () => 'Olá';
console.log(ola())
