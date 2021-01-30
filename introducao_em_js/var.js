{
    {
        {
            {
                {
                    {
                        {
                            {
                                // Escopo Global
                                var sera = "Será ?"
                            }
                        }
                    }
                }
            }
        }
    }
}
//console.log(sera)

// Escopo de função
function test(){
    var local = 123;
    console.log(local)
}
test()


var num = 2; //Escopo global
{
    var num = 3;
    console.log(num);
}
console.log(num);
