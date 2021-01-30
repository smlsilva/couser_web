function ProAritmetica(n, r){
    for(let i = 0; i < n.length; i++){
        resultado = n[0] + (n[i - 1]) * r
    }
    console.log(`${resultado}`)
}

function ProGeometrica(n, q){
    let resutado = 0;
    for(let i = 0; i < n.length; i++){
        resutado = n[0]*q**(n[i - 1])
    }
    console.log(`${resutado}`)
}

let valores = [1, 2, 3, 4, 5]
ProAritmetica(valores, 3)
ProGeometrica(valores, 3)