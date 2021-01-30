/*const pessoa = {
    saudacao : "Bom Dia!",
    falar() {
        console.log(this.saudacao);
    } 
}

const pessoaFalar = pessoa.falar.bind(pessoa)
pessoaFalar()
*/

function Pessoa(){
    this.idade = 0

    const self = this
    // Gera um intervalo para fazer a execução
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // A cada 1 segundo a função será disparada
}

new Pessoa
