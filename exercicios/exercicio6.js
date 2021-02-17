const inverso = (valorQualquer) => {
    let tipo = typeof valorQualquer
    if(tipo === 'boolean'){
        return !valorQualquer
    }else if(tipo === 'number'){
        return -valorQualquer
    }else{
        return `Booleano ou Números esperado, mas o parâmetro é do tipo ${typeof valorQualquer}` 
    }
}
console.log(inverso(100000000))