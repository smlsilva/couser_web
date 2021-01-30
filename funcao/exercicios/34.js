function verifica(string1, string2){
    let contido = true;
    for(let i = 0; i < string1.length; i++){
        let caractere = string1.charAt(i).toLowerCase();
        for(let j = 0; j < string2.length; j++){
            // charAt - percorre cara letra de uma string
            let caract = string2.charAt(j).toLowerCase();
            if(caractere == caract){
                contido = true;
                break;
            }else{
                contido = false;
                break;
            }
        }
    }
    return contido;
}
console.log(verifica('sat', 'bas'))