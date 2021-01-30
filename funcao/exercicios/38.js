function iniFim(inicio = 0, fim = 100){
    let resutado = [];

    if(inicio > fim){
        fim = inicio;
        inicio = inicio - fim
    }    
        for(let i = inicio; i <= fim; i++){
            if(i % 2 == 1){
                resutado.push(i)
            }
        }
    return resutado
}
console.log(iniFim(5, 10))
