let num1 = 10;
let num2 = 5;
function numerosMultiplos(num1, num2) {
    if(num1 % num2 == 0) {
    return console.log(true,":São múltiplos");
    }
    return console.log(false,":Não são múltiplos ");
}

numerosMultiplos(num1, num2)
