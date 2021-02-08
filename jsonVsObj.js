// JavaScript Object Notation - JSON (É UM FORMATO DE DADOS TEXTUAL)
const obj = {a: 1, b: 3, c: 5, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a":3, "b":4} ')) // Formato JSON p/ objeto
console.log(JSON.parse(`
{ 
    "a":4,
    "c": "string",
    "d": true,
    "e": {},
    "f": [] 
}
`))
