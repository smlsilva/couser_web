function situacao(n1, n2, n3, ra){
    if((n1 > n2) && (n1 > n3)){
        resultado = (n1 * 4) + (n2 * 3) + (n3 * 3);
        nota = resultado / 10;
        if(nota >= 5){
            console.log(`APROVADO!`)
            console.log(`${ra} Suas notas são ${n1} ${n2} ${n3}. 
            \nMédia é ${nota}`)
        }
        else{
            console.log(`REPROVADO!`)
            console.log(`${ra} Suas notas são ${n1} ${n2} ${n3}. 
            \nMédia é ${nota}`)
        }
    }
    else if((n2 > n1) && (n2 > n3)){
        resultado = (n2 * 4) + (n1 * 3) + (n3 * 3);
        nota = resultado / 10;
        if(nota >= 5){
            console.log(`APROVADO!`)
            console.log(`${ra} Suas notas são ${n1} ${n2} ${n3}. 
            \nMédia é ${nota}`)
        }
        else{
            console.log(`REPROVADO!`)
            console.log(`${ra} Suas notas são ${n1} ${n2} ${n3}. 
            \nMédia é ${nota}`)
        }
    }
    else if((n3 > n2) && (n3 > n1)){
        resultado = (n3 * 4) + (n1 * 3) + (n2 * 3);
        nota = resultado / 10;
        if(nota >= 5){
            console.log(`APROVADO!`)
            console.log(`${ra} Suas notas são ${n1} ${n2} ${n3}. 
            \nMédia é ${nota}`)
        }
        else{
            console.log(`REPROVADO!`)
            console.log(`${ra} Suas notas são ${n1} ${n2} ${n3}. 
            \nMédia é ${nota}`)
        }
    }
}


situacao(3, 10, 4, "N279GA6")
