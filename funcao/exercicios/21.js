const imprimir = function planoSaude(idade){
    if(idade < 10){
        return `Criança com idade de ${idade} pagam o valor de R$`, 100 + 80 + ` Reais`
    }
    else if((idade >= 10) && (idade < 30)){
        return `Conveniado com idade ${idade} pagam o valor de R$`, 100 + 50 + ` Reais`
    }
    else if((idade >= 30) && (idade <= 60)){
        return `Conveniado com idade de ${idade}, pagam o valor de R$`, 100 + 95 + `Reais`
    }
    else if(idade > 60){
        return `Conveniado com idade de ${idade}, pagam o valor de R$`, 100 + 130 + ` Reais`
    }
}
console.log(imprimir(9))