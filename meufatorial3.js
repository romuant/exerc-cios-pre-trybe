//Meu fatorial
//para execução de fatorial deve=se multiplicar
// um número qualquer pelo seu antecessor até chegar a 1. Somente acima de 1.
// 5* 4 * 3 *2 *1
// 2 etapa do For leia-se até quando ou enquanto
function meuFatorial3(fat) {
    for(var i = fat; i>1; i--) {
        fat = fat *(i-1) 
    }
    return fat
}
console.log(meuFatorial3(4))