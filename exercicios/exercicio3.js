function calcularSalario(qtdadeHorasTrabalhadasPorUmMes, quantoRecebePorHora){
    let salarioBruto = qtdadeHorasTrabalhadasPorUmMes * quantoRecebePorHora
    let y = salarioBruto - salarioBruto * 0.30
    return `Salário igual a R$ ${y.toFixed(2).replace('.',',')}`
}
console.log(calcularSalario(180, 60))