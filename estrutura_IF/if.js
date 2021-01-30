function boaNoticia(nota){
    if(nota >= 7){
        console.log(nota)
    }else{
        console.log("Reprovado " + nota)
    }
}

boaNoticia(6.9);

function falsoVerdadeiro(valor){
    if(valor){
        console.log(valor);
    }
}

falsoVerdadeiro();
falsoVerdadeiro("");
falsoVerdadeiro(0);
falsoVerdadeiro(-1);
falsoVerdadeiro([]);
falsoVerdadeiro("s");

function test(num){
    if(num > 7)
        console.log(num);
    console.log('Final');
}

//test(6);
//test(8);

function test2(num){
    if(num > 7); 
    {
        console.log(num);
    }
}
test2(6)
test2(8)
