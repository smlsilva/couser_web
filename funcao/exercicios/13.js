function dias(dia){
    switch (dia){
        case 1:
            return "Segunda - Feira"
        case 2:
            return "Terça - Feira"
        case 3:
            return "Quarta - Feira"
        case 4:
            return "Quinta - Feira"
        case 5:
            return "Sexta - Feira"
        case 6:
            return "Sabádo"
        case 7:
            return "Domingo"   
        default:
            return "Dia Inválido"                      
    }
}

console.log(dias(8))

