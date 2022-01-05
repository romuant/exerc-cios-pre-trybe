//função queimplementa tres argumantos sendo adição, subtração e a operação "+" ou "-" como terceiro argumento;
function calculadora(numero,outroNumero,operacao)  {
    if (operacao ==="+")  {
        return numero + outroNumero

    }else if (operacao==="-"){
            return numero - outroNumero
        }else if(operacao ==="*")  {
            return numero * outroNumero
        }else if(operacao ==="/")  {
            return numero / outroNumero
        }else if(operacao ==="**")  {
            return numero ** outroNumero
        }else{
            return 0
        }
    }
        
    

console.log("resultado da operação de adição de 3 + 4 é  :"+calculadora(3,4,"+"))
console.log("resultado da operação de subtração de 3 - 4 é :     "+calculadora(3,4,"-"))
console.log("resultado da operação de multiplicação entre 3 e 4 é:  "+calculadora(3,4,"*"))
console.log("resultado da operação de divisão de 3 por 4 é:  "+calculadora(3,4,"/"))
console.log("resultado da operação de exponenciação de 4 na base 3 é:  "+calculadora(3,4,"**"))
