const a = 1;
const b = 2;
const c = 3;

const obj = {a, b, c}
console.log(obj)

//------------------
const nomeAtr = 'nota';
const valorAtr = 7.87;

// Antiga
const obj2 = {}
obj2[nomeAtr] = valorAtr;
console.log(obj2)

// Nova forma ES6
const obj3 = {[nomeAtr]:valorAtr}
console.log(obj3)

//------------------
const obj4 = {
    funcao1:function(){ // antiga forma

    },
    funcao2(){ // Nova forma de fazer Function

    }
}
console.log(obj4)