const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write('Fala Anonimo!')
    process.exit()
}else{
    process.stdout.write('Infome o seu nome : ')
    process.stdin.on('data', dados => {
        const nome = dados.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}