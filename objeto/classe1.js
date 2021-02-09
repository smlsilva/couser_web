class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {  // Funcao construtora
        this.nome = nome;
        this.valor = valor;
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    // Método
    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    
    // Método
    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 4500)
const contaLuz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 20);
contas.addLancamento(salario, contaLuz);
console.log(contas.sumario())