function Carro(velocidadeMaxima = 200, delta = 5){
    
    // Atributo Privado
    let velocidadeAtual = 0

    // Metodo Publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Atributo Publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
