function lanchonete(code, quantidade){
    switch(code){
        case 100:
            if(quantidade === 1){
                console.log(`${quantidade} Cachorro quente fica no valor de`, quantidade * 3.00, `Reais`)
            }else{
                console.log(`${quantidade} Cachorros quente fica no valor de`, quantidade * 3.00, `Reais`)
            }
            break
        case 200:
            console.log(`${quantidade} Hamburgue Simples fica no valor de`, quantidade * 4.00, `Reais`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer fica no valor de`, quantidade * 5.50, `Reais`)
            break
        case 400:
            console.log(`${quantidade} Bauru fica no valor de`, quantidade * 7.50, `Reais`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante fica no valor de`, quantidade * 3.50, `Reais`)
            break
        case 600:
            console.log(`${quantidade} Suco fica no valor de`, quantidade * 2.80, `Reais`)
            break
        default:
            console.log(`Código ${code} Iválido! `)               
    }
}

lanchonete(100, 1)