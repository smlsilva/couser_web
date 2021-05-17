function funcionaOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(7 < chanceErro){
            reject('Ocorreu um determinado ERRO!!')
        }else{
            resolve(valor)
        }
    })
}

funcionaOuNao('Funcionando', 0.5)
      .then(v => console.log(v))
      .then(v => consol.log(v),
            erro => console.log(erro)
      )
      .catch(erro => console.log(erro))