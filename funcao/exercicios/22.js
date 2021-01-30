function valorSerPago(mes, valor){
    // anuidade 
    // Por mês é cobrado 5% de juros
    switch(mes){
        case 1:
            return valor += valor * 0.05
            break
        case 2:
            return valor += valor * 0.10
            break
        case 3:
            return valor += valor * 0.15
            break
        case 4:
            return valor += valor * 0.20
            break
        case 5:
            return valor += valor * 0.25
            break
        case 6:
            return valor += valor * 0.30
            break
        case 7:
            return valor += valor * 0.35
            break
        case 8:
            return valor += valor * 0.40
            break     
        case 9:
            return valor += valor * 0.45
            break
        case 10:
            return valor += valor * 0.50
            break
        case 11:
            return valor += valor * 0.55
            break
        case 12:
            return valor += valor * 0.60
            break    
    }
}
console.log(valorSerPago(9, 500))
