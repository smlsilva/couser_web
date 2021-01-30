function crescimento(altura1, txsCrescAnuais1, altura2, txsCrescAnuais2){
    if((altura1 > altura2) && (txsCrescAnuais1 < txsCrescAnuais2)){
        
        for(let x = 1; altura2 < altura1; x++){
            resutado = altura2 + txsCrescAnuais2
            restulado = altura1 + txsCrescAnuais1
            console.log(`Em ${x} ano Criança2 terá altura de ${resutado} e Criança1 terá ${restulado}`)
        }
        return `Em ${x} ano(s) Criança1 terá altura de ${restulado}, já Criança2 terá altura ${resutado}`
    }
}
console.log(crescimento(1.40, 1, 1.36, 4))