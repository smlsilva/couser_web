/*for (var i = 0; i < 2; i++){
    console.log(i);
}

console.log(i)

for (let a = 0; a < 4; a++){
    console.log(a);
}*/

var vetor = [];

for (let i = 0; i < 10; i++){
    vetor.push(
        function()
        {
            console.log(i)
        });
}
vetor[3]();
vetor[5]();
console.log(vetor.length);
