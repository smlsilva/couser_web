function pontuacao(desempenho){
       let valores = [102,38,60,97,64,53]

       for (i in valores){
           if (desempenho < valores[i]){
                console.log(`Desempenho ${desempenho} < ${valores[i]} `)
           }else{
                console.log(`Desempenho ${desempenho} > ${valores[i]}`)
                valores.push(desempenho)
            }
        }
        console.log(valores)
    }

pontuacao(61)
