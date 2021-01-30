function tratarErro(erro){
    //throw new Error("....");
    throw 10;
}

function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        tratarErro(e)
        console.log("Suave")
    }  finally {
        console.log("Final");
    }
    
}

const obj = { name : 'Samuel' }
imprimir(obj);
console.log(obj.name)
