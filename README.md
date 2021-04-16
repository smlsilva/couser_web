# 💡 TECNOLOGIAS UTILIZADAS
   
   # 🎭 FRONT-END
     
   <img src="https://img.shields.io/static/v1?label=HTML5&message=tech&color=red&style=for-the-badge&logo=HTML5"/>
   <img src="https://img.shields.io/static/v1?label=CSS3&message=tech&color=blue&style=for-the-badge&logo=CSS3"/>
   <a href=""><img src="https://img.shields.io/static/v1?label=JavaScript&message=tech&color=yellow&style=for-the-badge&logo=JAVASCRIPT"/></a>
   
   # 👥 BACK-END
   
   <img src="https://img.shields.io/static/v1?label=Node.js&message=tech&color=green&style=for-the-badge&logo=NODE.JS"/>
       
   # 🔧 FRAMEWORKS
   <b>BACK-END<br></b>
   <img src="https://img.shields.io/static/v1?label=Express&message=tech&color=white&style=for-the-badge&logo=EXPRESS"/>
  
# JavaScript
  
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
   
  # Destructuring
   <p>Desestruturação de dados é muito útil para não precisar declarar um valor toda vez que necessário.</p>
    
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
   <p>Mecânimos que joga a variavel declarada para cima.</p>
      
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
     
   # Par nome/Valor
     const caracteristica = {}
     caracteristica.cabelo = "Cor"
     caracteristica.olhos  = "Cor"
     caracteristica.pele   = "Cor"
     
   # Estrutura de Condição
   <p> Estrutura para determinar se é TRUE ou FALSE. </p>
   
     if(1 < 2){return "Número 1 é menor que 2 "}
     else if(2 == 2){return "Número 2 é igual a 2"}
     
   # Estrutura de Repetição
   <p> Estrutura pode repetir um determinado trecho de código várias vezes.</p>
     
     let x = 1;
     while(x < 2){ // Enquanto for VERDADEIRO
     console.log(x); // irá repetir esse trecho de código
     x++ // x + 1 = 2
     }
     
     for(let x = 1; x < 2; x++){ // Enquanto essa condição for VERDADEIRA
     console.log(x); // irá repetir esse trecho de código
     }
    
   # POO - Programação Orientada Objeto
   <p> Principios <p>
   <ol>
     <br>
     <li> Abstração
         - Abstração dos dados. Em POO é abstrair todos atributos de um objeto e seus métodos.
         Exemplo:
                - const Carro = new Object;
                  Carro.cor = "Prata";
                  Carro.velocidadeMax = "200khm";
                  Carro.marca = "BMW";
                  Carro.valor = 20.000;
     </li>
     </br>
     <br>
     <li> Encapsulamento
          - É a maneira de Ocultar determinado elementos de uma classe ou uma função.
          Exemplo:
                - function Carro(marca, modelo, valor){
                      this.valor = valor // THIS é utilizado para deixar o elemento público, ou seja ele pode ser alterado.
                      console.log(`${marca} e ${modelo} e ${valor}`) // o Valor pode ser modificado sem chamar a função completa.
                 }
     </li>
     </br>
     <br>
     <li> Herança
          - Reaproveitamento de código é com HERANÇA E POLIMORFISMO, a herança herda as informações que estão em outra class
          sendo assim, não é necessário ficar escrevendo o código toda vez, apenas herda da outra classe.
     </li>
     </br>
     <br>
     <li> Polimorfismo
          - Pode ser entendido como sobrecarga de métodos, onde podemos pegar um método de outra classe/function e utilizar a sua funcionalidade em outra classe.      </li>
     </br>
     </ol>
     
   # Herança
   
    const avo = { attri1: 'A'}
    const pai = { __proto__: avo, attri2: 'B'}
    const filho = { __proto__:pai, attri3: 'C'}
    console.log(filho.attri0, filho.attri1, filho.attri2, filho.attri3)
    ------------------------------------------------------------------
    
    class Avo {
         constructor(nome){
             this.nome = nome;
             this.sobrenome = sobrenome;
         }
    }
    
    class Pai extends Avo {
         constructo(sobrenome = "Silva"){
         super(nome)
         this.nome = nome;
         }
    }
    
    class Filho extends Pai {
         constructor(nome = "Samuel"){
         super(sobrenome)
         this.nome = nome;
         }
    }
    
    const filho = new Filho;
    console.log(filho) // Filho { sobrenome: 'Silva', nome: 'Samuel' } // sobrenome de PAI e nome do Filho
    
   # Criando Objetos
   
    const obj1 = {} // Notação literal
    const obj2 = new Object; // Utilizando o Object
    
    // Função construtora
    function Produto(nome, preco, desc){
    this.nome = nome; // This identifica o Atributo como público
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc) //preco e desc não está público, então não pode ser alterado fora da function
     }
    }
    const p1 = new Produto('Caneta', 7.99, 0.15)
    console.log(p1.getPrecoComDesconto())
    
    // Criando pelo Object.create
    const obj3 = new Obejct.create(null);
    
    // JSON - JavaScript Object Notation (RETORNA UM OBJETO)
    const json = JSON.parse('{ "nome" : "Criando em Json" }')
    
   # JSON - JavaScript Object Notation (FORMATO DE DADOS TEXTUAL)
     
     const obj = {nome: "Samuel", idade: 20, linguagem: "JavaScript"}
     console.log(JSON.stringify(obj)) // {"nome":"Samuel", "idade":20, "linguagem":"JavaScript"}
     
     // Json p/ texto
     console.log(JSON.parse('{"nome":"Samuel","idade":20}') // {nome :"Samuel", idade:20}
     
     // Para consutar mais sobre JSON acesse:
   <a> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON </a>
     
   # Evitando Modificações
     - Podemos usar funções para evitar que um determinado Atributo de um objeto mude o seu valor por segurança.
     
     Confira o link abaixo:
   <a> https://github.com/smlsilva/couser_web/blob/main/objeto/evitandoModificacoes.js </a>
       
   # Array
      - É um estrutura de dados dinâmica, permite incluir dados, excluir e modificar.
      - Métodos de Array's
         - pop() // Exclui o último elemento do Array
         - push() // Adiciona o elemento na última posição
         - shift() // Remove o primeiro elemento do Array
         - unshift() // Adiciona um elemento na primeira posição
         - splice() // Remove elementos, Adiciona elementos e também pode ser em qualquer posição.
         - slice() // Cria um novo Array
         - map() // Cria um novo Array, modificando os elementos, mas não altera no vetor/array atual.

# STATUS DO PROJETO
  - [ ] Finalizado
  - [x] Em andamento
  - [ ] Interrompido

# SUGESTÕES
   <p> Para informar alguma sugestão sobre a organização, desenvolvimento ou querer participar, pode estar enviando um <b>PULL REQUEST</b> com
   nome, tempo de desenvolvimento e linguagem atual.</p>
   
# CONTRIBUIDORES
   <a href="github.com/smlsilva">![samuel (1)](https://user-images.githubusercontent.com/47987232/114802351-f14bab00-9d73-11eb-8349-3bec875b6a88.jpeg)</a>
