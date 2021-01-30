let comparaComThis = function(param){
    console.log(this === global)
}

//comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//comparaComThis(global);
//comparaComThis(obj);


// Com arrowFunction
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

// Bind em uma funcção 
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports);
