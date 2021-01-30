function inteiro(min, max){
    valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}
let opcao = 0

while (opcao != -1){
    opcao = inteiro(-1, 10);
    console.log(`Opcao escolhida foi ${opcao}.`)
}
