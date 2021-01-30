function compras(trabalho1, trabalho2){
    
    const compraSorvete = trabalho1 || trabalho2;

    const compraTv50 = trabalho1 && trabalho2;

    //const compraTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor | or - exclusivo
    const compraTv32 = trabalho1 != trabalho2;

    const manterSaudavel =  !compraSorvete //Operador Unário

    return {compraSorvete, compraTv50, compraTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, true))

