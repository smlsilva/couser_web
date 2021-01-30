function Pessoa(){
    this.idade = 0;

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000) // Irá executar em 1 segundo
}

new Pessoa
