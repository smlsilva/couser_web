function triangulos(a,b,c){
    // Equilatero
    const perimetro = `${a + b + c}`
    console.log("Equilatero " + perimetro);
     
    // Escaleno
    const area = b * c
    console.log("Escaleno " + area)

    // Isóceles
    if (a == b){
        const peri = `${2 * a + b}`
        console.log("Perímetro Isóceles " + peri);    
    }else{
        console.log('Lados diferentes!')
    }
    

}

triangulos(3,3,3)
