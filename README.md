# Introdução ao JavaScript
  
  # Tipos de Escopos
    {} // Escopo de Bloco
    function(){} // Escopo de função
    // Escopo global, quando não têm nenhum escopo
  
  # Declaração de Variáveis.
     - var   x = 0; // var é o tipo de dados que pode ser acessado como sendo um escopo global. 
     - let   y = 1; // let Armazena o valor e não contém acesso para acessá-lo fora do escopo.
     - const z = 2; // Define uma constante (Sendo assim, não consegue alterar o tipo de dados e nem acessar fora do escopo indicado.
     
  # Tipos de Dados Primitivos.
     - Number {typeof 3.40}
     - String {typeof "Samuel" or 'Samuel'}
     - Boolean {typeof true or false}
     - underfined {Valor indefinido}
        - var x; // underfined
   
  # Tipos de Dados Complexo.
     - function (){return `Aprendendo JavaScript`}
     - object
        - class Produto{}
          Produto.nome = "JavaScript"
          console.log(typeof new Produto())
          console.log(Produto.nome) // JavaScript
          
  # Determinar Valor padrão.
    - function soma(a = 1, b = 3){return a + b // Caso não seja declarado nenhum dado, a função assumirá o valor padrão 1 e 3}
   
  # Destructuring - 
    * Desestruturação de dados, é muito útil para não precisar declarar um valor toda vez que necessário.
    
    - const valores = {
       nome : "Samuel",
       idade : "20",
       nacionalidade : "Brasileiro"
    }
    const { nome , nacionalidade } = valores
          
   # Template String
      - let multLinhas = ` Hello
                           World `
   # Hoisting
      * Mecânimos que joga a variavel declarada para cima.
      
      * Não é recomendado trabalhar dessa forma.
      
      - console.log(x) // 0
      - var x = 0
      ----------------
      
      * Mais recomendado.
      
      - var x = 0
      - console.log(x)
      
   # Operadores Unários
     x++
     x--
     ++x
     --x
     
   # Operador Ternário
     const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
     
   # par nome/Valor
     const caracteristica = {}
     caracteristica.cabelo = "Cor"
     caracteristica.olhos  = "Cor"
     caracteristica.pele   = "Cor"
     
   # Estrutura de Condição
     * Estrutura para determinar se é TRUE ou FALSE.
     if(1 < 2){return "Número 1 é menor que 2 "}
     else if(2 == 2){return "Número 2 é igual a 2"}
     
   # Estrutura de Repetição
     * Estrutura pode repetir um determinado trecho de código várias vezes.
     let x = 1;
     while(x < 2){ // Enquanto x for menor que 2
     console.log(x); // irá repetir esse trecho de código
     x++ // x + 1 = 2
     }
     
     for(let x = 1; x < 2; x++){
     console.log(x); // irá repetir esse trecho de código
     }
    
   # POO - Programação Orientada Objeto
     * Principios
     1 - Abstração
         - Abstração dos dados. Em POO é abstrair todos atributos de um objeto e seus métodos.
         Exemplo:
                - const Carro = new Object;
                  Carro.cor = "Prata";
                  Carro.velocidadeMax = "200khm";
                  Carro.marca = "BMW";
                  Carro.valor = 20.000;
     2 - Encapsulamento
          - É a maneira de Ocultar determinado elementos de uma classe ou uma função.
          Exemplo:
                - function Carro(marca, modelo, valor){
                      this.valor = valor // THIS é utilizado para deixar o elemento público, ou seja ele pode ser alterado.
                      console.log(`${marca} e ${modelo} e ${valor}`) // o Valor pode ser modificado sem chamar a função completa.
                }
     3 - Herança
          - Reaproveitamento de código é com HERANÇA E POLIMORFISMO, a herança herda as informações que estão em outra class
          sendo assim, não é necessário ficar escrevendo o código toda vez, apenas herda da outra classe.
     4 - Polimorfismo
          - Vou deixar para vocês pesquisarem ;)
     
    next...
