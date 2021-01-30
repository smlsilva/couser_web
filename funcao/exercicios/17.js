function work(plan, salary){
    switch(plan){
        case "A":
            console.log(salary += salary * 0.1)
            break
        case "B":
            console.log(salary += salary * 0.15)
            break
        case "C":
            console.log(salary += salary * 0.2)
            break
        default:
            console.log("Plano Inválido")    
    }
}

work("D", 2000.00)